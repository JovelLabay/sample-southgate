/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  env: {
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  },
};
