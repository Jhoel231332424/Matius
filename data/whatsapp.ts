import { siteConfig } from "@/data/site";

export const whatsappConfig = {
  number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? siteConfig.whatsapp,
  defaultMessage:
    "Hola, vi la web de Matius Perfect y quisiera consultar modelos, tallas y disponibilidad.",
} as const;
