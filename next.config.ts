import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the development compiler output separate from production builds.
  // This prevents `next build` from invalidating a running dev server.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
};

export default nextConfig;
