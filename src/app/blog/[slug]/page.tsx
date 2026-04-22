import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// ---------------------------------------------------------------------------
// Data layer — swap for CMS / MDX / Supabase fetch when posts exist.
// ---------------------------------------------------------------------------
type PostContent = {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string        // ISO 8601: '2026-05-01'
  updatedAt?: string
  author: string
  body: string               // Rendered HTML or MDX output
}

async function getPost(slug: string): Promise<PostContent | null> {
  // Replace with: fetch from Supabase, read from MDX files, etc.
  void slug
  return null
}

// ---------------------------------------------------------------------------
// generateStaticParams — pre-render known slugs at build time.
// Return [] until posts exist so the route stays dormant.
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
  return []
}

// ---------------------------------------------------------------------------
// generateMetadata — per-article SEO metadata
// ---------------------------------------------------------------------------
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Article not found' }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://www.zentriksolutions.com/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      siteName: 'Zentrik Solutions',
      title: post.title,
      description: post.description,
      url: `https://www.zentriksolutions.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ['https://www.zentriksolutions.com/about'],
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/opengraph-image'],
    },
  }
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: 'Zentrik Solutions',
      url: 'https://www.zentriksolutions.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zentrik Solutions',
      url: 'https://www.zentriksolutions.com',
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: `https://www.zentriksolutions.com/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '48px' }}>
        <div className="mx-auto max-w-[740px] px-5">
          <Link
            href="/blog"
            className="mb-8 flex items-center gap-2 text-sm"
            style={{ color: 'rgba(255,255,255,0.48)' }}
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <p className="section-label mb-4" style={{ color: '#2997ff' }}>{post.category}</p>
          <h1
            className="mb-4 font-semibold text-white"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.07, letterSpacing: '-0.28px' }}
          >
            {post.title}
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            By {post.author} &middot;{' '}
            {new Date(post.publishedAt).toLocaleDateString('en-GB', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ background: '#ffffff', padding: '64px 0' }}>
        <div className="mx-auto max-w-[740px] px-5">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <p className="section-label mb-3">Ready to get started?</p>
          <h2
            className="mb-4 font-semibold"
            style={{ fontSize: '32px', lineHeight: 1.10, letterSpacing: '-0.28px', color: '#1d1d1f' }}
          >
            Let&apos;s build this for your business.
          </h2>
          <p className="mb-8 text-[17px]" style={{ color: 'rgba(0,0,0,0.6)' }}>
            Get a free quote within 24 hours. No commitment required.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="apple-btn-primary">
              Get a Free Quote <ArrowRight className="ml-2 inline-block h-4 w-4" />
            </Link>
            <Link href="/services" className="apple-btn-outline">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
