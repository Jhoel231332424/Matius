import Link from "next/link";

export function CollectionCard({
  title,
  href,
  index,
}: {
  title: string;
  href: string;
  index: number;
}) {
  return (
    <Link
      href={href}
      className="group relative min-h-96 overflow-hidden border border-white/15 p-7 focus-visible:outline-white sm:min-h-[28rem]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#6a4b36,#24201d)] transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(255,255,255,0.14),transparent_35%)]" />
      <div className="absolute -right-3 top-3 select-none font-[family-name:var(--font-display)] text-[10rem] font-medium leading-none text-white/[0.055] sm:text-[13rem]">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <span className="matius-eyebrow text-white/55">Colección</span>
          <span className="text-xs text-white/40">0{index + 1}</span>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-5xl font-medium leading-none sm:text-6xl">{title}</h3>
          <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
            <span>Explorar</span>
            <span className="h-px w-8 bg-white/45 transition-all duration-300 group-hover:w-14" />
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
