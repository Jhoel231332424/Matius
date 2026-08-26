import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "Zapatos para hombre",
  description: "Explora calzado Matius Perfect para hombre y consulta modelos, tallas, colores y disponibilidad por WhatsApp.",
  alternates: { canonical: "/zapatos-hombre" },
};

export default function MensShoesPage() {
  return (
    <Container className="py-[var(--mat-section)]">
      <p className="matius-eyebrow">Hombre</p>
      <h1 className="matius-section-title mt-4">Zapatos para hombre.</h1>
      <p className="mt-6 max-w-2xl leading-7 text-black/60">
        Descubre la selección Matius para hombre y consulta modelos, tallas, colores y disponibilidad directamente por WhatsApp.
      </p>
      <WhatsAppButton source="product" productName="Zapatos para hombre" className="mt-8">
        Consultar disponibilidad
      </WhatsAppButton>
    </Container>
  );
}
