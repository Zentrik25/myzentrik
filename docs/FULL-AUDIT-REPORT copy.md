# SEO Audit Report — zentriksolutions.com
**Date:** 2026-04-22
**Auditor:** Claude Code (seo-audit skill)
**Pages Crawled:** 7 — /, /services, /about, /pricing, /work, /faq, /contact

---

## Executive Summary

| | |
|---|---|
| **Overall SEO Health Score** | **56 / 100** |
| **Business Type** | B2B Software Services Agency — Zimbabwe, serving Africa + globally |
| **Framework** | Next.js (App Router) on Vercel |
| **Google Index Status** | ⚠️ Only 1 page indexed (`site:` query returned homepage only) |

### Top 5 Critical Issues
1. **Only homepage is indexed by Google** — inner pages (/services, /pricing, etc.) appear invisible to search engines
2. **Homepage missing canonical tag** — duplicate content risk across www/non-www and trailing-slash variants
3. **Services page missing title, meta description, canonical, and OG tags** — the primary revenue page has no SEO presence
4. **Pricing page missing title, meta description, canonical, and OG tags** — same problem; no social preview either
5. **No GA4 / Google Search Console detected** — no data exists to diagnose, monitor, or improve performance

### Top 5 Quick Wins
1. Add canonical tags to /, /services, /pricing (30-minute fix in Next.js metadata)
2. Add `<title>` and `<meta name="description">` to /services and /pricing (30 minutes)
3. Add complete OG + Twitter Card tags to /, /services, /pricing (30 minutes)
4. Expand FAQPage schema on /faq to cover all 13 questions (currently only 5 of 13 are marked up)
5. Submit sitemap.xml to Google Search Console and verify all 7 pages get indexed

---

## 1. Technical SEO — Score: 55 / 100 (Weight: 25%)

### 1.1 robots.txt — ✅ Pass
```
User-Agent: *
Allow: /
Sitemap: https://www.zentriksolutions.com/sitemap.xml
```
- All paths crawlable, no accidental disallow rules
- Sitemap URL correctly declared

### 1.2 sitemap.xml — ✅ Present / ⚠️ Minor Issues
| URL | lastmod | changefreq | priority |
|-----|---------|------------|----------|
| / | 2026-04-22 | weekly | 1.0 |
| /services | 2026-04-22 | weekly | 0.9 |
| /pricing | 2026-04-22 | weekly | 0.9 |
| /faq | 2026-04-22 | monthly | 0.8 |
| /about | 2026-04-22 | monthly | 0.8 |
| /contact | 2026-04-22 | monthly | 0.8 |
| /work | 2026-04-22 | monthly | 0.7 |

- ✅ All 7 core pages included, priorities are sensible
- ⚠️ All `lastmod` dates are identical — Google ignores static lastmod; update dynamically on content change
- ℹ️ /privacy-policy and /terms-of-service absent from sitemap — acceptable

### 1.3 Canonical Tags — ❌ Critical Gap
| Page | Canonical |
|------|-----------|
| / | ❌ MISSING |
| /services | ❌ MISSING |
| /pricing | ❌ MISSING |
| /about | ✅ Present |
| /work | ✅ Present |
| /faq | ✅ Present |
| /contact | ✅ Present |

3 of 7 pages — including the homepage and top commercial page — are missing canonical tags. This means Googlebot cannot declare a preferred URL version, increasing duplicate-content risk.

### 1.4 Google Indexation — ❌ Critical
- `site:zentriksolutions.com` returned **only 1 result** (homepage)
- A 7-page site should have all pages indexed within days of launch
- Possible causes: site is new (recently launched), canonical confusion, or lack of external backlinks to trigger crawl

### 1.5 HTTPS / Security
- ✅ Vercel enforces HTTPS by default
- Security response headers (CSP, HSTS, X-Frame-Options) not testable via fetch — run https://securityheaders.com

### 1.6 Analytics — ❌ Missing
- No GA4 or GTM code detected in page source
- No Google Search Console verification tag observed
- Without analytics there is no way to track traffic, rankings, clicks, or conversion

---

## 2. Content Quality — Score: 55 / 100 (Weight: 25%)

### 2.1 E-E-A-T Assessment
| Signal | Status | Notes |
|--------|--------|-------|
| Experience | ⚠️ Weak | Claims "5+ years" and "50+ projects" — unverified |
| Expertise | ✅ Moderate | Tech stacks named (Next.js, GPT-4, Claude, WhatsApp API) |
| Authority | ❌ Weak | No external links to/from authoritative sources; minimal Google index |
| Trustworthiness | ⚠️ Moderate | Testimonials present but fully anonymous |

