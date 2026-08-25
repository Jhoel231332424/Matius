import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Nuestra fabricación",
  description: "Ruta preparada para contar el proceso de fabricación de Matius Perfect con información validada.",
  alternates: { canonical: "/nuestra-fabricacion" },
};

export default function CraftPage() {
  return <Container className="py-[var(--mat-section)]"><p className="matius-eyebrow">Storytelling preparado</p><h1 className="matius-section-title mt-4">Detrás de cada par.</h1><p className="mt-6 max-w-2xl leading-7 text-black/60">No se publicarán técnicas, materiales o claims concretos hasta confirmarlos con el cliente.</p></Container>;
}
