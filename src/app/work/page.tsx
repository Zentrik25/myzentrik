import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Globe, Bot, Printer, Newspaper } from 'lucide-react'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Work: Projects Built by Zentrik Solutions',
  description: 'See the real websites, chatbots, and AI tools built by Zentrik Solutions for clients across Zimbabwe and Africa.',
  alternates: { canonical: 'https://www.zentriksolutions.com/work' },
  openGraph: {
    title: 'Our Work: Projects Built by Zentrik Solutions',
    description: 'Real projects. Real results. See what Zentrik Solutions has built for clients across Zimbabwe and Africa.',
    url: 'https://www.zentriksolutions.com/work',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Zentrik Solutions: Our Work' }],
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
    status: 'Live',
  },
  {
    name: 'Molly WhatsApp AI Chatbot',
    url: 'https://wa.me/263712482084',
    displayUrl: '+263 712 482 084',
    category: 'WhatsApp Chatbot · AI Agent',
    type: 'chatbot',
    tags: ['WhatsApp Business API', 'AI', 'Node.js', 'Automation'],
    description:
      'Molly is a fully autonomous WhatsApp AI chatbot built by Zentrik Solutions. She handles customer enquiries, bookings, FAQs, and lead capture. 24 hours a day, 7 days a week, with no human intervention needed.',
    highlights: [
      '24/7 automated customer support on WhatsApp',
      'Natural language understanding, no rigid menus',
      'Handles bookings, FAQs, and lead capture',
      'Seamless handoff to human agent when needed',
    ],
    Icon: Bot,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }} />

      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-[740px] px-5 text-center">
          <p className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.48)' }}>Portfolio</p>
          <h1
            className="mb-6 font-semibold text-white"
            style={{ fontSize: 'clamp(40px, 6vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.28px' }}
          >
            Our Work.
          </h1>
          <p style={{ fontSize: '21px', lineHeight: 1.19, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.231px' }}>
            Real projects we&apos;ve designed, built, and deployed for clients across Zimbabwe and Africa. Every project is live and production-grade.
          </p>
          <div className="mt-8 flex justify-center gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: '#34c759' }} />
              {projects.length} Live Projects
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: '#0071e3' }} />
              Websites + Chatbots
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: '#636366' }} />
              Zimbabwe &amp; Global
            </span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{ background: '#f5f5f7', padding: '80px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="space-y-6">
            {projects.map((project, i) => (
              <div
                key={project.name}
                className="rounded-2xl"
                style={{
                  background: i % 2 === 0 ? '#ffffff' : '#000000',
                  padding: '40px',
                }}
              >
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                  {/* Left: info */}
                  <div>
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ background: '#0071e3' }}
                      >
                        <project.Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2
                            className="font-semibold"
                            style={{ fontSize: '21px', color: i % 2 === 0 ? '#1d1d1f' : '#ffffff', letterSpacing: '0.231px' }}
                          >
                            {project.name}
                          </h2>
                          <span
                            className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                            style={{ background: 'rgba(52,199,89,0.15)', color: '#34c759' }}
                          >
                            ● {project.status}
                          </span>
                        </div>
                        <p className="text-sm mt-0.5" style={{ color: i % 2 === 0 ? 'rgba(0,0,0,0.48)' : 'rgba(255,255,255,0.48)' }}>
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <p
                      className="mb-5 text-[17px] leading-relaxed"
                      style={{ color: i % 2 === 0 ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)' }}
                    >
                      {project.description}
                    </p>

                    <ul className="mb-5 space-y-2">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm" style={{ color: i % 2 === 0 ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)' }}>
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#0071e3' }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full text-xs"
                          style={{
                            padding: '4px 12px',
                            background: i % 2 === 0 ? '#f5f5f7' : 'rgba(255,255,255,0.1)',
                            color: i % 2 === 0 ? '#1d1d1f' : 'rgba(255,255,255,0.8)',
                            border: `1px solid ${i % 2 === 0 ? '#d2d2d7' : 'rgba(255,255,255,0.15)'}`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-btn-primary inline-flex items-center gap-2"
                    >
                      {project.type === 'chatbot' ? 'Chat with Molly on WhatsApp' : `Visit ${project.displayUrl}`}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Right: preview */}
                  <div
                    className="overflow-hidden rounded-xl shadow-2xl"
                    style={{ background: i % 2 === 0 ? '#000000' : '#1c1c1e' }}
                  >
                    {project.type === 'chatbot' ? (
                      <div className="flex h-80 flex-col">
                        <div className="flex items-center gap-3 px-5 py-4" style={{ background: '#0071e3' }}>
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-white"
                            style={{ background: 'rgba(255,255,255,0.2)' }}
                          >
                            M
                          </div>
                          <div>
                            <p className="font-semibold text-white text-sm">Molly</p>
                            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                              ● Online now · AI Chatbot by Zentrik
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-3 overflow-hidden p-4" style={{ background: '#1c1c1e' }}>
                          <div className="flex gap-2">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: '#0071e3' }}>M</div>
                            <div className="max-w-[75%] rounded-2xl rounded-tl-none px-4 py-2.5 text-sm" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)' }}>
                              Hi there! 👋 I&apos;m Molly, your AI assistant. How can I help you today?
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="max-w-[75%] rounded-2xl rounded-tr-none px-4 py-2.5 text-sm text-white" style={{ background: '#0071e3' }}>
                              I need a quote for a website
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: '#0071e3' }}>M</div>
                            <div className="max-w-[75%] rounded-2xl rounded-tl-none px-4 py-2.5 text-sm" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)' }}>
                              Great! 🚀 I&apos;ll connect you with our team. What type of site: business, e-commerce, or news?
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                          <div className="flex-1 rounded-full px-4 py-2 text-sm" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }}>
                            Message Molly…
                          </div>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: '#34c759' }}>
                            <ArrowUpRight className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <div className="flex gap-1.5">
                            <div className="h-3 w-3 rounded-full" style={{ background: 'rgba(255,59,48,0.6)' }} />
                            <div className="h-3 w-3 rounded-full" style={{ background: 'rgba(255,204,0,0.6)' }} />
                            <div className="h-3 w-3 rounded-full" style={{ background: 'rgba(52,199,89,0.6)' }} />
                          </div>
                          <div className="flex-1 rounded-md px-3 py-1 text-center text-xs" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}>
                            {project.displayUrl}
                          </div>
                          <ArrowUpRight className="h-3.5 w-3.5" style={{ color: 'rgba(255,255,255,0.3)' }} />
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
                            className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 transition-opacity hover:opacity-100"
                            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}
                          >
                            <span className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white" style={{ background: '#0071e3' }}>
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
          <div
            className="mt-8 rounded-2xl p-10 text-center"
            style={{ background: '#ffffff', border: '1px dashed #d2d2d7' }}
          >
            <p className="mb-2 font-semibold" style={{ fontSize: '21px', color: '#1d1d1f' }}>
              Want your project to be next?
            </p>
            <p className="mb-6 text-[17px]" style={{ color: 'rgba(0,0,0,0.6)' }}>
              We build websites, WhatsApp chatbots, and AI agents for businesses across Zimbabwe and beyond.
            </p>
            <Link href="/contact" className="apple-btn-primary">
              Start Your Project <ArrowUpRight className="ml-2 inline-block h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
