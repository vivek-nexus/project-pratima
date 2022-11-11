const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  trailingSlash: true,
  env: {
    // Sample LINK prefix: /project-pratima
    // Do not add the slash at the last
    LINK_PREFIX: isProd ? "/project-pratima" : ""
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? "/project-pratima" : "",
  assetPrefix: isProd ? "/project-pratima" : "",
}

module.exports = nextConfig