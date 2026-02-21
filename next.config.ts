import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
