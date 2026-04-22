# SEO Action Plan — zentriksolutions.com
**Generated:** 2026-04-22
**Current Score:** 56 / 100
**Target Score:** 78+ / 100

---

## CRITICAL — Fix Immediately (Score Impact: +12 pts)

### C1. Add canonical tags to /, /services, /pricing
**Effort:** 30 min | **Impact:** High — prevents duplicate content penalties

In Next.js App Router, add to each page's `metadata` export:

```ts
// app/page.tsx (homepage)
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.zentriksolutions.com',
  },
}

// app/services/page.tsx
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.zentriksolutions.com/services',
  },
}

// app/pricing/page.tsx
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.zentriksolutions.com/pricing',
  },
}
```

---

### C2. Add title + meta description to /services and /pricing
**Effort:** 15 min | **Impact:** High — pages currently invisible to Google SERP snippets

```ts
// app/services/page.tsx
export const metadata: Metadata = {
  title: 'Software, Chatbots & AI Agents for Africa | Zentrik Solutions',
  description: 'Custom software development, WhatsApp Business API chatbots, and autonomous AI agents for businesses in Zimbabwe, Africa, and globally. Get a free quote.',
  alternates: { canonical: 'https://www.zentriksolutions.com/services' },
}

// app/pricing/page.tsx
export const metadata: Metadata = {
  title: 'Transparent Pricing — Software, Chatbots & AI | Zentrik Solutions',
  description: 'Fixed-price software packages from $150. WhatsApp chatbots and AI agents from $500. No hidden fees. Zimbabwe-based, serving globally.',
  alternates: { canonical: 'https://www.zentriksolutions.com/pricing' },
}
```

---

### C3. Add full OG + Twitter Card to /, /services, /pricing
**Effort:** 20 min | **Impact:** High — social sharing previews; required for WhatsApp link previews

```ts
// Add to each page metadata:
openGraph: {
  title: '...', // match page title
  description: '...', // match meta description
  url: 'https://www.zentriksolutions.com/services',
  siteName: 'Zentrik Solutions',
  images: [{ url: 'https://www.zentriksolutions.com/og-image.png', width: 1200, height: 630, alt: 'Zentrik Solutions' }],
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title: '...',
  description: '...',
  images: ['https://www.zentriksolutions.com/og-image.png'],
},
```

**Note:** Create unique OG images per page (1200×630) rather than reusing the same og-image.png everywhere.

---

### C4. Install Google Analytics 4 + Search Console
**Effort:** 1 hour | **Impact:** Critical — without data, nothing else can be optimised

1. Create a GA4 property at analytics.google.com
2. Add `@next/third-parties` or `next/script` GA4 snippet to `app/layout.tsx`
3. Verify site in Google Search Console (DNS TXT record or HTML file method)
4. Submit `https://www.zentriksolutions.com/sitemap.xml` in Search Console
5. Use Search Console's URL Inspection tool on each of the 7 pages to force indexing

---

## HIGH — Fix Within 1 Week (Score Impact: +8 pts)

### H1. Expand FAQPage schema to all 13 questions
**Effort:** 45 min | **Impact:** High — FAQ rich snippets in Google SERPs

Currently /faq has FAQPage schema with only 5 questions. Add all 13:
- What services does Zentrik Solutions offer?
- Do you build WhatsApp chatbots?
- What is an AI agent?
- What technologies do you use?
- How much does a WhatsApp chatbot cost?
- How do I pay?
- Do you offer payment plans?
- How long does a project take?
- Will I own the code?
- Do you provide support after launch?
- Do you work with clients outside Zimbabwe?
- How do I get started?
- Still have questions?

---

### H2. Add LocalBusiness schema to /contact
**Effort:** 30 min | **Impact:** High — local pack ranking for "software company Zimbabwe"

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Zentrik Solutions",
  "description": "Custom software, WhatsApp chatbots, and AI agents for businesses in Zimbabwe and globally.",
  "url": "https://www.zentriksolutions.com",
  "telephone": "+263773934610",
  "email": "info@zentriksolutions.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mutare",
    "addressRegion": "Manicaland",
    "addressCountry": "ZW"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "17:00"
  }],
  "areaServed": ["Zimbabwe", "South Africa", "Nigeria", "United Kingdom", "United States"]
}
```

---

### H3. Add Offer / PriceSpecification schema to /pricing
**Effort:** 45 min | **Impact:** High — enables price rich snippets

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Offer",
      "name": "Starter",
      "price": "150",
      "priceCurrency": "USD",
      "description": "Entry-level software package",
      "url": "https://www.zentriksolutions.com/pricing"
    },
    {
      "@type": "Offer",
      "name": "Professional",
      "price": "500",
      "priceCurrency": "USD",
      "description": "Professional software/chatbot package",
      "url": "https://www.zentriksolutions.com/pricing"
    },
    {
      "@type": "Offer",
      "name": "Enterprise",
      "price": "1500",
      "priceCurrency": "USD",
      "description": "Enterprise software and AI agents — starting from",
      "url": "https://www.zentriksolutions.com/pricing"
    }
  ]
}
```

