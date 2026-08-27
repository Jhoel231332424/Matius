import type { Metadata } from "next";
import Link from "next/link";
import { EditorialRouteHero } from "@/components/layout/editorial-route-hero";

export const metadata: Metadata = {
  title: "Nuestra fabricación",
  description: "Conoce la propuesta de fabricación y calidad artesanal de Matius Perfect desde Cochabamba, Bolivia.",
  alternates: { canonical: "/nuestra-fabricacion" },
};

export default function CraftPage() {
  return (
    <EditorialRouteHero
      eyebrow="Fabricación"
      titleLines={["Detrás de", "cada par."]}
      description="La propuesta Matius pone el foco en el cuero, el oficio, los acabados y la durabilidad para crear calzado con carácter desde Cochabamba."
      meta="Cuero · Oficio · Acabado · Durabilidad"
    >
      <Link href="/#fabricacion" className="text-sm font-semibold text-white underline decoration-white/40 underline-offset-4">
        Ver la experiencia de producto →
      </Link>
      <Link href="/#zapatos" className="text-sm font-semibold text-white/75 underline decoration-white/25 underline-offset-4">
        Explorar zapatos →
      </Link>
    </EditorialRouteHero>
  );
}
