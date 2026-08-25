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
  source?: "hero" | "product" | "store" | "final-cta" | "floating" | "general";
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
    >
      {children}
    </Button>
  );
}
