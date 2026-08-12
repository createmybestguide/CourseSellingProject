import type { MetadataRoute } from "next";
import { categories, courses } from "@/src/lib/courses";
import { siteConfig } from "@/src/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/categories",
    "/contact",
    "/enroll",
    "/payment",
    "/login",
    "/register",
    "/dashboard",
    "/gallery",
    "/testimonials",
    "/placements",
    "/admin",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...courses.map((course) => ({
      url: `${siteConfig.url}/courses/${course.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...categories.map((category) => ({
      url: `${siteConfig.url}/categories/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
