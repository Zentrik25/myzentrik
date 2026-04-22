# SEO Action Plan — zentriksolutions.com
**Generated:** April 22, 2026
**Target score:** 47/100 → 75+/100

---

## CRITICAL — Fix Immediately (blocks indexing / social sharing)

### C-1: Fix Next.js metadata exports (SSR `<head>`)
**Impact:** Resolves ~10 issues in one pass — title, description, OG tags, Twitter cards, canonical
**Files:** `app/layout.tsx` + every `app/**/page.tsx`

```ts
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://www.zentriksolutions.com'),
  title: { default: 'Zentrik Solutions', template: '%s | Zentrik Solutions' },
  description: 'Custom software, WhatsApp chatbots and AI agents built in Zimbabwe for African businesses and beyond.',
  openGraph: {
    siteName: 'Zentrik Solutions',
    locale: 'en_ZW',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}
```

Per-page example (`app/services/page.tsx`):
```ts
export const metadata: Metadata = {
  title: 'Software, Chatbot & AI Agent Services',   // ≤60 chars
  description: 'Custom software, WhatsApp chatbots, and AI agents built by Zentrik Solutions for businesses across Africa. Free quote in 24 hours.',
  openGraph: {
    title: 'Software, Chatbot & AI Agent Services | Zentrik Solutions',
    description: '...',
    url: 'https://www.zentriksolutions.com/services',
    images: [{ url: '/og-images/services.png', width: 1200, height: 630 }],
  },
}
```

### C-2: Add per-page hero images
**Impact:** Google Discover eligibility; social preview quality; LCP element
- Create unique 1200×630px OG images for each main page
- Add at least one `<Image>` component (next/image) above the fold on the homepage
- Separate `logo.png` (300×60px) from `og-image.png`

### C-3: Install analytics
**Impact:** Operational visibility; CrUX data for Search Console
```ts
// Vercel Analytics — zero config
import { Analytics } from '@vercel/analytics/react'
// Add <Analytics /> to app/layout.tsx
```
Also activate the Facebook Pixel (domain is already verified).

---

## HIGH — Fix Within 1 Week

### H-1: Add named team members to /about
Add founder name, headshot, role, short bio (3–4 sentences), and LinkedIn URL.
This is the single highest-impact E-E-A-T action available.

### H-2: Fix Organization JSON-LD
```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Zentrik Solutions",
  "url": "https://www.zentriksolutions.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.zentriksolutions.com/logo.png",
    "width": 300,
    "height": 60
  },
  "sameAs": [
    "https://www.linkedin.com/company/zentrik-solutions",
    "https://www.facebook.com/zentriksolutions"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "Mutare",
    "addressRegion": "Manicaland",
    "postalCode": "[Postal Code]",
    "addressCountry": "ZW"
  },
  "telephone": "+263773934610",
  "openingHours": "Mo-Fr 08:00-17:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "3",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### H-3: Add /work to sitemap.xml + remove legal pages

```xml
<url>
  <loc>https://www.zentriksolutions.com/work</loc>
  <lastmod>2026-03-17</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

Remove `/privacy-policy`, `/terms-of-service`, `/data-deletion` from sitemap.
Add `<meta name="robots" content="noindex, nofollow">` to those pages.

### H-4: Fix /faq title duplication
Change: `"Frequently Asked Questions: Zentrik Solutions Zimbabwe | Zentrik Solutions"`
To: `"FAQ: Software, Chatbots & AI Agents — Zentrik Solutions"` (53 chars)

### H-5: Fix /pricing FAQ typo
Change: `"...within 24 hours.no obligation."` → `"...within 24 hours — no obligation."`

### H-6: Establish social media presence
- Create LinkedIn Company page at minimum
- Link from site footer
- Add URLs to `sameAs` in JSON-LD

### H-7: Expand case studies on /work
Expand each case study from ~115 words to 800–1,200 words following:
`Problem → Approach → Tech Stack → Results (with metrics)`

