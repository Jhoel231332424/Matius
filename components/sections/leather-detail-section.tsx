import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandMedia } from "@/data/media";

export function LeatherDetailSection() {
  return (
    <section className="overflow-hidden py-[var(--mat-section)]">
      <Container>
        <SectionHeading
          eyebrow="Detalle"
          title="El cuero, de cerca."
          description="La fotografía toma protagonismo para acercar material, forma y acabado sin saturar la interfaz."
        />
        <div className="group relative mt-12 min-h-[34rem] overflow-hidden bg-[var(--mat-dark-brown)] sm:min-h-[42rem]">
          <Image
            src={brandMedia.leatherDetail.src}
            alt={brandMedia.leatherDetail.alt}
            fill
            sizes="(min-width: 1280px) 80rem, 100vw"
            style={{ objectPosition: brandMedia.leatherDetail.objectPosition }}
            className="object-cover transition-transform duration-[1200ms] ease-out motion-reduce:transition-none lg:group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(14,13,12,0.12),rgba(14,13,12,0.7))]" />

          <div className="absolute left-6 top-6 max-w-xs text-white sm:left-8 sm:top-8">
            <span className="matius-eyebrow text-white/65">01 / Material</span>
            <p className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium leading-none sm:text-4xl">
              El detalle cambia la percepción del producto.
            </p>
          </div>

          <div className="absolute bottom-6 right-6 max-w-xs text-right text-white sm:bottom-8 sm:right-8">
            <span className="matius-eyebrow text-white/65">02 / Presencia</span>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Un acercamiento editorial que pone el calzado y su material por delante del efecto visual.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
