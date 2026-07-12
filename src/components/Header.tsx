"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { navLinks, siteConfig } from "@/src/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-950 text-sm font-bold text-white">
            OE
          </span>
          <span>
            <span className="block text-base font-bold text-slate-950">{siteConfig.shortName}</span>
            <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">Maritime Training</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-700 hover:text-sky-700">
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
          className="icon-button lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container grid gap-1 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
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

      <Link
        href={`https://wa.me/${siteConfig.whatsapp}`}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-2xl text-white shadow-xl shadow-emerald-900/20 transition hover:bg-emerald-600"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </Link>
    </header>
  );
}
