import type { Metadata } from "next";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { LeadForm } from "@/src/components/LeadForm";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact OceanEdge for course inquiry, call back requests, WhatsApp support, and admissions help.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">Course inquiry and call back request</h1>
            <p className="mt-5 leading-7 text-slate-600">Lead capture is ready for email notifications, CRM tracking, and CSV or Excel export through a backend API.</p>
            <div className="mt-8 grid gap-4">
              <a className="card flex gap-4 p-5" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}><FaPhoneAlt className="mt-1 text-sky-700" /> {siteConfig.phone}</a>
              <a className="card flex gap-4 p-5" href={`mailto:${siteConfig.email}`}><FaEnvelope className="mt-1 text-sky-700" /> {siteConfig.email}</a>
              <a className="card flex gap-4 p-5" href={`https://wa.me/${siteConfig.whatsapp}`}><FaWhatsapp className="mt-1 text-emerald-600" /> WhatsApp admissions team</a>
              <p className="card flex gap-4 p-5"><FaMapMarkerAlt className="mt-1 text-sky-700" /> {siteConfig.address}</p>
            </div>
          </div>
          <LeadForm mode="contact" />
        </div>
      </section>
    </>
  );
}
