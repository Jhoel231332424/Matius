"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function LeatherDetailSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={sectionRef} className="overflow-hidden py-[var(--mat-section)]">
      <Container>
        <SectionHeading
          eyebrow="Detalle"
          title="El cuero, de cerca."
          description="Textura, costura y acabado ocupan el centro de la experiencia visual."
        />
        <div className="relative mt-12 min-h-[34rem] overflow-hidden bg-[var(--mat-dark-brown)] sm:min-h-[42rem]">
          <motion.div
            style={reduceMotion ? undefined : { scale }}
            className="matius-hero-grid absolute inset-0 origin-center bg-[radial-gradient(circle_at_58%_42%,#9b5c32_0%,#744226_32%,#3b261c_62%,#1d1b19_100%)]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(14,13,12,0.18),rgba(14,13,12,0.64))]" />
          <div className="absolute left-[18%] top-[24%] h-px w-[32%] rotate-[-8deg] bg-white/30" />
          <div className="absolute left-[48%] top-[58%] h-px w-[26%] rotate-[6deg] bg-white/25" />

          <div className="absolute left-6 top-6 max-w-xs text-white sm:left-8 sm:top-8">
            <span className="matius-eyebrow text-white/55">01 / Textura</span>
            <p className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium leading-none sm:text-4xl">
              El material debe sentirse antes de tocarlo.
            </p>
          </div>

          <div className="absolute bottom-6 right-6 max-w-xs text-right text-white sm:bottom-8 sm:right-8">
            <span className="matius-eyebrow text-white/55">02 / Acabado</span>
            <p className="mt-3 text-sm leading-6 text-white/70">
              La fotografía final mostrará costura, superficie y terminación sin sobrecargar la interfaz.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
