import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaClock, FaRupeeSign } from "react-icons/fa";
import type { Course } from "@/src/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card group overflow-hidden">
      <div className="relative h-48 w-full">
        <Image className="object-cover" src={course.image} alt={`${course.name} training session`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <span className="badge">{course.category}</span>
          <span className="badge badge-muted">{course.level}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-950">{course.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{course.summary}</p>
        <div className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
          <span className="flex items-center gap-2"><FaClock className="text-sky-700" /> {course.duration}</span>
          <span className="flex items-center gap-2"><FaRupeeSign className="text-sky-700" /> {course.fees.replace("₹", "")}</span>
        </div>
        <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-800 group-hover:gap-3" href={`/courses/${course.slug}`}>
          View course <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
