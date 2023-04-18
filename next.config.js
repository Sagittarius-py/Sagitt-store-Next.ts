/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com"],
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};

module.exports = nextConfig;
