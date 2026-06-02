/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/muralidharan-portfolio" : "",
  },
  trailingSlash: true,
  ...(isGithubPages
    ? {
        basePath: "/muralidharan-portfolio",
        assetPrefix: "/muralidharan-portfolio/",
      }
    : {}),
};

module.exports = nextConfig;
