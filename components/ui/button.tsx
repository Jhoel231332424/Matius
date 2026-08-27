import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  onClick?: () => void;
};

const variants = {
  primary: "bg-[var(--mat-charcoal)] text-white hover:bg-[var(--mat-dark-brown)]",
  secondary: "border border-[var(--mat-charcoal)] text-[var(--mat-charcoal)] hover:bg-[var(--mat-charcoal)] hover:text-white",
  ghost: "text-[var(--mat-charcoal)] underline underline-offset-4",
};

export function Button({ href, variant = "primary", className, children, onClick, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-[var(--mat-control-height)] items-center justify-center gap-2 rounded-[var(--mat-radius-sm)] px-6 py-3 text-sm font-semibold transition-[color,background-color,border-color,transform] duration-[var(--mat-base)] ease-[var(--mat-ease-ui)] hover:-translate-y-px motion-reduce:transform-none",
    variants[variant],
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        className={classes}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer noopener" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
