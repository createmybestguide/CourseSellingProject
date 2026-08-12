"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FaBuilding, FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";
import { testimonials } from "@/src/lib/content";

const PAGE_SIZE = 6;

export function TestimonialsGrid() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(testimonials.length / PAGE_SIZE);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return testimonials.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((item) => (
          <article className="card flex h-full flex-col overflow-hidden" key={item.name}>
            {"image" in item ? (
              <div className="relative h-72 w-full bg-[var(--brand-soft)]">
                <Image
                  src={item.image}
                  alt={`${item.name} placement testimonial`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-contain object-top"
                />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col p-6">
              <span className="badge">{item.role}</span>
              <h2 className="mt-4 text-xl font-bold text-slate-950">{item.name}</h2>
              {"company" in item ? (
                <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600">
                  <p className="flex items-center gap-3">
                    <FaBuilding className="text-[var(--brand)]" aria-hidden="true" />
                    {item.company}
                  </p>
                  <p className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[var(--accent)]" aria-hidden="true" />
                    {item.country}
                  </p>
                </div>
              ) : null}
              <p className="mt-5 leading-7 text-slate-700">&quot;{item.quote}&quot;</p>
            </div>
          </article>
        ))}
      </div>

      <nav className="mt-10 flex flex-wrap items-center justify-center gap-3" aria-label="Testimonials pagination">
        <button
          type="button"
          className="btn btn-secondary w-auto px-4"
          disabled={page === 1}
          onClick={() => setPage((value) => Math.max(1, value - 1))}
        >
          <FaChevronLeft aria-hidden="true" /> Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            type="button"
            className={`grid min-h-11 min-w-11 place-items-center rounded-lg border text-sm font-bold transition ${
              pageNumber === page
                ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                : "border-slate-200 bg-white text-slate-700 hover:bg-[var(--brand-soft)]"
            }`}
            aria-current={pageNumber === page ? "page" : undefined}
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        <button
          type="button"
          className="btn btn-secondary w-auto px-4"
          disabled={page === totalPages}
          onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
        >
          Next <FaChevronRight aria-hidden="true" />
        </button>
      </nav>
    </>
  );
}
