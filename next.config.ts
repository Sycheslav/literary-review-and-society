import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/literature",
  async redirects() {
    const legacyHost = [{ type: "host" as const, value: "literature-review.up.railway.app" }];
    return [
      {
        source: "/literature/:path*",
        has: legacyHost,
        destination: "https://socialgraph-labs.com/literature/:path*",
        basePath: false,
        permanent: true,
      },
      {
        source: "/:path*",
        has: legacyHost,
        destination: "https://socialgraph-labs.com/literature/:path*",
        basePath: false,
        permanent: true,
      },
      { source: "/", destination: "/literature", basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
