import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/lib/button-variants'
import { cn } from '@/lib/utils'
import { CheckCircle2, XCircle, ArrowRight, Zap, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Software & AI Agent Pricing — Zentrik Solutions Zimbabwe',
  description: 'Transparent, fixed pricing for custom software, WhatsApp chatbots, and AI agents. Starter from $150. No hidden fees. Free quote within 24 hours.',
  alternates: { canonical: 'https://www.zentriksolutions.com/pricing' },
  openGraph: {
    title: 'Pricing — Custom Software, Chatbots & AI Agents | Zentrik Solutions',
    description: 'Fixed, transparent pricing for custom software, WhatsApp chatbots, and AI agents. Starter $150 · Professional $500 · Enterprise from $1,500.',
    url: 'https://www.zentriksolutions.com/pricing',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I pay?', acceptedAnswer: { '@type': 'Answer', text: 'We accept EcoCash, bank transfer (USD), and international card payments. A 50% deposit is required to start, with the balance on delivery.' } },
    { '@type': 'Question', name: 'How long does a project take?', acceptedAnswer: { '@type': 'Answer', text: 'Starter websites: 3–5 days. Professional packages: 1–2 weeks. Enterprise projects: 3–6 weeks depending on scope.' } },
    { '@type': 'Question', name: 'Do you offer payment plans?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. For projects over $500 we can split into 3 monthly payments. Contact us to arrange a plan that works for you.' } },
    { '@type': 'Question', name: 'What if I need something not listed here?', acceptedAnswer: { '@type': 'Answer', text: 'No problem. Send us a message describing your project and we will send you a custom quote within 24 hours — no obligation.' } },
    { '@type': 'Question', name: 'Do you work with clients outside Zimbabwe?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We serve clients across Africa and globally. We work in USD and communicate via WhatsApp, Zoom, or email.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zentriksolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://www.zentriksolutions.com/pricing' },
  ],
}

