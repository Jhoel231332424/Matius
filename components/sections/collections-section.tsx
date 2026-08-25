import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CollectionCard } from "@/components/collection/collection-card";
import { brandMedia } from "@/data/media";

const collections = [
  { title: "Hombre", href: "/zapatos-hombre" },
  { title: "Mujer", href: "/zapatos-mujer" },
  { title: "Oxford", href: "/zapatos-de-cuero" },
  { title: "Todos los zapatos", href: "/zapatos-de-cuero" },
];

export function CollectionsSection() {
  return (
    <section id="zapatos" className="bg-[var(--mat-charcoal)] py-[var(--mat-section)] text-white">
      <Container>
        <SectionHeading
          eyebrow="Colecciones"
          title="Encuentra tu próximo par."
          description="Explora el universo de calzado Matius desde una mirada editorial y directa."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.title}
              {...collection}
              index={index}
              image={brandMedia.campaign[index]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
