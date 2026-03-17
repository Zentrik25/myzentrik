import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/lib/button-variants'
import { cn } from '@/lib/utils'
import { ArrowRight, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Zentrik Solutions Zimbabwe',
  description: 'Answers to common questions about our software development, WhatsApp chatbot, and AI agent services. Pricing, timelines, payments, and more.',
  alternates: { canonical: 'https://www.zentriksolutions.com/faq' },
  openGraph: {
    title: 'FAQ — Zentrik Solutions',
    description: 'Got questions? We have answers. Everything you need to know about working with Zentrik Solutions.',
    url: 'https://www.zentriksolutions.com/faq',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Zentrik Solutions offer?',
      acceptedAnswer: { '@type': 'Answer', text: 'We specialise in three core services: custom software development (web apps, mobile apps, SaaS platforms), WhatsApp Business API chatbot development, and AI agent development. All built for businesses across Zimbabwe, Africa, and globally.' },
    },
    {
      '@type': 'Question',
      name: 'Do you build WhatsApp chatbots?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — WhatsApp chatbots are one of our core specialities. We build fully automated WhatsApp Business API chatbots for customer support, bookings, lead capture, and sales. Bots run 24/7 and can handle hundreds of conversations simultaneously.' },
    },
    {
      '@type': 'Question',
      name: 'How much does a WhatsApp chatbot cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'A standalone WhatsApp chatbot starts from $150 USD for simple FAQ bots, up to $300–$500 for advanced bots with booking flows, payment confirmations, and CRM integration. Custom pricing available for enterprise needs.' },
    },
    {
      '@type': 'Question',
      name: 'How long does a project take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Simple websites: 3–5 business days. WhatsApp chatbots: 5–10 business days. Full software platforms: 3–8 weeks depending on complexity. We always give you a clear timeline in our proposal before work begins.' },
    },
    {
      '@type': 'Question',
      name: 'How do I pay?',
      acceptedAnswer: { '@type': 'Answer', text: 'We accept EcoCash, USD bank transfer, and international card payments. A 50% deposit is required to begin, with the remaining 50% due on delivery.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer payment plans?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. For projects over $500 USD we can arrange a 3-instalment payment plan. Contact us to discuss what works for your budget.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work with clients outside Zimbabwe?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We work with clients across Africa, the UK, USA, and beyond. We communicate via WhatsApp, Zoom, and email, and all invoicing is done in USD.' },
    },
    {
      '@type': 'Question',
      name: 'What is an AI agent and how can it help my business?',
      acceptedAnswer: { '@type': 'Answer', text: 'An AI agent is an autonomous software system that can perform complex tasks on its own — such as researching leads, responding to customer queries, processing documents, or automating workflows. Unlike a simple chatbot, AI agents can reason, make decisions, and take multi-step actions without human input.' },
    },
    {
      '@type': 'Question',
      name: 'Will I own the software/code after the project?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Once the project is paid in full, you own 100% of the code, design, and all associated intellectual property. We hand over all source files and credentials at the end of every project.' },
    },
    {
      '@type': 'Question',
      name: 'Do you provide support after the project is launched?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer optional monthly maintenance and support packages starting from $30/month, which cover updates, bug fixes, uptime monitoring, and priority support. Enterprise plans include 3 months of free post-launch support.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get started?',
      acceptedAnswer: { '@type': 'Answer', text: 'Simply WhatsApp us at +263773934610 or fill in the contact form on our website. We will reply within 24 hours with a free quote and a clear plan for your project.' },
    },
    {
      '@type': 'Question',
      name: 'What technologies do you use?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our stack includes Next.js, React, TypeScript, Node.js, Python, Supabase, PostgreSQL, React Native, Vercel, AWS, WhatsApp Business API, OpenAI GPT-4, Claude AI, Gemini, LangChain, and n8n for workflow automation.' },
    },
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
      {
        q: 'What services does Zentrik Solutions offer?',
        a: 'We specialise in three core services: custom software development (web apps, mobile apps, SaaS platforms), WhatsApp Business API chatbot development, and AI agent development — built for businesses across Zimbabwe, Africa, and globally.',
      },
      {
        q: 'Do you build WhatsApp chatbots?',
        a: 'Yes — WhatsApp chatbots are one of our core specialities. We build fully automated WhatsApp Business API chatbots for customer support, bookings, lead capture, and sales. Bots run 24/7 and can handle hundreds of conversations simultaneously.',
      },
      {
        q: 'What is an AI agent and how can it help my business?',
        a: 'An AI agent is an autonomous software system that can perform complex tasks on its own — such as researching leads, responding to customer queries, processing documents, or automating entire workflows. Unlike a simple chatbot, AI agents reason, make decisions, and take multi-step actions without human input.',
      },
      {
        q: 'What technologies do you use?',
        a: 'Our stack includes Next.js, React, TypeScript, Node.js, Python, Supabase, PostgreSQL, React Native, Vercel, AWS, WhatsApp Business API, OpenAI GPT-4, Claude AI, Gemini, LangChain, and n8n for workflow automation.',
      },
    ],
  },
  {
    label: 'Pricing & Payment',
    faqs: [
      {
        q: 'How much does a WhatsApp chatbot cost?',
        a: 'A standalone WhatsApp chatbot starts from $150 USD for simple FAQ bots, up to $300–$500 for advanced bots with booking flows, payment confirmations, and CRM integration. Custom pricing is available for enterprise needs.',
      },
      {
        q: 'How do I pay?',
        a: 'We accept EcoCash, USD bank transfer, and international card payments. A 50% deposit is required to begin, with the remaining 50% due on delivery.',
      },
      {
        q: 'Do you offer payment plans?',
        a: 'Yes. For projects over $500 USD we can arrange a 3-instalment payment plan. Contact us to discuss what works for your budget.',
      },
    ],
  },
  {
    label: 'Project & Process',
    faqs: [
      {
        q: 'How long does a project take?',
        a: 'Simple websites: 3–5 business days. WhatsApp chatbots: 5–10 business days. Full software platforms: 3–8 weeks depending on complexity. We always provide a clear timeline in our proposal before work begins.',
      },
      {
        q: 'Will I own the code after the project?',
        a: 'Yes. Once the project is paid in full, you own 100% of the code, design, and all associated intellectual property. We hand over all source files and credentials at project close.',
      },
      {
        q: 'Do you provide support after launch?',
        a: 'Yes. We offer optional monthly maintenance packages from $30/month, covering updates, bug fixes, uptime monitoring, and priority support. Enterprise plans include 3 months of free post-launch support.',
      },
    ],
  },
  {
    label: 'Working With Us',
    faqs: [
      {
        q: 'Do you work with clients outside Zimbabwe?',
        a: 'Absolutely. We work with clients across Africa, the UK, USA, and beyond. All communication is via WhatsApp, Zoom, or email, and all invoicing is in USD.',
      },
      {
        q: 'How do I get started?',
        a: 'WhatsApp us at +263 77 393 4610 or fill in the contact form on our website. We will reply within 24 hours with a free quote and a clear plan.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Badge variant="outline" className="mb-6 border-violet-500/40 bg-violet-500/10 text-violet-300">
            FAQ
          </Badge>
          <h1 className="mb-4 text-5xl font-black text-white sm:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-400">
            Everything you need to know about working with Zentrik Solutions.
            Can&apos;t find your answer?{' '}
            <Link href="/contact" className="text-violet-400 hover:underline">
              Ask us directly.
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-16">
            {categories.map((cat) => (
              <div key={cat.label}>
                {/* Category heading */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1 text-sm font-semibold text-violet-300">
                    {cat.label}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {cat.faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-violet-500/30"
                    >
                      <h2 className="mb-3 font-bold text-white">{faq.q}</h2>
                      <p className="leading-relaxed text-gray-400">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-600/20 to-blue-600/20 px-8 py-14 text-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 rounded-full bg-violet-600/30 blur-[60px]" />
            </div>
            <div className="relative">
              <h2 className="mb-3 text-3xl font-black text-white">
                Still have questions?
              </h2>
              <p className="mb-8 text-gray-300">
                WhatsApp us right now for an instant answer. We respond within minutes during business hours.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://wa.me/263773934610?text=Hi%20Zentrik%2C%20I%20have%20a%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-400 transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp Us Now
                </a>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: 'outline' }), 'border-white/20 bg-white/10 text-white hover:bg-white/15')}
                >
                  Send a Message <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
