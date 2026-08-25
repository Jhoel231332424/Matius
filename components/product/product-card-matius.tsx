import Image from "next/image";
import type { Product } from "@/types/product";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function ProductCardMatius({ product }: { product: Product }) {
  const primaryImage = product.images[0];
  const secondaryImage = product.images[1];
  const formattedPrice =
    product.price !== undefined && product.currency
      ? new Intl.NumberFormat("es-BO", {
          style: "currency",
          currency: product.currency,
          minimumFractionDigits: 2,
        }).format(product.price)
      : null;

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--mat-sand)]">
        {primaryImage ? (
          <>
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
            />
            {secondaryImage ? (
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover opacity-0 transition duration-500 ease-out group-hover:opacity-100"
              />
            ) : null}
          </>
        ) : (
          <div className="matius-hero-grid absolute inset-0 bg-[var(--mat-dark-brown)] text-[var(--mat-warm-white)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(222,210,194,0.28),transparent_34%),linear-gradient(155deg,transparent_20%,rgba(14,13,12,0.72)_82%)]" />
            <div className="absolute -right-4 top-4 select-none font-[family-name:var(--font-display)] text-[10rem] font-medium leading-none text-white/[0.06] sm:text-[13rem]">
              M
            </div>
            <div className="absolute inset-x-5 bottom-5 border-t border-white/20 pt-4">
              <p className="matius-eyebrow text-white/50">Matius Perfect</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-medium">{product.name}</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="matius-eyebrow text-black/45">{product.category}</p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-medium">{product.name}</h3>
        </div>
        {formattedPrice ? <p className="whitespace-nowrap text-sm font-semibold">{formattedPrice}</p> : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-black/60">{product.shortDescription}</p>

      <WhatsAppButton source="product" productName={product.name} variant="ghost" className="mt-4 px-0">
        {product.isDemo ? "Consultar colección →" : "Consultar disponibilidad →"}
      </WhatsAppButton>
    </article>
  );
}
