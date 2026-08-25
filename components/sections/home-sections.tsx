import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { featuredProducts } from "@/data/products";
import { stores } from "@/data/stores";

export function HeroSection() {
  return (
    <section className="bg-[var(--mat-ivory)] py-12 sm:py-16 lg:min-h-[82svh] lg:py-20">
      <Container className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="pb-4">
          <p className="matius-eyebrow mb-6">Matius Perfect · Cochabamba</p>
          <h1 className="matius-display">Cuero que deja huella.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-black/65">
            Demo de una experiencia digital enfocada en zapatos de cuero, fabricación y durabilidad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#zapatos" className="inline-flex min-h-11 items-center bg-[var(--mat-charcoal)] px-5 py-3 text-sm font-semibold text-white">Descubrir zapatos</a>
            <WhatsAppButton source="hero" variant="secondary">Consultar por WhatsApp</WhatsAppButton>
          </div>
        </div>
        <div className="matius-placeholder min-h-[32rem] lg:min-h-[42rem]" role="img" aria-label="Espacio reservado para fotografía editorial de zapatos Matius">
          Fotografía hero pendiente
        </div>
      </Container>
    </section>
  );
}

export function BrandPillarsSection() {
  const pillars = [
    ["01", "Cuero", "El material será protagonista mediante fotografía macro y copy verificado."],
    ["02", "Fabricación", "La demo mostrará el valor del proceso sin inventar técnicas todavía no confirmadas."],
    ["03", "Durabilidad", "La narrativa conectará el producto con uso cotidiano y permanencia."],
  ];
  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <SectionHeading eyebrow="Lo que define la marca" title="Tres razones para elegir Matius." />
        <div className="mt-12 grid gap-px bg-black/10 lg:grid-cols-3">
          {pillars.map(([number, title, copy]) => (
            <article key={title} className="bg-[var(--mat-warm-white)] p-7 sm:p-9">
              <span className="matius-eyebrow text-black/45">{number}</span>
              <div className="matius-placeholder mt-8 min-h-60">Macro / proceso</div>
              <h3 className="mt-7 font-serif text-4xl">{title}</h3>
              <p className="mt-4 leading-7 text-black/60">{copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CollectionsSection() {
  const collections = [
    { title: "Formal", href: "/zapatos-de-cuero" },
    { title: "Casual", href: "/zapatos-hombre" },
    { title: "Botas", href: "/zapatos-de-cuero" },
    { title: "Mujer", href: "/zapatos-mujer" },
  ];
  return (
    <section id="zapatos" className="bg-[var(--mat-charcoal)] py-[var(--mat-section)] text-white">
      <Container>
        <SectionHeading eyebrow="Colecciones" title="Encuentra tu estilo." description="Categorías provisionales hasta validar el catálogo real con el cliente." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {collections.map((collection, index) => (
            <Link key={`${collection.title}-${index}`} href={collection.href} className="group relative min-h-96 overflow-hidden border border-white/15 p-7">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#5c4637,#26211e)] opacity-70 transition-transform duration-500 group-hover:scale-105" />
              <div className="relative flex h-full flex-col justify-end">
                <span className="matius-eyebrow text-white/60">Colección demo</span>
                <h3 className="mt-2 font-serif text-5xl">{collection.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FeaturedProductsSection() {
  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <SectionHeading eyebrow="Selección" title="Modelos destacados." description="Cards estructurales preparadas para fotografías y datos reales." />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.id}>
              <div className="matius-placeholder aspect-[4/5] min-h-0">Producto pendiente</div>
              <p className="matius-eyebrow mt-5 text-black/45">{product.category}</p>
              <h3 className="mt-2 font-serif text-3xl">{product.name}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">{product.shortDescription}</p>
              <WhatsAppButton source="product" productName={product.name} variant="ghost" className="mt-4 px-0">Consultar este modelo →</WhatsAppButton>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CraftsmanshipSection() {
  return (
    <section id="fabricacion" className="bg-[var(--mat-ivory)] py-[var(--mat-section)]">
      <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow="Fabricación" title="Detrás de cada par." description="Este bloque será la escena principal de storytelling cuando el cliente valide el proceso real." />
          <Link href="/nuestra-fabricacion" className="mt-7 inline-block text-sm font-semibold underline underline-offset-4">Conocer la fabricación →</Link>
        </div>
        <div className="grid gap-6">
          {["Selección del material", "Construcción", "Detalle y acabado"].map((step, index) => (
            <article key={step} className="border-t border-black/15 pt-6">
              <span className="matius-eyebrow text-black/40">0{index + 1}</span>
              <div className="matius-placeholder mt-5 min-h-80">Fotografía de proceso</div>
              <h3 className="mt-5 font-serif text-3xl">{step}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">Contenido provisional. No describe todavía un proceso técnico específico de Matius.</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function LeatherDetailSection() {
  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <SectionHeading eyebrow="Detalle" title="El cuero, de cerca." description="Espacio reservado para textura, costura y acabado con fotografía macro optimizada." />
        <div className="matius-placeholder mt-12 min-h-[34rem] sm:min-h-[42rem]">Macro de cuero pendiente</div>
      </Container>
    </section>
  );
}

export function LifestyleSection() {
  return (
    <section className="bg-[var(--mat-dark-brown)] py-[var(--mat-section)] text-white">
      <Container>
        <SectionHeading eyebrow="Lifestyle" title="Hechos para acompañarte." description="Trabajo, reuniones y momentos cotidianos sin depender solo de una ficha de producto." />
        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <div className="matius-placeholder min-h-[28rem] md:col-span-7">Lifestyle 01</div>
          <div className="matius-placeholder min-h-[28rem] md:col-span-5">Lifestyle 02</div>
        </div>
      </Container>
    </section>
  );
}

export function LookbookSection() {
  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <SectionHeading eyebrow="Lookbook" title="Una marca que se vive." description="En producción se usarán imágenes autorizadas de Matius en lugar de embeds pesados de Instagram." />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={`matius-placeholder min-h-56 ${index === 0 || index === 5 ? "md:col-span-2 md:min-h-80" : ""}`}>Look {index + 1}</div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function StoresSection() {
  return (
    <section className="bg-[var(--mat-ivory)] py-[var(--mat-section)]">
      <Container>
        <SectionHeading eyebrow="Presencia física" title="Tres puntos para encontrarnos." description="Las direcciones, horarios y teléfonos se añadirán solo después de validarlos con el cliente." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stores.map((store) => (
            <article key={store.slug} className="border border-black/12 bg-[var(--mat-warm-white)] p-7">
              <span className="matius-eyebrow text-black/40">Cochabamba</span>
              <h3 className="mt-4 font-serif text-3xl">{store.name}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-black/55">Datos pendientes de confirmación.</p>
              <div className="mt-6 flex flex-col items-start gap-3">
                <Link href={`/tiendas/${store.slug}`} className="text-sm font-semibold underline underline-offset-4">Ver sucursal →</Link>
                <WhatsAppButton source="store" storeName={store.name} variant="ghost" className="px-0">Consultar sucursal →</WhatsAppButton>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="contacto" className="bg-[var(--mat-charcoal)] py-[var(--mat-section)] text-center text-white">
      <Container className="flex flex-col items-center">
        <p className="matius-eyebrow text-white/55">Matius Perfect</p>
        <h2 className="matius-section-title mt-5 max-w-4xl">Encuentra tu próximo par.</h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/65">Consulta modelos, tallas y disponibilidad directamente por WhatsApp.</p>
        <WhatsAppButton source="final-cta" className="mt-8 bg-[var(--mat-red)] hover:bg-[var(--mat-red-hover)]">Hablar por WhatsApp</WhatsAppButton>
      </Container>
    </section>
  );
}
