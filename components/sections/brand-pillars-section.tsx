import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandMedia } from "@/data/media";

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
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading eyebrow="Lo que define la marca" title="Cuero, oficio y permanencia." />
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/65 lg:col-span-3 lg:col-start-10 lg:text-right">
            Tres ideas que ordenan la experiencia antes de entrar al catálogo.
          </p>
        </div>

        <div className="mt-14 border-t border-black/15">
          {pillars.map((pillar, index) => {
            const image = brandMedia.pillars[index];
            const imageOrder = index % 2 === 1 ? "md:order-2 md:col-start-8" : "md:order-1";
            const copyOrder = index % 2 === 1 ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-7";

            return (
              <article key={pillar.title} className="grid gap-7 border-b border-black/15 py-8 md:grid-cols-12 md:items-center md:gap-10 md:py-12">
                <figure className={`relative min-h-[22rem] overflow-hidden bg-[var(--mat-dark-brown)] md:col-span-5 md:min-h-[30rem] ${imageOrder}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    style={{ objectPosition: image.objectPosition }}
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(14,13,12,0.62)_100%)]" />
                  <span className="matius-eyebrow absolute bottom-5 left-5 text-white/85">Matius · {pillar.number}</span>
                </figure>

                <div className={`md:col-span-6 ${copyOrder}`}>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-0.5 w-8 bg-[var(--mat-red)]" aria-hidden="true" />
                    <span className="matius-eyebrow text-black/65">{pillar.number} / 03</span>
                  </div>
                  <h3 className="max-w-[10ch] font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.9] sm:text-6xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-6 max-w-lg text-base leading-7 text-black/70">{pillar.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
