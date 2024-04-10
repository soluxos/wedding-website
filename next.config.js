// next.config.js
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack5: true,
  webpack(config, { webpack }) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));

    // Initialize not array if it doesn't exist
    const notArray =
      fileLoaderRule.resourceQuery && Array.isArray(fileLoaderRule.resourceQuery.not)
        ? fileLoaderRule.resourceQuery.not
        : [];

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...notArray, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  babel: {
    plugins: [
      [
        'styled-components',
        {
          ssr: true,
          displayName: true,
          preprocess: false, // Not needed for Next.js
        },
      ],
    ],
  },
};
