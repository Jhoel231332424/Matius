import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandMedia } from "@/data/media";

export function LeatherDetailSection() {
  return (
    <section className="overflow-hidden bg-[var(--mat-dark-brown)] py-[var(--mat-section)] text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <div className="mb-6 h-0.5 w-8 bg-[var(--mat-red)]" aria-hidden="true" />
            <SectionHeading
              eyebrow="Detalle"
              title="El cuero, de cerca."
              description="Textura, forma y presencia construyen una lectura más cercana del calzado."
              tone="dark"
            />

            <dl className="mt-10 space-y-7 border-t border-white/20 pt-7 text-sm leading-6 text-white/75">
              <div>
                <dt className="matius-eyebrow text-white/70">01 / Material</dt>
                <dd className="mt-2 max-w-sm">El material se percibe en la superficie, el tono y la forma que toma el producto.</dd>
              </div>
              <div>
                <dt className="matius-eyebrow text-white/70">02 / Acabado</dt>
                <dd className="mt-2 max-w-sm">La mirada se acerca a costuras, bordes y terminaciones sin distraer con efectos innecesarios.</dd>
              </div>
            </dl>
          </div>

          <figure className="relative min-h-[32rem] overflow-hidden bg-[var(--mat-charcoal)] sm:min-h-[42rem] lg:col-span-8 lg:min-h-[48rem]">
            <Image
              src={brandMedia.leatherDetail.src}
              alt={brandMedia.leatherDetail.alt}
              fill
              sizes="(min-width: 1024px) 67vw, 100vw"
              style={{ objectPosition: brandMedia.leatherDetail.objectPosition }}
              className="object-cover transition-transform duration-[1200ms] ease-out motion-reduce:transition-none lg:hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,13,12,0.02)_45%,rgba(14,13,12,0.7)_100%)]" />
            <figcaption className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-5 border-t border-white/25 pt-5 sm:inset-x-8 sm:bottom-8">
              <span className="matius-eyebrow text-white/80">Matius Perfect</span>
              <span className="text-xs uppercase tracking-[0.16em] text-white/70">Cuero / detalle</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
