import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variants = {
  primary: "bg-[var(--mat-charcoal)] text-[var(--mat-warm-white)] hover:bg-[var(--mat-dark-brown)]",
  secondary: "border border-[var(--mat-charcoal)] text-[var(--mat-charcoal)] hover:bg-[var(--mat-charcoal)] hover:text-[var(--mat-warm-white)]",
  ghost: "text-[var(--mat-charcoal)] underline underline-offset-4",
};

export function Button({ href, variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--mat-radius-sm)] px-5 py-3 text-sm font-semibold transition-colors duration-[var(--mat-base)]",
    variants[variant],
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a className={classes} href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
