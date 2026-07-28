import type { Metadata } from "next";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for DVR Global Career training enquiries, admissions, course applications, documents, payments, and placement assistance.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      text: "When you enquire, apply, request placement support, contact us, or use our website, we may collect details such as your name, phone number, email address, preferred course, qualification, experience, location, message, uploaded documents, payment request details, and communication records.",
    },
    {
      title: "How We Use Your Information",
      text: "We use your information to respond to course enquiries, process admissions, provide training guidance, support certification and documentation, coordinate callbacks, share course updates, assist with placement preparation, and connect eligible candidates with suitable career opportunities.",
    },
    {
      title: "Training and Placement Purpose",
      text: "DVR Global Career provides industry-focused training for Oil & Gas, Offshore and Onshore Projects, Warehouse & Logistics Supply Chain Management, Shipbuilding, Manufacturing, Industrial Operations, and Fire & Safety careers. Candidate information may be used to guide admissions, eligibility review, resume preparation, interview coaching, documentation, and placement assistance.",
    },
    {
      title: "Sharing of Information",
      text: "We do not sell personal information. Where required for admissions, training delivery, payment processing, certification support, or placement assistance, we may share relevant details with authorized staff, trainers, payment service providers, certification or documentation partners, and employer or recruiter contacts.",
    },
    {
      title: "Data Security",
      text: "We take reasonable steps to protect student, enquiry, application, payment, and document data from unauthorized access, misuse, loss, or disclosure. Access is limited to people who need the information for admissions, training, support, compliance, or placement-related work.",
    },
    {
      title: "Retention",
      text: "We keep personal information only for as long as needed for admissions, training records, certification support, placement assistance, legal compliance, dispute handling, and legitimate administrative purposes.",
    },
    {
      title: "Your Choices",
      text: "You may contact us to request access, correction, update, or deletion of your personal information, subject to verification and applicable record-keeping requirements. You may also ask us to stop non-essential promotional communication.",
    },
  ];

  return (
    <section className="section">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-black text-slate-950">Privacy Policy</h1>
        <p className="mt-5 leading-7 text-slate-600">
          DVR Global Career respects the privacy of students, applicants, trainees, and website visitors. This policy explains how we collect, use, protect, and manage information shared with us through enquiries, applications, forms, payments, training support, and placement assistance.
        </p>

        <div className="mt-10 grid gap-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-slate-950">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{section.text}</p>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold text-slate-950">Contact for Privacy Requests</h2>
            <p className="mt-3 leading-7 text-slate-600">
              For privacy questions, corrections, or data-related requests, contact DVR Global Career at{" "}
              <a className="font-bold text-[var(--brand)]" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a className="font-bold text-[var(--brand)]" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
                {siteConfig.phone}
              </a>
              .
            </p>
          </section>

          <p className="text-sm font-semibold text-slate-500">Last updated: July 29, 2026</p>
        </div>
      </div>
    </section>
  );
}
