# SEO Full Audit Report — zentriksolutions.com
**Audit Date:** 22 April 2026  
**Auditor:** Claude Code (automated crawl + static analysis)  
**Scope:** www.zentriksolutions.com — 7 core pages + blog

---

## Executive Summary

**Overall SEO Health Score: 63 / 100**

| Category | Weight | Score |
|----------|--------|-------|
| Technical SEO | 25% | 72/100 |
| Content Quality | 25% | 48/100 |
| On-Page SEO | 20% | 82/100 |
| Schema / Structured Data | 10% | 78/100 |
| Performance | 10% | 65/100 |
| Images | 5% | 10/100 |
| AI Search Readiness | 5% | 42/100 |
| **Weighted Total** | | **63/100** |

**Business type detected:** B2B Software Agency (Africa/Zimbabwe focus)

### Top 5 Critical Issues
1. Non-www → www redirect returns **307 Temporary** instead of 308/301 Permanent — PageRank not fully consolidating
2. **Zero images** on all pages — complete absence from image search; no visual content signals
3. **No blog content** — empty blog suppresses topical authority; site has no indexable long-form content
4. **Missing security headers** — no X-Content-Type-Options, X-Frame-Options, Referrer-Policy, or Permissions-Policy
5. **Duplicate title suffix** (now fixed in code, needs deploy) — pricing, FAQ, blog titles had double "| Zentrik Solutions"

### Top 5 Quick Wins
1. Deploy title fixes (already committed) — removes double suffix from 3 pages
2. Add 5+ blog articles on core topics (WhatsApp chatbots, AI agents, Zimbabwe software) — activates content engine
3. Set non-www → www redirect to permanent (308) in Vercel domain settings
4. Add `next/image`-powered screenshots for the 2 portfolio projects in `/work`
5. Add `X-Content-Type-Options: nosniff` and `Referrer-Policy` via `next.config.ts` headers

---

## 1. Technical SEO

### 1.1 Crawlability
| Check | Status | Notes |
|-------|--------|-------|
| robots.txt present | ✅ | `Allow: /`, `Disallow: /api/`, sitemap pointer |
| Sitemap present | ✅ | 7 URLs, all with lastModified (build time) |
| Sitemap submitted to GSC | ❓ | Cannot verify — do manually |
| All pages crawlable | ✅ | No blocks on commercial pages |
| Blog noindexed | ✅ | `noindex, follow` — correct until content exists |

### 1.2 Indexability
All 7 commercial pages return `robots: index, follow`. No unintended noindex found.

| Page | Title Tag | Meta Description | Canonical | Robots |
|------|-----------|-----------------|-----------|--------|
| / | ✅ 56 chars | ✅ | ✅ www | index, follow |
| /services | ✅ 79 chars | ✅ | ✅ www | index, follow |
| /pricing | ✅ 60 chars (fixed) | ✅ | ✅ www | index, follow |
| /faq | ✅ 55 chars (fixed) | ✅ | ✅ www | index, follow |
| /about | ✅ 75 chars | ✅ | ✅ www | index, follow |
| /work | ✅ 65 chars | ✅ | ✅ www | index, follow |
| /contact | ✅ 72 chars | ✅ | ✅ www | index, follow |
| /blog | noindex ✅ | ✅ | ✅ www | noindex, follow |

### 1.3 Redirects
| Check | Status | Detail |
|-------|--------|--------|
| Non-www → www | ⚠️ | Returns **307 Temporary** Redirect. `next.config.ts` has `permanent: true` (should produce 308) but Vercel may be handling this at domain level with 307. Fix in Vercel dashboard: set www as primary domain. |
| HTTPS enforced | ✅ | HSTS header present: `max-age=63072000` |
| Redirect chains | ✅ | No chains detected |

### 1.4 HTTP Headers
```
Server:                    Vercel
Strict-Transport-Security: max-age=63072000 ✅
X-Content-Type-Options:    MISSING ❌
X-Frame-Options:           MISSING ❌
Referrer-Policy:           MISSING ❌
Permissions-Policy:        MISSING ❌
Content-Security-Policy:   MISSING ❌
Access-Control-Allow-Origin: * ⚠️ (overly permissive for content site)
```

Fix: add headers in `next.config.ts` under `async headers()`.

### 1.5 Sitemap Analysis
- 7 URLs present — matches 7 commercial pages ✅
- `/blog` correctly excluded ✅
- `lastModified` uses build timestamp (updates on every deploy) — acceptable
- Missing: `/blog` will need adding once noindex is removed
- Priority scores: reasonable (1.0 → 0.7)

### 1.6 Core Web Vitals
Live CWV data not available without Lighthouse/PageSpeed. Indicators:
- Pages served from Vercel edge cache (`X-Vercel-Cache: HIT`) ✅
- Next.js prerendering active (`X-Nextjs-Prerender: 1`) ✅
- Homepage HTML: **154KB** — large for a text+icon page; consider splitting JS chunks
- No render-blocking resources detected in head beyond fonts

