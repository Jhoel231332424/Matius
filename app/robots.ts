import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const allowIndexing =
    process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true" && process.env.VERCEL_ENV !== "preview";

  if (!allowIndexing) {
    return {
      rules: { userAgent: "*", allow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
