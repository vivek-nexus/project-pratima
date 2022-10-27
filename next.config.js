const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  env: {
    // Sample LINK prefix: /project-pratima
    // Do not add the slash at the last
    LINK_PREFIX: isProd ? "/research" : ""
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? "/research" : "",
  assetPrefix: isProd ? "/research" : "",
}

module.exports = nextConfig