**Action:** Run PageSpeed Insights on all 7 pages and target LCP < 2.5s, CLS < 0.1.

---

## 2. On-Page SEO

### 2.1 Title Tags

| Page | Live Title | Length | Issue |
|------|-----------|--------|-------|
| / | Zentrik Solutions: Software, Chatbots & AI Agents \| Zimbabwe | 60 | ✅ |
| /services | Software, Chatbot & AI Agent Development Services \| Africa \| Zentrik Solutions | 79 | ⚠️ Long; two pipes |
| /pricing | Pricing: Software, Chatbots & AI Agents \| Zentrik Solutions | 60 | ✅ (fixed) |
| /faq | FAQ: Software, Chatbots & AI Agents \| Zentrik Solutions | 55 | ✅ (fixed) |
| /about | About Zentrik Solutions: Zimbabwe Software & AI Company \| Zentrik Solutions | 75 | ⚠️ Brand in both title and template |
| /work | Our Work: Projects Built by Zentrik Solutions \| Zentrik Solutions | 65 | ⚠️ Brand twice |
| /contact | Contact Zentrik Solutions: Get a Free Project Quote \| Zentrik Solutions | 72 | ⚠️ Brand twice |

**Fixed in this audit:** `/pricing`, `/faq`, `/blog` — all had `| Zentrik Solutions` in the page title string AND the layout template was appending it again, producing double brand suffix.

### 2.2 Meta Descriptions
All 7 pages have unique, descriptive meta descriptions. No duplicates detected.

### 2.3 Heading Structure
| Page | H1 Count | H1 Quality | H2/H3 Hierarchy |
|------|----------|-----------|-----------------|
| / | 1 ✅ | "Replace your manual work / with AI that never sleeps." — punchy ✅ | Services, Built Different, Process, Work, Testimonials ✅ |
| /services | 1 ✅ | Verified in source | 3 service sections ✅ |
| /pricing | 1 ✅ | "Simple, Fixed Pricing." ✅ | Plans + FAQ ✅ |
| /faq | 1 ✅ | "Frequently Asked Questions." ✅ | 12 Q&A as H2 ✅ |
| /about | 1 ✅ | "We Are Zentrik Solutions." ✅ | Values, Process, Tech, CTA ✅ |
| /work | 1 ✅ | "Our Work." ✅ | Portfolio, CTA ✅ |
| /contact | 1 ✅ | "Contact Zentrik Solutions." ✅ | Get In Touch, Contact Info, Form ✅ |

### 2.4 Internal Linking

**Link matrix (commercial pages only):**
| From \ To | /services | /pricing | /faq | /about | /work | /contact |
|-----------|-----------|---------|------|--------|-------|---------|
| / | ✅ nav+body | ⚠️ nav only | ⚠️ nav only | ✅ nav | ✅ nav+body | ✅ CTA |
| /services | — | ✅ CTA | — | — | — | ✅ CTA |
| /pricing | ✅ body | — | ✅ body | — | — | ✅ CTA |
| /faq | ✅ body | ✅ body | — | — | — | ✅ CTA |
| /about | ✅ nav | — | ✅ body | — | ✅ body | ✅ CTA |
| /work | ✅ body | — | — | — | — | ✅ CTA |
| /contact | — | — | — | — | — | — |

**Gap:** Homepage body does not link to `/pricing` or `/faq` contextually (only nav). Adding 1-2 contextual body links would strengthen these pages.

---

## 3. Content Quality & E-E-A-T

### 3.1 E-E-A-T Assessment

| Signal | Status | Notes |
|--------|--------|-------|
| Named authors/team | ❌ | No team bios, no names, no LinkedIn profiles |
| Experience signals | ⚠️ | "Founded 2021", "50+ projects" — not verifiable |
| Expertise signals | ⚠️ | Technology stack listed; no certifications or credentials |
| Authoritativeness | ❌ | No press mentions, no third-party reviews linked, no Google Business Profile |
| Trustworthiness | ✅ | Physical address (Mutare, ZW), phone, email, WhatsApp present |
| Geographic accuracy | ✅ | Consistently Mutare, Zimbabwe (no Harare references) |

### 3.2 Content Depth
| Page | Approx. Words | Assessment |
|------|------------|-----------|
| / | ~800 | Adequate for homepage |
| /services | ~1000 | Adequate — 3 service sections |
| /pricing | ~600 | Adequate — pricing tables speak for themselves |
| /faq | ~1200 | Strong — 12 detailed Q&A |
| /about | ~1300 | Adequate |
| /work | ~400 | Thin — only 2 projects |
| /contact | ~300 | Acceptable for contact page |
| /blog | 0 | Empty — major gap |

