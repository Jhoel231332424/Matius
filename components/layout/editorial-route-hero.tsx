import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import type { BrandAsset } from "@/data/media";

type EditorialRouteHeroProps = {
  eyebrow: string;
  titleLines: readonly string[];
  description: string;
  image?: BrandAsset;
  imageLabel?: string;
  meta?: string;
  children?: ReactNode;
};

export function EditorialRouteHero({
  eyebrow,
  titleLines,
  description,
  image,
  imageLabel = "Imagen de campaña",
  meta = "Matius Perfect · Cochabamba",
  children,
}: EditorialRouteHeroProps) {
  return (
    <section className="overflow-hidden bg-[var(--mat-black)] text-[var(--mat-warm-white)]">
      <Container
        className={
          image
            ? "grid gap-10 py-10 sm:gap-12 sm:py-14 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:py-16"
            : "grid gap-12 py-14 sm:py-20 lg:min-h-[70svh] lg:grid-cols-12 lg:items-center lg:py-24"
        }
      >
        <div className={image ? "max-w-3xl" : "max-w-4xl lg:col-span-8"}>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--mat-red)]" aria-hidden="true" />
            <p className="matius-eyebrow matius-hero-eyebrow text-white/65">{eyebrow}</p>
          </div>

          <h1 className="matius-display matius-hero-title max-w-[12ch] pb-2">
            {titleLines.map((line, index) => (
              <span className="matius-title-line-wrap" key={`${line}-${index}`}>
                <span className="matius-title-line">{line}</span>
              </span>
            ))}
          </h1>

          <p className="matius-hero-copy mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            {description}
          </p>

          {children ? <div className="matius-hero-actions mt-8 flex flex-wrap items-center gap-4">{children}</div> : null}

          <div className="mt-12 flex items-center gap-4 border-t border-white/20 pt-5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/55">
            <span>{meta}</span>
            <span className="h-px flex-1 bg-white/15" aria-hidden="true" />
          </div>
        </div>

        {image ? (
          <figure className="matius-hero-media relative min-h-[24rem] overflow-hidden bg-[var(--mat-dark-brown)] sm:min-h-[34rem] lg:min-h-[46rem]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 55vw, 100vw"
              style={{ objectPosition: image.objectPosition }}
              className="matius-hero-image object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,1,1,0.08)_25%,rgba(1,1,1,0.72)_100%)]" />
            <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4 border-t border-white/30 pt-4 sm:inset-x-8 sm:top-8">
              <span className="matius-eyebrow text-white/85">Matius Perfect</span>
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65">{imageLabel}</span>
            </div>
            <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 border-t border-white/30 pt-5 sm:inset-x-8 sm:bottom-8">
              <p className="max-w-[10ch] font-[family-name:var(--font-display)] text-3xl font-medium leading-[0.92] sm:text-5xl">
                Cuero, forma y presencia.
              </p>
              <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65 sm:block">
                Cochabamba · Bolivia
              </span>
            </figcaption>
          </figure>
        ) : (
          <aside className="hidden lg:col-span-3 lg:col-start-10 lg:block" aria-label="Identidad Matius Perfect">
            <div className="border-t border-white/25 pt-6">
              <div className="mb-7 h-0.5 w-8 bg-[var(--mat-red)]" aria-hidden="true" />
              <p className="matius-eyebrow text-white/55">Modern Bolivian Leather</p>
              <p className="mt-6 font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.9] text-white/90">
                Cuero.
                <br />
                Oficio.
                <br />
                Presencia.
              </p>
            </div>
          </aside>
        )}
      </Container>
    </section>
  );
}
