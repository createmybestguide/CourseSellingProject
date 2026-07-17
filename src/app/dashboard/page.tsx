import type { Metadata } from "next";
import Link from "next/link";
import { FaClock, FaCreditCard, FaFileAlt, FaUserCheck } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Student dashboard for enrollment status, applications, documents, payments, and placement tracking.",
  alternates: { canonical: "/dashboard" },
};

const dashboardItems = [
  { icon: FaFileAlt, title: "Applications", text: "2 submitted applications awaiting counselor review." },
  { icon: FaClock, title: "Enrollment Status", text: "Shipping & Logistics Management: document verification pending." },
  { icon: FaCreditCard, title: "Payment History", text: "Advance booking receipt and invoice records appear here." },
  { icon: FaUserCheck, title: "Placement Tracker", text: "Mock interview, recruiter referral, and offer status tracking." },
];

export default function DashboardPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Student dashboard</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">Enrollment status tracking</h1>
          </div>
          <Link className="btn btn-primary" href="/enroll">New Application</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {dashboardItems.map((item) => (
            <article className="card p-6" key={item.title}>
              <item.icon className="text-2xl text-[var(--brand)]" />
              <h2 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
