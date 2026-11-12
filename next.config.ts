import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/literature",
  async redirects() {
    return [{ source: "/", destination: "/literature", basePath: false, permanent: true }];
  },
};

export default nextConfig;
