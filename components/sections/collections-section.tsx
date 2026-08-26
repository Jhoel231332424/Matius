import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CollectionAccordion } from "@/components/collection/collection-accordion";
import { brandMedia } from "@/data/media";

const collections = [
  {
    title: "Hombre",
    eyebrow: "Colección 01",
    description:
      "Una entrada directa al calzado Matius para hombre, con el cuero y la presencia del producto como protagonistas.",
    href: "/zapatos-hombre",
    image: brandMedia.campaign[0],
  },
  {
    title: "Mujer",
    eyebrow: "Colección 02",
    description:
      "Siluetas de la marca presentadas desde una mirada editorial, pensadas para explorar antes de consultar disponibilidad.",
    href: "/zapatos-mujer",
    image: brandMedia.campaign[1],
  },
  {
    title: "Oxford",
    eyebrow: "Selección destacada",
    description:
      "Explora el universo de zapatos de cuero Matius y consulta modelos, tallas y colores directamente por WhatsApp.",
    href: "/zapatos-de-cuero",
    image: brandMedia.campaign[3],
  },
] as const;

export function CollectionsSection() {
  return (
    <section id="zapatos" className="bg-[var(--mat-charcoal)] py-[var(--mat-section)] text-white">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Colecciones"
            title="Encuentra tu próximo par."
            description="Tres entradas al universo Matius. Abre una colección para explorarla sin perder el ritmo editorial de la página."
            tone="dark"
          />
          <Link
            href="/zapatos-de-cuero"
            className="inline-flex min-h-11 items-center gap-3 self-start border-b border-white/40 pb-2 text-sm font-semibold text-white transition-colors hover:border-white lg:self-auto"
          >
            Ver todos los zapatos <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12">
          <CollectionAccordion panels={[...collections]} />
        </div>
      </Container>
    </section>
  );
}
