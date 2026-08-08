import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { categories, courses } from "@/src/lib/courses";
import { navLinks, siteConfig } from "@/src/lib/site";

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(135deg,var(--brand-deep),#00306f_58%,#0059c7)] text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="relative block h-20 w-20 overflow-hidden rounded-md bg-[var(--brand-deep)] shadow-lg shadow-slate-950/20 ring-1 ring-white/15" aria-label={`${siteConfig.name} home`}>
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={112}
              height={112}
              sizes="80px"
              className="h-full w-full object-contain"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-blue-50">{siteConfig.description}</p>
          <div className="mt-6 grid gap-3 text-sm text-blue-50">
            <span className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#ffb15c]" /> {siteConfig.address}
            </span>
            <a className="flex gap-3 hover:text-white" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
              <FaPhoneAlt className="mt-1 text-[#ffb15c]" /> {siteConfig.phone}
            </a>
            <a className="flex gap-3 hover:text-white" href={`mailto:${siteConfig.email}`}>
              <FaEnvelope className="mt-1 text-[#ffb15c]" /> {siteConfig.email}
            </a>
          </div>
        </div>
        <FooterList title="Explore" links={navLinks} />
        <FooterList title="Categories" links={categories.map((item) => ({ label: item.name, href: `/categories/${item.slug}` }))} />
        <FooterList title="Popular Courses" links={courses.slice(0, 5).map((item) => ({ label: item.name, href: `/courses/${item.slug}` }))} />
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-3 text-sm text-blue-100/80 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="footer-link">Privacy</Link>
            <Link href="/terms" className="footer-link">Terms</Link>
            {/* <Link href="/admin" className="hover:text-white">Admin</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-[#ffd39b]">{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm text-blue-50">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="footer-link inline-block">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
