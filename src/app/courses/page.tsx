import type { Metadata } from "next";
import { CourseCard } from "@/src/components/CourseCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { courses } from "@/src/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse marine, logistics, oil and gas, cruise, industrial safety, and professional training courses.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="All courses" title="Choose a career-ready training program" text="Every course includes application, brochure, enrollment, payment, curriculum, certification, and placement details." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      </div>
    </section>
  );
}
