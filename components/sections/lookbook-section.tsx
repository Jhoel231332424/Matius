import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function LookbookSection() {
  return (
    <section className="py-[var(--mat-section)]">
      <Container>
        <SectionHeading
          eyebrow="Lookbook"
          title="Una marca que se vive."
          description="Una composición editorial preparada para fotografías de producto y contenido de Matius Perfect."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`matius-hero-grid relative min-h-56 overflow-hidden bg-[var(--mat-sand)] ${
                index === 0 || index === 5 ? "md:col-span-2 md:min-h-80" : ""
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_30%,rgba(155,92,50,0.34),transparent_38%),linear-gradient(150deg,rgba(59,38,28,0.22),rgba(14,13,12,0.52))]" />
              <span className="matius-eyebrow absolute bottom-5 left-5 text-white/65">Look 0{index + 1}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
