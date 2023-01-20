/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  // webpack: (config, options) => {
  //   if (!options.dev && !options.isServer) {
  //     Object.assign(config.resolve.alias, {
  //       'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
  //       react: 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat', // Must be below test-utils
  //     });
  //   }
  //   return config;
  // },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
