import type { Product } from "@/types/product";

export const featuredProducts: Product[] = [
  {
    id: "oxford",
    slug: "oxford",
    name: "Oxford",
    category: "formal",
    shortDescription: "Modelo Oxford de la colección de hombre de Matius Perfect.",
    price: 424.95,
    currency: "BOB",
    images: [],
  },
  {
    id: "coleccion-hombre",
    slug: "coleccion-hombre",
    name: "Colección Hombre",
    category: "casual",
    shortDescription: "Explora el calzado para hombre y consulta modelos disponibles directamente por WhatsApp.",
    images: [],
    isDemo: true,
  },
  {
    id: "coleccion-mujer",
    slug: "coleccion-mujer",
    name: "Colección Mujer",
    category: "mujer",
    shortDescription: "Explora la colección para mujer y consulta disponibilidad directamente con la marca.",
    images: [],
    isDemo: true,
  },
];
