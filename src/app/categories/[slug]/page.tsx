import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseCard } from "@/src/components/CourseCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { categories, getCategory, getCoursesByCategory } from "@/src/lib/courses";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} Courses`,
    description: category.description,
    keywords: [category.name, "DVR Global Career", "placement assistance", "industry skills training"],
    alternates: { canonical: `/categories/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const categoryCourses = getCoursesByCategory(category.name);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Category" title={category.name} text={category.description} />
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryCourses.length > 0 ? (
            categoryCourses.map((course) => <CourseCard key={course.slug} course={course} />)
          ) : (
            <div className="card p-6 md:col-span-2 lg:col-span-3">
              <span className="badge">Coming Soon</span>
              <h2 className="mt-4 text-2xl font-bold text-slate-950">Courses are being prepared for this category</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                We are working on industry-focused {category.name} programs with practical training, certification support, and placement assistance. Contact our team to get updates or career guidance for this category.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link className="btn btn-primary" href={`/contact?category=${category.slug}`}>Enquire Now</Link>
                <Link className="btn btn-secondary" href={`/enroll?category=${category.slug}`}>Apply Now</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
