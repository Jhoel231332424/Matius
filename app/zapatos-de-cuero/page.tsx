import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Zapatos de cuero",
  description: "Ruta preparada para la futura colección de zapatos de cuero de Matius Perfect.",
  alternates: { canonical: "/zapatos-de-cuero" },
};

export default function LeatherShoesPage() {
  return <Container className="py-[var(--mat-section)]"><p className="matius-eyebrow">Colección preparada</p><h1 className="matius-section-title mt-4">Zapatos de cuero.</h1><p className="mt-6 max-w-2xl leading-7 text-black/60">El catálogo real se conectará cuando estén confirmados modelos, imágenes, tallas, precios y disponibilidad.</p></Container>;
}
