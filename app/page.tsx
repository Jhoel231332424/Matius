import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { CollectionsSection } from "@/components/sections/collections-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import {
  BrandPillarsSection,
  CraftsmanshipSection,
  FinalCtaSection,
  LeatherDetailSection,
  LifestyleSection,
  LookbookSection,
  StoresSection,
} from "@/components/sections/home-sections";
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
