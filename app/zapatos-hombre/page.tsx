import type { Metadata } from "next";
import Link from "next/link";
import { EditorialRouteHero } from "@/components/layout/editorial-route-hero";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "Zapatos para hombre",
  description: "Explora calzado Matius Perfect para hombre y consulta modelos, tallas, colores y disponibilidad por WhatsApp.",
  alternates: { canonical: "/zapatos-hombre" },
};

export default function MensShoesPage() {
  return (
    <EditorialRouteHero
      eyebrow="Hombre"
      titleLines={["Zapatos para", "hombre."]}
      description="Descubre la selección Matius para hombre y consulta modelos, tallas, colores y disponibilidad directamente por WhatsApp."
      meta="Hombre · Calzado · Cochabamba"
    >
      <WhatsAppButton
        source="product"
        productName="Zapatos para hombre"
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
