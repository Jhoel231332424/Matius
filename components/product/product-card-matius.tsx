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
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
            />
            {secondaryImage ? (
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 33vw, 100vw"
                className="object-cover opacity-0 transition duration-500 ease-out group-hover:opacity-100"
              />
            ) : null}
          </>
        ) : (
          <div className="absolute inset-0 bg-[var(--mat-dark-brown)] text-[var(--mat-warm-white)]" aria-hidden="true">
            <div className="absolute left-6 top-6 h-0.5 w-10 bg-[var(--mat-red)]" />
            <div className="absolute -right-5 top-2 select-none font-[family-name:var(--font-display)] text-[10rem] font-medium leading-none text-white/[0.05] sm:text-[13rem]">
              M
            </div>
            <div className="absolute inset-x-6 bottom-6 border-t border-white/25 pt-5">
              <p className="matius-eyebrow text-white/75">{product.isDemo ? "Colección" : "Matius Perfect"}</p>
              <p className="mt-2 max-w-[10ch] font-[family-name:var(--font-display)] text-4xl font-medium leading-[0.9]">
                {product.name}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-4 border-t border-black/15 pt-5">
        <div>
          <p className="matius-eyebrow text-black/65">{product.category}</p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-medium leading-none">{product.name}</h3>
        </div>
        {formattedPrice ? <p className="whitespace-nowrap text-sm font-semibold">{formattedPrice}</p> : null}
      </div>

      <p className="mt-3 max-w-[34rem] text-sm leading-6 text-black/70">{product.shortDescription}</p>

      <WhatsAppButton source="product" productName={product.name} variant="ghost" className="mt-4 px-0">
        {product.isDemo ? "Consultar colección →" : "Consultar disponibilidad →"}
      </WhatsAppButton>
    </article>
  );
}
