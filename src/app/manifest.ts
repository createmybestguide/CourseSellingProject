import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DVR Global Careers",
    short_name: "DVR",
    description: "Oil and gas, marine, logistics, cruise, and industrial safety training institute.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f8fc",
    theme_color: "#003b7a",
    icons: [
      {
        src: "/dvr-global-careers-logo-small.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
