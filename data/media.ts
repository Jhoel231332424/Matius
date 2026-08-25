export type BrandAsset = {
  src: string;
  alt: string;
  objectPosition?: string;
};

const asset = (file: string, alt: string, objectPosition = "center"): BrandAsset => ({
  src: `https://matiusperfect.com/assets/${file}`,
  alt,
  objectPosition,
});

export const brandMedia = {
  source: "https://matiusperfect.com/",
  hero: asset("hero-1.png", "Imagen editorial de calzado Matius Perfect", "center"),
  campaign: [
    asset("hero-1.png", "Campaña de calzado Matius Perfect", "center"),
    asset("hero-2.png", "Imagen de campaña de Matius Perfect", "center"),
    asset("hero-3.png", "Calzado y estilo Matius Perfect", "center"),
    asset("hero-4.png", "Imagen editorial de Matius Perfect", "center"),
  ],
  pillars: [
    asset("hero-2.png", "Detalle editorial de Matius Perfect", "center"),
    asset("hero-3.png", "Calzado Matius Perfect fabricado en Cochabamba", "center"),
    asset("hero-4.png", "Campaña de calzado de cuero Matius Perfect", "center"),
  ],
  leatherDetail: asset("hero-4.png", "Detalle visual de calzado de cuero Matius Perfect", "center"),
  finalCta: asset("hero-2.png", "Campaña Matius Perfect", "center"),
} as const;
