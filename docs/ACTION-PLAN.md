# SEO Action Plan — zentriksolutions.com
**Generated:** 22 April 2026  
**Based on:** FULL-AUDIT-REPORT.md (score: 63/100)  
**Target score:** 80/100 within 60 days

---

## Priority Key
- **CRITICAL** — Blocks indexing or causes ranking penalties. Fix immediately.
- **HIGH** — Significant ranking or trust impact. Fix within 1 week.
- **MEDIUM** — Optimization opportunity. Fix within 1 month.
- **LOW** — Nice to have. Backlog.

---

## CRITICAL

### C1 — Fix duplicate `| Zentrik Solutions` title suffix
**Status: FIXED in code — deploy required**  
**Files:** `src/app/pricing/page.tsx`, `src/app/faq/page.tsx`, `src/app/blog/page.tsx`  
**What:** The layout `title.template: '%s | Zentrik Solutions'` was appending the brand name to page titles that already included it, producing "Pricing: Software, Chatbots & AI Agents | Zentrik Solutions | Zentrik Solutions" in SERPs — a spam signal that can depress CTR and trigger quality filters.  
**Fix:** Strip `| Zentrik Solutions` from the `title` string in each page's `metadata` export. Template handles it.  
**Action:** Deploy the committed fix.

---

### C2 — Upgrade non-www redirect to permanent (308/301)
**Status: Open — requires Vercel/Cloudflare config**  
**What:** `https://zentriksolutions.com/*` currently redirects to www with HTTP 307 (Temporary). A temporary redirect tells Google not to consolidate PageRank, meaning any backlinks to the bare domain lose equity. With `permanent: true` in `next.config.ts`, Next.js should emit 308, but Vercel's domain-level handling appears to override this with 307.  
**Fix options (pick one):**
1. **Vercel dashboard** → Domains → set `www.zentriksolutions.com` as primary domain. Vercel will create a permanent redirect from `zentriksolutions.com`.
2. **Cloudflare** → Page Rules or Redirect Rules → `zentriksolutions.com/*` → 301 → `https://www.zentriksolutions.com/$1`  
**Verify:** `curl -sI https://zentriksolutions.com/ | grep -E 'HTTP|Location'` — should show 301 or 308.

---

## HIGH

### H1 — Add security response headers
**Files:** `next.config.ts`  
**What:** Missing `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`. These are now baseline expectations in Google's quality signals and required for passing security audits / trust evaluations by AI search engines.  
**Fix:** Add to `next.config.ts`:
```ts
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    },
  ]
},
```

---

### H2 — Add real images to the portfolio page
**File:** `src/app/work/page.tsx`  
**What:** Zero `<img>` tags exist on the entire site. The `/work` page shows an iframe of The Granite Post and an external WhatsApp link for Molly — no screenshots, no visual proof of the work. Images are critical for:
- Google Discover eligibility (requires images ≥ 1200px wide with `max-image-preview: large`)
- Trust signals (seeing the actual product builds confidence)
- Image search visibility  
**Fix:**
1. Take a 1280×720px screenshot of each project (desktop view)
2. Add to `/public/images/work/granite-post.jpg` and `/public/images/work/molly-chatbot.jpg`
3. Replace or supplement the iframe with `<Image>` components using descriptive alt text
4. Remove iframe (sandbox security risk even after current fix)  
**Alt text examples:**
- `"The Granite Post — BBC-style news platform homepage built by Zentrik Solutions"`
- `"Molly WhatsApp AI Chatbot — automated booking and support flow"`

---

### H3 — Publish first 3 blog articles to activate content engine
**Files:** `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`  
**What:** The blog scaffold is complete (routes, types, layout). But `posts: Post[] = []` and `robots: noindex` — zero content, zero ranking potential. Without articles, the site cannot capture informational searches that feed the commercial funnel.  
**Fix — Step 1:** Write these three articles first (highest search intent match):
1. `"How WhatsApp Chatbots Work for Zimbabwe Businesses in 2026"` — `/blog/whatsapp-chatbot-zimbabwe-businesses`
2. `"Custom Software vs Off-the-Shelf: What African SMEs Need to Know"` — `/blog/custom-software-vs-off-the-shelf-africa`
3. `"What Is an AI Agent? A Plain-English Guide for Business Owners"` — `/blog/what-is-an-ai-agent-business-guide`  
**Fix — Step 2:** Populate the `posts` array, remove `robots: { index: false }`, add `/blog` to `src/app/sitemap.ts`.  
**Expected impact:** Opens site to informational search traffic; builds topical authority for AI/chatbot/software queries.

