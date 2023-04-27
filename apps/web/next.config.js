/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@woovi/ui", "@woovi/resources"],
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
