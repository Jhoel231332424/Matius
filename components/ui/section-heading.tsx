import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <div className={cn("matius-section-kicker mb-4", isDark ? "text-white/75" : "text-black/65")}>
          <span className="matius-section-rule matius-scroll-rule" aria-hidden="true" />
          <p className="matius-eyebrow">{eyebrow}</p>
        </div>
      ) : null}
      <h2 className={cn("matius-section-title matius-scroll-title", isDark && "text-white")}>{title}</h2>
      {description ? (
        <p
          className={cn(
            "matius-scroll-copy mt-6 max-w-2xl text-base leading-7 sm:text-lg",
            isDark ? "text-white/80" : "text-black/70",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
