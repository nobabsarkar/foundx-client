// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

// /** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
    turbo: {},
  },
};

module.exports = nextConfig;
