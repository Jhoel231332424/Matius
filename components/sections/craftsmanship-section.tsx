"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Material",
    copy: "El cuero abre la historia: textura, tono y detalle antes de convertirse en un par terminado.",
  },
  {
    number: "02",
    title: "Oficio",
    copy: "La fabricación se cuenta desde una mirada humana y cercana al trabajo que hay detrás del producto.",
  },
  {
    number: "03",
    title: "Acabado",
    copy: "Costuras, superficies y terminaciones cierran la narrativa con foco en el detalle final.",
  },
];

export function CraftsmanshipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <section ref={sectionRef} id="fabricacion" className="bg-[var(--mat-ivory)] py-[var(--mat-section)]">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Fabricación"
            title="Detrás de cada par."
            description="Una escena de scroll para acercar material, oficio y acabado sin distraer del producto."
          />
          <Link href="/nuestra-fabricacion" className="mt-7 inline-block text-sm font-semibold underline underline-offset-4">
            Conocer la fabricación →
          </Link>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-28 h-[68vh] min-h-[34rem] overflow-hidden bg-[var(--mat-dark-brown)] text-white">
              <motion.div style={reduceMotion ? undefined : { y: visualY }} className="h-[300%]">
                {steps.map((step) => (
                  <div key={step.number} className="matius-hero-grid relative flex h-1/3 flex-col justify-between p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(222,210,194,0.28),transparent_34%),linear-gradient(155deg,transparent_20%,rgba(14,13,12,0.72)_82%)]" />
                    <div className="relative flex items-center justify-between gap-4">
                      <span className="matius-eyebrow text-white/55">Proceso</span>
                      <span className="text-xs text-white/40">{step.number}</span>
                    </div>
                    <div className="relative">
                      <div className="font-[family-name:var(--font-display)] text-[10rem] font-medium leading-[0.7] text-white/[0.08]">
                        {step.number}
                      </div>
                      <h3 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-medium">{step.title}</h3>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div>
            {steps.map((step) => (
              <article key={step.number} className="flex min-h-[62vh] flex-col justify-center border-t border-black/15 py-12 first:border-t-0 lg:min-h-[68vh]">
                <div className="matius-hero-grid relative mb-7 min-h-72 overflow-hidden bg-[var(--mat-dark-brown)] text-white lg:hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(222,210,194,0.28),transparent_34%)]" />
                  <span className="absolute left-6 top-6 matius-eyebrow text-white/55">{step.number}</span>
                  <span className="absolute bottom-6 left-6 font-[family-name:var(--font-display)] text-4xl font-medium">{step.title}</span>
                </div>
                <span className="matius-eyebrow text-black/40">{step.number}</span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-medium leading-none sm:text-6xl">{step.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-black/60">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
