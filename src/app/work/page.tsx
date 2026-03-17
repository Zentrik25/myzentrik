import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight, Globe, Bot, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/lib/button-variants'

export const metadata: Metadata = {
  title: 'Our Work — Projects Built by Zentrik Solutions',
  description:
    'See the real websites, chatbots, and AI tools built by Zentrik Solutions for clients across Zimbabwe and Africa.',
  alternates: { canonical: 'https://www.zentriksolutions.com/work' },
  openGraph: {
    title: 'Our Work — Projects Built by Zentrik Solutions',
    description: 'Real projects. Real results. See what Zentrik Solutions has built for clients across Zimbabwe and Africa.',
    url: 'https://www.zentriksolutions.com/work',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Zentrik Solutions — Our Work' }],
  },
}

const projects = [
  {
    name: 'The Granite Post',
    url: 'https://www.thegranite.co.zw',
    displayUrl: 'thegranite.co.zw',
    category: 'News Platform',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Vercel'],
    description:
      'A modern, BBC-style online news platform for Zimbabwe. Built with a full content management system, SEO-optimised article pages, RSS feeds, sitemaps, and a responsive design that loads fast on any connection.',
    highlights: [
      'Full CMS with article publishing workflow',
      'SEO-optimised with JSON-LD NewsArticle schema',
      'Mobile-first, fast-loading on Zimbabwe networks',
      'RSS feed + XML sitemap for Google News indexing',
    ],
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    status: 'Live',
  },
]

const workSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Projects by Zentrik Solutions',
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'WebSite',
      name: p.name,
      url: p.url,
      description: p.description,
    },
  })),
}

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 border-violet-500/40 bg-violet-500/10 text-violet-300">
            Portfolio
          </Badge>
          <h1 className="mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Our Work
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Real projects we&apos;ve designed, built, and deployed for clients across Zimbabwe and Africa.
            Every project is live, production-grade, and built to last.
          </p>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-violet-500/30 hover:bg-white/[0.07] lg:p-10"
              >
                {/* Hover glow */}
                <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${project.color} opacity-0 blur-3xl transition-opacity group-hover:opacity-10`} />

                <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                  {/* Left — info */}
                  <div>
                    {/* Header */}
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.color}`}>
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-2xl font-black text-white">{project.name}</h2>
                          <span className="rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-semibold text-green-400">
                            ● {project.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{project.category}</p>
                      </div>
                    </div>

                    <p className="mb-6 leading-relaxed text-gray-400">{project.description}</p>

                    {/* Highlights */}
                    <ul className="mb-6 space-y-2">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="mt-0.5 text-violet-400">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: 'lg' }),
                        'inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500'
                      )}
                    >
                      Visit {project.displayUrl}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Right — preview card */}
                  <div className="relative">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a12] shadow-2xl">
                      {/* Browser chrome */}
                      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                        <div className="flex gap-1.5">
                          <div className="h-3 w-3 rounded-full bg-red-500/60" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                          <div className="h-3 w-3 rounded-full bg-green-500/60" />
                        </div>
                        <div className="flex-1 rounded-md bg-white/5 px-3 py-1 text-center text-xs text-gray-500">
                          {project.displayUrl}
                        </div>
                        <ArrowUpRight className="h-3.5 w-3.5 text-gray-600" />
                      </div>

                      {/* Live iframe preview */}
                      <div className="relative h-64 w-full overflow-hidden">
                        <iframe
                          src={project.url}
                          className="h-[600px] w-[200%] origin-top-left scale-50 border-0"
                          title={`${project.name} preview`}
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                        />
                        {/* Click overlay — sends user to the real site */}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#0a0a12]/80 via-transparent to-transparent pb-4 opacity-0 transition-opacity group-hover:opacity-100"
                        >
                          <span className="flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white">
                            Visit Site <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More coming soon */}
          <div className="mt-12 rounded-2xl border border-dashed border-white/10 p-10 text-center">
            <p className="mb-2 text-lg font-semibold text-white">More projects coming soon</p>
            <p className="mb-6 text-gray-500">
              We&apos;re adding more client work to our portfolio. Want yours to be next?
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500'
              )}
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
