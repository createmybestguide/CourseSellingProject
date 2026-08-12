import type { Metadata } from "next";
import { SectionHeading } from "@/src/components/SectionHeading";
import { TestimonialsGrid } from "@/src/components/TestimonialsGrid";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Student reviews and success stories from DVR Global Career Oil & Gas, Warehouse Management, Fire & Safety, and industrial skills training programs.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="Placed candidates and success stories" />
        <TestimonialsGrid />
      </div>
    </section>
  );
}
