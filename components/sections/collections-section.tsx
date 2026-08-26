import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CollectionCard } from "@/components/collection/collection-card";
import { brandMedia } from "@/data/media";

const collections = [
  { title: "Hombre", href: "/zapatos-hombre", className: "md:col-span-7 md:min-h-[34rem]" },
  { title: "Mujer", href: "/zapatos-mujer", className: "md:col-span-5 md:min-h-[28rem] md:mt-16" },
  { title: "Oxford", href: "/zapatos-de-cuero", className: "md:col-span-5 md:min-h-[28rem]" },
  { title: "Todos los zapatos", href: "/zapatos-de-cuero", className: "md:col-span-7 md:min-h-[34rem] md:-mt-10" },
];

export function CollectionsSection() {
  return (
    <section id="zapatos" className="bg-[var(--mat-charcoal)] py-[var(--mat-section)] text-white">
      <Container>
        <SectionHeading
          eyebrow="Colecciones"
          title="Encuentra tu próximo par."
          description="Explora el universo de calzado Matius desde una mirada editorial y directa."
          tone="dark"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-12 md:items-start">
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
