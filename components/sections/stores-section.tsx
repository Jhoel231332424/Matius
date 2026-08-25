import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { stores } from "@/data/stores";

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
          {stores.map((store, index) => (
            <article key={store.slug} className="group border border-black/12 bg-[var(--mat-warm-white)] p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="matius-eyebrow text-black/40">Cochabamba</span>
                <span className="text-xs text-black/30">0{index + 1}</span>
              </div>
              <div className="matius-hero-grid relative mt-8 min-h-52 overflow-hidden bg-[var(--mat-dark-brown)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(222,210,194,0.2),transparent_34%)]" />
                <span className="absolute bottom-5 left-5 font-[family-name:var(--font-display)] text-3xl font-medium text-white">{store.name}</span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-medium">{store.name}</h3>
              <p className="mt-3 text-sm leading-6 text-black/55">Información de ubicación y atención disponible por contacto directo.</p>
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
