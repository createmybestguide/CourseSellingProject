"use client";

import Image from "next/image";
import { useState } from "react";
import { FaAward, FaCertificate, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

type Certificate = {
  title: string;
  issuedBy: string;
  description: string;
  type: "image" | "pdf";
  src: string;
  source: string;
};

const certificationBodies = [
  "CTDS (Council for Technical Development)",
  "Optimum Certifications Inc. (OCI)",
  "Quality Research Organization (QRO)",
  "NIELIT (National Institute of Electronics & Information Technology)",
  "Telecom Sector Skill Council (TSSC)",
  "Media & Entertainment Skills Council (MESC)",
];

const certificates: Certificate[] = [
  {
    title: "ISO 9001:2015 Quality Management System",
    issuedBy: "Optimum Certifications Inc. (OCI)",
    description: "Quality management certification for Oil & Gas, petrochemical, and refinery maintenance job training.",
    type: "image",
    src: "/certificates/iso-9001-certificate.jpeg",
    source: "/certificates/iso-9001-certificate.jpeg",
  },
  {
    title: "ISO 21001:2018 Educational Organization Management",
    issuedBy: "Quality Research Organization (QRO)",
    description: "Educational organization management certification for DVR Institute Oil & Gas training and placement.",
    type: "pdf",
    src: "/certificates/iso-21001-certificate.pdf",
    source: "/certificates/iso-21001-certificate.pdf",
  },
  {
    title: "GST Registration Certificate",
    issuedBy: "Government of India",
    description: "Goods and Services Tax registration certificate for DVR Institute.",
    type: "pdf",
    src: "/certificates/gst-certificate.pdf",
    source: "/certificates/gst-certificate.pdf",
  },
  {
    title: "Udyam Registration Certificate",
    issuedBy: "Ministry of Micro, Small & Medium Enterprises",
    description: "MSME Udyam registration certificate for DVR Institute.",
    type: "image",
    src: "/certificates/udyam-registration-certificate.png",
    source: "/certificates/udyam-registration-certificate.html",
  },
];

export function CertificatesSection() {
  const [selected, setSelected] = useState(certificates[0]);

  return (
    <section className="section section-cool">
      <div className="container">
        <div className="reveal">
          <p className="eyebrow">Certifications</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">Certified training standards and registrations</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            DVR Institute is associated with recognized certification and skill development bodies that support industry-oriented training quality.
          </p>
        </div>

        <div className="stagger mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificationBodies.map((body) => (
            <div className="card flex gap-4 p-5" key={body}>
              <FaAward className="mt-1 shrink-0 text-[var(--brand)]" aria-hidden="true" />
              <p className="text-sm font-bold leading-6 text-slate-800">Certified By - {body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.45fr_1fr]">
          <div className="grid content-start gap-3">
            {certificates.map((certificate) => {
              const active = selected.title === certificate.title;

              return (
                <button
                  type="button"
                  className={`flex w-full items-start gap-4 rounded-lg border p-4 text-left shadow-sm transition ${
                    active
                      ? "border-[rgb(0_124_255_/_38%)] bg-[var(--brand-soft)]"
                      : "border-slate-200 bg-white hover:border-[rgb(0_124_255_/_24%)] hover:bg-slate-50"
                  }`}
                  key={certificate.title}
                  onClick={() => setSelected(certificate)}
                >
                  {certificate.type === "pdf" ? (
                    <FaFilePdf className="mt-1 shrink-0 text-xl text-[var(--accent-hot)]" aria-hidden="true" />
                  ) : (
                    <FaCertificate className="mt-1 shrink-0 text-xl text-[var(--brand)]" aria-hidden="true" />
                  )}
                  <span>
                    <span className="block text-sm font-bold text-slate-950">{certificate.title}</span>
                    <span className="mt-1 block text-xs font-semibold text-slate-500">{certificate.issuedBy}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="card overflow-hidden">
            <div className="border-b border-slate-200 p-5">
              <h3 className="text-xl font-bold text-slate-950">{selected.title}</h3>
              <p className="mt-2 text-sm font-bold text-[var(--brand)]">Certified By - {selected.issuedBy}</p>
              <p className="mt-3 leading-7 text-slate-600">{selected.description}</p>
            </div>

            <div className="bg-slate-100 p-4">
              {selected.type === "image" ? (
                <div className="relative min-h-[32rem] overflow-hidden rounded-md bg-white">
                  <Image
                    src={selected.src}
                    alt={selected.title}
                    fill
                    sizes="(min-width: 1024px) 64vw, 100vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <object
                  data={`${selected.src}#toolbar=0&navpanes=0&scrollbar=1`}
                  type="application/pdf"
                  className="h-[34rem] w-full rounded-md bg-white"
                  aria-label={selected.title}
                >
                  <a className="btn btn-secondary" href={selected.source} target="_blank" rel="noreferrer">
                    Open Certificate <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                </object>
              )}
            </div>

            <div className="p-5">
              <a className="btn btn-secondary" href={selected.source} target="_blank" rel="noreferrer">
                Open Full Certificate <FaExternalLinkAlt aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
