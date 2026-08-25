import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="matius-eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="matius-section-title">{title}</h2>
      {description ? <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">{description}</p> : null}
    </div>
  );
}
