import Image from "next/image";
import Link from "next/link";
import type { BrandAsset } from "@/data/media";
import { cn } from "@/lib/utils";

export function CollectionCard({
  title,
  href,
  index,
  image,
  className,
}: {
  title: string;
  href: string;
  index: number;
  image: BrandAsset;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative min-h-[22rem] overflow-hidden border border-white/15 p-6 focus-visible:outline-white sm:min-h-[28rem] sm:p-7",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 768px) 60vw, 100vw"
        style={{ objectPosition: image.objectPosition }}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,13,12,0.05)_15%,rgba(14,13,12,0.8)_100%)]" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <span className="matius-eyebrow text-white/80">Colección</span>
          <span className="text-xs text-white/70">0{index + 1}</span>
        </div>

        <div>
          <div className="mb-5 h-0.5 w-8 bg-[var(--mat-red)] transition-all duration-300 group-hover:w-14" aria-hidden="true" />
          <h3 className="max-w-[12ch] font-[family-name:var(--font-display)] text-5xl font-medium leading-[0.9] sm:text-6xl">
            {title}
          </h3>
          <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-white/90">
            <span>Explorar</span>
            <span className="h-px w-8 bg-white/55 transition-all duration-300 group-hover:w-14" aria-hidden="true" />
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
