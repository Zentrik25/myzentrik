import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },

  async redirects() {
    return [
      // Permanently redirect bare domain to www so all canonicals resolve correctly.
      // Without this, zentriksolutions.com and www.zentriksolutions.com are treated as
      // separate origins by Google, causing canonical mismatch and suppressed indexation.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'zentriksolutions.com' }],
        destination: 'https://www.zentriksolutions.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
