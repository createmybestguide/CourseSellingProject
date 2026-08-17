"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SectionHeading } from "@/src/components/SectionHeading";
import { galleryItems } from "@/src/lib/content";

const ITEMS_PER_PAGE = 6;

export default function GalleryPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE);

  const visibleItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return galleryItems.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  function goToPage(nextPage: number) {
    setPage(Math.min(Math.max(nextPage, 1), totalPages));
  }

  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Gallery" title="Training sessions and placement highlights" text="Explore DVR Global Career training and career development activities across industrial skills programs." />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) => {
            const galleryIndex = (page - 1) * ITEMS_PER_PAGE + index;
            const shouldFocusTop = [0, 5, 10, 11].includes(galleryIndex);

            return (
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 shadow-md" key={item.image}>
                <Image
                  className={`object-cover ${shouldFocusTop ? "object-top" : ""}`}
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-[rgb(0_124_255_/_18%)] bg-white text-[var(--brand-dark)] shadow-sm transition hover:bg-[var(--brand-soft)] disabled:cursor-not-allowed disabled:opacity-45"
            aria-label="Previous gallery page"
            disabled={page === 1}
            onClick={() => goToPage(page - 1)}
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              type="button"
              className={`grid h-11 w-11 place-items-center rounded-full text-sm font-black transition ${
                pageNumber === page
                  ? "bg-[var(--brand)] text-white shadow-md shadow-blue-500/20"
                  : "border border-[rgb(0_124_255_/_18%)] bg-white text-[var(--brand-dark)] hover:bg-[var(--brand-soft)]"
              }`}
              aria-current={pageNumber === page ? "page" : undefined}
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-[rgb(0_124_255_/_18%)] bg-white text-[var(--brand-dark)] shadow-sm transition hover:bg-[var(--brand-soft)] disabled:cursor-not-allowed disabled:opacity-45"
            aria-label="Next gallery page"
            disabled={page === totalPages}
            onClick={() => goToPage(page + 1)}
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
