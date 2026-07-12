import type { Metadata } from "next";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { LeadForm } from "@/src/components/LeadForm";

export const metadata: Metadata = {
  title: "Create Student Account",
  description: "Create a student account for applications, enrollment tracking, and payment history.",
  alternates: { canonical: "/register" },
};

export default function RegisterPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Register" }]} />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow">Registration</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">Create your student profile</h1>
            <p className="mt-5 leading-7 text-slate-600">Collect profile data once, reuse it across course applications, document uploads, payment records, and placement support.</p>
          </div>
          <LeadForm mode="register" />
        </div>
      </section>
    </>
  );
}
