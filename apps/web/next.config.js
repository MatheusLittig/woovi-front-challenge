/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@woovi/ui", "@woovi/resources"],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
