import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Netlify
  output: 'export',
  
  // Disable trailing slash for cleaner URLs
  trailingSlash: false,
  
  // Configure images for static export
  images: {
    unoptimized: true,
  },
  
  typescript: {
    ignoreBuildErrors: false, // Set to false for production builds
  },
  
  reactStrictMode: true,
  
  eslint: {
    ignoreDuringBuilds: false, // Set to false for production builds
  },
};

export default nextConfig;
