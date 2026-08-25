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
            Demo editorial enfocada en zapatos de cuero, fabricación y durabilidad.
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
          <span>Datos de contacto pendientes del cliente</span>
        </div>
      </Container>
    </footer>
  );
}
