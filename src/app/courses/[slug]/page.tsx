import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaComments, FaDownload, FaFileSignature } from "react-icons/fa";
import { JsonLd } from "@/src/components/JsonLd";
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
    title: `${course.name} Course with Placement Assistance`,
    description: `${course.summary} Learn at DVR Global Career with industry-focused training, practical skills, certification support, and placement assistance.`,
    keywords: course.keywords,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.name} Course with Placement Assistance`,
      description: `${course.summary} Learn at DVR Global Career with industry-focused training and placement assistance.`,
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
    url: `${siteConfig.url}/courses/${course.slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="section pt-10">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.42fr]">
          <article>
            <span className="badge">{course.category}</span>
            <h1 className="mt-5 text-4xl font-black tracking-normal text-slate-950 md:text-5xl">{course.name}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{course.overview}</p>
            <div className="relative mt-8 aspect-[16/8] w-full overflow-hidden rounded-lg shadow-xl">
              <Image className="object-cover" src={course.image} alt={`${course.name} practical course training`} fill priority sizes="(min-width: 1024px) 62vw, 100vw" />
            </div>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-slate-950">Course Overview</h2>
              <p className="mt-4 leading-7 text-slate-600">{course.overview}</p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-slate-950">Course Description</h2>
              <p className="mt-4 leading-7 text-slate-600">{course.description}</p>
            </section>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <Info title="Suitable For / Eligibility" text={course.eligibility} />
              <Info title="Duration" text={course.duration} />
              <Info title="Fees" text={course.fees} />
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-slate-950">{course.curriculumLabel}</h2>
              <ul className="mt-5 grid gap-3">
                {course.curriculum.map((item) => <li className="card p-4 text-sm font-semibold text-slate-700" key={item}>{item}</li>)}
              </ul>
            </section>

            {course.trainingIncludes ? (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-slate-950">Training Includes</h2>
                <ul className="mt-5 grid gap-3">
                  {course.trainingIncludes.map((item) => <li className="card p-4 text-sm font-semibold text-slate-700" key={item}>{item}</li>)}
                </ul>
              </section>
            ) : null}

            {course.suitableFor ? (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-slate-950">Suitable For</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {course.suitableFor.map((item) => <span className="badge badge-muted" key={item}>{item}</span>)}
                </div>
              </section>
            ) : null}

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
              <p className="mt-3 text-sm leading-6 text-slate-600">Download a brochure, enquire, apply, or continue to secure online payment.</p>
              <div className="mt-6 grid gap-3">
                <Link className="btn btn-secondary" href={`/brochures/${course.slug}.pdf`}><FaDownload /> Download Brochure</Link>
                <Link className="btn btn-secondary" href={`/contact?course=${course.slug}`}><FaComments /> Enquire Now</Link>
                <Link className="btn btn-primary" href={`/enroll?course=${course.slug}`}><FaFileSignature /> Apply Now</Link>
              </div>
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
      <h2 className="text-sm font-black uppercase tracking-wide text-[var(--brand)]">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}
