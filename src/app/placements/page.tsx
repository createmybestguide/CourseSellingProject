import type { Metadata } from "next";
import { FaBuilding, FaChartLine, FaHandshake, FaUserTie } from "react-icons/fa";
import { SectionHeading } from "@/src/components/SectionHeading";
import { recruiters, stats, testimonials } from "@/src/lib/content";

export const metadata: Metadata = {
  title: "Placements",
  description: "Placement records, hiring companies, recruiter logos, and student success stories.",
  alternates: { canonical: "/placements" },
};

export default function PlacementsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Placements" title="Placement assistance, hiring companies, and student success" />
        <div className="metric-grid mt-10">
          {stats.map((stat) => (
            <div className="card p-5 text-center" key={stat.label}>
              <strong className="block text-3xl font-black text-sky-800">{stat.value}</strong>
              <span className="mt-2 block text-sm font-bold text-slate-600">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {[
            [FaUserTie, "Career counseling"],
            [FaHandshake, "Recruiter referrals"],
            [FaChartLine, "Status reporting"],
            [FaBuilding, "Hiring partners"],
          ].map(([Icon, text]) => (
            <div className="card p-5" key={String(text)}>
              <Icon className="text-2xl text-sky-700" />
              <h2 className="mt-4 text-lg font-bold text-slate-950">{String(text)}</h2>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recruiters.map((name) => <div className="card p-5 text-center text-sm font-black text-slate-800" key={name}>{name}</div>)}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote className="card p-6" key={item.name}>
              <p className="leading-7 text-slate-700">“{item.quote}”</p>
              <footer className="mt-4 text-sm font-bold text-slate-950">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
