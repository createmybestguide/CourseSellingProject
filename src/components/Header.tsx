"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { navLinks, siteConfig } from "@/src/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerLinks = [{ label: "Home", href: "/" }, ...navLinks];

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(0_177_255_/_18%)] bg-[rgb(2_8_38_/_92%)] shadow-sm shadow-slate-950/30 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-md bg-[var(--brand-deep)] shadow-sm ring-1 ring-[rgb(255_255_255_/_16%)]">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={96}
              height={96}
              sizes="64px"
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black uppercase text-white">DVR</span>
            <span className="block text-xs font-bold uppercase text-[var(--brand-sky)]">Global Careers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                isActive(link.href)
                  ? "bg-[var(--accent-soft)] text-[var(--brand)]"
                  : "text-slate-100 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link className="btn btn-nav-apply shrink-0" href="/enroll">
            Apply Now <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="grid min-h-11 min-w-11 place-items-center rounded-lg border border-white/15 bg-white/10 text-white shadow-sm lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[var(--brand-deep)] lg:hidden">
          <nav className="container grid gap-1 py-4" aria-label="Mobile navigation">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-sm font-semibold ${
                  isActive(link.href)
                  ? "bg-[var(--accent-soft)] text-[var(--brand)]"
                    : "text-slate-100 hover:bg-white/10"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3">
              <Link className="btn btn-nav-apply w-full" href="/enroll" onClick={() => setOpen(false)}>
                Apply Now <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
          </nav>
        </div>
      ) : null}

    </header>
  );
}
