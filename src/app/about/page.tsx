import type { Metadata } from "next";
import Image from "next/image";
import { FaAward, FaBriefcase, FaGraduationCap, FaUserTie } from "react-icons/fa";
import { CertificatesSection } from "@/src/components/CertificatesSection";
import { founderProfile } from "@/src/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mr. Raju Durai, Founder and Managing Director of DVR Oil & Gas Training Institute, and his vision for global Oil & Gas careers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const highlights = [
    { icon: FaGraduationCap, label: "B.Tech. Mechanical Engineer" },
    { icon: FaAward, label: "ASNT Level II Certified Professional" },
    { icon: FaBriefcase, label: "15+ Years Oil & Gas Experience" },
    { icon: FaUserTie, label: "3,000+ Candidates Trained & Placed" },
  ];

  return (
    <>
      <section className="section section-cool">
        <div className="container grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div className="reveal">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg border border-white/70 bg-white shadow-xl">
              <Image
                src="/founder-raju-durai.jpeg"
                alt="Mr. Raju Durai, Founder and Managing Director of DVR Oil and Gas Training Institute"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="reveal">
            <p className="eyebrow">About the Founder & Managing Director</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">{founderProfile.name}</h1>
            <p className="mt-3 text-sm font-black uppercase tracking-wide text-[var(--brand)]">
              {founderProfile.role}
            </p>
            <p className="mt-6 text-xl font-bold leading-8 text-slate-800">
              Driven by the vision &quot;{founderProfile.vision},&quot; Mr. Raju Durai is committed to transforming aspiring youth into globally competent Oil &amp; Gas professionals.
            </p>
            <div className="stagger mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, label }) => (
                <div className="card flex items-center gap-4 p-4" key={label}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold leading-5 text-slate-800">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div className="reveal">
            <p className="eyebrow">Leadership Vision</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">From villages to global careers</h2>
            <p className="mt-5 rounded-lg bg-[var(--brand-deep)] p-6 text-lg font-bold leading-8 text-white shadow-xl">
              &quot;{founderProfile.quote}&quot;
            </p>
          </div>

          <div className="stagger grid gap-5">
            {founderProfile.paragraphs.slice(1).map((paragraph) => (
              <article className="card p-6" key={paragraph}>
                <p className="leading-7 text-slate-700">{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CertificatesSection />
    </>
  );
}
