import type { NextConfig } from "next";

// Sitio 100% estático: no hay servidor que mantener.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
