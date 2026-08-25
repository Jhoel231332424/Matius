import { whatsappConfig } from "@/data/whatsapp";

type WhatsAppContext = {
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
    return `Hola, vi la sucursal ${context.storeName} en la web de Matius Perfect y quisiera recibir información.`;
  }
  return whatsappConfig.defaultMessage;
}

export function createWhatsAppUrl(context: WhatsAppContext = {}) {
  const message = encodeURIComponent(createWhatsAppMessage(context));
  const number = whatsappConfig.number.replace(/\D/g, "");

  if (!number) return `https://wa.me/?text=${message}`;
  return `https://wa.me/${number}?text=${message}`;
}
