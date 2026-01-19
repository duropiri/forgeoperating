/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Enable experimental features for App Router
  experimental: {
    // typedRoutes: true,
  },
}

module.exports = nextConfig
