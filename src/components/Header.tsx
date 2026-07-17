"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
    <header className="sticky top-0 z-50 border-b border-[rgb(0_59_122_/_14%)] bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="relative block h-14 w-36 shrink-0 overflow-hidden rounded-md bg-white shadow-sm">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={160}
              height={64}
              sizes="144px"
              className="h-full w-full object-contain"
              priority
            />
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
                  ? "bg-[var(--brand-soft)] text-[var(--brand)]"
                  : "text-slate-700 hover:bg-[var(--brand-soft)] hover:text-[var(--brand)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link className="btn btn-ghost" href="/login">
            Login
          </Link>
          <Link className="btn btn-primary" href="/enroll">
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="grid min-h-11 min-w-11 place-items-center rounded-lg border border-[rgb(0_59_122_/_20%)] bg-white text-[var(--brand-dark)] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[rgb(0_59_122_/_14%)] bg-white lg:hidden">
          <nav className="container grid gap-1 py-4" aria-label="Mobile navigation">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-sm font-semibold ${
                  isActive(link.href)
                    ? "bg-[var(--brand-soft)] text-[var(--brand)]"
                    : "text-slate-800 hover:bg-[var(--brand-soft)]"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Link className="btn btn-secondary" href="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link className="btn btn-primary" href="/enroll" onClick={() => setOpen(false)}>
                Apply Now
              </Link>
            </div>
          </nav>
        </div>
      ) : null}

    </header>
  );
}
