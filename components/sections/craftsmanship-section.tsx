import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Material",
    copy: "El cuero abre la historia con textura, tono y presencia antes de convertirse en un par terminado.",
  },
  {
    number: "02",
    title: "Oficio",
    copy: "La fabricación pone el foco en el cuidado del detalle y en el trabajo que sostiene cada pieza.",
  },
  {
    number: "03",
    title: "Acabado",
    copy: "Costuras, superficies y terminaciones cierran la narrativa con una mirada cercana al resultado final.",
  },
];

export function CraftsmanshipSection() {
  return (
    <section id="fabricacion" className="bg-[var(--mat-ivory)] py-[var(--mat-section)]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Fabricación"
              title="Detrás de cada par."
              description="Tres momentos para acercarse al material, al oficio y al acabado que dan carácter al calzado."
            />
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:text-right">
            <Link href="/nuestra-fabricacion" className="inline-block text-sm font-semibold underline underline-offset-4">
              Conocer la fabricación →
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-t border-black/15 pt-6">
              <div className="mb-5 h-0.5 w-8 bg-[var(--mat-red)]" aria-hidden="true" />
              <p className="matius-eyebrow text-black/65">Secuencia</p>
              <p className="mt-5 max-w-xs font-[family-name:var(--font-display)] text-4xl font-medium leading-[0.95]">
                Material.
                <br />
                Oficio.
                <br />
                Acabado.
              </p>
              <p className="mt-6 max-w-xs text-sm leading-6 text-black/65">
                Una lectura pausada del producto, sin convertir el proceso en una demostración técnica ni distraer del calzado.
              </p>
            </div>
          </aside>

          <div className="relative">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="relative mb-8 min-h-[30rem] overflow-hidden border border-white/10 bg-[var(--mat-dark-brown)] p-7 text-white sm:p-9 lg:sticky lg:min-h-[68vh]"
                style={{ top: `${7 + index * 1.35}rem`, zIndex: index + 1 }}
              >
                <div className="absolute left-7 top-7 h-0.5 w-10 bg-[var(--mat-red)] sm:left-9 sm:top-9" aria-hidden="true" />
                <div className="absolute -right-3 top-8 select-none font-[family-name:var(--font-display)] text-[9rem] font-medium leading-none text-white/[0.05] sm:text-[13rem]" aria-hidden="true">
                  {step.number}
                </div>

                <div className="relative flex h-full min-h-[26rem] flex-col justify-between lg:min-h-[60vh]">
                  <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-5">
                    <span className="matius-eyebrow text-white/75">Proceso</span>
                    <span className="text-xs uppercase tracking-[0.16em] text-white/65">{step.number} / 03</span>
                  </div>

                  <div className="py-12">
                    <h3 className="max-w-[9ch] font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.9] sm:text-7xl">
                      {step.title}
                    </h3>
                    <p className="mt-6 max-w-xl text-base leading-7 text-white/75">{step.copy}</p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-white/20 pt-5 text-xs uppercase tracking-[0.16em] text-white/60">
                    <span>Matius Perfect</span>
                    <span className="h-px flex-1 bg-white/20" aria-hidden="true" />
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