---

### H4. Add alt text to all images and replace emoji thumbnails
**Effort:** 1 hour | **Impact:** High — accessibility, Google Images, CWV

- Audit every `<img>` and Next.js `<Image>` component for missing `alt` props
- Replace emoji (📰, 🤖) on /work with real `<Image>` components with descriptive alt text
- All `<Image>` above the fold: add `priority` prop for LCP optimization

---

### H5. Add geo keyword to homepage title and H1
**Effort:** 15 min | **Impact:** High — geographic targeting for "Zimbabwe software company"

```
Current title: "Zentrik Solutions: Software, Chatbots & AI Agents"
Suggested:     "Zentrik Solutions: Software & AI Agents | Zimbabwe"

Current H1:    "Replace your manual work with AI that never sleeps."
Suggested H1:  Keep as-is (UX-first H1 is fine) — add geo keyword to subtitle/subheading instead
```

---

## MEDIUM — Fix Within 1 Month (Score Impact: +6 pts)

### M1. Add named team members to /about
**Impact:** Medium — E-E-A-T, AI citation readiness

Add a team section with real names, roles, and optionally photos. At minimum:
- Founder name + bio (2–3 sentences)
- Add `Person` schema for each team member

```json
{
  "@type": "Person",
  "name": "...",
  "jobTitle": "Founder & Lead Developer",
  "worksFor": { "@type": "Organization", "name": "Zentrik Solutions" },
  "url": "https://www.zentriksolutions.com/about"
}
```

---

### M2. Create 2–3 detailed case study pages
**Impact:** Medium — content depth, internal linking, E-E-A-T

Replace the single /work page listing with individual case study pages:
- `/work/granite-post` — technology, problem, solution, results, screenshots
- `/work/molly-chatbot` — WhatsApp chatbot metrics, client quote, demo video

Add `CaseStudy` or `Article` schema per page. Link from /services contextually.

---

### M3. Build verifiable social proof
**Impact:** Medium — E-E-A-T, conversion

- Create a Google Business Profile (Mutare, Zimbabwe) — link from /contact and Organization schema
- List on Clutch.co (free) — request reviews from the 3 existing clients
- Update AggregateRating schema to point to Google/Clutch rather than self-assertion

---

### M4. Add meta description to homepage
**Impact:** Medium — SERP click-through rate

The homepage has no `<meta name="description">`. Add explicitly:
```
"Zimbabwe-based software company building custom web apps, WhatsApp chatbots, and AI agents for businesses across Africa and globally. MVPs in weeks, not months."
```

---

### M5. Improve internal cross-linking
**Impact:** Medium — PageRank flow, crawlability

- From /services body text: link to /pricing with anchor text "see our pricing"
- From /about: link to /work and /faq
- From /work case studies: link to relevant /services section
- From /faq answers: link to /contact and /pricing contextually

---

## LOW — Backlog (Score Impact: +4 pts)

### L1. Start a blog or resources section
Even 1 article/month compounds significantly over 12 months:
- "How WhatsApp Chatbots Are Transforming Zimbabwean Businesses"
- "Custom Software vs Off-the-Shelf: What African SMEs Need to Know"
- "What is an AI Agent? A Plain-English Guide for Business Owners"

### L2. Unique OG images per page
Currently all pages share `og-image.png`. Create page-specific OG images (1200×630) for /services, /pricing, /work — use Figma + Vercel OG image generation.

### L3. Add security response headers
Run https://securityheaders.com — add `Content-Security-Policy`, `X-Frame-Options: DENY`, `Referrer-Policy` via `next.config.js` headers.

### L4. Add `news-sitemap.xml` (future)
Once a blog exists, add a news sitemap covering the last 48 hours for Google News/Discover eligibility.

### L5. Fix sitemap lastmod to be dynamic
Update the sitemap generator to use actual `updatedAt` timestamps from your CMS/database rather than hardcoded dates.

---

## Estimated Score Uplift by Phase

| Phase | Actions | Est. Score Gain | Projected Total |
|-------|---------|----------------|-----------------|
| Current | — | — | 56 / 100 |
| Critical (C1–C4) | Canonical, meta tags, OG, analytics | +12 | 68 / 100 |
| High (H1–H5) | Schema, images, geo keywords | +8 | 76 / 100 |
| Medium (M1–M5) | E-E-A-T, case studies, social proof | +6 | 82 / 100 |
| Low (L1–L5) | Blog, OG images, headers | +4 | 86 / 100 |

---

*Generated by Claude Code seo-audit skill | 2026-04-22*