---

### H4 — Add named author / team page for E-E-A-T
**What:** Google's Helpful Content and E-E-A-T guidelines require demonstrable first-hand expertise. Currently "Zentrik Solutions" is an anonymous entity — no named team members, no LinkedIn links, no credentials. This is a trust gap for B2B buyers and a ranking weakness for expert-query terms.  
**Fix:**
1. Add `/about#team` section with at least one named person (Founder/CTO), photo, LinkedIn URL
2. Add `author` field to blog `PostContent` type and populate with full name
3. Add `Person` schema to the author entity in `BlogPosting` schema  
**Minimum viable:** One person, one photo, one LinkedIn link.

---

### H5 — Register Google Business Profile
**What:** Local SEO is zero without a GBP listing. "Software developer Mutare Zimbabwe" and similar local queries show map pack results. Currently Zentrik has no map pack presence.  
**Fix:**
1. Go to business.google.com
2. Create listing: "Zentrik Solutions", category "Software Company", address Mutare, Manicaland, Zimbabwe
3. Add phone, website, business hours (matching the schema: Mon-Fri 08:00-17:00)
4. Verify via postcard or phone
5. Encourage first 5 reviews from real clients  
**Expected impact:** Appears in local map pack for Zimbabwe software queries within 4-6 weeks of verification.

---

## MEDIUM

### M1 — Fix services page title (too long, two pipes)
**File:** `src/app/services/page.tsx` line 6  
**Current:** `"Software, Chatbot & AI Agent Development Services | Africa"` → rendered as `"Software, Chatbot & AI Agent Development Services | Africa | Zentrik Solutions"` (79 chars)  
**Issue:** Two pipe characters looks machine-generated in SERPs; 79 chars truncates on mobile.  
**Fix:** `"Software, Chatbot & AI Agent Services | Zimbabwe & Africa"` (57 chars after template appends brand)

---

### M2 — Remove WebSite SearchAction or implement site search
**File:** `src/app/page.tsx`  
**What:** The `WebSite` schema includes a `SearchAction` pointing to `/?s={search_term_string}`. This URL returns the homepage (no search functionality). If Google validates this, it may generate a Sitelinks Searchbox that leads to a broken experience.  
**Fix:** Remove the `potentialAction` from the WebSite schema until real site search is implemented.

---

### M3 — Add OpeningHoursSpecification to homepage LocalBusiness schema
**File:** `src/app/page.tsx`  
**What:** The LocalBusiness schema on the homepage is missing `openingHoursSpecification` (it exists on the /contact page but not the homepage). Both should be consistent.  
**Fix:** Add `openingHoursSpecification` (Mon-Fri 08:00-17:00) to the homepage Organization/LocalBusiness schema.

---

### M4 — Add per-page OG images (articles + key commercial pages)
**What:** All 7 pages share the same generic `/opengraph-image`. When shared on WhatsApp/Twitter, every page looks identical. Per-page images increase CTR on social shares.  
**Fix:**
- Pricing page: OG image showing pricing table visual
- Work page: OG image showing project screenshots side by side
- Blog articles: Auto-generated per-article OG images using `next/og` with title text overlay  
**Priority:** Blog articles first (every new article needs a unique OG image).

---

### M5 — Add contextual body links from homepage to /pricing and /faq
**File:** `src/app/page.tsx`  
**What:** The homepage body only contextually links to `/services`, `/work`, and `/contact`. `/pricing` and `/faq` are only reachable via nav — no body context links.  
**Fix:** In the "services overview" section, after each service card, add a `"See pricing →"` link. In the testimonials section, add `"Have a question? Browse the FAQ →"`.

---

### M6 — Add per-service ProfessionalService schema to /services
**File:** `src/app/services/page.tsx`  
**What:** The services page has an `ItemList` of services but each item is a plain `ListItem`, not a `ProfessionalService` type. `ProfessionalService` allows `serviceType`, `areaServed`, `provider`, and `hasOfferCatalog`.  
**Fix:** Change each item in the `ItemList` to use `@type: ProfessionalService` with `serviceType`, `provider: { @type: Organization }`, `areaServed: ["Zimbabwe", "Africa", "Global"]`.

