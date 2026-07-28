import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBriefcase, FaCertificate, FaCheckCircle, FaFileDownload, FaIndustry, FaShip, FaUserGraduate } from "react-icons/fa";
import { CourseCard } from "@/src/components/CourseCard";
import { JsonLd } from "@/src/components/JsonLd";
import { LeadForm } from "@/src/components/LeadForm";
import { SectionHeading } from "@/src/components/SectionHeading";
import { categories, courses } from "@/src/lib/courses";
import { careerSections, faqs, founderProfile, galleryItems, industriesWeServe, recruiters, stats, testimonials, whyChooseUs } from "@/src/lib/content";
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
      <section className="hero-shell relative overflow-hidden bg-[var(--surface-warm)] text-[var(--brand-deep)]">
        <Image
          className="object-cover object-center"
          src={imageAssets.hero}
          alt="Offshore oil platform and industrial energy career background"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(255_248_239_/_94%),rgb(255_253_250_/_80%)_44%,rgb(255_138_29_/_26%)),linear-gradient(0deg,rgb(7_25_47_/_34%),rgb(255_248_239_/_18%)_58%,rgb(255_248_239_/_82%))]" />
        <div className="container relative z-10 grid min-h-[calc(100svh-5rem)] content-center gap-8 py-10 md:min-h-[720px] md:py-14">
          <div className="hero-panel mx-auto max-w-4xl text-center">
            <p className="mx-auto inline-flex rounded-full bg-white/85 px-4 py-2 text-xs font-black uppercase text-[var(--accent)] shadow-sm ring-1 ring-[rgb(255_138_29_/_20%)] md:text-sm">
              Industry Skills. Global Careers.
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[1.02] tracking-normal text-[var(--brand)] md:text-6xl lg:text-7xl">
              Build Your Future
              <span className="block text-[var(--accent)]">with DVR Global Career</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-bold leading-6 text-slate-700 md:text-base">
              DVR Global Career is a leading career development and placement organization specializing in Oil &amp; Gas, Warehouse Management, Shipbuilding, and Industrial Skills Training. We prepare aspiring professionals with industry-focused training, internationally relevant skills, and dedicated placement support for careers in India and across the GCC and other global markets.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/courses" className="btn btn-primary">Start Your Career</Link>
              <Link href="/enroll" className="btn btn-accent">Apply Now</Link>
            </div>
          </div>

          <div className="stagger grid gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div className="stat-tile rounded-lg p-4 text-center" key={item.label}>
                <strong className="block text-2xl font-black text-[var(--brand)] md:text-3xl">{item.value}</strong>
                <span className="mt-1 block text-xs font-bold uppercase text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="hero-highlight-card rounded-lg border border-white/35 bg-[rgb(7_75_143_/_88%)] p-5 text-center text-white shadow-2xl shadow-slate-950/20 backdrop-blur">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-white/70 text-2xl">
                <FaShip aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-black uppercase tracking-wide">Offshore Training</h2>
              <p className="mx-auto mt-2 max-w-md text-sm font-semibold leading-6 text-blue-50">
                Prepare for offshore and onshore oil and gas careers with practical safety awareness and workplace skills.
              </p>
            </div>
            <div className="hero-highlight-card rounded-lg border border-white/35 bg-[rgb(255_138_29_/_90%)] p-5 text-center text-white shadow-2xl shadow-orange-950/20 backdrop-blur">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-white/75 text-2xl">
                <FaIndustry aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-black uppercase tracking-wide">Onshore Training</h2>
              <p className="mx-auto mt-2 max-w-md text-sm font-semibold leading-6 text-orange-50">
                Build technical confidence for refineries, petrochemical plants, power plants, construction projects, and industrial facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="container reveal">
          <SectionHeading eyebrow="Training programs" title="Offshore and onshore courses for global career pathways" text="Choose industry-oriented training designed for beginners, aspiring professionals, freshers, and experienced professionals preparing for India, GCC, and global market opportunities." />
          <div className="stagger mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course) => <CourseCard key={course.slug} course={course} />)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container reveal grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <div className="image-tilt relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl">
            <Image className="object-cover" src={imageAssets.classroom} alt="Students attending professional training class" fill sizes="(min-width: 1024px) 48vw, 100vw" />
          </div>
          <div>
            <p className="eyebrow">About DVR Global Career</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">Practical career-oriented training that bridges education and employment</h2>
            <p className="mt-5 leading-7 text-slate-600">
              At {siteConfig.shortName} Global Career, we bridge the gap between education and employment by providing practical, career-oriented training that meets current industry standards. Our mission is to develop skilled professionals who are ready to excel in today&apos;s fast-growing industrial sectors.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              With experienced trainers, hands-on learning, and a dedicated placement team, we help candidates build successful careers in high-demand industries.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                [FaUserGraduate, "Hands-on learning"],
                [FaCertificate, "Certification support"],
                [FaBriefcase, "Placement team"],
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

      <section className="section section-cool">
        <div className="container reveal">
          <SectionHeading eyebrow="Why choose DVR Global Career?" title="Industry-focused support from training to career guidance" />
          <div className="stagger mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="container reveal grid gap-10 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="eyebrow text-amber-300">Placement Support</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Connect with job opportunities in high-demand industries</h2>
            <p className="mt-5 leading-7 text-slate-300">
              Our dedicated placement cell works closely with employers to connect qualified candidates with job opportunities in Oil &amp; Gas companies, EPC and engineering projects, shipyards, warehouse and logistics companies, manufacturing industries, and marine and offshore organizations. From training to interviews and documentation, we support candidates throughout their career journey.
            </p>
            <Link href="/placements" className="btn btn-primary mt-7">Get Placement Assistance</Link>
          </div>
          <div className="stagger grid gap-3 sm:grid-cols-2">
            {recruiters.map((name) => (
              <div className="rounded-lg border border-white/10 bg-white/10 p-5 text-sm font-bold text-slate-100" key={name}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="container reveal">
          <SectionHeading eyebrow="Industries we serve" title="Career training for today's most demanding industries" text="Whether you're a fresher or looking to upgrade your skills, DVR Global Career provides the knowledge, training, and placement support needed to build a rewarding career in today's most demanding industries." />
          <div className="stagger mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link href={`/categories/${category.slug}`} className="card group overflow-hidden" key={category.slug}>
                <div className="relative h-44 w-full">
                  <Image className="object-cover transition duration-500 group-hover:scale-105" src={category.image} alt={`${category.name} category`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-950">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand)]">Browse <FaArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="chip-marquee mt-8">
            <div className="chip-track">
              {[...industriesWeServe, ...industriesWeServe].map((industry, index) => (
                <span className="badge badge-muted whitespace-nowrap" key={`${industry}-${index}`}>{industry}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container stagger grid gap-6 lg:grid-cols-3">
          {careerSections.map((section) => (
            <article className="card p-6" key={section.title}>
              <span className="badge">{section.title}</span>
              <h2 className="mt-4 text-2xl font-bold text-slate-950">{section.subtitle}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{section.description}</p>
              <h3 className="mt-6 text-sm font-black uppercase tracking-wide text-[var(--brand)]">Why choose us?</h3>
              <ul className="mt-3 grid gap-2 text-sm font-semibold text-slate-700">
                {section.reasons.map((reason) => <li key={reason}>{reason}</li>)}
              </ul>
              <h3 className="mt-6 text-sm font-black uppercase tracking-wide text-[var(--brand)]">Career opportunities</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{section.careers.join(" • ")}</p>
              <h3 className="mt-6 text-sm font-black uppercase tracking-wide text-[var(--brand)]">Eligibility</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{section.eligibility}</p>
              {section.note ? <p className="mt-3 text-xs font-semibold text-slate-500">{section.note}</p> : null}
              {section.closing ? <p className="mt-5 text-sm font-black text-[var(--accent)]">{section.closing}</p> : null}
              <Link className="btn btn-primary mt-6" href={section.href}>{section.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-[var(--surface)]">
        <div className="container reveal grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">About the Founder & Managing Director</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">{founderProfile.name}</h2>
            <p className="mt-3 text-sm font-black uppercase tracking-wide text-[var(--brand)]">{founderProfile.role}</p>
          </div>
          <div className="grid gap-4">
            {founderProfile.paragraphs.map((paragraph) => (
              <p className="leading-7 text-slate-600" key={paragraph}>{paragraph}</p>
            ))}
            <p className="text-lg font-black text-[var(--accent)]">&quot;{founderProfile.quote}&quot;</p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container reveal grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeading eyebrow="Student reviews" title="Learners preparing for practical industrial careers" />
            <div className="stagger mt-10 grid gap-5">
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

      <section className="section bg-[var(--surface)]">
        <div className="container reveal">
          <SectionHeading eyebrow="Gallery preview" title="Training sessions, placement preparation, and practical workshops" />
          <div className="stagger mt-10 grid gap-4 md:grid-cols-3">
            {galleryItems.slice(0, 6).map((item) => (
              <div className="card p-5" key={item.title}>
                <span className="badge badge-muted">{item.type}</span>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">DVR Global Career training and career development activity.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cool">
        <div className="container reveal grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">Common training and placement questions</h2>
            <p className="mt-5 leading-7 text-slate-600">Your Career Starts Here. Learn. Grow. Get Placed. Contact us today and take the first step toward a successful global career with DVR Global Career.</p>
            <Link className="btn btn-secondary mt-7" href="/courses">
              <FaFileDownload /> Download Brochure
            </Link>
          </div>
          <div className="stagger grid gap-4">
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

