import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { SectionHeading } from "@/src/components/SectionHeading";
import { categories } from "@/src/lib/courses";

export const metadata: Metadata = {
  title: "Course Categories",
  description: "Explore DVR Global Career training categories for Oil & Gas, offshore and onshore projects, warehouse logistics, shipbuilding, manufacturing, and fire safety careers.",
  alternates: { canonical: "/categories" },
};

export default function CategoriesPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Categories" title="Training categories for today's most demanding industries" />
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link href={`/categories/${category.slug}`} className="card group flex h-full flex-col overflow-hidden" key={category.slug}>
              <div className="relative h-48 w-full">
                <Image className="object-cover" src={category.image} alt={`${category.name} training category`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-bold text-slate-950">{category.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{category.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand)]">View programs <FaArrowRight /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
