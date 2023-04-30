/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@woovi/ui", "@woovi/stores", "@woovi/helpers"],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
