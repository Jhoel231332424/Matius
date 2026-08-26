import type { Metadata } from "next";
import Link from "next/link";
import { EditorialRouteHero } from "@/components/layout/editorial-route-hero";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { brandMedia } from "@/data/media";

export const metadata: Metadata = {
  title: "Zapatos de cuero",
  description: "Explora zapatos de cuero Matius Perfect y consulta modelos, tallas, colores y disponibilidad por WhatsApp.",
  alternates: { canonical: "/zapatos-de-cuero" },
};

export default function LeatherShoesPage() {
  return (
    <EditorialRouteHero
      eyebrow="Colección de cuero"
      titleLines={["Zapatos de", "cuero."]}
      description="Explora el universo de calzado Matius y consulta modelos, tallas, colores y disponibilidad directamente por WhatsApp."
      image={brandMedia.hero}
      imageLabel="Campaña Matius Perfect"
      imageFit="contain"
      meta="Cuero · Calzado · Cochabamba"
    >
      <WhatsAppButton
        source="product"
        productName="Zapatos de cuero"
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
