/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.noor-book.com', 'www.mojml.com'],
  },
  eslint: {
    // Disable specific rules only for the articles page
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
