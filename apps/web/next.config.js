/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@woovi/ui"],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
