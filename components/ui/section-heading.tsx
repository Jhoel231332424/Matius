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
        <p className={cn("matius-eyebrow mb-4", isDark ? "text-white/75" : "text-black/65")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("matius-section-title", isDark && "text-white")}>{title}</h2>
      {description ? (
        <p className={cn("mt-6 max-w-2xl text-base leading-7 sm:text-lg", isDark ? "text-white/80" : "text-black/70")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
