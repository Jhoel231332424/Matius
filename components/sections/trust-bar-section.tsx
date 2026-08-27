import { Container } from "@/components/ui/container";

const trustItems = [
  {
    title: "Cuero auténtico",
    copy: "El material ocupa el centro de la propuesta Matius.",
  },
  {
    title: "Hecho en Cochabamba",
    copy: "Origen boliviano comunicado por la marca.",
  },
  {
    title: "Atención directa",
    copy: "Consulta modelos y disponibilidad por WhatsApp.",
  },
  {
    title: "Presencia física",
    copy: "Central y dos sucursales en Cochabamba.",
  },
] as const;

export function TrustBarSection() {
  return (
    <section
      id="confianza"
      aria-labelledby="trust-bar-title"
      className="border-y border-white/15 bg-[var(--mat-tobacco)] text-[var(--mat-warm-white)]"
    >
      <h2 id="trust-bar-title" className="sr-only">
        Razones para confiar en Matius Perfect
      </h2>
      <Container className="grid sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item, index) => (
          <article
            key={item.title}
            className={`border-white/20 py-8 sm:px-7 sm:py-10 ${
              index > 0 ? "border-t sm:border-t-0" : ""
            } ${index % 2 === 1 ? "sm:border-l" : ""} ${index > 1 ? "sm:border-t lg:border-t-0" : ""} ${
              index > 0 ? "lg:border-l" : "lg:border-l-0"
            }`}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="font-[family-name:var(--font-display)] text-3xl leading-none text-white/85">
                0{index + 1}
              </span>
              <span className="h-px flex-1 bg-white/25" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em]">{item.title}</h3>
            <p className="mt-3 max-w-[17rem] text-sm leading-6 text-white/72">{item.copy}</p>
          </article>
        ))}
      </Container>
    </section>
  );
}
