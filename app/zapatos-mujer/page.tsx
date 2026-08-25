import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = { title: "Zapatos para mujer", alternates: { canonical: "/zapatos-mujer" } };

export default function WomensShoesPage() {
  return <Container className="py-[var(--mat-section)]"><p className="matius-eyebrow">Colección preparada</p><h1 className="matius-section-title mt-4">Zapatos para mujer.</h1><p className="mt-6 max-w-2xl leading-7 text-black/60">Contenido y catálogo pendientes de validación con Matius Perfect.</p></Container>;
}
