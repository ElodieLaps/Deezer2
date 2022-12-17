/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["api.deezer.com", "e-cdns-images.dzcdn.net"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
