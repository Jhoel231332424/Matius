import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandMedia } from "@/data/media";
import { siteConfig } from "@/data/site";

export function LookbookSection() {
  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Lookbook"
            title="Una marca que se vive."
            description="Imágenes oficiales de campaña reunidas en una composición editorial ligera, sin embeds pesados de terceros."
          />
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="shrink-0 text-sm font-semibold underline underline-offset-4"
          >
            Ver Instagram →
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {brandMedia.campaign.map((image, index) => (
            <figure
              key={image.src}
              className={`relative min-h-64 overflow-hidden bg-[var(--mat-sand)] ${
                index === 0 ? "md:col-span-2 md:row-span-2 md:min-h-[36rem]" : "md:min-h-[17.6rem]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                style={{ objectPosition: image.objectPosition }}
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(14,13,12,0.48))]" />
              <figcaption className="matius-eyebrow absolute bottom-5 left-5 text-white/75">Matius 0{index + 1}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
