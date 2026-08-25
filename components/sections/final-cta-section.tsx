import Image from "next/image";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { brandMedia } from "@/data/media";

export function FinalCtaSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[var(--mat-charcoal)] py-[var(--mat-section)] text-center text-white">
      <Image
        src={brandMedia.finalCta.src}
        alt=""
        fill
        unoptimized
        sizes="100vw"
        style={{ objectPosition: brandMedia.finalCta.objectPosition }}
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,13,12,0.42),rgba(14,13,12,0.88))]" />
      <Container className="relative flex flex-col items-center">
        <p className="matius-eyebrow text-white/65">Matius Perfect</p>
        <h2 className="matius-section-title mt-5 max-w-4xl">Encuentra tu próximo par.</h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/80">
          Consulta modelos, tallas y disponibilidad directamente por WhatsApp.
        </p>
        <WhatsAppButton source="final-cta" className="mt-8 min-h-12 bg-[var(--mat-red)] px-7 hover:bg-[var(--mat-red-hover)]">
          Hablar por WhatsApp
        </WhatsAppButton>
      </Container>
    </section>
  );
}
