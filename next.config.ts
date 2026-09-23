import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: isGithubActions ? "export" : undefined,
  basePath: isGithubActions ? "/HCM" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? "/HCM" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
