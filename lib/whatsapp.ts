import { whatsappConfig } from "@/data/whatsapp";

export type WhatsAppContext = {
  source?: "hero" | "product" | "store" | "final-cta" | "floating" | "general";
  productName?: string;
  storeName?: string;
  message?: string;
};

export function createWhatsAppMessage(context: WhatsAppContext = {}) {
  if (context.message) return context.message;

  if (context.productName) {
    return `Hola, vi el modelo ${context.productName} en la web de Matius Perfect. ¿Qué tallas y colores tienen disponibles?`;
  }

  if (context.storeName) {
    return `Hola, vi la sucursal ${context.storeName} en la web de Matius Perfect. ¿Me comparten su ubicación y horarios de atención?`;
  }

  switch (context.source) {
    case "hero":
      return "Hola, vi los zapatos de Matius Perfect en la web. ¿Qué modelos, tallas y colores tienen disponibles?";
    case "final-cta":
      return "Hola, recorrí la web de Matius Perfect y quisiera ayuda para encontrar un par. ¿Qué modelos y tallas tienen disponibles?";
    case "floating":
      return "Hola, estoy viendo la web de Matius Perfect y quisiera hacer una consulta sobre sus zapatos.";
    default:
      return whatsappConfig.defaultMessage;
  }
}

export function createWhatsAppUrl(context: WhatsAppContext = {}) {
  const message = encodeURIComponent(createWhatsAppMessage(context));
  const number = whatsappConfig.number.replace(/\D/g, "");

  if (!number) return `https://wa.me/?text=${message}`;
  return `https://wa.me/${number}?text=${message}`;
}
