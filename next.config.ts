import type { NextConfig } from "next";

const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  }
};

export default config;
