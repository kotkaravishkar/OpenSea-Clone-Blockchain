/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "gateway.ipfscdn.io",
      "openseauserdata.com",
      "images.squarespace-cdn.com"
    ],
  },
};

module.exports = nextConfig;
