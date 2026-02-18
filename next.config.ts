import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"], // whitelist this hostname
  },
};

export default nextConfig;
