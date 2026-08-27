import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandMedia } from "@/data/media";
import { siteConfig } from "@/data/site";

export function LookbookSection() {
  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeading
              eyebrow="Lookbook"
              title="Una marca que se vive."
              description="Campaña, textura y presencia reunidas para mostrar el universo visual de Matius más allá de una ficha de producto."
            />
          </div>
          <div className="md:col-span-3 md:col-start-10 md:text-right">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block text-sm font-semibold underline underline-offset-4"
            >
              Ver Instagram →
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {brandMedia.campaign.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative min-h-64 overflow-hidden bg-[var(--mat-sand)] ${
                index === 0 ? "md:col-span-2 md:row-span-2 md:min-h-[36rem]" : "md:min-h-[17.6rem]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                style={{ objectPosition: image.objectPosition }}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(14,13,12,0.52))]" />
              <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-3">
                <span className="h-0.5 w-7 bg-[var(--mat-red)]" aria-hidden="true" />
                <figcaption className="matius-eyebrow text-white/85">Matius 0{index + 1}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
