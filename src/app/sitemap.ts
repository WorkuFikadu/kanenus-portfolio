import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kanenus-portfolio.vercel.app'
  const pages = ['', '/about', '/books', '/music', '/gallery', '/experience', '/media', '/events', '/blog', '/cv', '/contact']
  return pages.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }))
}