**Key gaps:**
- No named team members or bios anywhere on the site
- All three testimonials are anonymous quotes — no client name, company, or verifiable source
- Aggregate Rating schema claims 5/5 from 3 reviews — no Google Business or Clutch.co link to validate
- No press mentions, awards, or partner certifications visible

### 2.2 Page-by-Page Content Depth
| Page | Est. Words | Assessment |
|------|-----------|------------|
| / | ~600 | Good — punchy, benefit-led |
| /services | ~1,200–1,500 | Good — detailed three-pillar structure |
| /about | ~600 | Adequate — values-focused, lacks team detail |
| /pricing | ~400 | Adequate — clear tier table + inline FAQ |
| /work | ~300 | ❌ Thin — only 2 projects, no detailed case studies |
| /faq | ~800 | Good — 13 practical questions |
| /contact | ~200 | Acceptable for a contact page |

### 2.3 Blog / Content Strategy — ❌ None
No blog, news, or resources section exists. This means the site cannot rank for high-value informational queries:
- "how much does a WhatsApp chatbot cost in Zimbabwe"
- "custom software development Africa"
- "AI agent vs chatbot for business"
- "best software company Zimbabwe"

Without content, the site depends 100% on direct brand search and word-of-mouth.

### 2.4 Readability
- ✅ Headlines are punchy and benefit-driven
- ✅ Single H1 per page, logical H2/H3 hierarchy throughout
- ✅ Process section (Discovery → Proposal → Build → Launch) is clear and scannable
- ✅ No excessive technical jargon for a B2B services audience

---

## 3. On-Page SEO — Score: 55 / 100 (Weight: 20%)

### 3.1 Title Tags
| Page | Title | Issues |
|------|-------|--------|
| / | "Zentrik Solutions: Software, Chatbots & AI Agents" | ⚠️ No geo keyword ("Zimbabwe") |
| /services | ❌ NOT FOUND | Critical — core revenue page |
| /about | "About Zentrik Solutions: Zimbabwe Software & AI Company \| Zentrik Solutions" | ⚠️ 74 chars — borderline long |
| /pricing | ❌ NOT FOUND | Critical |
| /work | "Our Work: Projects Built by Zentrik Solutions \| Zentrik Solutions" | ✅ |
| /faq | "FAQ: Software, Chatbots & AI Agents \| Zentrik Solutions" | ✅ |
| /contact | "Contact Zentrik Solutions: Get a Free Project Quote \| Zentrik Solutions" | ✅ |

### 3.2 Meta Descriptions
| Page | Status |
|------|--------|
| / | ❌ MISSING — OG description exists but no `<meta name="description">` tag |
| /services | ❌ MISSING |
| /about | ✅ Present and well-written |
| /pricing | ❌ MISSING |
| /work | ✅ Present |
| /faq | ✅ Present |
| /contact | ✅ Present |

### 3.3 Open Graph & Twitter Cards
| Page | OG Tags | Twitter Card |
|------|---------|-------------|
| / | ⚠️ Partial (image+url confirmed; og:title unclear) | ❌ MISSING |
| /services | ❌ MISSING | ❌ MISSING |
| /about | ✅ Complete | ✅ summary_large_image |
| /pricing | ❌ MISSING | ❌ MISSING |
| /work | ✅ Complete | ✅ summary_large_image |
| /faq | ✅ Complete | ✅ Present |
| /contact | ✅ Present | ✅ Present |

When /services or /pricing is shared on WhatsApp, LinkedIn, or Twitter they render with no card — a missed conversion touchpoint every time someone shares a link.

### 3.4 Heading Structure
- ✅ Each page has exactly one H1
- ✅ Logical H2/H3 hierarchy throughout
- ⚠️ Homepage H1 — "Replace your manual work with AI that never sleeps." — strong copy but zero keyword signal (no "Zimbabwe", "software", "chatbot")
- ⚠️ Services H1 — "Everything You Need to Grow Digitally." — also keyword-light

