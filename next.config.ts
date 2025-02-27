import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // 빌드 중 ESLint 검사 무시
  },
  /* config options here */
};

export default nextConfig;
