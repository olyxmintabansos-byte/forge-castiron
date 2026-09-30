import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/forge-castiron",
  images: { unoptimized: true },
};

export default nextConfig;
