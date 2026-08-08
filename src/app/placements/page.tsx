import type { Metadata } from "next";
import { FaBuilding, FaChartLine, FaHandshake, FaUserTie } from "react-icons/fa";
import { CountUpStats } from "@/src/components/CountUpStats";
import { SectionHeading } from "@/src/components/SectionHeading";
import { placementStories, recruiters, stats } from "@/src/lib/content";

export const metadata: Metadata = {
  title: "Placement Support",
  description: "DVR Global Career placement support connects qualified candidates with Oil & Gas, EPC, shipyard, warehouse logistics, manufacturing, and marine offshore job opportunities.",
  alternates: { canonical: "/placements" },
};

export default function PlacementsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Placement Support" title="Dedicated placement support for qualified candidates" text="From training to interviews and documentation, we support candidates throughout their career journey." />
        <CountUpStats stats={stats} className="metric-grid mt-10" />
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-4">
          {[
            [FaUserTie, "Resume preparation"],
            [FaHandshake, "Interview coaching"],
            [FaChartLine, "Documentation support"],
            [FaBuilding, "Employer connections"],
          ].map(([Icon, text]) => (
            <div className="card h-full p-5" key={String(text)}>
              <Icon className="text-2xl text-[var(--brand)]" />
              <h2 className="mt-4 text-lg font-bold text-slate-950">{String(text)}</h2>
            </div>
          ))}
        </div>
        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recruiters.map((name) => <div className="card grid h-full place-items-center p-5 text-center text-sm font-black text-slate-800" key={name}>{name}</div>)}
        </div>
        <div className="mt-12">
          <SectionHeading eyebrow="Placed candidate info" title="Role pathways our candidates prepare for" text="Placement assistance includes profile preparation, interview readiness, employer coordination, and documentation guidance for candidates who complete eligible training." />
          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-3">
            {placementStories.map((item) => (
              <article className="card h-full p-6" key={item.name}>
                <span className="badge">{item.role}</span>
                <h2 className="mt-5 text-xl font-bold text-slate-950">{item.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.info}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
