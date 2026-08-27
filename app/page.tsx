import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { BrandPillarsSection } from "@/components/sections/brand-pillars-section";
import { CollectionsSection } from "@/components/sections/collections-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { EditorialMaterialBannerSection } from "@/components/sections/editorial-material-banner-section";
import { CraftsmanshipSection } from "@/components/sections/craftsmanship-section";
import { LifestyleSection } from "@/components/sections/lifestyle-section";
import { LookbookSection } from "@/components/sections/lookbook-section";
import { StoresSection } from "@/components/sections/stores-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { TrustBarSection } from "@/components/sections/trust-bar-section";
import { brandMedia } from "@/data/media";
import { siteConfig } from "@/data/site";

const homeTitle = "Matius Perfect | Zapatos de cuero en Cochabamba";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    type: "website",
    title: homeTitle,
    description: siteConfig.description,
    images: [
      {
        url: brandMedia.hero.src,
        alt: brandMedia.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteConfig.description,
    images: [brandMedia.hero.src],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandPillarsSection />
      <CollectionsSection />
      <FeaturedProductsSection />
      <EditorialMaterialBannerSection />
      <CraftsmanshipSection />
      <LifestyleSection />
      <LookbookSection />
      <StoresSection />
      <FinalCtaSection />
      <TrustBarSection />
    </>
  );
}
