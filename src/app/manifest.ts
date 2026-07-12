import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OceanEdge Maritime Training Institute",
    short_name: "OceanEdge",
    description: "Marine, logistics, cruise, oil and gas, and industrial safety training institute.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#075985",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
