import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCardMatius } from "@/components/product/product-card-matius";
import { featuredProducts } from "@/data/products";

const productLayout = [
  "lg:col-span-6",
  "lg:col-span-3 lg:mt-24",
  "lg:col-span-3 lg:mt-40",
] as const;

export function FeaturedProductsSection() {
  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Selección"
              title="Calzado para descubrir."
              description="Una entrada rápida a modelos y colecciones con consulta directa por WhatsApp."
            />
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/65 lg:col-span-4 lg:col-start-9 lg:text-right">
            El modelo Oxford se muestra con el precio publicado; las demás entradas funcionan como acceso a colección mientras se completa el catálogo real.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className={productLayout[index] ?? "lg:col-span-4"}>
              <ProductCardMatius product={product} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
