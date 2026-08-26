import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Material",
    copy: "El cuero abre la historia: textura, tono y detalle antes de convertirse en un par terminado.",
  },
  {
    number: "02",
    title: "Oficio",
    copy: "La fabricación se cuenta desde una mirada humana y cercana al trabajo que hay detrás del producto.",
  },
  {
    number: "03",
    title: "Acabado",
    copy: "Costuras, superficies y terminaciones cierran la narrativa con foco en el detalle final.",
  },
];

export function CraftsmanshipSection() {
  return (
    <section id="fabricacion" className="bg-[var(--mat-ivory)] py-[var(--mat-section)]">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Fabricación"
            title="Detrás de cada par."
            description="Material, oficio y acabado se ordenan en una secuencia editorial que acompaña el scroll sin añadir JavaScript innecesario."
          />
          <Link href="/nuestra-fabricacion" className="mt-7 inline-block text-sm font-semibold underline underline-offset-4">
            Conocer la fabricación →
          </Link>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-t border-black/15 pt-6">
              <p className="matius-eyebrow text-black/40">Proceso editorial</p>
              <p className="mt-5 max-w-xs font-[family-name:var(--font-display)] text-4xl font-medium leading-[0.95]">
                Material.
                <br />
                Oficio.
                <br />
                Acabado.
              </p>
              <p className="mt-6 max-w-xs text-sm leading-6 text-black/55">
                En producción, este bloque se reemplazará con fotografías reales del proceso una vez que el cliente las valide.
              </p>
            </div>
          </aside>

          <div className="relative">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="relative mb-8 min-h-[32rem] overflow-hidden border border-white/10 bg-[var(--mat-dark-brown)] p-7 text-white shadow-[0_24px_60px_rgba(14,13,12,0.14)] sm:p-9 lg:sticky lg:min-h-[68vh]"
                style={{ top: `${7 + index * 1.35}rem`, zIndex: index + 1 }}
              >
                <div className="matius-hero-grid absolute inset-0 opacity-80" aria-hidden="true" />
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(222,210,194,0.25),transparent_34%),linear-gradient(155deg,transparent_20%,rgba(14,13,12,0.74)_82%)]"
                  aria-hidden="true"
                />

                <div className="relative flex h-full min-h-[28rem] flex-col justify-between lg:min-h-[60vh]">
                  <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-5">
                    <span className="matius-eyebrow text-white/60">Proceso</span>
                    <span className="text-xs uppercase tracking-[0.16em] text-white/45">{step.number} / 03</span>
                  </div>

                  <div className="py-12">
                    <div className="font-[family-name:var(--font-display)] text-[8rem] font-medium leading-[0.72] text-white/[0.08] sm:text-[11rem]" aria-hidden="true">
                      {step.number}
                    </div>
                    <h3 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-medium leading-none sm:text-6xl">
                      {step.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-7 text-white/70">{step.copy}</p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-white/15 pt-5 text-xs uppercase tracking-[0.16em] text-white/45">
                    <span>Matius Perfect</span>
                    <span className="h-px flex-1 bg-white/15" aria-hidden="true" />
                    <span>Cochabamba</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
