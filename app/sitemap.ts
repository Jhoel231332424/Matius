import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { stores } from "@/data/stores";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/zapatos-de-cuero", "/zapatos-hombre", "/zapatos-mujer", "/nuestra-fabricacion", "/tiendas"];
  const storeRoutes = stores.map((store) => `/tiendas/${store.slug}`);

  return [...routes, ...storeRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
