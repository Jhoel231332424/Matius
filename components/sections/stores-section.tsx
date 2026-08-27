import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { stores } from "@/data/stores";

export function StoresSection() {
  return (
    <section className="bg-[var(--mat-ivory)] py-[var(--mat-section)]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Presencia física"
              title="Tres puntos para encontrarnos."
              description="Consulta la ubicación y atención de cada punto directamente con Matius Perfect."
            />
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/65 lg:col-span-3 lg:col-start-10 lg:text-right">
            Las direcciones y horarios se incorporarán únicamente cuando estén confirmados por la marca.
          </p>
        </div>

        <div className="mt-14 border-y border-black/15">
          {stores.map((store, index) => (
            <article key={store.slug} className="grid gap-5 border-b border-black/15 py-7 last:border-b-0 md:grid-cols-12 md:items-center md:py-8">
              <div className="flex items-center gap-3 md:col-span-2">
                <span className="h-0.5 w-8 bg-[var(--mat-red)]" aria-hidden="true" />
                <span className="matius-eyebrow text-black/65">0{index + 1}</span>
              </div>

              <div className="md:col-span-5">
                <p className="matius-eyebrow text-black/65">Cochabamba</p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-medium leading-none sm:text-5xl">
                  {store.name}
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-6 text-black/70 md:col-span-2">
                Ubicación y atención disponibles por contacto directo.
              </p>

              <div className="flex flex-col items-start gap-3 md:col-span-3 md:items-end">
                <Link href={`/tiendas/${store.slug}`} className="text-sm font-semibold underline underline-offset-4">
                  Ver sucursal →
                </Link>
                <WhatsAppButton source="store" storeName={store.name} variant="ghost" className="px-0 md:justify-end">
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
