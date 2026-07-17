import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBriefcase, FaCertificate, FaCheckCircle, FaFileDownload, FaIndustry, FaShip, FaUserGraduate } from "react-icons/fa";
import { CourseCard } from "@/src/components/CourseCard";
import { JsonLd } from "@/src/components/JsonLd";
import { LeadForm } from "@/src/components/LeadForm";
import { SectionHeading } from "@/src/components/SectionHeading";
import { categories, courses } from "@/src/lib/courses";
import { faqs, galleryItems, recruiters, testimonials, whyChooseUs } from "@/src/lib/content";
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
      <section className="relative overflow-hidden bg-[#eef5ff] text-[var(--brand-deep)]">
        <Image
          className="object-cover object-center"
          src={imageAssets.hero}
          alt="Offshore oil platform and industrial energy career background"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(237_246_255_/_88%),rgb(255_255_255_/_70%)_42%,rgb(255_122_0_/_18%)),linear-gradient(0deg,rgb(0_22_58_/_34%),rgb(255_255_255_/_18%)_58%,rgb(255_255_255_/_76%))]" />
        <div className="container relative grid min-h-[720px] content-between gap-10 pb-10 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--accent)] md:text-sm">
              Admissions open for 2026 batches
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[0.98] tracking-normal text-[var(--brand)] md:text-6xl lg:text-7xl">
              Global Opportunities
              <span className="block text-[var(--accent)]">Endless Possibilities</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-bold leading-6 text-slate-700 md:text-base">
              Your gateway to exciting careers in oil &amp; gas, energy, marine, and beyond.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/courses" className="btn btn-primary">Explore Courses</Link>
              <Link href="/enroll" className="btn bg-[var(--accent)] text-white shadow-lg shadow-orange-900/20 hover:bg-[#e96900]">Apply Now</Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/35 bg-[rgb(0_59_122_/_88%)] p-5 text-center text-white shadow-2xl shadow-slate-950/20 backdrop-blur">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-white/70 text-2xl">
                <FaShip aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-black uppercase tracking-wide">Offshore Opportunities</h2>
              <p className="mx-auto mt-2 max-w-md text-sm font-semibold leading-6 text-blue-50">
                Learn high-growth careers on offshore rigs, platforms, vessels, and marine operations.
              </p>
            </div>
            <div className="rounded-lg border border-white/35 bg-[rgb(255_122_0_/_88%)] p-5 text-center text-white shadow-2xl shadow-orange-950/20 backdrop-blur">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-white/75 text-2xl">
                <FaIndustry aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-black uppercase tracking-wide">Onshore Opportunities</h2>
              <p className="mx-auto mt-2 max-w-md text-sm font-semibold leading-6 text-orange-50">
                Build a successful career in refineries, plants, terminals, logistics, and industrial safety.
              </p>
            </div>
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
                  <Icon className="text-2xl text-[var(--brand)]" />
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

      <section className="section bg-[var(--brand-deep)] text-white">
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
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand)]">Browse <FaArrowRight /></span>
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
                  <p className="leading-7 text-slate-700">&quot;{item.quote}&quot;</p>
                  <footer className="mt-4 text-sm font-bold text-slate-950">{item.name} - {item.role}</footer>
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

