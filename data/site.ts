export const siteConfig = {
  name: "Matius Perfect",
  shortName: "Matius",
  description:
    "Zapatos y artículos de cuero con una propuesta centrada en fabricación, durabilidad y diseño desde Cochabamba, Bolivia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://matiusperfect.com",
  locale: "es_BO",
  location: "Cochabamba, Bolivia",
  email: "info@matiusperfect.com",
  whatsapp: "59171431096",
  instagram: "https://www.instagram.com/matius_perfect/",
  navigation: [
    { label: "Zapatos", href: "/#zapatos" },
    { label: "Fabricación", href: "/#fabricacion" },
    { label: "Tiendas", href: "/tiendas" },
  ],
} as const;
