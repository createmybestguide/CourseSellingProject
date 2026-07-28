import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/src/components/SectionHeading";
import { galleryItems } from "@/src/lib/content";
import { imageAssets } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View DVR Global Career training sessions, placement preparation, industrial skills workshops, event photos, and video highlights.",
  alternates: { canonical: "/gallery" },
};

const images = [imageAssets.ship, imageAssets.safety, imageAssets.logistics, imageAssets.training, imageAssets.classroom, imageAssets.hero];

export default function GalleryPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Gallery" title="Training sessions, event photos, and video highlights" text="Explore DVR Global Career training and career development activities across Oil & Gas, Warehouse Management, Shipbuilding, Fire & Safety, and industrial skills programs." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article className="card overflow-hidden" key={item.title}>
              <div className="relative h-52 w-full">
                <Image className="object-cover" src={images[index]} alt={item.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-5">
                <span className="badge">{item.type}</span>
                <h2 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
