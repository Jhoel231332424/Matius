import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { BrandPillarsSection } from "@/components/sections/brand-pillars-section";
import { CollectionsSection } from "@/components/sections/collections-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { CraftsmanshipSection } from "@/components/sections/craftsmanship-section";
import { LeatherDetailSection } from "@/components/sections/leather-detail-section";
import { LifestyleSection } from "@/components/sections/lifestyle-section";
import { LookbookSection } from "@/components/sections/lookbook-section";
import { StoresSection } from "@/components/sections/stores-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Matius Perfect | Zapatos de cuero en Cochabamba",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Matius Perfect | Zapatos de cuero en Cochabamba",
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandPillarsSection />
      <CollectionsSection />
      <FeaturedProductsSection />
      <CraftsmanshipSection />
      <LeatherDetailSection />
      <LifestyleSection />
      <LookbookSection />
      <StoresSection />
      <FinalCtaSection />
    </>
  );
}
