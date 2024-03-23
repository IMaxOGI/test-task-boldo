/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Find the existing rule for file handling and exclude SVGs to avoid conflicts
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test && rule.test.test('.svg'));
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Add our own rule for handling SVGs
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /url/, // SVGs are processed as URLs
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash].[ext]',
              },
            },
          ],
        },
        {
          // SVGs are processed as React components
          use: ['@svgr/webpack'],
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
