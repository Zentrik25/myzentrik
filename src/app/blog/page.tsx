import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// noindex until the first real article is published.
// Remove this robots block and add /blog to sitemap.ts when content goes live.
export const metadata: Metadata = {
  title: 'Blog: Software, AI & Business Insights | Zentrik Solutions',
  description: 'Practical guides, case studies, and insights on custom software development, WhatsApp chatbots, and AI agents for African businesses.',
  alternates: { canonical: 'https://www.zentriksolutions.com/blog' },
  robots: { index: false, follow: true },
}

// Replace this with real post data from a CMS, MDX files, or Supabase table.
// Shape matches what /blog/[slug] will need.
type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
}

const posts: Post[] = []

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '56px' }}>
        <div className="mx-auto max-w-[740px] px-5 text-center">
          <p className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.48)' }}>Blog</p>
          <h1
            className="mb-6 font-semibold text-white"
            style={{ fontSize: 'clamp(40px, 6vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.28px' }}
          >
            Insights on Software,<br />AI &amp; Business Growth.
          </h1>
          <p style={{ fontSize: '21px', lineHeight: 1.19, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.231px' }}>
            Practical guides, case studies, and honest takes on building tech that works for African businesses.
          </p>
        </div>
      </section>

      {/* Post list */}
      <section style={{ background: '#f5f5f7', padding: '64px 0', minHeight: '40vh' }}>
        <div className="mx-auto max-w-[740px] px-5">
          {posts.length === 0 ? (
            <div className="rounded-2xl p-12 text-center" style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}>
              <p className="mb-2 font-semibold" style={{ fontSize: '21px', color: '#1d1d1f' }}>
                Articles coming soon.
              </p>
              <p className="mb-8 text-[17px]" style={{ color: 'rgba(0,0,0,0.6)' }}>
                We&apos;re writing practical guides on WhatsApp chatbots, AI agents, and software development for businesses across Africa. Check back soon.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/services" className="apple-btn-primary">
                  Explore Our Services <ArrowRight className="ml-2 inline-block h-4 w-4" />
                </Link>
                <Link href="/faq" className="apple-btn-outline">
                  Browse the FAQ
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl p-8 transition-shadow hover:shadow-md"
                  style={{ background: '#ffffff', border: '1px solid #d2d2d7', textDecoration: 'none' }}
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#0071e3' }}>
                    {post.category}
                  </p>
                  <h2
                    className="mb-3 font-semibold"
                    style={{ fontSize: '21px', color: '#1d1d1f', letterSpacing: '0.231px' }}
                  >
                    {post.title}
                  </h2>
                  <p className="mb-4 text-[17px] leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                    {post.excerpt}
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium" style={{ color: '#0066cc' }}>
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#000000', padding: '64px 0' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <h2
            className="mb-4 font-semibold text-white"
            style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px' }}
          >
            Ready to build something?
          </h2>
          <p className="mb-8 text-[17px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Skip the reading and get a free quote for your project within 24 hours.
          </p>
          <Link href="/contact" className="apple-btn-primary">
            Get a Free Quote <ArrowRight className="ml-2 inline-block h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
