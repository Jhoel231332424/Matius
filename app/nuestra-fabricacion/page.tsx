import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Nuestra fabricación",
  description: "Conoce la propuesta de fabricación y calidad artesanal de Matius Perfect desde Cochabamba, Bolivia.",
  alternates: { canonical: "/nuestra-fabricacion" },
};

export default function CraftPage() {
  return (
    <Container className="py-[var(--mat-section)]">
      <p className="matius-eyebrow">Fabricación</p>
      <h1 className="matius-section-title mt-4">Detrás de cada par.</h1>
      <p className="mt-6 max-w-2xl leading-7 text-black/60">
        La propuesta Matius pone el foco en el cuero, el oficio, los acabados y la durabilidad para crear calzado con carácter desde Cochabamba.
      </p>
    </Container>
  );
}
