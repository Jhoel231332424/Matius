import Image from "next/image";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { brandMedia } from "@/data/media";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--mat-ivory)]">
      <Container className="grid gap-8 py-8 sm:gap-10 sm:py-10 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:py-16">
        <div className="order-2 relative z-10 max-w-2xl lg:order-1">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--mat-red)]" aria-hidden="true" />
            <p className="matius-eyebrow matius-hero-eyebrow text-black/65">
              Matius Perfect · Cochabamba
            </p>
          </div>

          <h1 className="matius-display matius-hero-title pb-2">
            <span className="matius-title-line-wrap">
              <span className="matius-title-line">Cuero que</span>
            </span>
            <span className="matius-title-line-wrap">
              <span className="matius-title-line">deja huella.</span>
            </span>
          </h1>

          <p className="matius-hero-copy mt-7 max-w-xl text-base leading-7 text-black/70 sm:text-lg sm:leading-8">
            Zapatos de cuero hechos en Cochabamba con una propuesta que une oficio, elegancia y durabilidad.
          </p>

          <div className="matius-hero-actions mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#zapatos"
              className="inline-flex min-h-12 items-center justify-center rounded-[var(--mat-radius-sm)] bg-[var(--mat-black)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--mat-dark-brown)]"
            >
              Descubrir zapatos
            </a>
            <WhatsAppButton source="hero" variant="secondary" className="min-h-12 px-6">
              Consultar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        <figure className="matius-hero-media order-1 relative min-h-[20rem] overflow-hidden bg-[var(--mat-dark-brown)] text-[var(--mat-warm-white)] sm:min-h-[28rem] lg:order-2 lg:min-h-[46rem] lg:rounded-[var(--mat-radius-md)]">
          <Image
            src={brandMedia.hero.src}
            alt={brandMedia.hero.alt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 55vw, 100vw"
            style={{ objectPosition: brandMedia.hero.objectPosition }}
            className="matius-hero-image object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,1,1,0.02)_30%,rgba(1,1,1,0.72)_100%)]" />

          <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-8 sm:top-8">
            <span className="h-px w-8 bg-white/70" aria-hidden="true" />
            <span className="matius-eyebrow text-white/90">Leather / Cochabamba</span>
          </div>

          <figcaption className="absolute inset-x-5 bottom-5 border-t border-white/35 pt-4 sm:inset-x-8 sm:bottom-8 sm:pt-5">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="matius-eyebrow text-white/80">Matius Perfect</p>
                <p className="mt-2 max-w-sm font-[family-name:var(--font-display)] text-2xl leading-none sm:text-4xl">
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
