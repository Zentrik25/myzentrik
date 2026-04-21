import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Star, ArrowUpRight, Code2, Bot, Brain, Zap, Globe, Shield, Clock } from 'lucide-react'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.zentriksolutions.com' },
  openGraph: {
    title: 'Zentrik Solutions: Software, Chatbots & AI Agents',
    description: 'Zentrik Solutions builds custom software, intelligent chatbots, and AI agents that automate and grow your business. Based in Zimbabwe, serving globally.',
    url: 'https://www.zentriksolutions.com',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Zentrik Solutions' }],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zentrik Solutions',
  url: 'https://www.zentriksolutions.com',
  logo: 'https://www.zentriksolutions.com/og-image.png',
  description: 'Zimbabwe-based software company specialising in custom software development, chatbot development, and AI agents.',
  address: { '@type': 'PostalAddress', streetAddress: '6432 Chikanga 3', addressLocality: 'Mutare', addressCountry: 'ZW' },
  telephone: '+263773934610',
  email: 'info@zentriksolutions.com',
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Chidi Okafor' }, reviewBody: 'Zentrik built our entire e-commerce platform in 6 weeks. Quality was exceptional, delivered on time. Sales doubled within a month.', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' } },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Amara Dube' }, reviewBody: 'Their WhatsApp chatbot handles 200+ patient enquiries daily. We saved $3,000/month on support costs.', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' } },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Michael Torres' }, reviewBody: 'The AI agent they built for our logistics routing cut manual dispatch time by 70%. Best tech investment we have made in years.', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' } },
  ],
}

const services = [
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Web apps, mobile apps, SaaS platforms, and enterprise systems built to scale with your business.',
    features: ['Web & Mobile Apps', 'SaaS Platforms', 'API Development', 'Cloud Deployment'],
    href: '/services#software',
  },
  {
    icon: Bot,
    title: 'WhatsApp Chatbots',
    description: 'WhatsApp Business API chatbots that handle customer support, bookings, and sales. 24/7, automatically.',
    features: ['WhatsApp Business API', 'Automated Support', 'Booking Flows', 'Lead Capture'],
    href: '/services#chatbots',
  },
  {
    icon: Brain,
    title: 'AI Agents',
    description: 'Autonomous AI agents that think, plan, and execute tasks, powered by the latest LLMs.',
    features: ['Autonomous Agents', 'Workflow Automation', 'LLM Integration', 'Custom AI Tools'],
    href: '/services#ai-agents',
  },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
  { value: '5+', label: 'Years Experience' },
]

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We learn about your business, goals, and technical needs in a free 30-minute call.' },
  { step: '02', title: 'Proposal & Plan', desc: 'We send a detailed proposal, timeline, and fixed-price quote within 48 hours.' },
  { step: '03', title: 'Build & Iterate', desc: 'Weekly demos, daily updates. You see progress every step of the way.' },
  { step: '04', title: 'Launch & Support', desc: 'We deploy, monitor, and support your product after go-live. Always available.' },
]

const testimonials = [
  {
    name: 'Chidi Okafor',
    role: 'CEO, RetailMax NG',
    body: 'Zentrik built our entire e-commerce platform in 6 weeks. The quality was exceptional and they delivered on time. Our sales doubled within a month of launch.',
    stars: 5,
  },
  {
    name: 'Amara Dube',
    role: 'Founder, QuickCare Zimbabwe',
    body: 'Their WhatsApp chatbot handles 200+ patient enquiries daily. We saved $3,000/month on support costs and our patients love the instant responses.',
    stars: 5,
  },
  {
    name: 'Michael Torres',
    role: 'CTO, LogiFlow Africa',
    body: 'The AI agent they built for our logistics routing cut manual dispatch time by 70%. Best tech investment we have made in years.',
    stars: 5,
  },
]

