import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    number: "01",
    title: "Cuero",
    copy: "Textura, presencia y carácter como punto de partida de cada colección.",
  },
  {
    number: "02",
    title: "Fabricación",
    copy: "Una propuesta hecha en Cochabamba con atención al detalle y al oficio.",
  },
  {
    number: "03",
    title: "Durabilidad",
    copy: "Calzado pensado para acompañar el uso cotidiano más allá de una temporada.",
  },
];

export function BrandPillarsSection() {
  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <SectionHeading eyebrow="Lo que define la marca" title="Cuero, oficio y permanencia." />
        <div className="mt-12 grid gap-px bg-black/10 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="group bg-[var(--mat-warm-white)] p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="matius-eyebrow text-black/45">{pillar.number}</span>
                <span className="h-px w-10 bg-black/20 transition-all duration-300 group-hover:w-16" />
              </div>
              <div className="matius-hero-grid relative mt-8 min-h-60 overflow-hidden bg-[var(--mat-dark-brown)] text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(222,210,194,0.25),transparent_36%)]" />
                <div className="absolute -right-2 bottom-0 font-[family-name:var(--font-display)] text-[8rem] font-medium leading-none text-white/[0.06]">
                  {pillar.number}
                </div>
                <span className="matius-eyebrow absolute bottom-5 left-5 text-white/55">{pillar.title}</span>
              </div>
              <h3 className="mt-7 font-[family-name:var(--font-display)] text-4xl font-medium">{pillar.title}</h3>
              <p className="mt-4 leading-7 text-black/60">{pillar.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
