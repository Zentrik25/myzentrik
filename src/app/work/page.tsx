import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight, Globe, Bot, Printer, Newspaper } from 'lucide-react'
import { CheckCircle2 } from 'lucide-react'
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
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Zentrik Solutions — Our Work' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image'],
  },
}

const projects = [
  {
    name: 'The Granite Post',
    url: 'https://www.thegranite.co.zw',
    displayUrl: 'thegranite.co.zw',
    category: 'News Platform',
    type: 'website',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Vercel'],
    description:
      'A modern, BBC-style online news platform for Zimbabwe. Built with a full content management system, SEO-optimised article pages, RSS feeds, sitemaps, and a responsive design that loads fast on any connection.',
    highlights: [
      'Full CMS with article publishing workflow',
      'SEO-optimised with JSON-LD NewsArticle schema',
      'Mobile-first, fast-loading on Zimbabwe networks',
      'RSS feed + XML sitemap for Google News indexing',
    ],
    Icon: Newspaper,
    color: 'from-blue-500 to-cyan-500',
    status: 'Live',
  },
  {
    name: 'Zim News Online',
    url: 'https://www.zimnewsonline.com',
    displayUrl: 'zimnewsonline.com',
    category: 'Online News Portal',
    type: 'website',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'],
    description:
      'Zimbabwe\'s online news portal delivering breaking news, politics, business, and sport. Built for speed and high traffic with server-side rendering and optimised media delivery.',
    highlights: [
      'Breaking news with real-time updates',
      'Optimised for high-traffic on low-bandwidth connections',
      'Google News approved with news sitemap',
      'Social sharing with WhatsApp-ready OG previews',
    ],
    Icon: Globe,
    color: 'from-green-500 to-emerald-600',
    status: 'Live',
  },
  {
    name: 'PrintZone',
    url: 'https://www.printzone.co.zw',
    displayUrl: 'printzone.co.zw',
    category: 'E-Commerce Platform',
    type: 'website',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'EcoCash Integration'],
    description:
      'A full e-commerce platform for Zimbabwe\'s leading print and branding company. Customers can order business cards, banners, flyers, and branded merchandise online with EcoCash and USD card payments.',
    highlights: [
      'Online ordering with file upload & design preview',
      'EcoCash & USD card payment integration',
      'Admin dashboard for order management',
      'Automated WhatsApp order confirmation',
    ],
    Icon: Printer,
    color: 'from-orange-500 to-red-500',
    status: 'Live',
  },
  {
    name: 'Molly — WhatsApp AI Chatbot',
    url: 'https://wa.me/263712482084',
    displayUrl: '+263 712 482 084',
    category: 'WhatsApp Chatbot · AI Agent',
    type: 'chatbot',
    tags: ['WhatsApp Business API', 'AI', 'Node.js', 'Automation'],
    description:
      'Molly is a fully autonomous WhatsApp AI chatbot built by Zentrik Solutions. She handles customer enquiries, bookings, FAQs, and lead capture — 24 hours a day, 7 days a week, with no human intervention needed.',
    highlights: [
      '24/7 automated customer support on WhatsApp',
      'Natural language understanding — no rigid menus',
      'Handles bookings, FAQs, and lead capture',
      'Seamless handoff to human agent when needed',
    ],
    Icon: Bot,
    color: 'from-violet-500 to-purple-600',
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
      '@type': p.type === 'chatbot' ? 'SoftwareApplication' : 'WebSite',
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
          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-400" />{projects.length} Live Projects</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-400" />Websites + Chatbots</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-400" />Zimbabwe & Global</span>
          </div>
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
                <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${project.color} opacity-0 blur-3xl transition-opacity group-hover:opacity-10`} />

                <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                  {/* Left — info */}
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.color}`}>
                        <project.Icon className="h-6 w-6 text-white" />
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

                    <ul className="mb-6 space-y-2">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: 'lg' }),
                        'inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500'
                      )}
                    >
                      {project.type === 'chatbot' ? 'Chat with Molly on WhatsApp' : `Visit ${project.displayUrl}`}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Right — preview */}
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a12] shadow-2xl">
                    {project.type === 'chatbot' ? (
                      /* Chatbot preview card */
                      <div className="flex h-80 flex-col">
                        {/* Chat header */}
                        <div className={`flex items-center gap-3 bg-gradient-to-r ${project.color} px-5 py-4`}>
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white">M</div>
                          <div>
                            <p className="font-bold text-white">Molly</p>
                            <p className="text-xs text-white/70">● Online now · AI Chatbot by Zentrik</p>
                          </div>
                        </div>
                        {/* Messages */}
                        <div className="flex flex-1 flex-col gap-3 overflow-hidden bg-[#0f0f18] p-4">
                          <div className="flex gap-2">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">M</div>
                            <div className="max-w-[75%] rounded-2xl rounded-tl-none bg-white/10 px-4 py-2.5 text-sm text-gray-200">
                              Hi there! 👋 I&apos;m Molly, your AI assistant. How can I help you today?
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="max-w-[75%] rounded-2xl rounded-tr-none bg-violet-600/80 px-4 py-2.5 text-sm text-white">
                              I need a quote for a website
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">M</div>
                            <div className="max-w-[75%] rounded-2xl rounded-tl-none bg-white/10 px-4 py-2.5 text-sm text-gray-200">
                              Great! 🚀 I&apos;ll connect you with our team. What type of site — business, e-commerce, or news?
                            </div>
                          </div>
                        </div>
                        {/* Input bar */}
                        <div className="flex items-center gap-2 border-t border-white/10 bg-[#0a0a12] px-4 py-3">
                          <div className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm text-gray-500">Message Molly…</div>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                            <ArrowUpRight className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Website iframe preview */
                      <>
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
                        <div className="relative h-64 w-full overflow-hidden">
                          <iframe
                            src={project.url}
                            className="h-[640px] w-[200%] origin-top-left scale-50 border-0"
                            title={`${project.name} preview`}
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin"
                          />
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
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-dashed border-white/10 p-10 text-center">
            <p className="mb-2 text-lg font-semibold text-white">Want your project to be next?</p>
            <p className="mb-6 text-gray-500">
              We build websites, WhatsApp chatbots, and AI agents for businesses across Zimbabwe and beyond.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500'
              )}
            >
              Start Your Project <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
