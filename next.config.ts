import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
}

export default nextConfig
