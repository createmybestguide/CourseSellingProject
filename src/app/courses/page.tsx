import type { Metadata } from "next";
import { CourseCard } from "@/src/components/CourseCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { courses } from "@/src/lib/courses";

export const metadata: Metadata = {
  title: "Oil & Gas Offshore and Onshore Training Courses",
  description: "Browse DVR Global Career offshore and onshore Oil & Gas, warehouse logistics, shipbuilding, and industrial safety training programs with placement assistance.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="All courses" title="Choose a career-ready training program" text="Build skills for Oil & Gas, Warehouse Management, Shipbuilding, Fire & Safety, and industrial careers in India and overseas." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      </div>
    </section>
  );
}
