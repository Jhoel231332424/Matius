export type ProductCategory = "formal" | "casual" | "botas" | "mujer";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  material?: string;
  color?: string;
  price?: number;
  currency?: "BOB" | "USD";
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  images: Array<{ src: string; alt: string }>;
  isDemo?: boolean;
};
