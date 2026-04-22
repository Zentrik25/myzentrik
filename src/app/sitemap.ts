import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.zentriksolutions.com'

// lastModified reflects the most recent deployment. For a static marketing site
// without a CMS, this is the most honest signal available — it changes whenever
// content is updated and the site is redeployed.
const BUILT_AT = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                 lastModified: BUILT_AT, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`,   lastModified: BUILT_AT, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/pricing`,    lastModified: BUILT_AT, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/faq`,        lastModified: BUILT_AT, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/work`,       lastModified: BUILT_AT, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`,      lastModified: BUILT_AT, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,    lastModified: BUILT_AT, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
