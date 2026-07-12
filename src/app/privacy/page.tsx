import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-black text-slate-950">Privacy Policy</h1>
        <p className="mt-5 leading-7 text-slate-600">Student inquiry, application, payment, and document data should be processed only for admissions, training delivery, placement support, compliance, and support communication. Production deployment should connect consent logging, retention controls, and secure storage policies.</p>
      </div>
    </section>
  );
}
