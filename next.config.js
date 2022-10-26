/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "s3.ap-southeast-1.amazonaws.com",
      "image.femaledaily.com",
      "static.femaledaily.com",
    ],
  },
};

module.exports = nextConfig;
