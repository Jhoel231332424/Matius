import Image from "next/image";
import Link from "next/link";
import type { BrandAsset } from "@/data/media";

export function CollectionCard({
  title,
  href,
  index,
  image,
}: {
  title: string;
  href: string;
  index: number;
  image: BrandAsset;
}) {
  return (
    <Link
      href={href}
      className="group relative min-h-96 overflow-hidden border border-white/15 p-7 focus-visible:outline-white sm:min-h-[28rem]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        style={{ objectPosition: image.objectPosition }}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,13,12,0.08),rgba(14,13,12,0.76))]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <span className="matius-eyebrow text-white/75">Colección</span>
          <span className="text-xs text-white/60">0{index + 1}</span>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-5xl font-medium leading-none sm:text-6xl">{title}</h3>
          <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
            <span>Explorar</span>
            <span className="h-px w-8 bg-white/55 transition-all duration-300 group-hover:w-14" />
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
