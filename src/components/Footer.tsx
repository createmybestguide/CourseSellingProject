import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { categories, courses } from "@/src/lib/courses";
import { navLinks, siteConfig } from "@/src/lib/site";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <h2 className="text-xl font-bold">{siteConfig.name}</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">{siteConfig.description}</p>
          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            <span className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-sky-300" /> {siteConfig.address}
            </span>
            <a className="flex gap-3 hover:text-white" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
              <FaPhoneAlt className="mt-1 text-sky-300" /> {siteConfig.phone}
            </a>
            <a className="flex gap-3 hover:text-white" href={`mailto:${siteConfig.email}`}>
              <FaEnvelope className="mt-1 text-sky-300" /> {siteConfig.email}
            </a>
          </div>
        </div>
        <FooterList title="Explore" links={navLinks} />
        <FooterList title="Categories" links={categories.map((item) => ({ label: item.name, href: `/categories/${item.slug}` }))} />
        <FooterList title="Popular Courses" links={courses.slice(0, 5).map((item) => ({ label: item.name, href: `/courses/${item.slug}` }))} />
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/admin" className="hover:text-white">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-sky-200">{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm text-slate-300">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
