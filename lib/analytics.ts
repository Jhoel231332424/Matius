export type WhatsAppSource =
  | "hero"
  | "product"
  | "store"
  | "final-cta"
  | "floating"
  | "general";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event,
    ...payload,
    page_path: window.location.pathname,
  });
}

export function trackWhatsAppClick({
  source,
  productName,
  storeName,
}: {
  source: WhatsAppSource;
  productName?: string;
  storeName?: string;
}) {
  const eventBySource: Record<WhatsAppSource, string> = {
    hero: "whatsapp_hero_click",
    product: "whatsapp_product_click",
    store: "whatsapp_store_click",
    "final-cta": "whatsapp_final_cta_click",
    floating: "whatsapp_floating_click",
    general: "whatsapp_general_click",
  };

  trackEvent(eventBySource[source], {
    source,
    product_name: productName,
    store_name: storeName,
  });
}
