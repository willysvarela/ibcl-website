import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'picsum.photos' },
      { hostname: 'i.ytimg.com' },
      { hostname: 'img.youtube.com' },
      { hostname: '*.ytimg.com' },
    ],
  },
}

export default nextConfig
