import {
  BrandPillarsSection,
  CollectionsSection,
  CraftsmanshipSection,
  FeaturedProductsSection,
  FinalCtaSection,
  HeroSection,
  LeatherDetailSection,
  LifestyleSection,
  LookbookSection,
  StoresSection,
} from "@/components/sections/home-sections";

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
