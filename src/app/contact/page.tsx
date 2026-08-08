import type { Metadata } from "next";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { LeadForm } from "@/src/components/LeadForm";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact DVR Global Career to start your Oil & Gas, Warehouse Management, Shipbuilding, Fire & Safety, or industrial skills training journey.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="contact-form-grid container grid items-stretch gap-10 lg:grid-cols-[0.8fr_1fr]">
        <div className="contact-info-column">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">Contact Us Today</h1>
          <p className="mt-5 leading-7 text-slate-600">Take the first step toward a successful global career with DVR Global Career. Enquire about training, placement assistance, admissions, and course guidance.</p>
          <div className="mt-8 grid gap-4">
            <a className="card flex gap-4 p-5" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}><FaPhoneAlt className="mt-1 text-[var(--brand)]" /> {siteConfig.phone}</a>
            <a className="card flex gap-4 p-5" href={`mailto:${siteConfig.email}`}><FaEnvelope className="mt-1 text-[var(--brand)]" /> {siteConfig.email}</a>
            <a className="card flex gap-4 p-5" href={`https://wa.me/${siteConfig.whatsapp}`}><FaWhatsapp className="mt-1 text-emerald-600" /> WhatsApp admissions team</a>
            <p className="card flex gap-4 p-5"><FaMapMarkerAlt className="mt-1 text-[var(--brand)]" /> {siteConfig.address}</p>
          </div>
        </div>
        <LeadForm mode="contact" />
      </div>
    </section>
  );
}
