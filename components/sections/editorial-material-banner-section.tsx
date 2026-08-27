import Image from "next/image";
import { Container } from "@/components/ui/container";
import { brandMedia } from "@/data/media";

export function EditorialMaterialBannerSection() {
  const image = brandMedia.leatherDetail;

  return (
    <section
      id="material-editorial"
      aria-labelledby="editorial-material-title"
      className="relative isolate min-h-[28rem] overflow-hidden bg-[var(--mat-dark-brown)] text-[var(--mat-warm-white)] lg:min-h-[34rem]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        style={{ objectPosition: image.objectPosition }}
        className="-z-20 object-cover saturate-[0.82]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(1,1,1,0.78)_0%,rgba(1,1,1,0.48)_46%,rgba(1,1,1,0.72)_100%)]" />

      <Container className="grid min-h-[28rem] content-end py-12 lg:min-h-[34rem] lg:grid-cols-12 lg:items-center lg:py-16">
        <div className="max-w-3xl lg:col-span-8 lg:col-start-5 lg:text-right">
          <div className="matius-section-kicker mb-5 text-white/75 lg:justify-end">
            <span className="matius-section-rule matius-scroll-rule" aria-hidden="true" />
            <p className="matius-eyebrow">Material / origen / carácter</p>
          </div>
          <h2
            id="editorial-material-title"
            className="matius-scroll-title font-[family-name:var(--font-display)] text-5xl font-normal leading-[0.92] tracking-[-0.035em] sm:text-6xl lg:text-8xl"
          >
            El cuero abre <strong className="block font-semibold">la historia.</strong>
          </h2>
          <p className="matius-scroll-copy mt-6 max-w-xl text-base leading-7 text-white/80 lg:ml-auto lg:text-lg">
            Cuero auténtico. Calzado hecho en Cochabamba y presentado desde el detalle que da presencia a cada par.
          </p>
        </div>
      </Container>
    </section>
  );
}
