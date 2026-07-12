import type { Metadata } from "next";
import { FaFileInvoice, FaLock, FaReceipt } from "react-icons/fa";
import { LeadForm } from "@/src/components/LeadForm";

export const metadata: Metadata = {
  title: "Online Payment",
  description: "Secure payment structure for advance booking, partial fee, and full course fee payments.",
  alternates: { canonical: "/payment" },
};

export default function PaymentPage() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="eyebrow">Secure payments</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">Course fee payment module</h1>
          <p className="mt-5 leading-7 text-slate-600">Gateway adapters are represented for Razorpay, Stripe, and PayU. Production integration should create payment intents server-side and verify webhooks before confirming enrollment.</p>
          <div className="mt-8 grid gap-4">
            {[
              [FaLock, "Server-side payment verification and no card data stored locally"],
              [FaReceipt, "Payment confirmation, history, and email notification hooks"],
              [FaFileInvoice, "Invoice generation and admin payment report structure"],
            ].map(([Icon, text]) => (
              <div className="card flex gap-4 p-5" key={String(text)}>
                <Icon className="mt-1 text-sky-700" />
                <p className="text-sm font-semibold leading-6 text-slate-700">{String(text)}</p>
              </div>
            ))}
          </div>
        </div>
        <LeadForm mode="payment" />
      </div>
    </section>
  );
}
