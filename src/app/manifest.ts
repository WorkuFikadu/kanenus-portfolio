import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kanenus Kasa Bayisa | Author & Cultural Leader',
    short_name: 'KKB Portfolio',
    description: 'Official portfolio of Kanenus Kasa Bayisa — Author, PR Manager & Director of Shanan Gadaa Band.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1a30',
    theme_color: '#0b1a30',
    orientation: 'portrait',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any' as const,
      },
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable' as const,
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any' as const,
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable' as const,
      },
    ],
    categories: ['books', 'education', 'music', 'lifestyle'],
    screenshots: [
      {
        src: '/profile.jpg',
        sizes: '800x600',
        type: 'image/jpeg',
      },
    ],
  }
}
