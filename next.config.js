/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Disable webpack filesystem cache in dev mode.
  // This prevents stale chunk references (./xxx.js MODULE_NOT_FOUND errors)
  // that occur when the dev server restarts after file edits.
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;