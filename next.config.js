/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/project-pratima',
  assetPrefix: '/project-pratima/',
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = nextConfig
