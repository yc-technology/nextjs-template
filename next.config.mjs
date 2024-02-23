/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverActions: true,
    turbo: {
      rules: {
        '*.svgg': ['@svgr/webpack']
      }
    }
  },

  output: 'standalone',

  reactStrictMode: false,

  images: {
    domains: ['']
  }
}

export default nextConfig
