import type { NextConfig } from "next";

const allowedDevOrigins = (process.env.ALLOWED_DEV_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  ...(allowedDevOrigins.length > 0 ? { allowedDevOrigins } : {}),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "matiusperfect.com",
        pathname: "/assets/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
