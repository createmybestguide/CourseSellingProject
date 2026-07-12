import type { Metadata } from "next";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { LeadForm } from "@/src/components/LeadForm";

export const metadata: Metadata = {
  title: "Student Enrollment",
  description: "Apply online, create enrollment records, upload optional documents, and begin admission processing.",
  alternates: { canonical: "/enroll" },
};

export default function EnrollPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Enroll" }]} />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow">Online enrollment</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">Student registration and course application</h1>
            <p className="mt-5 leading-7 text-slate-600">This form supports application intake, optional document upload validation, account creation flow, and enrollment status tracking integration.</p>
          </div>
          <LeadForm mode="enroll" />
        </div>
      </section>
    </>
  );
}
