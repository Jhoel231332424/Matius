import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const moments = [
  { label: "Trabajo / ciudad", className: "md:col-span-7 md:min-h-[34rem]" },
  { label: "Detalle / estilo", className: "md:col-span-5 md:min-h-[34rem]" },
  { label: "Reunión / ocasión", className: "md:col-span-5 md:min-h-[26rem]" },
  { label: "Movimiento / cotidiano", className: "md:col-span-7 md:min-h-[26rem]" },
];

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
          {moments.map((moment, index) => (
            <article
              key={moment.label}
              className={`matius-hero-grid relative min-h-[24rem] overflow-hidden bg-[var(--mat-charcoal)] ${moment.className}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(222,210,194,0.18),transparent_34%),linear-gradient(155deg,transparent_25%,rgba(14,13,12,0.58)_82%)]" />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 border-t border-white/15 pt-4">
                <div>
                  <span className="matius-eyebrow text-white/45">0{index + 1}</span>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-medium">{moment.label}</h3>
                </div>
                <span className="text-xs uppercase tracking-[0.16em] text-white/35">Matius</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
