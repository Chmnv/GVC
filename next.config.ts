import type { NextConfig } from "next";

/**
 * GitHub Pages uses subpath hosting (`https://<user>.github.io/<repo>/`),
 * so when the build runs inside GitHub Actions we switch to a fully
 * static export and prefix all routes/assets with the repository name.
 *
 * For Vercel / local dev these flags stay off, so nothing is bundled
 * into a static `out/` folder by default.
 */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  ...(isGithubActions && {
    output: "export",
    trailingSlash: true,
    basePath,
    assetPrefix: basePath ? `${basePath}/` : undefined,
  }),
  images: isGithubActions
    ? { unoptimized: true }
    : {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
          { protocol: "https", hostname: "images.unsplash.com" },
        ],
      },
};

export default nextConfig;
