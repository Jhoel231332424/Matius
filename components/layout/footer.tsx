import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[var(--mat-charcoal)] py-14 text-[var(--mat-warm-white)]">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl">MATIUS PERFECT</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Calzado y artículos de cuero con una propuesta centrada en fabricación, durabilidad y diseño desde Cochabamba, Bolivia.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <strong>Explorar</strong>
          <Link href="/zapatos-de-cuero">Zapatos de cuero</Link>
          <Link href="/nuestra-fabricacion">Nuestra fabricación</Link>
          <Link href="/tiendas">Tiendas</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <strong>Marca</strong>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <span>{siteConfig.location}</span>
        </div>
      </Container>
    </footer>
  );
}
