# SEO Full Audit Report — zentriksolutions.com
**Audit Date:** April 22, 2026
**Audited by:** Claude Code SEO Audit (3-agent parallel analysis)
**Pages crawled:** Homepage, /about, /services, /faq, /pricing, /work, /contact, /privacy-policy

---

## Overall SEO Health Score: 47 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 4/10 | 10.0 |
| Content Quality | 25% | 4.5/10 | 11.3 |
| On-Page SEO | 20% | 5/10 | 10.0 |
| Schema / Structured Data | 10% | 6/10 | 6.0 |
| Performance (CWV signals) | 10% | 7/10 | 7.0 |
| Images | 5% | 1/10 | 0.5 |
| AI Search Readiness | 5% | 4/10 | 2.0 |
| **TOTAL** | **100%** | | **46.8 → 47/100** |

> **Rating: Needs Work.** The site has clean architecture and a functional trust framework but is held back by a critical rendering issue that hides all metadata from crawlers, zero images, no analytics, no team presence, and no fresh content.

---

## Executive Summary

**Business detected:** Software / AI / Chatbot development agency — Zimbabwe-based, globally targeting (Africa, UK, USA).

**Top 5 Critical Issues:**
1. **Metadata not in server-rendered HTML** — title, meta description, canonical, and all OG/Twitter tags appear to be missing from the initial HTML response, likely due to missing `metadata` exports in Next.js page files. This blocks social sharing previews (WhatsApp, Facebook, LinkedIn) and degrades crawler indexability.
2. **Zero images on any page** — no `<img>` tags on the entire site; emoji and SVGs only. Disqualifies the site from Google Discover eligibility and produces blank/generic social previews.
3. **No analytics installed** — the site has no GA4, Vercel Analytics, Plausible, or any tracking. Facebook domain is verified but Pixel is inactive.
4. **No named team members anywhere** — zero individual names, photos, or bios on the site. The single largest E-E-A-T deficiency for a services business.
5. **No blog / fresh content** — Google has no recurring reason to crawl; the domain accrues no topical authority.

**Top 5 Quick Wins:**
1. Add `export const metadata` to every `page.tsx` — fixes title, description, OG tags, Twitter cards, canonical in one pass.
2. Install Vercel Analytics (zero-config, one line) — immediate observability.
3. Add `sameAs` array to Organization JSON-LD — Knowledge Panel signal.
4. Fix FAQ typo on /pricing: `"hours.no"` → `"hours — no"`.
5. Add `/work` to `sitemap.xml`.

---

## Section 1: Technical SEO

### Rendering & Metadata Delivery — CRITICAL

The most impactful finding of this audit: the entire page `<head>` (title, meta description, canonical, all OG/Twitter tags) is **not present in the initial server-rendered HTML**. The site uses Next.js 15 App Router but appears to be missing `metadata` exports on page files — or has a deployment misconfiguration.

**Impact:**
- WhatsApp, Telegram, Slack, Facebook, LinkedIn link previews show blank cards
- Some search crawlers (and all social crawlers) cannot execute JavaScript
- Google may index stale/empty page titles

**Fix:** In every `page.tsx` file, add:
```ts
export const metadata: Metadata = {
  title: 'Page Title | Zentrik Solutions',
  description: '...',
  canonical: 'https://www.zentriksolutions.com/...',
  openGraph: {
    title: '...',
    description: '...',
    url: '...',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: '...', description: '...' },
}
```

In `app/layout.tsx`, add site-wide defaults via `metadata` or `generateMetadata`.

### robots.txt — GOOD

- Returns 200, permits all crawlers, sitemap declared ✅
- Minor: `Host:` directive is Yandex-only (harmless, remove to clean up)

### sitemap.xml — MOSTLY GOOD

- Valid XML, 9 URLs, lastmod dates present ✅
- `/work` page is **missing** — add it
- Legal pages (/privacy-policy, /terms-of-service, /data-deletion) waste crawl budget — add `noindex` to those pages and remove from sitemap
- `lastmod` dates are hardcoded (all `2026-03-17`) — derive from actual content timestamps

### HTTPS — PASS

All internal links use HTTPS. No mixed content detected.

### Security Headers