const plans = [
  {
    name: 'Starter',
    badge: null,
    price: 150,
    period: 'one-time',
    description: 'Perfect for small businesses needing a professional online presence or a simple automation.',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-white/10',
    features: [
      { text: 'Business website (up to 5 pages)', included: true },
      { text: 'Mobile responsive design', included: true },
      { text: 'Contact form + WhatsApp button', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Google Analytics integration', included: true },
      { text: '1 revision round', included: true },
      { text: 'WhatsApp chatbot', included: false },
      { text: 'AI agent integration', included: false },
      { text: 'Custom dashboard / admin panel', included: false },
      { text: 'Priority support', included: false },
    ],
    cta: 'Get Started',
    ctaHref: '/contact?plan=starter',
  },
  {
    name: 'Professional',
    badge: 'Most Popular',
    price: 500,
    period: 'one-time',
    description: 'For growing businesses that want automation, chatbots, and a powerful web presence.',
    color: 'from-violet-500 to-purple-600',
    borderColor: 'border-violet-500/50',
    features: [
      { text: 'Business website (up to 10 pages)', included: true },
      { text: 'Mobile responsive design', included: true },
      { text: 'Contact form + WhatsApp button', included: true },
      { text: 'Advanced SEO setup', included: true },
      { text: 'Google Analytics integration', included: true },
      { text: '3 revision rounds', included: true },
      { text: 'WhatsApp chatbot (up to 10 flows)', included: true },
      { text: 'AI agent integration', included: false },
      { text: 'Custom dashboard / admin panel', included: false },
    ],
    cta: 'Get Started',
    ctaHref: '/contact?plan=professional',
  },
  {
    name: 'Enterprise',
    badge: 'Best Value',
    price: 1500,
    period: 'starting from',
    description: 'Full-scale custom software, AI agents, and end-to-end automation for serious businesses.',
    color: 'from-orange-500 to-pink-600',
    borderColor: 'border-orange-500/30',
    features: [
      { text: 'Full custom web / mobile app', included: true },
      { text: 'Mobile responsive design', included: true },
      { text: 'Contact form + WhatsApp button', included: true },
      { text: 'Full SEO & performance optimisation', included: true },
      { text: 'Analytics dashboard', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'WhatsApp chatbot (unlimited flows)', included: true },
      { text: 'Custom AI agent integration', included: true },
      { text: 'Admin panel + CMS + 3 months support', included: true },
    ],
    cta: 'Talk to Us',
    ctaHref: '/contact?plan=enterprise',
  },
]

const addOns = [
  { name: 'WhatsApp Chatbot (standalone)', price: '$150 – $300', desc: 'Automated replies, booking flows, FAQs' },
  { name: 'AI Customer Support Agent', price: '$300 – $800', desc: 'Trained on your business data, handles queries 24/7' },
  { name: 'EcoCash / Paynow Payment Integration', price: '$100 – $200', desc: 'Accept payments directly on your site or bot' },
  { name: 'Monthly Maintenance & Hosting', price: '$30 / month', desc: 'Updates, backups, uptime monitoring, support' },
  { name: 'Social Media Automation Bot', price: '$200 – $500', desc: 'Auto-post, comment replies, lead capture' },
  { name: 'Custom AI Agent (advanced)', price: 'From $800', desc: 'Autonomous agent for complex workflows' },
]

const faqs = [
  {
    q: 'How do I pay?',
    a: 'We accept EcoCash, bank transfer (USD), and international card payments. A 50% deposit is required to start, with the balance on delivery.',
  },
  {
    q: 'How long does a project take?',
    a: 'Starter websites: 3–5 days. Professional packages: 1–2 weeks. Enterprise projects: 3–6 weeks depending on scope.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. For projects over $500 we can split into 3 monthly payments. Contact us to arrange a plan that works for you.',
  },
  {
    q: 'What if I need something not listed here?',
    a: 'No problem. Send us a message describing your project and we will send you a custom quote within 24 hours — no obligation.',
  },
  {
    q: 'Do you work with clients outside Zimbabwe?',
    a: 'Absolutely. We serve clients across Africa and globally. We work in USD and communicate via WhatsApp, Zoom, or email.',
  },
]

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Badge variant="outline" className="mb-6 border-violet-500/40 bg-violet-500/10 text-violet-300">
            Transparent Pricing
          </Badge>
          <h1 className="mb-4 text-5xl font-black text-white sm:text-6xl">
            Simple, Fixed Pricing
          </h1>
          <p className="text-lg text-gray-400">
            No hidden fees. No surprises. Get a professional quote within 24 hours.
            All prices in USD.
          </p>
        </div>
      </section>

      {/* ── Plans ─────────────────────────────────────────── */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  'relative flex flex-col rounded-3xl border bg-white/5 p-8 transition-all',
                  plan.badge === 'Most Popular'
                    ? 'border-violet-500/50 bg-violet-500/5 ring-1 ring-violet-500/30'
                    : plan.borderColor
                )}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={cn(
                      'rounded-full px-4 py-1 text-xs font-bold text-white',
                      plan.badge === 'Most Popular'
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600'
                        : 'bg-gradient-to-r from-orange-500 to-pink-600'
                    )}>
                      ⭐ {plan.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${plan.color}`}>
                  <Zap className="h-6 w-6 text-white" />
                </div>

                {/* Name + price */}
                <h2 className="mb-1 text-xl font-bold text-white">{plan.name}</h2>
                <p className="mb-4 text-sm text-gray-400">{plan.description}</p>

                <div className="mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{plan.period}</p>
                  <p className="text-5xl font-black text-white">
                    ${plan.price.toLocaleString()}
                    <span className="ml-1 text-lg font-normal text-gray-400">USD</span>
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={plan.ctaHref}
                  className={cn(
                    'mb-8 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white transition-all',
                    plan.badge === 'Most Popular'
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500'
                      : 'border border-white/20 bg-white/10 hover:bg-white/15'
                  )}
                >
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      {f.included ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                      ) : (
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-gray-600" />
                      )}
                      <span className={cn('text-sm', f.included ? 'text-gray-300' : 'text-gray-600')}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Money back note */}
          <p className="mt-8 text-center text-sm text-gray-500">
            💳 50% deposit to start · Balance on delivery · EcoCash, Bank Transfer & Card accepted
          </p>
        </div>
      </section>

      {/* ── Add-ons ───────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-violet-500/40 bg-violet-500/10 text-violet-300">
              Add-ons & Extras
            </Badge>
            <h2 className="text-4xl font-black text-white">Bolt-On Services</h2>
            <p className="mt-3 text-gray-400">Add any of these to your package or order standalone.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-violet-500/30 transition-colors"
              >
                <p className="mb-1 font-semibold text-white">{addon.name}</p>
                <p className="mb-3 flex-1 text-sm text-gray-400">{addon.desc}</p>
                <p className="text-lg font-black text-violet-400">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-violet-500/40 bg-violet-500/10 text-violet-300">
              FAQ
            </Badge>
            <h2 className="text-4xl font-black text-white">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="mb-2 font-bold text-white">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-600/20 to-blue-600/20 px-8 py-14 text-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 rounded-full bg-violet-600/30 blur-[60px]" />
            </div>
            <div className="relative">
              <h2 className="mb-3 text-3xl font-black text-white sm:text-4xl">
                Not sure which plan fits?
              </h2>
              <p className="mb-8 text-gray-300">
                WhatsApp us right now. We will give you an honest recommendation and a free quote — no strings attached.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://wa.me/263773934610?text=Hi%20Zentrik%2C%20I%27d%20like%20to%20get%20a%20quote."
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
                  Send Us a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
