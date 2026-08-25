import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { stores } from "@/data/stores";

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
