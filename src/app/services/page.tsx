import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Code2, Bot, Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Software, Chatbot & AI Agent Development Services | Africa',
  description: 'Custom software development, WhatsApp chatbots, and AI agents built by Zentrik Solutions for businesses across Africa and beyond. Enterprise-grade quality. Free quote in 24 hours.',
  alternates: { canonical: 'https://www.zentriksolutions.com/services' },
  openGraph: {
    type: 'website',
    siteName: 'Zentrik Solutions',
    title: 'Software, Chatbot & AI Agent Services | Zentrik Solutions',
    description: 'Custom software, WhatsApp chatbots, and AI agents for African businesses. Enterprise-grade quality at accessible prices. Free quote in 24 hours.',
    url: 'https://www.zentriksolutions.com/services',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Zentrik Solutions Services: Software, Chatbots & AI Agents' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software, Chatbot & AI Agent Services | Zentrik Solutions',
    description: 'Custom software, WhatsApp chatbots, and AI agents for African businesses. Enterprise-grade quality at accessible prices.',
    images: ['/opengraph-image'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zentriksolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.zentriksolutions.com/services' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Custom Software Development', description: 'Web apps, mobile apps, SaaS platforms, and enterprise systems built with Next.js, React, Node.js, and Supabase.', provider: { '@type': 'Organization', name: 'Zentrik Solutions' } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'WhatsApp Chatbot Development', description: 'WhatsApp Business API chatbots for customer support, bookings, and sales.24/7 automation.', provider: { '@type': 'Organization', name: 'Zentrik Solutions' } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'AI Agents', description: 'Autonomous AI agents for research, workflow automation, and complex business tasks powered by GPT-4, Claude, and Gemini.', provider: { '@type': 'Organization', name: 'Zentrik Solutions' } } },
  ],
}

const services = [
  {
    id: 'software',
    icon: Code2,
    label: 'Software Development',
    title: 'Custom Software That Works for You',
    description:
      'Whether you need an internal tool, a customer-facing web app, or a full SaaS platform.we design, build and launch it. Our team uses modern frameworks like Next.js, React, Node.js, and Supabase to deliver scalable, secure products.',
    features: [
      'Web Applications (Next.js, React)',
      'Mobile Apps (React Native)',
      'SaaS Platforms & Admin Dashboards',
      'REST & GraphQL APIs',
      'Database Design & Optimisation',
      'Cloud Deployment (Vercel, AWS, GCP)',
      'Third-party Integrations (Payment, CRM, ERP)',
      'Legacy System Modernisation',
    ],
    cta: 'Start a Software Project',
  },
  {
    id: 'chatbots',
    icon: Bot,
    label: 'WhatsApp Chatbot Development',
    title: 'WhatsApp Chatbots That Close Deals & Delight Customers',
    description:
      'We build intelligent WhatsApp Business API chatbots that handle customer support, appointment booking, product queries, lead capture, and more.24/7, automatically. Your business stays open even while you sleep.',
    features: [
      'WhatsApp Business API Chatbots',
      'Automated Customer Support',
      'Appointment & Booking Flows',
      'Lead Capture & Qualification',
      'Payment Confirmation Alerts',
      'Handoff to Human Agents',
      'CRM & Database Integration',
      'Analytics & Conversation Reporting',
    ],
    cta: 'Build My WhatsApp Chatbot',
  },
  {
    id: 'ai-agents',
    icon: Brain,
    label: 'AI Agents',
    title: 'AI Agents That Think, Plan & Execute',
    description:
      'Beyond simple automation.our AI agents are autonomous systems that can research, reason, and take multi-step actions to complete complex business tasks. Powered by GPT-4, Claude, and Gemini.',
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
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '56px' }}>
        <div className="mx-auto max-w-[740px] px-5 text-center">
          <p className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.48)' }}>Our Services</p>
          <h1
            className="mb-6 font-semibold text-white"
            style={{ fontSize: 'clamp(40px, 6vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.28px' }}
          >
            Everything You Need<br />to Grow Digitally.
          </h1>
          <p style={{ fontSize: '21px', lineHeight: 1.19, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.231px' }}>
            From initial idea to live product.we cover the full spectrum of modern software, automation, and AI.
          </p>
        </div>
      </section>

      {/* Services.alternating sections */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          style={{ background: i % 2 === 0 ? '#ffffff' : '#f5f5f7', padding: '64px 0' }}
        >
          <div className="mx-auto max-w-[980px] px-5">
            <div className={`flex flex-col gap-12 lg:flex-row lg:items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Visual */}
              <div className="flex-1">
                <div
                  className="rounded-2xl p-8"
                  style={{ background: '#000000' }}
                >
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ background: '#0071e3' }}
                  >
                    <svc.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {svc.features.slice(0, 4).map((f) => (
                      <div
                        key={f}
                        className="rounded-lg px-3 py-2 text-xs"
                        style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="section-label mb-4">{svc.label}</p>
                <h2
                  className="mb-4 font-semibold"
                  style={{ fontSize: '32px', lineHeight: 1.10, letterSpacing: '-0.28px', color: '#1d1d1f' }}
                >
                  {svc.title}
                </h2>
                <p className="mb-8 text-[17px] leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                  {svc.description}
                </p>

                <ul className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(0,0,0,0.8)' }}>
                      <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: '#0071e3' }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="apple-btn-primary">
                  {svc.cta} <ArrowRight className="ml-2 inline-block h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: '#000000', padding: '64px 0' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <h2
            className="mb-4 font-semibold text-white"
            style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px' }}
          >
            Not sure which service you need?
          </h2>
          <p className="mb-8 text-[17px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Book a free 30-minute discovery call. We&apos;ll listen, advise, and give you a clear recommendation — no obligation.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="apple-btn-primary">
              Book a Free Call <ArrowRight className="ml-2 inline-block h-4 w-4" />
            </Link>
            <Link href="/pricing" className="apple-btn-outline" style={{ color: '#2997ff', borderColor: '#2997ff' }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
