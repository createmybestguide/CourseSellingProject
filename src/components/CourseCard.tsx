import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaClock, FaRupeeSign } from "react-icons/fa";
import type { Course } from "@/src/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card group overflow-hidden">
      <div className="course-media relative h-48 w-full overflow-hidden">
        <Image
          className="object-cover transition duration-500 group-hover:scale-105"
          src={course.image}
          alt={`${course.name} training session`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/35 to-transparent" />
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[var(--brand)] shadow-sm">
          Career-ready
        </span>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <span className="badge">{course.category}</span>
          <span className="badge badge-success">{course.level}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-950">{course.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{course.summary}</p>
        <div className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
          <span className="flex items-center gap-2">
            <FaClock className="text-[var(--accent)]" /> {course.duration}
          </span>
          <span className="flex items-center gap-2">
            <FaRupeeSign className="text-[var(--accent)]" /> {course.fees.replace("₹", "")}
          </span>
        </div>
        <Link
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand)] transition-all group-hover:gap-3 group-hover:text-[var(--accent)]"
          href={`/courses/${course.slug}`}
        >
          View course <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
