import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.zentriksolutions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                 lastModified: new Date('2026-04-22'), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`,   lastModified: new Date('2026-04-22'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/pricing`,    lastModified: new Date('2026-04-22'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/faq`,        lastModified: new Date('2026-04-22'), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/work`,       lastModified: new Date('2026-04-22'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`,      lastModified: new Date('2026-04-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,    lastModified: new Date('2026-04-22'), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
