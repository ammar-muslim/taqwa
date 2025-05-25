/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.noor-book.com', 'www.mojml.com'],
  },
  webpack: (config, { isServer }) => {
    // Add proper CSS configuration
    config.module.rules.push({
      test: /\.(css|scss|sass)$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
