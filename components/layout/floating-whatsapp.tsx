import { createWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppUrl({ source: "floating" })}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar a Matius Perfect por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid min-h-12 min-w-12 place-items-center rounded-full bg-[var(--mat-red)] px-4 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
    >
      WA
    </a>
  );
}
