/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./env.mjs'))

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

  serverRuntimeConfig: {},

  redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      },
      {
        source: '/api/:path*/',
        destination: 'http://47.251.65.83:8088/:path*',
        permanent: true
      }
    ]
  },

  images: {
    domains: ['']
  }
}

export default nextConfig
