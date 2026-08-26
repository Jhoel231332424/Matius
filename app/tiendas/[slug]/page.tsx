import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
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
    <Container className="py-[var(--mat-section)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <p className="matius-eyebrow">Sucursal</p>
      <h1 className="matius-section-title mt-4">{store.name}</h1>
      <p className="mt-6 max-w-2xl leading-7 text-black/60">
        Consulta por WhatsApp la ubicación y la atención disponible para esta sucursal Matius Perfect.
      </p>
      <WhatsAppButton source="store" storeName={store.name} className="mt-8">
        Consultar esta sucursal
      </WhatsAppButton>
    </Container>
  );
}
