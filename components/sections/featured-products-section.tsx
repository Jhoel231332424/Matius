import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCardMatius } from "@/components/product/product-card-matius";
import { featuredProducts } from "@/data/products";

export function FeaturedProductsSection() {
  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <SectionHeading
          eyebrow="Selección"
          title="Calzado para descubrir."
          description="Una entrada rápida a modelos y colecciones con consulta directa por WhatsApp."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCardMatius key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
