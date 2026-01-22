import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile packages that need it
  transpilePackages: ["lucide-react"],

  // Environment variables exposed to browser
  env: {
    NEXT_PUBLIC_APP_ID: process.env.VITE_APP_ID,
    NEXT_PUBLIC_OAUTH_PORTAL_URL: process.env.VITE_OAUTH_PORTAL_URL,
    NEXT_PUBLIC_ANALYTICS_ENDPOINT: process.env.VITE_ANALYTICS_ENDPOINT,
    NEXT_PUBLIC_ANALYTICS_WEBSITE_ID: process.env.VITE_ANALYTICS_WEBSITE_ID,
  },

  // Headers for security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
