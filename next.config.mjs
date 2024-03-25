/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "image-optimizer-reg.production.sephora-asia.net" },
    ],
  },
};

export default nextConfig;
