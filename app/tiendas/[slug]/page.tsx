import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialRouteHero } from "@/components/layout/editorial-route-hero";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { stores } from "@/data/stores";
import { buildLocalBusinessJsonLd, serializeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return stores.map((store) => ({ slug: store.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const store = stores.find((item) => item.slug === slug);
  if (!store) return {};
  return {
    title: store.name,
    description: `Consulta información y atención de la sucursal ${store.name} de Matius Perfect.`,
    alternates: { canonical: `/tiendas/${store.slug}` },
  };
}

export default async function StorePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const store = stores.find((item) => item.slug === slug);
  if (!store) notFound();
  const jsonLd = buildLocalBusinessJsonLd(store);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <EditorialRouteHero
        eyebrow="Sucursal"
        titleLines={[store.name]}
        description="Consulta por WhatsApp la ubicación y la atención disponible para este punto Matius Perfect."
        meta="Sucursal · Cochabamba · Consulta directa"
      >
        <WhatsAppButton
          source="store"
          storeName={store.name}
          className="bg-[var(--mat-red)] text-white hover:bg-[var(--mat-red-hover)]"
        >
          Consultar esta sucursal
        </WhatsAppButton>
        <Link href="/tiendas" className="text-sm font-semibold text-white underline decoration-white/40 underline-offset-4">
          Ver todas las tiendas →
        </Link>
      </EditorialRouteHero>
    </>
  );
}
