import type { Metadata } from "next";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for DVR Global Career training enquiries, course admissions, payments, certification support, and placement assistance.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const sections = [
    {
      title: "Training Programs",
      text: "DVR Global Career provides industry-focused training for Oil & Gas, Offshore and Onshore Projects, Warehouse & Logistics Supply Chain Management, Shipbuilding, Manufacturing, Industrial Operations, and Fire & Safety careers. Course content may include practical training, safety awareness, workplace skills, certification support, and placement preparation as applicable to the selected program.",
    },
    {
      title: "Admissions and Eligibility",
      text: "Admission is subject to course availability, batch schedules, eligibility review, submitted information, required documents, and institute approval. Some roles, certifications, placements, or employer opportunities may depend on qualification, age, medical fitness, experience, communication skills, interview performance, documentation, and employer requirements.",
    },
    {
      title: "Course Information",
      text: "Course descriptions, learning areas, training includes, career opportunities, duration, fees, and batch details are provided for guidance. Candidates should confirm current batch availability, fee details, certification process, and course requirements with the admissions team before enrollment.",
    },
    {
      title: "Fees and Payments",
      text: "Fees, advance payments, partial payments, and full course payments must be made only through approved payment methods or official payment links. Enrollment, receipts, and payment confirmation are subject to successful payment verification and institute records.",
    },
    {
      title: "Certification Support",
      text: "DVR Global Career may provide professional certification support where applicable. Certification eligibility, assessment, issue timelines, renewal, third-party certification requirements, and acceptance by employers or authorities may vary by course and candidate profile.",
    },
    {
      title: "Placement Assistance",
      text: "DVR Global Career provides dedicated placement assistance, including resume preparation, interview coaching, documentation guidance, career counseling, and employer connections. Placement assistance does not guarantee a job, salary, visa approval, overseas deployment, or selection by any employer.",
    },
    {
      title: "Candidate Responsibilities",
      text: "Candidates must provide accurate information, attend training sincerely, follow institute rules, respect trainers and other students, maintain safety discipline, complete required documentation, and participate honestly in interviews, assessments, and placement processes.",
    },
    {
      title: "Website Use",
      text: "Website content is provided to help candidates understand DVR Global Career programs and services. Users must not misuse forms, submit false information, attempt unauthorized access, copy content for commercial use, or disrupt website functionality.",
    },
    {
      title: "Updates to Terms",
      text: "DVR Global Career may update these Terms and Conditions when required for operational, legal, training, payment, certification, or placement-related reasons. Continued use of the website or services means you accept the updated terms.",
    },
  ];

  return (
    <section className="section">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-black text-slate-950">Terms and Conditions</h1>
        <p className="mt-5 leading-7 text-slate-600">
          These Terms and Conditions apply to enquiries, applications, admissions, training programs, payments, certification support, placement assistance, and website use for DVR Global Career.
        </p>

        <div className="mt-10 grid gap-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-slate-950">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{section.text}</p>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold text-slate-950">Contact</h2>
            <p className="mt-3 leading-7 text-slate-600">
              For questions about admissions, payments, training, certification support, or placement assistance, contact DVR Global Career at{" "}
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
