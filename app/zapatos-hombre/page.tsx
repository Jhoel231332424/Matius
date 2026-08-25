import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = { title: "Zapatos para hombre", alternates: { canonical: "/zapatos-hombre" } };

export default function MensShoesPage() {
  return <Container className="py-[var(--mat-section)]"><p className="matius-eyebrow">Colección preparada</p><h1 className="matius-section-title mt-4">Zapatos para hombre.</h1><p className="mt-6 max-w-2xl leading-7 text-black/60">Página preparada para crecer desde la landing hacia una arquitectura SEO de colección.</p></Container>;
}
