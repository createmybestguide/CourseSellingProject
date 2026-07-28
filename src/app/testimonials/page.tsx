import type { Metadata } from "next";
import { FaPlayCircle } from "react-icons/fa";
import { SectionHeading } from "@/src/components/SectionHeading";
import { testimonials } from "@/src/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Student reviews and success stories from DVR Global Career Oil & Gas, Warehouse Management, Fire & Safety, and industrial skills training programs.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="Student reviews and success stories" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article className="card p-6" key={item.name}>
              <FaPlayCircle className="text-3xl text-[var(--brand)]" aria-label="Student testimonial video" />
              <p className="mt-5 leading-7 text-slate-700">&quot;{item.quote}&quot;</p>
              <h2 className="mt-5 text-lg font-bold text-slate-950">{item.name}</h2>
              <p className="text-sm font-semibold text-slate-500">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
