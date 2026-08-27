import { siteConfig } from "@/data/site";
import type { Product } from "@/types/product";
import type { Store } from "@/types/store";

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [siteConfig.instagram],
  };
}

export function buildLocalBusinessJsonLd(store: Store) {
  return {
    "@context": "https://schema.org",
    "@type": "ShoeStore",
    name: `${siteConfig.name} — ${store.name}`,
    url: `${siteConfig.url}/tiendas/${store.slug}`,
    ...(store.phone ? { telephone: store.phone } : {}),
    ...(store.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: store.address,
            ...(store.city ? { addressLocality: store.city } : {}),
            ...(store.region ? { addressRegion: store.region } : {}),
            ...(store.country ? { addressCountry: store.country } : {}),
          },
        }
      : {}),
  };
}

export function buildProductJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    brand: { "@type": "Brand", name: siteConfig.name },
    ...(product.images.length > 0 ? { image: product.images.map((image) => image.src) } : {}),
    ...(product.price !== undefined && product.currency
      ? {
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: product.currency,
            ...(product.availability
              ? { availability: `https://schema.org/${product.availability}` }
              : {}),
          },
        }
      : {}),
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