---

### M7 — Add verifiable client testimonials
**File:** `src/app/page.tsx`  
**What:** Current testimonials show first name only (e.g., "Tendai M.") with no company, no LinkedIn, no photo, no date. Google's quality raters flag testimonials without attribution.  
**Fix:**
- Get written permission from 3 real clients to use: full name, company name, role, LinkedIn profile (or photo)
- Replace placeholder testimonials with verified ones
- Add `Review` schema per testimonial with `author: { @type: Person, name: "..." }`

---

### M8 — Run PageSpeed Insights on all 7 pages
**What:** No live CWV data was captured in this audit. Homepage HTML is 154KB which is large for a text+icon page.  
**Fix:**
1. Run `https://pagespeed.web.dev/` on all 7 pages
2. Target: LCP < 2.5s, CLS < 0.1, INP < 200ms
3. If LCP fails: check if Google Font is blocking render (self-host Inter or use `display: swap` — already using Next.js font which handles this)
4. If HTML size is the issue: investigate which JS chunks are hydrating unnecessarily on first load

---

## LOW

### L1 — Add sitemap `<news:news>` extension for blog articles
**File:** `src/app/sitemap.ts` (after blog goes live)  
**What:** Google News sitemaps (`<news:news>`) allow articles published in the last 48 hours to appear in Google News. The standard sitemap won't suffice for news discovery.  
**Fix:** Create `src/app/news-sitemap.ts` that returns articles published in the last 48 hours with `<news:publication>` and `<news:publication_date>` elements. Only needed once the blog is active.

---

### L2 — Add `hreflang` if targeting UK/USA specifically
**What:** The site serves clients in the UK and USA but has no `hreflang` tags. Since content is English-only and there are no language variants, this is low priority. However, if regional pricing or landing pages are created in future, `hreflang` will be needed.  
**Fix:** Not needed now. Add when region-specific pages are created.

---

### L3 — Reduce Access-Control-Allow-Origin scope
**What:** All responses return `Access-Control-Allow-Origin: *`. For a content site this is overly permissive (set by Vercel defaults).  
**Fix:** Not critical for SEO, but for security hygiene: set CORS to specific origins in `next.config.ts` headers if APIs are being cross-origin accessed. Otherwise leave as-is (Vercel default).

---

### L4 — Add `favicon.ico` and web app manifest
**What:** Not checked in this audit but worth verifying:
- `/favicon.ico` returns 200 ✓ (assumed)
- `/manifest.json` or `<link rel="manifest">` for PWA/installability signals
**Fix:** Add `src/app/manifest.ts` with site name, colors, and icon references if not present.

---

## GSC Manual Actions Required

These cannot be fixed in code — must be done in Google Search Console:

1. **Verify property** for `www.zentriksolutions.com` (if not already done)
2. **Submit sitemap:** `https://www.zentriksolutions.com/sitemap.xml`
3. **Request indexing** for all 7 URLs via URL Inspection Tool:
   - `https://www.zentriksolutions.com/`
   - `https://www.zentriksolutions.com/services`
   - `https://www.zentriksolutions.com/pricing`
   - `https://www.zentriksolutions.com/faq`
   - `https://www.zentriksolutions.com/about`
   - `https://www.zentriksolutions.com/work`
   - `https://www.zentriksolutions.com/contact`
4. **Monitor Coverage report** — confirm all 7 pages move to "Indexed" state
5. **Check redirect** — use URL Inspection on `zentriksolutions.com` (non-www) to confirm Google sees the permanent redirect

---

## 60-Day Roadmap

| Week | Actions | Expected Score Impact |
|------|---------|----------------------|
| Week 1 | Deploy title fix (C1), permanent redirect (C2), security headers (H1) | +5 pts Technical |
| Week 1-2 | Portfolio images (H2), GBP listing (H5), GSC manual actions | +4 pts Content/Trust |
| Week 2-3 | Publish 3 blog articles (H3) | +5 pts Content |
| Week 3-4 | Named team section (H4), real testimonials (M7) | +4 pts E-E-A-T |
| Week 4 | Services title fix (M1), SearchAction fix (M2), body links (M5) | +2 pts On-Page |
| Month 2 | PageSpeed audit (M8), schema improvements (M3, M6), 3 more articles | +7 pts mixed |
| **Target** | | **~80/100** |
