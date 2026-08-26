import Image from "next/image";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { brandMedia } from "@/data/media";

export function FinalCtaSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[var(--mat-charcoal)] text-white">
      <Image
        src={brandMedia.finalCta.src}
        alt=""
        fill
        sizes="100vw"
        style={{ objectPosition: brandMedia.finalCta.objectPosition }}
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,13,12,0.9)_0%,rgba(14,13,12,0.72)_50%,rgba(14,13,12,0.58)_100%)]" />

      <Container className="relative grid min-h-[38rem] gap-10 py-[var(--mat-section)] lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[var(--mat-red)]" aria-hidden="true" />
            <p className="matius-eyebrow text-white/80">Matius Perfect</p>
          </div>
          <h2 className="matius-section-title max-w-4xl">Encuentra tu próximo par.</h2>
        </div>

        <div className="border-t border-white/25 pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
          <p className="max-w-md text-base leading-7 text-white/80">
            Consulta modelos, tallas y disponibilidad directamente por WhatsApp.
          </p>
          <WhatsAppButton source="final-cta" className="mt-7 min-h-12 bg-[var(--mat-red)] px-7 hover:bg-[var(--mat-red-hover)]">
            Hablar por WhatsApp
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