### 3.5 Internal Linking
- ✅ Navigation and footer cover all core pages
- ✅ Service section anchors (/services#software, #chatbots, #ai-agents) are correctly used
- ❌ No contextual cross-links in body copy (e.g., /pricing not linked from /services content)
- ❌ No individual case study pages — /work is a dead end with 2 entries only
- ❌ External links to client work (thegranite.co.zw) exist but aren't labeled with `rel="noopener"` status unknown

---

## 4. Schema / Structured Data — Score: 60 / 100 (Weight: 10%)

### 4.1 Implemented Schemas
| Schema | Page | Quality |
|--------|------|---------|
| Organization | / | ✅ name, location, services, contact, hours |
| AggregateRating | / | ⚠️ 5/5 from 3 reviews — low count, no source URL |
| ItemList (services) | /services | ✅ |
| BreadcrumbList | /services, /about, /contact | ✅ |
| AboutPage | /about | ✅ |
| ItemList (portfolio) | /work | ✅ |
| FAQPage | /faq, /pricing | ⚠️ Only 5 of 13 FAQ questions marked up on /faq |
| ContactPage | /contact | ✅ |

### 4.2 Missing High-Value Schemas
| Schema | Recommended Page | Impact |
|--------|-----------------|--------|
| **LocalBusiness** | /contact | High — critical for "software company Zimbabwe" local pack |
| **PriceSpecification / Offer** | /pricing | High — enables price rich snippets in SERPs |
| **Person** | /about | Medium — E-E-A-T signal for named team members |
| **Service** (per service) | /services | Medium — individual service entities |
| **FAQPage** (all 13 Qs) | /faq | Medium — only 5 of 13 questions in current schema |

### 4.3 AggregateRating Risk
`"ratingValue": "5", "reviewCount": "3"` on the homepage schema — Google may distrust a perfect 5/5 from only 3 reviews and could suppress this markup. Link to a Google Business Profile or Clutch.co to validate.

---

## 5. Performance — Score: 70 / 100 (estimated, Weight: 10%)

*Lighthouse / Playwright not available. Estimates based on stack signals.*

| Signal | Status |
|--------|--------|
| Framework | Next.js App Router — excellent baseline performance ✅ |
| Hosting | Vercel — global CDN, automatic edge caching ✅ |
| Performance monitoring code | requestAnimationFrame / performance API detected ✅ |
| Image optimization | Unclear — no `<img>` tags detected; likely CSS backgrounds ⚠️ |
| JS bundle splitting | Next.js handles automatically ✅ |
| CWV (LCP / INP / CLS) | Not measurable without Lighthouse |

**Action:** Run PageSpeed Insights on all 7 pages. If hero sections use CSS `background-image` instead of `<Image priority>`, LCP will be suboptimal. Next.js `<Image>` with `priority` prop is required for above-the-fold images.

---

## 6. Images — Score: 35 / 100 (Weight: 5%)

| Finding | Affected Pages | Severity |
|---------|---------------|----------|
| No `<img>` tags with alt text on homepage | / | High |
| No images with alt text on /services | /services | High |
| Chatbot demo image missing alt text | /work | Medium |
| Emoji used as portfolio thumbnails (📰, 🤖) | /, /work | Medium |
| og:image 1200×630 present | Most pages | ✅ |
| og:image missing on /services, /pricing | /services, /pricing | High |
| WebP/AVIF format status | All | Unknown |

The site appears to rely heavily on CSS backgrounds and emoji for visual content. Consequences:
- Google Images cannot discover or index site visuals
- Screen readers receive no image context
- LCP cannot benefit from `<Image priority>` optimization
- Emoji-as-graphics is not accessible and degrades perceived professionalism

---

## 7. AI Search Readiness — Score: 62 / 100 (Weight: 5%)

| Signal | Status |
|--------|--------|
| Organization schema | ✅ |
| FAQ schema | ✅ (partial) |
| Clear, structured service descriptions | ✅ |
| Geographic specificity ("Mutare, Zimbabwe") | ✅ |
| Named human authors / experts | ❌ None |
| External citations / backlinks | ❌ Not found |
| Verifiable statistics with sources | ❌ Unlinked claims only |

AI search engines (ChatGPT, Perplexity, Google AI Overviews) preferentially cite pages with named experts, verifiable data, and strong external authority. Zentrik currently lacks all three.

---

## Overall Score Breakdown

| Category | Weight | Raw Score | Weighted Score |
|----------|--------|-----------|---------------|
| Technical SEO | 25% | 55 | 13.75 |
| Content Quality | 25% | 55 | 13.75 |
| On-Page SEO | 20% | 55 | 11.00 |
| Schema / Structured Data | 10% | 60 | 6.00 |
| Performance | 10% | 70 | 7.00 |
| Images | 5% | 35 | 1.75 |
| AI Search Readiness | 5% | 62 | 3.10 |
| **TOTAL** | **100%** | — | **56 / 100** |

---

## Page-by-Page SEO Scorecard

| Page | Title | Meta Desc | Canonical | OG | Twitter | Schema | Grade |
|------|-------|-----------|-----------|-----|---------|--------|-------|
| / | ✅ | ❌ | ❌ | ⚠️ | ❌ | ✅ | D |
| /services | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | F |
| /about | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | A |
| /pricing | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | F |
| /work | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | A |
| /faq | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ | B |
| /contact | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | A |

---

*Generated by Claude Code seo-audit skill | 2026-04-22*
