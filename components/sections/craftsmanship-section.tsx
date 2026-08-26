import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandMedia } from "@/data/media";

const chapters = [
  {
    number: "01",
    eyebrow: "Cuero",
    title: "El material abre la historia.",
    copy: "El cuero es uno de los pilares de Matius Perfect. Aquí la lectura se concentra en superficie, tono y presencia, sin atribuir a la imagen un tipo técnico de cuero que no esté confirmado.",
    note: "Material / textura / presencia",
  },
  {
    number: "02",
    eyebrow: "Oficio",
    title: "Hecho en Cochabamba.",
    copy: "La marca comunica fabricación en Cochabamba y una propuesta artesanal. Este capítulo pone en primer plano esa relación entre producto y oficio sin describir pasos de producción que todavía no estén documentados.",
    note: "Origen / fabricación / cuidado",
  },
  {
    number: "03",
    eyebrow: "Acabado",
    title: "Los detalles sostienen el carácter.",
    copy: "Costuras, bordes, forma y terminaciones son la manera más directa de leer un zapato de cerca. La interfaz se retira para dejar que el producto y sus detalles ocupen el centro de la escena.",
    note: "Forma / costura / terminación",
  },
  {
    number: "04",
    eyebrow: "Durabilidad",
    title: "Diseñado para permanecer.",
    copy: "La durabilidad forma parte de los pilares comunicados por Matius Perfect. Se presenta como una intención de producto y de marca, sin convertirla en una promesa cuantificada ni en una garantía no confirmada.",
    note: "Uso / permanencia / confianza",
  },
] as const;

export function CraftsmanshipSection() {
  return (
    <section id="fabricacion" className="overflow-clip bg-[var(--mat-black)] py-[var(--mat-section)] text-[var(--mat-warm-white)]">
      <Container>
        <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Producto / material / oficio"
              title="Un par. Cuatro lecturas."
              description="El producto permanece en escena mientras la historia avanza por cuero, oficio, acabado y durabilidad."
              tone="dark"
            />
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:text-right">
            <Link
              href="/nuestra-fabricacion"
              className="inline-block text-sm font-semibold text-white underline decoration-white/45 underline-offset-4 transition-colors hover:text-[var(--mat-warm-white)]"
            >
              Conocer la fabricación →
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="lg:col-span-6 xl:col-span-7">
            <figure className="relative overflow-hidden bg-[var(--mat-dark-brown)] lg:sticky lg:top-24 lg:min-h-[calc(100vh-7rem)]">
              <div className="relative min-h-[28rem] sm:min-h-[38rem] lg:min-h-[calc(100vh-7rem)]">
                <Image
                  src={brandMedia.leatherDetail.src}
                  alt={brandMedia.leatherDetail.alt}
                  fill
                  sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 50vw, 100vw"
                  style={{ objectPosition: brandMedia.leatherDetail.objectPosition }}
                  className="object-cover saturate-[0.9] brightness-[0.82]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,1,1,0.08)_30%,rgba(1,1,1,0.72)_100%)]" />
                <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4 border-t border-white/30 pt-4 sm:inset-x-7 sm:top-7">
                  <span className="matius-eyebrow text-white/80">Matius Perfect</span>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65">Imagen de campaña</span>
                </div>
                <figcaption className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <div className="mb-5 h-0.5 w-8 bg-[var(--mat-red)]" aria-hidden="true" />
                  <p className="max-w-[11ch] font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.88] sm:text-6xl lg:text-7xl">
                    El producto primero.
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/25 pt-4 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/65">
                    <span>Calzado</span>
                    <span className="h-px flex-1 bg-white/20" aria-hidden="true" />
                    <span>Cochabamba</span>
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>

          <div className="lg:col-span-6 xl:col-span-5">
            <div className="border-t border-white/18">
              {chapters.map((chapter) => (
                <article
                  key={chapter.number}
                  className="grid min-h-[26rem] content-center border-b border-white/18 py-12 sm:min-h-[30rem] lg:min-h-[58vh] lg:py-16"
                >
                  <div className="grid gap-8 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-5">
                    <div className="flex items-start justify-between gap-4 sm:block">
                      <span className="font-[family-name:var(--font-display)] text-4xl font-medium leading-none text-[var(--mat-red)] sm:text-5xl">
                        {chapter.number}
                      </span>
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/45 sm:mt-5 sm:block">
                        / 04
                      </span>
                    </div>

                    <div>
                      <p className="matius-eyebrow text-white/60">{chapter.eyebrow}</p>
                      <h3 className="mt-4 max-w-[11ch] font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.9] sm:text-6xl lg:text-[4.6rem]">
                        {chapter.title}
                      </h3>
                      <p className="mt-7 max-w-xl text-base leading-7 text-white/68">{chapter.copy}</p>
                      <div className="mt-9 flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/42">
                        <span>{chapter.note}</span>
                        <span className="h-px flex-1 bg-white/15" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
