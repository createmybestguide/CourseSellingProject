import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/src/lib/site";

export function FloatingWhatsApp() {
  const message = "Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20courses.";
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[9999] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg shadow-slate-900/25 transition-transform duration-200 hover:scale-110"
      style={{ bottom: "24px", right: "24px" }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
