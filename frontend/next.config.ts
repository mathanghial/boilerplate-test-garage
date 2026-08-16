import type { NextConfig } from 'next'

const securityHeaders = [
  // Prevent MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Deny framing (clickjacking protection)
  { key: 'X-Frame-Options', value: 'DENY' },
  // Reduce referrer information leakage
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable browser features not used by this app
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
]

const nextConfig: NextConfig = {
  // Allows accessing the dev server from other devices on the local network
  // (e.g. testing on a phone) without Next.js blocking HMR/font requests.
  allowedDevOrigins: ['192.168.1.101'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig