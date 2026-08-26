import type { Metadata } from "next";
import Link from "next/link";
import { EditorialRouteHero } from "@/components/layout/editorial-route-hero";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "Zapatos para mujer",
  description: "Explora calzado Matius Perfect para mujer y consulta modelos, tallas, colores y disponibilidad por WhatsApp.",
  alternates: { canonical: "/zapatos-mujer" },
};

export default function WomensShoesPage() {
  return (
    <EditorialRouteHero
      eyebrow="Mujer"
      titleLines={["Zapatos para", "mujer."]}
      description="Descubre la selección Matius para mujer y consulta modelos, tallas, colores y disponibilidad directamente por WhatsApp."
      meta="Mujer · Calzado · Cochabamba"
    >
      <WhatsAppButton
        source="product"
        productName="Zapatos para mujer"
        className="bg-[var(--mat-red)] text-white hover:bg-[var(--mat-red-hover)]"
      >
        Consultar disponibilidad
      </WhatsAppButton>
      <Link href="/#zapatos" className="text-sm font-semibold text-white underline decoration-white/40 underline-offset-4">
        Volver a colecciones →
      </Link>
    </EditorialRouteHero>
  );
}
