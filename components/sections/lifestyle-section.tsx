import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandMedia } from "@/data/media";

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
          {moments.map((moment, index) => {
            const image = brandMedia.campaign[index];
            return (
              <article
                key={moment.label}
                className={`relative min-h-[24rem] overflow-hidden bg-[var(--mat-charcoal)] ${moment.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  style={{ objectPosition: image.objectPosition }}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,13,12,0.04),rgba(14,13,12,0.72))]" />
                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 border-t border-white/20 pt-4">
                  <div>
                    <span className="matius-eyebrow text-white/60">0{index + 1}</span>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-medium">{moment.label}</h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.16em] text-white/55">Matius</span>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
