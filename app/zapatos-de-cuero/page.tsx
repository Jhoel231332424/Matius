import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "Zapatos de cuero",
  description: "Explora zapatos de cuero Matius Perfect y consulta modelos, tallas, colores y disponibilidad por WhatsApp.",
  alternates: { canonical: "/zapatos-de-cuero" },
};

export default function LeatherShoesPage() {
  return (
    <Container className="py-[var(--mat-section)]">
      <p className="matius-eyebrow">Colección de cuero</p>
      <h1 className="matius-section-title mt-4">Zapatos de cuero.</h1>
      <p className="mt-6 max-w-2xl leading-7 text-black/60">
        Explora el universo de calzado Matius y consulta modelos, tallas, colores y disponibilidad directamente por WhatsApp.
      </p>
      <WhatsAppButton source="product" productName="Zapatos de cuero" className="mt-8">
        Consultar disponibilidad
      </WhatsAppButton>
    </Container>
  );
}
