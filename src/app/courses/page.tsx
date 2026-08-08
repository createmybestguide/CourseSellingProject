import type { Metadata } from "next";
import Link from "next/link";
import { CourseCard } from "@/src/components/CourseCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { categories, mainCourses } from "@/src/lib/courses";

export const metadata: Metadata = {
  title: "Oil & Gas Offshore and Onshore Training Courses",
  description: "Browse DVR Global Career offshore and onshore Oil & Gas, warehouse logistics, shipbuilding, and industrial safety training programs with placement assistance.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Main courses" title="Choose from the 5 core career-ready programs" text="Build skills for Oil & Gas, offshore, onshore, and industrial careers in India and overseas." />
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link className="badge badge-muted" href={`/categories/${category.slug}`} key={category.slug}>
              {category.name}
            </Link>
          ))}
        </div>
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainCourses.map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      </div>
    </section>
  );
}
