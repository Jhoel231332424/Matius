import { siteConfig } from "@/data/site";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Container } from "@/components/ui/container";
import { FullscreenMenu } from "@/components/layout/fullscreen-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[var(--mat-warm-white)]">
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-6">
        <a href="/" className="matius-brand-transition group inline-flex flex-col leading-none" title="Inicio">
          <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.02em] sm:text-[1.7rem]">
            MATIUS
          </span>
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.34em] text-black/70 transition-colors group-hover:text-black">
            Perfect
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm font-medium text-black/70 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-black after:transition-transform hover:text-black hover:after:scale-x-100 focus-visible:text-black focus-visible:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <WhatsAppButton source="general" className="min-h-10 px-4 py-2">
              WhatsApp
            </WhatsAppButton>
          </div>
          <FullscreenMenu />
        </div>
      </Container>
    </header>
  );
}
