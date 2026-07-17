import type { Metadata } from "next";
import { FaDatabase, FaFileExport, FaLock, FaUsersCog } from "react-icons/fa";
import { adminModules } from "@/src/lib/content";

export const metadata: Metadata = {
  title: "Admin Architecture",
  description: "Admin-ready module structure for courses, students, applications, payments, leads, placements, and content.",
  alternates: { canonical: "/admin" },
};

export default function AdminPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Admin-ready</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black text-slate-950 md:text-5xl">Modular admin panel architecture for future backend integration</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [FaLock, "Role-based access, secure sessions, and audit logging"],
            [FaDatabase, "API-ready data modules with consistent names"],
            [FaFileExport, "CSV and Excel exports for leads and payments"],
          ].map(([Icon, text]) => (
            <div className="card p-6" key={String(text)}>
              <Icon className="text-2xl text-[var(--brand)]" />
              <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">{String(text)}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {adminModules.map((module) => (
            <div className="card flex items-center gap-3 p-5" key={module}>
              <FaUsersCog className="text-[var(--brand)]" />
              <h2 className="text-sm font-bold text-slate-950">{module}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
