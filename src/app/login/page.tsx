import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { LeadForm } from "@/src/components/LeadForm";

export const metadata: Metadata = {
  title: "Student Login",
  description: "Student account login structure for dashboard, enrollment status, payment history, and applications.",
  alternates: { canonical: "/login" },
};

export default function LoginPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Login" }]} />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow">Student account</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">Login or create an account</h1>
            <p className="mt-5 leading-7 text-slate-600">The authentication surface is prepared for secure backend integration, CSRF protection, password policies, and role-based access.</p>
            <Link className="btn btn-secondary mt-7" href="/register">Create Account</Link>
          </div>
          <LeadForm mode="login" />
        </div>
      </section>
    </>
  );
}
