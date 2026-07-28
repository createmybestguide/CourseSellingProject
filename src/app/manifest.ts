import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DVR Global Careers",
    short_name: "DVR",
    description: "Oil & Gas, Warehouse Management, Shipbuilding, Fire & Safety, and Industrial Skills Training with placement support.",
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
