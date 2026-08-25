import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function FinalCtaSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[var(--mat-charcoal)] py-[var(--mat-section)] text-center text-white">
      <div className="matius-hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] text-[16rem] font-medium leading-none text-white/[0.025] sm:text-[26rem]" aria-hidden="true">
        M
      </div>
      <Container className="relative flex flex-col items-center">
        <p className="matius-eyebrow text-white/55">Matius Perfect</p>
        <h2 className="matius-section-title mt-5 max-w-4xl">Encuentra tu próximo par.</h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
          Consulta modelos, tallas y disponibilidad directamente por WhatsApp.
        </p>
        <WhatsAppButton source="final-cta" className="mt-8 min-h-12 bg-[var(--mat-red)] px-7 hover:bg-[var(--mat-red-hover)]">
          Hablar por WhatsApp
        </WhatsAppButton>
      </Container>
    </section>
  );
}
