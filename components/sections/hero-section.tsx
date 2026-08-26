import Image from "next/image";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { brandMedia } from "@/data/media";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--mat-ivory)]">
      <Container className="grid min-h-[calc(100svh-7rem)] items-center gap-10 py-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="matius-eyebrow matius-hero-eyebrow mb-6 text-black/65">
            Matius Perfect · Cochabamba
          </p>

          <div className="overflow-hidden pb-2">
            <h1 className="matius-display matius-hero-title">
              Cuero que
              <br />
              deja huella.
            </h1>
          </div>

          <p className="matius-hero-copy mt-7 max-w-xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8">
            Zapatos de cuero hechos en Cochabamba con una propuesta que une oficio, elegancia y durabilidad.
          </p>

          <div className="matius-hero-actions mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#zapatos"
              className="inline-flex min-h-12 items-center justify-center rounded-[var(--mat-radius-sm)] bg-[var(--mat-charcoal)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--mat-dark-brown)]"
            >
              Descubrir zapatos
            </a>
            <WhatsAppButton source="hero" variant="secondary" className="min-h-12 px-6">
              Consultar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        <figure className="matius-hero-media relative min-h-[30rem] overflow-hidden rounded-[var(--mat-radius-md)] bg-[var(--mat-dark-brown)] text-[var(--mat-warm-white)] sm:min-h-[38rem] lg:min-h-[46rem]">
          <Image
            src={brandMedia.hero.src}
            alt={brandMedia.hero.alt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 55vw, 100vw"
            style={{ objectPosition: brandMedia.hero.objectPosition }}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(14,13,12,0.04)_20%,rgba(14,13,12,0.72)_90%)]" />

          <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
            <span className="h-px w-10 bg-white/70" />
            <span className="matius-eyebrow text-white/90">Leather / Cochabamba</span>
          </div>

          <figcaption className="absolute inset-x-6 bottom-6 border-t border-white/35 pt-5 sm:inset-x-8 sm:bottom-8">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="matius-eyebrow text-white/80">Matius Perfect</p>
                <p className="mt-2 max-w-sm font-[family-name:var(--font-display)] text-3xl leading-none sm:text-4xl">
                  Elegancia sin esfuerzo.
                </p>
              </div>
              <span className="hidden text-xs uppercase tracking-[0.18em] text-white/80 sm:block">Cochabamba · Bolivia</span>
            </div>
          </figcaption>
        </figure>
      </Container>

      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-px w-full bg-black/10 lg:block" />
    </section>
  );
}
