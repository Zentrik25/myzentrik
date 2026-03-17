import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.zentriksolutions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                          lastModified: new Date('2026-03-17'), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`,            lastModified: new Date('2026-03-17'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/pricing`,             lastModified: new Date('2026-03-17'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/about`,               lastModified: new Date('2026-03-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,             lastModified: new Date('2026-03-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`,      lastModified: new Date('2026-03-10'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`,    lastModified: new Date('2026-03-10'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/data-deletion`,       lastModified: new Date('2026-03-10'), changeFrequency: 'yearly',  priority: 0.2 },
  ]
}
