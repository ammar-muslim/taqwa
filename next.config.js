/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.noor-book.com', 'www.mojml.com'],
  },
  webpack: (config, { isServer }) => {
    // Add lightningcss configuration
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
};

module.exports = nextConfig;