const whyUs = [
  { icon: Zap, title: 'Fast Delivery', desc: 'MVPs in weeks, not months. We move fast without breaking quality.' },
  { icon: Globe, title: 'Global Standards', desc: 'Enterprise-grade code and architecture, priced for African businesses.' },
  { icon: Shield, title: 'Secure by Default', desc: 'Security best practices baked into every project from day one.' },
  { icon: Clock, title: '24/7 Support', desc: 'We\'re in your timezone and available when you need us most.' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-[980px] px-5 text-center">
          <FadeIn>
            <p className="section-label mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Zimbabwe&apos;s Leading AI &amp; Software Studio
            </p>
            <h1
              className="mb-6 font-semibold text-white"
              style={{ fontSize: 'clamp(40px, 6vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.28px' }}
            >
              Replace your manual work<br />with AI that never sleeps.
            </h1>
            <p
              className="mx-auto mb-10 text-white/70"
              style={{ fontSize: '21px', lineHeight: 1.19, letterSpacing: '0.231px', maxWidth: '560px' }}
            >
              WhatsApp chatbots, custom software and AI agents that handle 10x more customers without 10x more staff.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="apple-btn-primary">
                Start Your Project <ArrowRight className="ml-2 inline-block h-4 w-4" />
              </Link>
              <Link href="/services" className="apple-btn-outline" style={{ color: '#2997ff', borderColor: '#2997ff' }}>
                View Our Services
              </Link>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeInStagger className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <FadeInItem key={s.label}>
                <div className="text-center">
                  <p className="text-3xl font-semibold text-white" style={{ letterSpacing: '-0.28px' }}>{s.value}</p>
                  <p className="mt-1 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <FadeIn className="mb-12 text-center">
            <p className="section-label mb-2">What We Do</p>
            <h2
              className="font-semibold"
              style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px', color: '#1d1d1f' }}
            >
              Our Services
            </h2>
            <p className="mt-4 mx-auto text-[17px]" style={{ color: 'rgba(0,0,0,0.6)', maxWidth: '500px' }}>
              Three powerful service lines, one mission: make your business faster, smarter, and more profitable.
            </p>
          </FadeIn>

          <FadeInStagger className="grid gap-5 lg:grid-cols-3">
            {services.map((svc) => (
              <FadeInItem key={svc.title}>
                <Link
                  href={svc.href}
                  className="apple-card block h-full"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: '#0071e3' }}
                  >
                    <svc.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3
                    className="mb-2 font-semibold"
                    style={{ fontSize: '21px', lineHeight: 1.19, color: '#1d1d1f', letterSpacing: '0.231px' }}
                  >
                    {svc.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                    {svc.description}
                  </p>
                  <ul className="mb-5 space-y-1.5">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(0,0,0,0.8)' }}>
                        <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: '#0071e3' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="text-sm font-medium" style={{ color: '#0066cc' }}>
                    Learn more &gt;
                  </span>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section style={{ background: '#000000', padding: '80px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <FadeIn className="mb-12 text-center">
            <p className="section-label mb-2" style={{ color: 'rgba(255,255,255,0.48)' }}>Why Zentrik</p>
            <h2
              className="font-semibold text-white"
              style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px' }}
            >
              Built Different
            </h2>
          </FadeIn>

          <FadeInStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <FadeInItem key={item.title}>
                <div className="apple-card-dark h-full">
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: '#0071e3' }}
                  >
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white" style={{ fontSize: '17px' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section style={{ background: '#f5f5f7', padding: '80px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <FadeIn className="mb-12 text-center">
            <p className="section-label mb-2">How We Work</p>
            <h2
              className="font-semibold"
              style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px', color: '#1d1d1f' }}
            >
              Our Process
            </h2>
            <p className="mt-4 text-[17px]" style={{ color: 'rgba(0,0,0,0.6)' }}>
              From idea to live product. Transparent, fast, and stress-free.
            </p>
          </FadeIn>

          <FadeInStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <FadeInItem key={p.step}>
                <div
                  className="mb-4 text-4xl font-semibold"
                  style={{ color: '#0071e3', letterSpacing: '-0.28px' }}
                >
                  {p.step}
                </div>
                <h3 className="mb-2 font-semibold" style={{ color: '#1d1d1f', fontSize: '17px' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>{p.desc}</p>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── Our Work ─────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <FadeIn className="mb-12 flex items-end justify-between">
            <div>
              <p className="section-label mb-2">Portfolio</p>
              <h2
                className="font-semibold"
                style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px', color: '#1d1d1f' }}
              >
                Our Work
              </h2>
              <p className="mt-3 text-[17px]" style={{ color: 'rgba(0,0,0,0.6)', maxWidth: '420px' }}>
                Real projects, live in production, built for clients across Zimbabwe.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden text-sm font-medium sm:flex items-center gap-1"
              style={{ color: '#0066cc' }}
            >
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FadeIn>

          <FadeInStagger className="grid gap-5 sm:grid-cols-2">
            {[
              { name: 'The Granite Post', url: 'https://www.thegranite.co.zw', display: 'thegranite.co.zw', cat: 'News Platform', emoji: '📰' },
              { name: 'Molly WhatsApp AI', url: 'https://wa.me/263712482084', display: '+263 712 482 084', cat: 'AI Chatbot', emoji: '🤖' },
            ].map((p) => (
              <FadeInItem key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-card block h-full"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="mb-3 text-3xl">{p.emoji}</div>
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-semibold" style={{ fontSize: '17px', color: '#1d1d1f' }}>{p.name}</h3>
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: '#34c759', flexShrink: 0 }}
                    />
                  </div>
                  <p className="mb-3 text-xs" style={{ color: 'rgba(0,0,0,0.48)' }}>{p.cat}</p>
                  <p className="flex items-center gap-1 text-sm font-medium" style={{ color: '#0066cc' }}>
                    {p.display} <ArrowUpRight className="h-3 w-3" />
                  </p>
                </a>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn className="mt-8 text-center">
            <Link href="/work" className="apple-btn-outline" style={{ fontSize: '14px', padding: '8px 18px' }}>
              View Full Case Studies <ArrowUpRight className="ml-1 inline-block h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section style={{ background: '#000000', padding: '80px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <FadeIn className="mb-12 text-center">
            <p className="section-label mb-2" style={{ color: 'rgba(255,255,255,0.48)' }}>Client Stories</p>
            <h2
              className="font-semibold text-white"
              style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px' }}
            >
              What Our Clients Say
            </h2>
          </FadeIn>

          <FadeInStagger className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <FadeInItem key={t.name}>
                <div className="apple-card-dark h-full">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    &ldquo;{t.body}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-white" style={{ fontSize: '14px' }}>{t.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.48)' }}>{t.role}</p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: '#f5f5f7', padding: '80px 0' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <FadeIn>
            <h2
              className="mb-4 font-semibold"
              style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px', color: '#1d1d1f' }}
            >
              Ready to build something great?
            </h2>
            <p className="mb-8 text-[17px]" style={{ color: 'rgba(0,0,0,0.6)' }}>
              Tell us about your project. We&apos;ll get back to you with a free quote within 24 hours.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="apple-btn-primary">
                Get Your Free Quote <ArrowRight className="ml-2 inline-block h-4 w-4" />
              </Link>
              <Link href="/services" className="apple-btn-outline">
                View Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
