import type { Metadata } from "next";
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
    title: category.name,
    description: category.description,
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
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryCourses.map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      </div>
    </section>
  );
}
