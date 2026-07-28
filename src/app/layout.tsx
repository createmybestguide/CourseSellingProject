import type { Metadata, Viewport } from "next";
import { FloatingWhatsApp } from "@/src/components/FloatingWhatsApp";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { JsonLd } from "@/src/components/JsonLd";
import { siteConfig } from "@/src/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Oil & Gas, Warehouse, Shipbuilding & Industrial Skills Training`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "DVR Global Careers",
    "oil and gas training",
    "offshore training",
    "onshore training",
    "warehouse logistics course",
    "shipbuilding training",
    "fire safety training",
    "industrial skills training",
    "placement assistance",
  ],
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: siteConfig.logo,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.logo],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: siteConfig.logoSmall, type: "image/png" },
    ],
    apple: [{ url: siteConfig.logoSmall, type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#003b7a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      postalCode: siteConfig.postalCode,
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
