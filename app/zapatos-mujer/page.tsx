import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "Zapatos para mujer",
  description: "Explora calzado Matius Perfect para mujer y consulta modelos, tallas, colores y disponibilidad por WhatsApp.",
  alternates: { canonical: "/zapatos-mujer" },
};

export default function WomensShoesPage() {
  return (
    <Container className="py-[var(--mat-section)]">
      <p className="matius-eyebrow">Mujer</p>
      <h1 className="matius-section-title mt-4">Zapatos para mujer.</h1>
      <p className="mt-6 max-w-2xl leading-7 text-black/60">
        Descubre la selección Matius para mujer y consulta modelos, tallas, colores y disponibilidad directamente por WhatsApp.
      </p>
      <WhatsAppButton source="product" productName="Zapatos para mujer" className="mt-8">
        Consultar disponibilidad
      </WhatsAppButton>
    </Container>
  );
}