Not directly verifiable via HTML fetch. Verify via [securityheaders.com](https://securityheaders.com/?q=zentriksolutions.com):
- Should have: HSTS, X-Frame-Options (or CSP frame-ancestors), X-Content-Type-Options, Referrer-Policy, Permissions-Policy

---

## Section 2: Content Quality & E-E-A-T

### E-E-A-T Scorecard

| Dimension | Score | Key Gap |
|-----------|-------|---------|
| Experience | 3/10 | No named practitioners; 2 thin case studies |
| Expertise | 5/10 | Good tech stack transparency; no authored content |
| Authoritativeness | 3/10 | No press, no awards, no external validation |
| Trustworthiness | 7/10 | Privacy policy, HTTPS, contact info present |
| **Overall E-E-A-T** | **4.5/10** | Structurally sound but critically faceless |

### Critical: No Named Team Members

Zero individual names appear anywhere on the site. Google's Quality Rater Guidelines penalise pages where no human is accountable for content. For a business selling $800–$1,500+ software projects, this creates trust friction with both algorithms and prospects.

**Fix:** Add a Team section to `/about` with at minimum the founder's name, photo, role, and LinkedIn URL.

### Content Volume

| Page | Word Count | Assessment |
|------|-----------|------------|
| Homepage | ~2,800 | Good |
| /services | ~1,300 | Adequate |
| /faq | ~1,300 | Good |
| /pricing | ~1,350 | Good |
| /about | ~850 | Thin for an About page |
| /contact | ~850 | Acceptable |
| /work | ~350 | THIN |
| Case studies | ~115 each | CRITICAL — thin content |

### No Blog / Fresh Content

No blog section exists. Google has no recurring reason to crawl. No topical authority beyond static service pages. The domain ceiling on organic performance is set primarily by this gap.

### Strengths

- Clear, differentiated UVP: "Enterprise-grade code at African prices"
- Good semantic tech stack coverage on /services (Next.js, GPT-4, Claude, LangChain, etc.)
- Clean, accessible reading level — appropriate for SME audience
- Strong FAQ section (14 items with direct answers)
- Consistent CTAs throughout

---

## Section 3: On-Page SEO

### Title Tags

| Page | Title | Issues |
|------|-------|--------|
| Homepage | Not in initial HTML | CRITICAL |
| /services | "Software, Chatbot & AI Agent Dev Services \| Zentrik Solutions" (63 chars) | HIGH — 3 chars over limit |
| /faq | "Frequently Asked Questions: Zentrik Solutions Zimbabwe \| Zentrik Solutions" | HIGH — brand duplicated |
| /about | "About Zentrik Solutions: Zimbabwe Software & AI Company" | PASS |
| /contact | "Contact Zentrik Solutions: Get a Free Project Quote \| Zentrik Solutions" | PASS |

### H1 Tags

| Page | H1 | Keyword-Aligned? |
|------|----|-----------------|
| Homepage | "Replace your manual work with AI that never sleeps" | No — compelling but no keywords |
| /services | "Everything You Need to Grow Digitally" | No |
| /pricing | "Simple, Fixed Pricing" | No |
| /work | "Our Work." | No |

Most H1s prioritise brand voice over SEO signalling. The homepage H1 misses "custom software development Zimbabwe" entirely.

### Meta Descriptions

Strong on inner pages (/services, /contact, /about). Homepage meta not confirmed in server-rendered HTML.

### Internal Linking

- All main pages linked from nav/footer ✅
- No contextual inline links within body copy ⚠️
- /work page does not link to /services or /pricing ⚠️
- No breadcrumb navigation on most pages ⚠️

---

## Section 4: Schema / Structured Data

### Inventory

| Page | Schemas Present |
|------|----------------|
| Homepage | `Organization` |
| /about | `BreadcrumbList` |
| /contact | `BreadcrumbList` |
| /services | `ItemList > Service` |
| /faq | `FAQPage`, `BreadcrumbList` |
| /pricing | `FAQPage` |

### Issues

| Severity | Issue |
|----------|-------|
| HIGH | `Organization.logo` points to the OG image — must be a separate dedicated logo file |
| HIGH | `sameAs` array completely absent from Organization — critical for Knowledge Panel |
| HIGH | No `LocalBusiness` schema despite physical address in Mutare |
| HIGH | No `WebSite` schema with `SearchAction` on homepage |
| MEDIUM | `Organization.address` incomplete — missing streetAddress and postalCode |
| MEDIUM | No `aggregateRating` on Organization — star snippets in SERPs unavailable |
| MEDIUM | `contactPoint` absent from Organization |
| MEDIUM | `Service` items on /services missing `url` and `offers` |
| MEDIUM | `/about` breadcrumb schema exists but no visible breadcrumb HTML |
| MEDIUM | No BreadcrumbList on /services or /pricing |
| MEDIUM | `/pricing` FAQ typo: `"hours.no"` — missing space before "no" |
| MEDIUM | Same FAQ questions duplicated across /faq and /pricing (suppress rich results) |
| LOW | `review` items missing `worstRating: "1"` on Rating objects |
| LOW | No `AboutPage` or `ContactPage` types on respective pages |

---

## Section 5: Performance (CWV Signals)

### Strengths
- All scripts are `async` — no render-blocking JS ✅
- Single CSS bundle — no stylesheet stacking ✅
- Self-hosted WOFF2 font with preload hint ✅
- No third-party scripts — zero external performance drag ✅

### Issues

| Severity | Issue |
|----------|-------|
| CRITICAL | No images at all → no LCP element → unknown LCP performance |
| HIGH | No analytics → zero visibility into real-world CWV from CrUX |
| MEDIUM | Font `font-display` strategy unverified — may cause FOIT if not set to `swap` |
| HIGH | Facebook Pixel inactive despite domain verification — retargeting non-functional |

---

## Section 6: Images

| Severity | Issue |
|----------|-------|
| CRITICAL | Zero `<img>` tags on any page — entirely emoji/SVG |
| CRITICAL | No hero image → Google Discover requires ≥1200px image on page to show cards |
| HIGH | `og-image.png` serves as both social share image AND Organization logo — separate these |
| HIGH | All pages share the same static OG image — per-page images dramatically improve CTR |
| MEDIUM | `twitter:image` uses a dynamic Next.js route `/opengraph-image` while `og:image` uses static PNG — verify consistency |
| MEDIUM | No `next/image` usage for WebP conversion, responsive srcset, lazy loading |

---

## Section 7: AI Search Readiness

| Criterion | Status |
|-----------|--------|
| FAQ schema markup | ✅ Present |
| Direct answer format in FAQs | ✅ Good |
| Definitions (what is an AI agent?) | ✅ Present |
| Structured Q&A covering "how much / how long" | ✅ Present |
| Named expert authors | ❌ None |
| Factual claims with cited sources | ❌ None |
| Long-form pillar content | ❌ None |
| Third-party citation signals | ❌ None |
| "Best X in Zimbabwe" type content | ❌ None |

**Assessment (4/10):** The FAQ structure is AI-citation-ready. Everything else is not. The site will not be cited by AI Overviews (Google SGE) or ChatGPT for anything beyond direct brand queries. Competitors publishing "How to build a WhatsApp chatbot for your business in Zimbabwe" will be cited instead.
