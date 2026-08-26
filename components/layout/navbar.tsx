import Link from "next/link";
import { siteConfig } from "@/data/site";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[var(--mat-warm-white)]">
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-6">
        <Link href="/" className="group inline-flex flex-col leading-none" title="Inicio">
          <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.02em] sm:text-[1.7rem]">
            MATIUS
          </span>
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.34em] text-black/70 transition-colors group-hover:text-black">
            Perfect
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm font-medium text-black/70 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-black after:transition-transform hover:text-black hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton source="general" className="min-h-10 px-4 py-2">
            WhatsApp
          </WhatsAppButton>
        </div>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none border border-black/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em]">
            Menú
          </summary>
          <div className="absolute right-0 mt-3 min-w-72 border border-black/10 bg-[var(--mat-warm-white)] p-6 shadow-[0_20px_50px_rgba(14,13,12,0.14)]">
            <nav aria-label="Navegación móvil" className="flex flex-col">
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="border-b border-black/10 py-4 text-lg font-medium">
                  {item.label}
                </Link>
              ))}
              <WhatsAppButton source="general" className="mt-5 w-full">
                Consultar por WhatsApp
              </WhatsAppButton>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
