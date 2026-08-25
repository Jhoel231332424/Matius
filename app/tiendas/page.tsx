import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { stores } from "@/data/stores";

export const metadata: Metadata = { title: "Tiendas", alternates: { canonical: "/tiendas" } };

export default function StoresPage() {
  return (
    <Container className="py-[var(--mat-section)]">
      <p className="matius-eyebrow">Cochabamba</p>
      <h1 className="matius-section-title mt-4">Tiendas Matius Perfect.</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {stores.map((store) => <Link key={store.slug} href={`/tiendas/${store.slug}`} className="border border-black/15 p-6 font-serif text-2xl">{store.name} →</Link>)}
      </div>
    </Container>
  );
}
