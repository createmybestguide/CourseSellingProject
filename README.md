# OceanEdge Maritime Training Institute

Production-ready SEO-friendly training institute website built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Features

- Responsive premium homepage with hero, courses, about, placements, testimonials, gallery, FAQs, contact, and WhatsApp CTA
- Data-driven course and category pages
- Enrollment, inquiry, login, registration, payment, student dashboard, and admin-ready pages
- Technical SEO with metadata, canonical URLs, sitemap, robots, manifest, JSON-LD organization, FAQ, and course schema
- Accessible semantic layouts, keyboard focus states, labelled forms, and responsive navigation
- Payment module scaffold for Razorpay, Stripe, and PayU server-side integration
- Admin module architecture for courses, students, applications, payments, testimonials, gallery, leads, placements, recruiters, FAQs, and content

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

## Integration Notes

- Replace `siteConfig.url` in `src/lib/site.ts` with the live domain before launch.
- Connect form submissions to a backend API with validation, CSRF/session protection, email notifications, and CRM/lead export.
- Create payment intents on the server and verify Razorpay, Stripe, or PayU webhooks before confirming enrollments.
- Replace placeholder brochure links with real generated PDFs or CMS-managed files.
