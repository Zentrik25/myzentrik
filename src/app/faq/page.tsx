import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ: Software, Chatbots & AI Agents | Zentrik Solutions',
  description: 'Answers to common questions about our software development, WhatsApp chatbot, and AI agent services. Pricing, timelines, payments, and more.',
  alternates: { canonical: 'https://www.zentriksolutions.com/faq' },
  openGraph: {
    type: 'website',
    siteName: 'Zentrik Solutions',
    title: 'FAQ: Software, Chatbots & AI Agents | Zentrik Solutions',
    description: 'Got questions? We have answers. Everything you need to know about pricing, timelines, and working with Zentrik Solutions.',
    url: 'https://www.zentriksolutions.com/faq',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Zentrik Solutions FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ: Software, Chatbots & AI Agents | Zentrik Solutions',
    description: 'Got questions? We have answers. Everything you need to know about pricing, timelines, and working with Zentrik Solutions.',
    images: ['/opengraph-image'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // Services
    { '@type': 'Question', name: 'What services does Zentrik Solutions offer?', acceptedAnswer: { '@type': 'Answer', text: 'We specialise in three core services: custom software development (web apps, mobile apps, SaaS platforms), WhatsApp Business API chatbot development, and AI agent development. All built for businesses across Zimbabwe, Africa, and globally.' } },
    { '@type': 'Question', name: 'Do you build WhatsApp chatbots?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. WhatsApp chatbots are one of our core specialities. We build fully automated WhatsApp Business API chatbots for customer support, bookings, lead capture, and sales. Bots run 24/7 and can handle hundreds of conversations simultaneously.' } },
    { '@type': 'Question', name: 'What is an AI agent and how can it help my business?', acceptedAnswer: { '@type': 'Answer', text: 'An AI agent is an autonomous software system that can perform complex tasks on its own — such as researching leads, responding to customer queries, processing documents, or automating entire workflows. Unlike a simple chatbot, AI agents reason, make decisions, and take multi-step actions without human input.' } },
    { '@type': 'Question', name: 'What technologies do you use?', acceptedAnswer: { '@type': 'Answer', text: 'Our stack includes Next.js, React, TypeScript, Node.js, Python, Supabase, PostgreSQL, React Native, Vercel, AWS, WhatsApp Business API, OpenAI GPT-4, Claude AI, Gemini, LangChain, and n8n for workflow automation.' } },
    // Pricing & Payment
    { '@type': 'Question', name: 'How much does a WhatsApp chatbot cost?', acceptedAnswer: { '@type': 'Answer', text: 'A standalone WhatsApp chatbot starts from $150 USD for simple FAQ bots, up to $300–$500 for advanced bots with booking flows, payment confirmations, and CRM integration. Custom pricing is available for enterprise needs.' } },
    { '@type': 'Question', name: 'How do I pay?', acceptedAnswer: { '@type': 'Answer', text: 'We accept EcoCash, USD bank transfer, and international card payments. A 50% deposit is required to begin, with the remaining 50% due on delivery.' } },
    { '@type': 'Question', name: 'Do you offer payment plans?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. For projects over $500 USD we can arrange a 3-instalment payment plan. Contact us to discuss what works for your budget.' } },
    // Project & Process
    { '@type': 'Question', name: 'How long does a project take?', acceptedAnswer: { '@type': 'Answer', text: 'Simple websites: 3–5 business days. WhatsApp chatbots: 5–10 business days. Full software platforms: 3–8 weeks depending on complexity. We always provide a clear timeline in our proposal before work begins.' } },
    { '@type': 'Question', name: 'Will I own the code after the project?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Once the project is paid in full, you own 100% of the code, design, and all associated intellectual property. We hand over all source files and credentials at project close.' } },
    { '@type': 'Question', name: 'Do you provide support after launch?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer optional monthly maintenance packages from $30/month, covering updates, bug fixes, uptime monitoring, and priority support. Enterprise plans include 3 months of free post-launch support.' } },
    // Working With Us
    { '@type': 'Question', name: 'Do you work with clients outside Zimbabwe?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We work with clients across Africa, the UK, USA, and beyond. All communication is via WhatsApp, Zoom, or email, and all invoicing is in USD.' } },
    { '@type': 'Question', name: 'How do I get started?', acceptedAnswer: { '@type': 'Answer', text: 'WhatsApp us at +263 77 393 4610 or fill in the contact form on our website. We will reply within 24 hours with a free quote and a clear plan.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zentriksolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.zentriksolutions.com/faq' },
  ],
}

