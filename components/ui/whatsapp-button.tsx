"use client";

import { trackWhatsAppClick, type WhatsAppSource } from "@/lib/analytics";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export function WhatsAppButton({
  source = "general",
  productName,
  storeName,
  children = "Consultar por WhatsApp",
  variant = "primary",
  className,
}: {
  source?: WhatsAppSource;
  productName?: string;
  storeName?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <Button
      href={createWhatsAppUrl({ source, productName, storeName })}
      variant={variant}
      className={className}
      onClick={() => trackWhatsAppClick({ source, productName, storeName })}
    >
      {children}
    </Button>
  );
}
