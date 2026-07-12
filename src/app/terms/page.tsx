import type { Metadata } from "next";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms" }]} />
      <section className="section">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-black text-slate-950">Terms and Conditions</h1>
          <p className="mt-5 leading-7 text-slate-600">Admissions, eligibility, certification, fees, refunds, placement assistance, and payment gateway terms should be finalized by the institute before launch. Online payment confirmation must depend on verified gateway webhooks and invoice records.</p>
        </div>
      </section>
    </>
  );
}
