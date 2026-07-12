import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBriefcase, FaCertificate, FaCheckCircle, FaFileDownload, FaUserGraduate } from "react-icons/fa";
import { CourseCard } from "@/src/components/CourseCard";
import { JsonLd } from "@/src/components/JsonLd";
import { LeadForm } from "@/src/components/LeadForm";
import { SectionHeading } from "@/src/components/SectionHeading";
import { categories, courses } from "@/src/lib/courses";
import { faqs, galleryItems, recruiters, stats, testimonials, whyChooseUs } from "@/src/lib/content";
import { imageAssets, siteConfig } from "@/src/lib/site";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">
        <Image className="object-cover" src={imageAssets.hero} alt="Maritime training institute campus and harbour operations" fill priority sizes="100vw" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container relative grid min-h-[720px] items-center pb-16 pt-20 lg:grid-cols-[1.05fr_0.75fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-amber-300">Admissions open for 2026 batches</p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-normal md:text-6xl">
              Job-focused maritime, logistics, cruise, and safety training
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              Build practical skills, complete documentation, apply online, pay securely, and track your enrollment with a placement-ready institute platform.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/enroll" className="btn btn-primary">Apply Now</Link>
              <Link href="/courses" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">Explore Courses</Link>
            </div>
          </div>
          <div className="mt-10 grid gap-4 rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur lg:mt-0">
            {stats.map((stat) => (
              <div key={stat.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <strong className="block text-3xl font-black text-white">{stat.value}</strong>
                <span className="text-sm font-semibold text-slate-200">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Featured courses" title="Career programs built around real hiring pathways" text="Each course page includes eligibility, duration, fees, curriculum, certification, careers, placement support, brochure, enrollment, and payment actions." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course) => <CourseCard key={course.slug} course={course} />)}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl">
            <Image className="object-cover" src={imageAssets.classroom} alt="Students attending professional training class" fill sizes="(min-width: 1024px) 48vw, 100vw" />
          </div>
          <div>
            <p className="eyebrow">About institute</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">Structured training, transparent enrollment, and serious placement support</h2>
            <p className="mt-5 leading-7 text-slate-600">
              {siteConfig.shortName} combines classroom learning, practical readiness, documentation guidance, and recruiter preparation for candidates entering marine, logistics, cruise, safety, and industrial careers.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                [FaUserGraduate, "Student dashboard"],
                [FaCertificate, "Certification details"],
                [FaBriefcase, "Placement tracking"],
              ].map(([Icon, label]) => (
                <div key={String(label)} className="card p-4">
                  <Icon className="text-2xl text-sky-700" />
                  <p className="mt-3 text-sm font-bold text-slate-800">{String(label)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Why choose us" title="Designed for trust from first inquiry to final placement" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div className="card flex gap-4 p-5" key={item}>
                <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-950 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="eyebrow text-amber-300">Placement assistance</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Recruiter-ready support for eligible students</h2>
            <p className="mt-5 leading-7 text-slate-300">
              Placement support includes candidate profiling, interview preparation, document review, lead tracking, and payment history visibility for administrators.
            </p>
            <Link href="/placements" className="btn btn-primary mt-7">View Placements</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {recruiters.map((name) => (
              <div className="rounded-lg border border-white/10 bg-white/10 p-5 text-sm font-bold text-slate-100" key={name}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Course categories" title="Easy to expand as new programs are added" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link href={`/categories/${category.slug}`} className="card group overflow-hidden" key={category.slug}>
                <div className="relative h-44 w-full">
                  <Image className="object-cover" src={category.image} alt={`${category.name} category`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-950">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sky-800">Browse <FaArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeading eyebrow="Student reviews" title="Trusted by learners preparing for practical careers" />
            <div className="mt-10 grid gap-5">
              {testimonials.map((item) => (
                <blockquote className="card p-6" key={item.name}>
                  <p className="leading-7 text-slate-700">“{item.quote}”</p>
                  <footer className="mt-4 text-sm font-bold text-slate-950">{item.name} · {item.role}</footer>
                </blockquote>
              ))}
            </div>
          </div>
          <LeadForm mode="callback" />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Gallery preview" title="Training sessions, events, videos, and practical workshops" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {galleryItems.slice(0, 6).map((item, index) => (
              <div className="card p-5" key={item.title}>
                <span className="badge badge-muted">{item.type}</span>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">Media item #{index + 1} ready for CMS image or video upload.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">Common admission questions</h2>
            <p className="mt-5 leading-7 text-slate-600">FAQ schema is included for search engines and AI search surfaces.</p>
            <Link className="btn btn-secondary mt-7" href="/courses">
              <FaFileDownload /> Download Brochures
            </Link>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details className="card p-5" key={faq.question}>
                <summary className="cursor-pointer text-base font-bold text-slate-950">{faq.question}</summary>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
