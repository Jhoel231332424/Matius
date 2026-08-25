import Link from "next/link";
import { siteConfig } from "@/data/site";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[color:var(--mat-warm-white)]/95 backdrop-blur-sm">
      <Container className="flex min-h-18 items-center justify-between gap-6">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight" aria-label="Matius Perfect, inicio">
          MATIUS PERFECT
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-7 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium hover:opacity-60">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <WhatsAppButton source="general">WhatsApp</WhatsAppButton>
        </div>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded border border-black/20 px-3 py-2 text-sm font-semibold">Menú</summary>
          <div className="absolute right-0 mt-3 min-w-64 border border-black/10 bg-[var(--mat-warm-white)] p-5 shadow-xl">
            <nav aria-label="Navegación móvil" className="flex flex-col gap-4">
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="py-1 text-base font-medium">
                  {item.label}
                </Link>
              ))}
              <WhatsAppButton source="general" className="mt-2">WhatsApp</WhatsAppButton>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
