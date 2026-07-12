import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCreditCard, FaDownload, FaFileSignature } from "react-icons/fa";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { JsonLd } from "@/src/components/JsonLd";
import { LeadForm } from "@/src/components/LeadForm";
import { courses, getCourse } from "@/src/lib/courses";
import { siteConfig } from "@/src/lib/site";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: course.name,
    description: course.summary,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: course.name,
      description: course.summary,
      url: `/courses/${course.slug}`,
      type: "article",
    },
  };
}

export default async function CoursePage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: course.fees.replace(/[₹,]/g, ""),
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/courses/${course.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Courses", href: "/courses" }, { label: course.name }]} />
      <section className="section pt-10">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.42fr]">
          <article>
            <span className="badge">{course.category}</span>
            <h1 className="mt-5 text-4xl font-black tracking-normal text-slate-950 md:text-5xl">{course.name}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{course.description}</p>
            <div className="relative mt-8 aspect-[16/8] w-full overflow-hidden rounded-lg shadow-xl">
              <Image className="object-cover" src={course.image} alt={`${course.name} practical course training`} fill priority sizes="(min-width: 1024px) 62vw, 100vw" />
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <Info title="Eligibility" text={course.eligibility} />
              <Info title="Duration" text={course.duration} />
              <Info title="Course Fees" text={course.fees} />
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-slate-950">Course Curriculum</h2>
              <ul className="mt-5 grid gap-3">
                {course.curriculum.map((item) => <li className="card p-4 text-sm font-semibold text-slate-700" key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="mt-12 grid gap-6 md:grid-cols-2">
              <Info title="Certification Details" text={course.certification} />
              <Info title="Placement Assistance" text={course.placement} />
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-slate-950">Career Opportunities</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {course.careers.map((career) => <span className="badge badge-muted" key={career}>{career}</span>)}
              </div>
            </section>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <h2 className="text-xl font-bold text-slate-950">Start admission</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Download a brochure, apply, enroll, or continue to secure online payment.</p>
              <div className="mt-6 grid gap-3">
                <Link className="btn btn-secondary" href={`/brochures/${course.slug}.pdf`}><FaDownload /> Download Brochure</Link>
                <Link className="btn btn-primary" href={`/enroll?course=${course.slug}`}><FaFileSignature /> Apply Now</Link>
                <Link className="btn btn-secondary" href={`/payment?course=${course.slug}`}><FaCreditCard /> Online Payment</Link>
              </div>
            </div>
            <div className="mt-6">
              <LeadForm mode="enroll" courseName={course.name} />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="card p-5">
      <h2 className="text-sm font-black uppercase tracking-wide text-sky-800">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}
