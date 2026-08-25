export const siteConfig = {
  name: "Matius Perfect",
  shortName: "Matius",
  description:
    "Zapatos de cuero con una propuesta centrada en fabricación, durabilidad y diseño. Demo orientada a atención por WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://matiusperfect.com",
  locale: "es_BO",
  instagram: "https://www.instagram.com/matius_perfect/",
  navigation: [
    { label: "Zapatos", href: "/#zapatos" },
    { label: "Fabricación", href: "/#fabricacion" },
    { label: "Tiendas", href: "/tiendas" },
  ],
} as const;
