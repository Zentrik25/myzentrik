import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, XCircle, ArrowRight, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Software & AI Agent Pricing: Zentrik Solutions Zimbabwe',
  description: 'Transparent, fixed pricing for custom software, WhatsApp chatbots, and AI agents. Starter from $150. No hidden fees. Free quote within 24 hours.',
  alternates: { canonical: 'https://www.zentriksolutions.com/pricing' },
  openGraph: {
    title: 'Pricing: Custom Software, Chatbots & AI Agents | Zentrik Solutions',
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
    { '@type': 'Question', name: 'What if I need something not listed here?', acceptedAnswer: { '@type': 'Answer', text: 'No problem. Send us a message describing your project and we will send you a custom quote within 24 hours.no obligation.' } },
    { '@type': 'Question', name: 'Do you work with clients outside Zimbabwe?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We serve clients across Africa and globally. We work in USD and communicate via WhatsApp, Zoom, or email.' } },
  ],
}

const plans = [
  {
    name: 'Starter',
    badge: null,
    price: 150,
    period: 'one-time',
    description: 'Perfect for small businesses needing a professional online presence or a simple automation.',
    popular: false,
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
    popular: true,
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
    popular: false,
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
  { q: 'How do I pay?', a: 'We accept EcoCash, bank transfer (USD), and international card payments. A 50% deposit is required to start, with the balance on delivery.' },
  { q: 'How long does a project take?', a: 'Starter websites: 3–5 days. Professional packages: 1–2 weeks. Enterprise projects: 3–6 weeks depending on scope.' },
  { q: 'Do you offer payment plans?', a: 'Yes. For projects over $500 we can split into 3 monthly payments. Contact us to arrange a plan that works for you.' },
  { q: 'What if I need something not listed here?', a: 'No problem. Send us a message describing your project and we will send you a custom quote within 24 hours.no obligation.' },
  { q: 'Do you work with clients outside Zimbabwe?', a: 'Absolutely. We serve clients across Africa and globally. We work in USD and communicate via WhatsApp, Zoom, or email.' },
]

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '56px' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <p className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.48)' }}>Transparent Pricing</p>
          <h1
            className="mb-4 font-semibold text-white"
            style={{ fontSize: 'clamp(40px, 6vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.28px' }}
          >
            Simple, Fixed Pricing.
          </h1>
          <p style={{ fontSize: '21px', lineHeight: 1.19, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.231px' }}>
            No hidden fees. No surprises. Free quote within 24 hours. All prices in USD.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-2xl p-8"
                style={{
                  background: plan.popular ? '#000000' : '#ffffff',
                  border: plan.popular ? '2px solid #0071e3' : '1px solid #d2d2d7',
                }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className="rounded-full px-4 py-1 text-xs font-semibold text-white"
                      style={{ background: '#0071e3' }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h2
                  className="mb-1 font-semibold"
                  style={{ fontSize: '21px', color: plan.popular ? '#ffffff' : '#1d1d1f', letterSpacing: '0.231px' }}
                >
                  {plan.name}
                </h2>
                <p
                  className="mb-5 text-sm leading-relaxed"
                  style={{ color: plan.popular ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)' }}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider" style={{ color: plan.popular ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>
                    {plan.period}
                  </p>
                  <p className="font-semibold" style={{ fontSize: '48px', letterSpacing: '-0.28px', color: plan.popular ? '#ffffff' : '#1d1d1f' }}>
                    ${plan.price.toLocaleString()}
                    <span
                      className="ml-1 text-lg font-normal"
                      style={{ color: plan.popular ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}
                    >
                      USD
                    </span>
                  </p>
                </div>

                <Link
                  href={plan.ctaHref}
                  className={plan.popular ? 'apple-btn-primary mb-8 text-center' : 'apple-btn-outline mb-8 text-center'}
                >
                  {plan.cta} <ArrowRight className="ml-1 inline-block h-4 w-4" />
                </Link>

                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      {f.included ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#0071e3' }} />
                      ) : (
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'rgba(0,0,0,0.2)' }} />
                      )}
                      <span
                        className="text-sm"
                        style={{ color: f.included ? (plan.popular ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)') : (plan.popular ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)') }}
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm" style={{ color: 'rgba(0,0,0,0.48)' }}>
            50% deposit to start · Balance on delivery · EcoCash, Bank Transfer & Card accepted
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section style={{ background: '#ffffff', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="mb-8 text-center">
            <p className="section-label mb-2">Add-ons & Extras</p>
            <h2
              className="font-semibold"
              style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px', color: '#1d1d1f' }}
            >
              Bolt-On Services
            </h2>
            <p className="mt-3 text-[17px]" style={{ color: 'rgba(0,0,0,0.6)' }}>
              Add any of these to your package or order standalone.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex flex-col rounded-lg p-6 transition-shadow hover:shadow-md"
                style={{ background: '#f5f5f7', border: '1px solid #d2d2d7' }}
              >
                <p className="mb-1 font-semibold" style={{ color: '#1d1d1f', fontSize: '14px' }}>{addon.name}</p>
                <p className="mb-3 flex-1 text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>{addon.desc}</p>
                <p className="font-semibold" style={{ fontSize: '17px', color: '#0071e3' }}>{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[640px] px-5">
          <div className="mb-8 text-center">
            <p className="section-label mb-2">FAQ</p>
            <h2
              className="font-semibold"
              style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px', color: '#1d1d1f' }}
            >
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-lg p-6"
                style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}
              >
                <h3 className="mb-2 font-semibold" style={{ color: '#1d1d1f', fontSize: '17px' }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>{faq.a}</p>
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
            Not sure which plan fits?
          </h2>
          <p className="mb-8 text-[17px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
            WhatsApp us right now. We will give you an honest recommendation and a free quote.no strings attached.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/263773934610?text=Hi%20Zentrik%2C%20I%27d%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-opacity hover:opacity-88"
              style={{ background: '#25d366', fontSize: '17px' }}
            >
              <MessageSquare className="h-5 w-5" />
              WhatsApp Us Now
            </a>
            <Link href="/contact" className="apple-btn-outline" style={{ color: '#2997ff', borderColor: '#2997ff' }}>
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
