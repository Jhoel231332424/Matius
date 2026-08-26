"use client";

import { useEffect, useState } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const threshold = Math.min(window.innerHeight * 0.72, 720);
      setVisible(window.scrollY > threshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <a
      href={createWhatsAppUrl({ source: "floating" })}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar a Matius Perfect por WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => trackWhatsAppClick({ source: "floating" })}
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-50 grid min-h-12 min-w-12 place-items-center rounded-full bg-[var(--mat-red)] px-4 text-sm font-bold text-white shadow-lg transition duration-300 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span aria-hidden="true">WA</span>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
