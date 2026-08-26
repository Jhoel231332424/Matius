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
        <SectionHeading eyebrow="Lo que define la marca" title="Cuero, oficio y permanencia." />
        <div className="mt-12 grid gap-px bg-black/10 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const image = brandMedia.pillars[index];
            return (
              <article key={pillar.title} className="group bg-[var(--mat-warm-white)] p-7 sm:p-9">
                <div className="flex items-center justify-between gap-4">
                  <span className="matius-eyebrow text-black/65">{pillar.number}</span>
                  <span className="h-px w-10 bg-black/25 transition-all duration-300 group-hover:w-16" />
                </div>
                <div className="relative mt-8 min-h-60 overflow-hidden bg-[var(--mat-dark-brown)] text-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    style={{ objectPosition: image.objectPosition }}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(14,13,12,0.76)_100%)]" />
                  <span className="matius-eyebrow absolute bottom-5 left-5 text-white/85">{pillar.title}</span>
                </div>
                <h3 className="mt-7 font-[family-name:var(--font-display)] text-4xl font-medium">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-black/70">{pillar.copy}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
