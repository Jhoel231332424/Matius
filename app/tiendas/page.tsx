import type { Metadata } from "next";
import Link from "next/link";
import { EditorialRouteHero } from "@/components/layout/editorial-route-hero";
import { Container } from "@/components/ui/container";
import { stores } from "@/data/stores";

export const metadata: Metadata = {
  title: "Tiendas",
  description: "Consulta las sucursales de Matius Perfect y contacta por WhatsApp para información de ubicación y atención.",
  alternates: { canonical: "/tiendas" },
};

export default function StoresPage() {
  return (
    <>
      <EditorialRouteHero
        eyebrow="Cochabamba"
        titleLines={["Tiendas", "Matius Perfect."]}
        description="Elige uno de los tres puntos físicos de la marca y consulta por WhatsApp la ubicación y la atención disponible."
        meta="Central · Sucursal 1 · Sucursal 2"
      />

      <section className="bg-[var(--mat-warm-white)] py-[var(--mat-section)]">
        <Container>
          <div className="border-t border-black/20">
            {stores.map((store, index) => (
              <Link
                key={store.slug}
                href={`/tiendas/${store.slug}`}
                className="group grid min-h-28 grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 border-b border-black/20 py-7 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:gap-6"
              >
                <span className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--mat-red)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-display)] text-4xl font-medium leading-none tracking-[-0.03em] sm:text-5xl">
                  {store.name}
                </span>
                <span className="col-start-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/55 transition-colors group-hover:text-black sm:col-start-auto">
                  Consultar sucursal →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
