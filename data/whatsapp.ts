export const whatsappConfig = {
  number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  defaultMessage:
    "Hola, vi la web de Matius Perfect y quisiera consultar modelos, tallas y disponibilidad.",
} as const;
