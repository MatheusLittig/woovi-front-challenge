/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@woovi/ui", "@woovi/stores"],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