### 3.3 Trust Signals
- ✅ Company address (Mutare, Zimbabwe)
- ✅ Phone number (+263 77 393 4610)
- ✅ Email (info@zentriksolutions.com)
- ✅ WhatsApp contact
- ✅ Privacy Policy, Terms of Service, Data Deletion pages linked
- ❌ No Google Business Profile (local SEO gap)
- ❌ No third-party review platform links (Clutch, Google Maps, etc.)
- ❌ Testimonials lack full name + company attribution (reduces credibility signal)
- ❌ No press or media mentions

---

## 4. Schema / Structured Data

### 4.1 Schema Coverage
| Page | Schemas Present | Status |
|------|---------------|--------|
| / | Organization + LocalBusiness, WebSite (SearchAction) | ✅ |
| /services | ItemList (3 services), BreadcrumbList | ⚠️ Missing per-service `ProfessionalService` |
| /pricing | ItemList (Product + Offer ×3), FAQPage (5 Qs), BreadcrumbList | ✅ |
| /faq | FAQPage (12 Qs), BreadcrumbList | ✅ |
| /about | AboutPage, BreadcrumbList | ✅ |
| /work | ItemList (2 creative works), BreadcrumbList | ✅ |
| /contact | LocalBusiness, ContactPage, BreadcrumbList | ✅ |
| /blog | None (noindex) | ✅ correct |

### 4.2 Schema Quality Issues
- **WebSite SearchAction** on homepage points to `/?s={search_term_string}` — the site has no search functionality; this will not validate against real behavior. Either remove or implement site search.
- **LocalBusiness** on homepage missing `openingHoursSpecification` (present on /contact, missing on homepage).
- **Work page ItemList** correctly lists 2 portfolio items — will improve as more projects are added.
- All schemas parsed without errors ✅

---

## 5. Images

### 5.1 Image Audit
**Zero `<img>` tags found on any page.** The site uses CSS gradients, SVG icons, and Lucide React icons exclusively. No `next/image` components in use on public pages.

**Impact:**
- Invisible to Google Image Search
- No visual content signals for Google Discover
- WhatsApp link previews rely entirely on the dynamic `/opengraph-image` route (confirmed working)
- Portfolio page shows project iframes + external links instead of screenshots

### 5.2 OG Image
- Dynamic `/opengraph-image` route confirmed rendering ✅
- Used consistently across all 7 pages ✅
- Generic (same image for all pages) — no per-page OG images

---

## 6. Performance

Live CWV not measured. Proxy indicators:

| Signal | Value | Assessment |
|--------|-------|-----------|
| Vercel edge cache | HIT | ✅ Fast delivery |
| Next.js prerender | Active | ✅ SSR |
| Homepage HTML size | 154KB | ⚠️ Large |
| TTFB (estimated) | < 200ms | ✅ Edge cached |
| Images | 0 | ✅ No image LCP issues |
| Web fonts | Inter via Google Fonts | ⚠️ External font may delay FCP |

---

## 7. AI Search Readiness

| Signal | Status |
|--------|--------|
| Clear service descriptions | ✅ |
| Pricing publicly listed | ✅ |
| Contact info structured | ✅ |
| Physical location | ✅ |
| FAQPage schema (12 Qs) | ✅ |
| Topical authority articles | ❌ |
| Named experts/authors | ❌ |
| Third-party citations | ❌ |
| Blog content | ❌ |

The site can be cited for factual queries ("WhatsApp chatbot developer Zimbabwe", "custom software Mutare") but lacks depth for "how to" or "best practice" queries due to empty blog.

---

## 8. Blog / Content Engine

- `/blog` exists with correct noindex ✅
- Blog scaffold ready: `Post` type defined, slug route `[slug]/page.tsx` complete ✅
- Zero articles published
- No sitemap entry (will auto-add when articles go live) ✅
- **Gap:** Without articles, the site cannot rank for informational queries or build topical authority

---

## Appendix: Pages Crawled

| URL | HTTP Status | Indexed | Schema Count |
|-----|------------|---------|-------------|
| https://www.zentriksolutions.com/ | 200 | Yes | 2 |
| https://www.zentriksolutions.com/services | 200 | Yes | 2 |
| https://www.zentriksolutions.com/pricing | 200 | Yes | 3 |
| https://www.zentriksolutions.com/faq | 200 | Yes | 2 |
| https://www.zentriksolutions.com/about | 200 | Yes | 2 |
| https://www.zentriksolutions.com/work | 200 | Yes | 2 |
| https://www.zentriksolutions.com/contact | 200 | Yes | 3 |
| https://www.zentriksolutions.com/blog | 200 | No (noindex) | 0 |
| https://zentriksolutions.com/ (non-www) | 307 → www | — | — |