---

## MEDIUM — Fix Within 1 Month

### M-1: Add WebSite schema with SearchAction
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zentrik Solutions",
  "url": "https://www.zentriksolutions.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.zentriksolutions.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### M-2: Add BreadcrumbList to /services and /pricing

### M-3: Add contextual internal links in body copy
- From /about → /services and /work
- From /work → /services and /pricing
- From homepage service descriptions → /services anchor links

### M-4: Improve H1 keywords
- Homepage: "AI-Powered Software, Chatbots & AI Agents for African Businesses" (or similar)
- /services: "Custom Software Development, WhatsApp Chatbots & AI Agents"
- /pricing: "Transparent Software Development Pricing — Zimbabwe"

### M-5: Embed Google Maps on /contact
Iframe embed of office location anchors local SEO.

### M-6: Add verifiable testimonials
Add headshot + LinkedIn URL or company website link to each of the 3 testimonials.

### M-7: Clutch.co / GoodFirms profile
Industry standard for software agencies. Link from /about.

### M-8: Deduplicate FAQ content
Remove overlapping questions from /pricing that already appear on /faq,
or differentiate them (pricing-specific vs general).

### M-9: Make twitter:title page-specific
Currently identical generic string on /about and /contact.

### M-10: Verify font-display: swap
Check `@font-face` in the generated CSS for the custom WOFF2 font.
If absent, add `font-display: swap` to prevent FOIT.

### M-11: Add robots meta tag site-wide
```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
```
The `max-image-preview:large` is required for Google Discover eligibility.

### M-12: Verify security headers
Run site through securityheaders.com and add:
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

---

## LOW — Housekeeping

| # | Action |
|---|--------|
| L-1 | Remove `Host:` directive from robots.txt (Yandex-only) |
| L-2 | Add `og:type: website` and `og:locale: en_ZW` to all pages |
| L-3 | Add `worstRating: "1"` to Review schema items |
| L-4 | Add `AboutPage` and `ContactPage` schema types to respective pages |
| L-5 | Add `areaServed` to Service schema items |
| L-6 | Add `foundingDate` and `numberOfEmployees` to Organization schema |
| L-7 | Derive `lastmod` in sitemap.xml from actual CMS/git timestamps |
| L-8 | Add image sitemap entries once images are added |
| L-9 | Add `og:type` to all pages |
| L-10 | Remove `Host:` from robots.txt |

---

## Medium-Term Roadmap (Month 2–3)

### Blog Launch — Highest ROI Content Investment
Publish these 3 articles first (search demand exists, competition is low):

1. **"How to Build a WhatsApp Chatbot for Your Business in Zimbabwe"**
   - Target: "whatsapp chatbot zimbabwe", "whatsapp business api zimbabwe"
   - Format: step-by-step guide with FAQ schema

2. **"Custom Software Development Cost in Zimbabwe: 2026 Pricing Guide"**
   - Target: "software development cost zimbabwe", "custom app development price africa"
   - Format: pricing table, FAQ schema, comparison with outsourcing

3. **"AI Agents vs. Simple Chatbots: What African Businesses Need to Know"**
   - Target: "ai agent vs chatbot", "ai automation small business africa"
   - Format: comparison article, definition schema

Each article should:
- Be 1,200–2,000 words
- Have a named author (the founder or a team member)
- Include FAQPage schema
- Link internally to /services and /pricing

---

## Expected Score Improvements

| Fix | Expected Score Gain |
|-----|-------------------|
| C-1: Fix metadata exports | +8 pts |
| C-2: Add hero images | +5 pts |
| C-3: Install analytics | +2 pts |
| H-1: Named team members | +3 pts |
| H-2: Fix JSON-LD | +2 pts |
| H-3–H-7: Other high items | +3 pts |
| Medium items | +5 pts |
| Blog launch | +5 pts |
| **Total potential** | **+33 pts → ~80/100** |