const categories = [
  {
    label: 'Services',
    faqs: [
      { q: 'What services does Zentrik Solutions offer?', a: 'We specialise in three core services: custom software development (web apps, mobile apps, SaaS platforms), WhatsApp Business API chatbot development, and AI agent development.built for businesses across Zimbabwe, Africa, and globally.' },
      { q: 'Do you build WhatsApp chatbots?', a: 'Yes.WhatsApp chatbots are one of our core specialities. We build fully automated WhatsApp Business API chatbots for customer support, bookings, lead capture, and sales. Bots run 24/7 and can handle hundreds of conversations simultaneously.' },
      { q: 'What is an AI agent and how can it help my business?', a: 'An AI agent is an autonomous software system that can perform complex tasks on its own.such as researching leads, responding to customer queries, processing documents, or automating entire workflows. Unlike a simple chatbot, AI agents reason, make decisions, and take multi-step actions without human input.' },
      { q: 'What technologies do you use?', a: 'Our stack includes Next.js, React, TypeScript, Node.js, Python, Supabase, PostgreSQL, React Native, Vercel, AWS, WhatsApp Business API, OpenAI GPT-4, Claude AI, Gemini, LangChain, and n8n for workflow automation.' },
    ],
  },
  {
    label: 'Pricing & Payment',
    faqs: [
      { q: 'How much does a WhatsApp chatbot cost?', a: 'A standalone WhatsApp chatbot starts from $150 USD for simple FAQ bots, up to $300–$500 for advanced bots with booking flows, payment confirmations, and CRM integration. Custom pricing is available for enterprise needs.' },
      { q: 'How do I pay?', a: 'We accept EcoCash, USD bank transfer, and international card payments. A 50% deposit is required to begin, with the remaining 50% due on delivery.' },
      { q: 'Do you offer payment plans?', a: 'Yes. For projects over $500 USD we can arrange a 3-instalment payment plan. Contact us to discuss what works for your budget.' },
    ],
  },
  {
    label: 'Project & Process',
    faqs: [
      { q: 'How long does a project take?', a: 'Simple websites: 3–5 business days. WhatsApp chatbots: 5–10 business days. Full software platforms: 3–8 weeks depending on complexity. We always provide a clear timeline in our proposal before work begins.' },
      { q: 'Will I own the code after the project?', a: 'Yes. Once the project is paid in full, you own 100% of the code, design, and all associated intellectual property. We hand over all source files and credentials at project close.' },
      { q: 'Do you provide support after launch?', a: 'Yes. We offer optional monthly maintenance packages from $30/month, covering updates, bug fixes, uptime monitoring, and priority support. Enterprise plans include 3 months of free post-launch support.' },
    ],
  },
  {
    label: 'Working With Us',
    faqs: [
      { q: 'Do you work with clients outside Zimbabwe?', a: 'Absolutely. We work with clients across Africa, the UK, USA, and beyond. All communication is via WhatsApp, Zoom, or email, and all invoicing is in USD.' },
      { q: 'How do I get started?', a: 'WhatsApp us at +263 77 393 4610 or fill in the contact form on our website. We will reply within 24 hours with a free quote and a clear plan.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '56px' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <p className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.48)' }}>FAQ</p>
          <h1
            className="mb-4 font-semibold text-white"
            style={{ fontSize: 'clamp(40px, 6vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.28px' }}
          >
            Frequently Asked Questions.
          </h1>
          <p style={{ fontSize: '21px', lineHeight: 1.19, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.231px' }}>
            Everything you need to know about working with Zentrik Solutions.{' '}
            <Link href="/contact" style={{ color: '#2997ff' }}>
              Can&apos;t find your answer? Ask us.
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[740px] px-5">
          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.label}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px flex-1" style={{ background: '#d2d2d7' }} />
                  <span
                    className="rounded-full px-4 py-1 text-sm font-semibold"
                    style={{ background: '#1d1d1f', color: '#ffffff' }}
                  >
                    {cat.label}
                  </span>
                  <div className="h-px flex-1" style={{ background: '#d2d2d7' }} />
                </div>

                <div className="space-y-3">
                  {cat.faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className="rounded-lg p-6 transition-shadow hover:shadow-sm"
                      style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}
                    >
                      <h2 className="mb-3 font-semibold" style={{ color: '#1d1d1f', fontSize: '17px' }}>{faq.q}</h2>
                      <p className="text-[17px] leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>{faq.a}</p>
                    </div>
                  ))}
                </div>

                {cat.label === 'Pricing & Payment' && (
                  <div
                    className="mt-4 flex items-center justify-between rounded-lg px-5 py-4"
                    style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}
                  >
                    <p className="text-sm font-medium" style={{ color: '#1d1d1f' }}>
                      Want exact figures before you reach out?
                    </p>
                    <Link
                      href="/pricing"
                      className="flex items-center gap-1 text-sm font-semibold"
                      style={{ color: '#0066cc' }}
                    >
                      See full pricing <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}

                {cat.label === 'Services' && (
                  <div
                    className="mt-4 flex items-center justify-between rounded-lg px-5 py-4"
                    style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}
                  >
                    <p className="text-sm font-medium" style={{ color: '#1d1d1f' }}>
                      Want a detailed breakdown of each service?
                    </p>
                    <Link
                      href="/services"
                      className="flex items-center gap-1 text-sm font-semibold"
                      style={{ color: '#0066cc' }}
                    >
                      Explore services <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#000000', padding: '64px 0' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <h2
            className="mb-3 font-semibold text-white"
            style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px' }}
          >
            Still have questions?
          </h2>
          <p className="mb-8 text-[17px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
            WhatsApp us right now for an instant answer. We respond within minutes during business hours.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/263773934610?text=Hi%20Zentrik%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: '#25d366', fontSize: '17px' }}
            >
              <MessageSquare className="h-5 w-5" />
              WhatsApp Us Now
            </a>
            <Link href="/contact" className="apple-btn-outline" style={{ color: '#2997ff', borderColor: '#2997ff' }}>
              Send a Message <ArrowRight className="ml-1 inline-block h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
