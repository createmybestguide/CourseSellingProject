import type { Metadata } from "next";
import { LeadForm } from "@/src/components/LeadForm";

export const metadata: Metadata = {
  title: "Apply Now",
  description: "Apply now for DVR Global Career industry-focused training programs and begin your path toward Oil & Gas, warehouse logistics, shipbuilding, fire safety, or industrial careers.",
  alternates: { canonical: "/enroll" },
};

export default function EnrollPage() {
  return (
    <section className="section enroll-section">
      <div className="enroll-form-grid container grid items-start gap-10 lg:grid-cols-[0.8fr_0.72fr]">
        <div>
          <p className="eyebrow">Apply Now</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">Start your career with DVR Global Career</h1>
          <p className="mt-5 leading-7 text-slate-600">Whether you&apos;re beginning your journey or upgrading your skills, apply for industry-focused training designed to prepare you for careers in India, the GCC, and other global markets.</p>
        </div>
        <LeadForm mode="enroll" />
      </div>
    </section>
  );
}
