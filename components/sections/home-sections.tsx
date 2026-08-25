import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { featuredProducts } from "@/data/products";
import { stores } from "@/data/stores";

export function BrandPillarsSection() {
  const pillars = [
    ["01", "Cuero", "Textura, presencia y carácter como punto de partida de cada colección."],
    ["02", "Fabricación", "Una propuesta hecha en Cochabamba con atención al detalle y al oficio."],
    ["03", "Durabilidad", "Calzado pensado para acompañar el uso cotidiano más allá de una temporada."],
  ];

  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <SectionHeading eyebrow="Lo que define la marca" title="Cuero, oficio y permanencia." />
        <div className="mt-12 grid gap-px bg-black/10 lg:grid-cols-3">
          {pillars.map(([number, title, copy]) => (
            <article key={title} className="bg-[var(--mat-warm-white)] p-7 sm:p-9">
              <span className="matius-eyebrow text-black/45">{number}</span>
              <div className="matius-placeholder mt-8 min-h-60">{title} / detalle</div>
              <h3 className="mt-7 font-[family-name:var(--font-display)] text-4xl font-medium">{title}</h3>
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
    { title: "Hombre", href: "/zapatos-hombre" },
    { title: "Mujer", href: "/zapatos-mujer" },
    { title: "Oxford", href: "/zapatos-de-cuero" },
    { title: "Todos los zapatos", href: "/zapatos-de-cuero" },
  ];

  return (
    <section id="zapatos" className="bg-[var(--mat-charcoal)] py-[var(--mat-section)] text-white">
      <Container>
        <SectionHeading
          eyebrow="Colecciones"
          title="Encuentra tu próximo par."
          description="Explora el universo de calzado Matius desde una mirada más editorial y directa."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {collections.map((collection, index) => (
            <Link
              key={`${collection.title}-${index}`}
              href={collection.href}
              className="group relative min-h-96 overflow-hidden border border-white/15 p-7"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#6a4b36,#24201d)] opacity-80 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.12),transparent_34%)]" />
              <div className="relative flex h-full flex-col justify-end">
                <span className="matius-eyebrow text-white/55">Colección</span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-5xl font-medium">{collection.title}</h3>
                <span className="mt-5 text-sm text-white/70">Explorar →</span>
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
        <SectionHeading
          eyebrow="Selección"
          title="Calzado para descubrir."
          description="Una entrada rápida a modelos y colecciones con consulta directa por WhatsApp."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.id}>
              <div className="matius-placeholder aspect-[4/5] min-h-0">{product.name}</div>
              <p className="matius-eyebrow mt-5 text-black/45">{product.category}</p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-medium">{product.name}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">{product.shortDescription}</p>
              <WhatsAppButton source="product" productName={product.name} variant="ghost" className="mt-4 px-0">
                Consultar disponibilidad →
              </WhatsAppButton>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CraftsmanshipSection() {
  const steps = [
    ["01", "Material", "La historia comienza mostrando el cuero y los detalles que definen el carácter del producto."],
    ["02", "Oficio", "La fabricación se presenta desde una mirada humana, cercana y centrada en el trabajo detrás de cada par."],
    ["03", "Acabado", "El cierre visual pone el foco en costuras, superficies y terminaciones del calzado."],
  ];

  return (
    <section id="fabricacion" className="bg-[var(--mat-ivory)] py-[var(--mat-section)]">
      <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Fabricación"
            title="Detrás de cada par."
            description="Una sección para acercar el oficio, el material y el detalle al visitante."
          />
          <Link href="/nuestra-fabricacion" className="mt-7 inline-block text-sm font-semibold underline underline-offset-4">
            Conocer la fabricación →
          </Link>
        </div>
        <div className="grid gap-10">
          {steps.map(([number, title, copy]) => (
            <article key={title} className="border-t border-black/15 pt-6">
              <span className="matius-eyebrow text-black/40">{number}</span>
              <div className="matius-placeholder mt-5 min-h-80">{title} / proceso</div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-medium">{title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-black/60">{copy}</p>
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
        <SectionHeading
          eyebrow="Detalle"
          title="El cuero, de cerca."
          description="Textura, costura y acabado ocupan el centro de la experiencia visual."
        />
        <div className="matius-placeholder mt-12 min-h-[34rem] sm:min-h-[42rem]">Textura / costura / acabado</div>
      </Container>
    </section>
  );
}

export function LifestyleSection() {
  return (
    <section className="bg-[var(--mat-dark-brown)] py-[var(--mat-section)] text-white">
      <Container>
        <SectionHeading
          eyebrow="Lifestyle"
          title="Hechos para acompañarte."
          description="El producto pasa del detalle al contexto: trabajo, reuniones y momentos cotidianos."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <div className="matius-placeholder min-h-[28rem] md:col-span-7">Trabajo / ciudad</div>
          <div className="matius-placeholder min-h-[28rem] md:col-span-5">Detalle / estilo</div>
        </div>
      </Container>
    </section>
  );
}

export function LookbookSection() {
  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <SectionHeading
          eyebrow="Lookbook"
          title="Una marca que se vive."
          description="Una composición editorial preparada para fotografías de producto y contenido de Matius Perfect."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`matius-placeholder min-h-56 ${index === 0 || index === 5 ? "md:col-span-2 md:min-h-80" : ""}`}
            >
              Look {index + 1}
            </div>
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
        <SectionHeading
          eyebrow="Presencia física"
          title="Tres puntos para encontrarnos."
          description="Consulta la ubicación y atención de cada punto directamente con Matius Perfect."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stores.map((store) => (
            <article key={store.slug} className="border border-black/12 bg-[var(--mat-warm-white)] p-7">
              <span className="matius-eyebrow text-black/40">Cochabamba</span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium">{store.name}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-black/55">
                Información de ubicación y atención disponible por contacto directo.
              </p>
              <div className="mt-6 flex flex-col items-start gap-3">
                <Link href={`/tiendas/${store.slug}`} className="text-sm font-semibold underline underline-offset-4">
                  Ver sucursal →
                </Link>
                <WhatsAppButton source="store" storeName={store.name} variant="ghost" className="px-0">
                  Consultar sucursal →
                </WhatsAppButton>
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
        <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
          Consulta modelos, tallas y disponibilidad directamente por WhatsApp.
        </p>
        <WhatsAppButton source="final-cta" className="mt-8 bg-[var(--mat-red)] hover:bg-[var(--mat-red-hover)]">
          Hablar por WhatsApp
        </WhatsAppButton>
      </Container>
    </section>
  );
}
