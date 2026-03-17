import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/lib/button-variants'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, ArrowRight, Code2, Bot, Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Software, Chatbot & AI Agent Development Services',
  description: 'Custom software development, WhatsApp chatbots, and AI agents built by Zentrik Solutions for businesses across Africa and beyond. Free quote in 24 hours.',
  alternates: { canonical: 'https://www.zentriksolutions.com/services' },
  openGraph: {
    title: 'Software, Chatbot & AI Agent Services — Zentrik Solutions',
    description: 'Custom software, WhatsApp chatbots, and AI agents for African businesses. Enterprise-grade quality at accessible prices.',
    url: 'https://www.zentriksolutions.com/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Custom Software Development', description: 'Web apps, mobile apps, SaaS platforms, and enterprise systems built with Next.js, React, Node.js, and Supabase.', provider: { '@type': 'Organization', name: 'Zentrik Solutions' } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Chatbot Development', description: 'WhatsApp, Facebook Messenger, and web chatbots for customer support, bookings, and sales — 24/7.', provider: { '@type': 'Organization', name: 'Zentrik Solutions' } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'AI Agents', description: 'Autonomous AI agents for research, workflow automation, and complex business tasks powered by GPT-4, Claude, and Gemini.', provider: { '@type': 'Organization', name: 'Zentrik Solutions' } } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zentriksolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.zentriksolutions.com/services' },
  ],
}

const services = [
  {
    id: 'software',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    badge: 'Software Development',
    title: 'Custom Software That Works for You',
    description:
      'Whether you need an internal tool, a customer-facing web app, or a full SaaS platform — we design, build, and launch it. Our team uses modern frameworks like Next.js, React, Node.js, and Supabase to deliver scalable, secure products.',
    features: [
      'Web Applications (Next.js, React)',
      'Mobile Apps (React Native)',
      'SaaS Platforms & Admin Dashboards',
      'REST & GraphQL APIs',
      'Database Design & Optimization',
      'Cloud Deployment (Vercel, AWS, GCP)',
      'Third-party Integrations (Payment, CRM, ERP)',
      'Legacy System Modernization',
    ],
    cta: 'Start a Software Project',
  },
  {
    id: 'chatbots',
    icon: Bot,
    color: 'from-violet-500 to-purple-600',
    badge: 'Chatbot Development',
    title: 'Chatbots That Close Deals & Delight Customers',
    description:
      'We build intelligent chatbots for WhatsApp, Facebook Messenger, Instagram, and your website. Our bots handle customer support, appointment booking, product queries, lead capture, and more — 24/7, automatically.',
    features: [
      'WhatsApp Business API Chatbots',
      'Facebook Messenger Bots',
      'Instagram DM Automation',
      'Web Chat Widget Integration',
      'Multi-language Support',
      'Handoff to Human Agents',
      'CRM & Database Integration',
      'Analytics & Conversation Reporting',
    ],
    cta: 'Build My Chatbot',
  },
  {
    id: 'ai-agents',
    icon: Brain,
    color: 'from-orange-500 to-pink-600',
    badge: 'AI Agents',
    title: 'AI Agents That Think, Plan & Execute',
    description:
      'Beyond simple automation — our AI agents are autonomous systems that can research, reason, and take multi-step actions to complete complex business tasks. Powered by GPT-4, Claude, and Gemini.',
    features: [
      'Autonomous Research & Data Agents',
      'Sales & Outreach Automation Agents',
      'Customer Service AI Agents',
      'Document Processing & Analysis',
      'Workflow Orchestration (n8n, Make)',
      'Custom LLM Fine-tuning',
      'RAG (Retrieval-Augmented Generation)',
      'Voice AI Agents',
    ],
    cta: 'Explore AI Agents',
  },
]

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Badge variant="outline" className="mb-6 border-violet-500/40 bg-violet-500/10 text-violet-300">
            Our Services
          </Badge>
          <h1 className="mb-6 text-5xl font-black text-white sm:text-6xl">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Grow Digitally
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            From initial idea to live product. We cover the full spectrum of modern software,
            automation, and AI — so you don&apos;t need to go anywhere else.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                id={svc.id}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual */}
                <div className="flex-1">
                  <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${svc.color} p-1`}>
                    <div className="rounded-[22px] bg-[#05050A] p-10">
                      <svc.icon className="mb-4 h-16 w-16 text-white opacity-80" />
                      <div className="grid grid-cols-2 gap-3">
                        {svc.features.slice(0, 4).map((f) => (
                          <div key={f} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300">
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Badge variant="outline" className="mb-4 border-violet-500/40 bg-violet-500/10 text-violet-300">
                    {svc.badge}
                  </Badge>
                  <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">{svc.title}</h2>
                  <p className="mb-8 leading-relaxed text-gray-400">{svc.description}</p>

                  <ul className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-400" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={cn(buttonVariants(), 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500')}
                  >
                    {svc.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-black text-white">Not sure which service you need?</h2>
          <p className="mb-8 text-gray-400">
            Book a free 30-minute discovery call. We&apos;ll listen, advise, and give you a clear
            recommendation — no obligation, no pressure.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: 'lg' }), 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500')}
          >Book a Free Call</Link>
        </div>
      </section>
    </>
  )
}
