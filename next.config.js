// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
    turbo: false,
  },
};

module.exports = nextConfig;
