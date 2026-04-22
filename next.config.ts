import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
