/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... your other config might be here
  
  eslint: {
    ignoreDuringBuilds: true, // This will skip ESLint during the build
  },
};

module.exports = nextConfig;