import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.zentriksolutions.com' },
  openGraph: {
    title: 'Zentrik Solutions — Software, Chatbots & AI Agents',
    description: 'Zentrik Solutions builds custom software, intelligent chatbots, and AI agents that automate and grow your business. Based in Zimbabwe, serving globally.',
    url: 'https://www.zentriksolutions.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Zentrik Solutions' }],
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
import { buttonVariants } from '@/lib/button-variants'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  ArrowRight, Code2, Bot, Brain, CheckCircle2, Zap,
  Globe, Shield, Clock, Users, ChevronRight, Star, ArrowUpRight
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Web apps, mobile apps, SaaS platforms, and enterprise systems — built to scale with your business. Modern stack, clean code, zero compromise.',
    features: ['Web & Mobile Apps', 'SaaS Platforms', 'API Development', 'Cloud Deployment'],
    color: 'from-blue-500 to-cyan-500',
    href: '/services#software',
  },
  {
    icon: Bot,
    title: 'WhatsApp Chatbot Development',
    description:
      'WhatsApp Business API chatbots that handle customer support, bookings, sales, and more — 24/7 without lifting a finger.',
    features: ['WhatsApp Business API', 'Automated Support', 'Booking Flows', 'Lead Capture'],
    color: 'from-violet-500 to-purple-600',
    href: '/services#chatbots',
  },
  {
    icon: Brain,
    title: 'AI Agents',
    description:
      'Autonomous AI agents that think, plan, and execute tasks. From research assistants to fully automated business workflows — powered by the latest LLMs.',
    features: ['Autonomous Agents', 'Workflow Automation', 'LLM Integration', 'Custom AI Tools'],
    color: 'from-orange-500 to-pink-600',
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
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Glow */}
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[100px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-violet-500/40 bg-violet-500/10 text-violet-300 hover:bg-violet-500/10"
          >
            <Zap className="mr-1.5 h-3 w-3" />
            Zimbabwe&apos;s Leading AI & Software Studio
          </Badge>

          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            We Build{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Software
            </span>
            ,<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Chatbots
            </span>{' '}
            &{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              AI Agents
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            Zentrik Solutions turns your business ideas into powerful digital products.
            Custom software, intelligent chatbots, and autonomous AI agents — built
            fast, built to last.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: 'lg' }), 'h-12 bg-gradient-to-r from-violet-600 to-blue-600 px-8 text-base font-semibold text-white hover:from-violet-500 hover:to-blue-500')}
            >
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'h-12 border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10')}
            >
              View Our Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="mt-1 text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────── */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 border-violet-500/40 bg-violet-500/10 text-violet-300">
              What We Do
            </Badge>
            <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Three powerful service lines, one mission: make your business faster, smarter, and more profitable.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-violet-500/40 hover:bg-white/8"
              >
                {/* Icon */}
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${svc.color}`}>
                  <svc.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">{svc.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">{svc.description}</p>

                <ul className="mb-6 space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-violet-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <span className="flex items-center gap-1 text-sm font-semibold text-violet-400 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="h-4 w-4" />
                </span>

                {/* Hover glow */}
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${svc.color} opacity-0 blur-2xl transition-opacity group-hover:opacity-20`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ─────────────────────────────────────────────────── */}
      <section className="py-24 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 border-violet-500/40 bg-violet-500/10 text-violet-300">
              Why Zentrik
            </Badge>
            <h2 className="text-4xl font-black text-white sm:text-5xl">
              Built Different
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10">
                  <item.icon className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 border-violet-500/40 bg-violet-500/10 text-violet-300">
              How We Work
            </Badge>
            <h2 className="text-4xl font-black text-white sm:text-5xl">Our Process</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              From idea to live product — transparent, fast, and stress-free.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div className="absolute left-full top-8 hidden h-px w-full bg-gradient-to-r from-violet-500/50 to-transparent lg:block" />
                )}
                <div className="mb-4 text-4xl font-black text-violet-500/30">{p.step}</div>
                <h3 className="mb-2 font-bold text-white">{p.title}</h3>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Work ───────────────────────────────────────────────── */}
      <section className="py-24 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Badge variant="outline" className="mb-4 border-violet-500/40 bg-violet-500/10 text-violet-300">
                Portfolio
              </Badge>
              <h2 className="text-4xl font-black text-white sm:text-5xl">Our Work</h2>
              <p className="mt-3 max-w-xl text-gray-400">
                Real projects, live in production, built for real clients.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden items-center gap-1 text-sm font-semibold text-violet-400 hover:text-violet-300 sm:flex"
            >
              View all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Featured project — The Granite Post */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-violet-500/30 hover:bg-white/[0.07]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 blur-3xl transition-opacity group-hover:opacity-10" />

            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              {/* Info */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-white">The Granite Post</h3>
                      <span className="rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-semibold text-green-400">
                        ● Live
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">News Platform · Zimbabwe</p>
                  </div>
                </div>

                <p className="mb-5 text-gray-400 leading-relaxed">
                  A modern, BBC-style online news platform for Zimbabwe — built with a full CMS,
                  SEO-optimised article pages, and a responsive design that loads fast on any connection.
                </p>

                <ul className="mb-6 space-y-2">
                  {['Full CMS with article publishing workflow', 'SEO with JSON-LD NewsArticle schema', 'Mobile-first, fast on Zimbabwe networks', 'RSS feed + XML sitemap for Google News'].map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-400" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mb-6 flex flex-wrap gap-2">
                  {['Next.js', 'Supabase', 'Tailwind CSS', 'Vercel'].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://www.thegranite.co.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants(), 'inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500')}
                >
                  Visit thegranite.co.zw <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Browser preview */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a12] shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/60" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <div className="h-3 w-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 rounded-md bg-white/5 px-3 py-1 text-center text-xs text-gray-500">
                    thegranite.co.zw
                  </div>
                </div>
                <div className="relative h-56 w-full overflow-hidden">
                  <iframe
                    src="https://www.thegranite.co.zw"
                    className="h-[560px] w-[200%] origin-top-left scale-50 border-0"
                    title="The Granite Post preview"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  <a
                    href="https://www.thegranite.co.zw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/70 via-transparent to-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link href="/work" className="text-sm font-semibold text-violet-400 hover:text-violet-300">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <section className="py-24 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 border-violet-500/40 bg-violet-500/10 text-violet-300">
              Client Stories
            </Badge>
            <h2 className="text-4xl font-black text-white sm:text-5xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-gray-300">
                  &ldquo;{t.body}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-600/20 to-blue-600/20 px-8 py-16">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-violet-600/30 blur-[80px]" />
            </div>
            <div className="relative">
              <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
                Ready to Build Something Amazing?
              </h2>
              <p className="mb-8 text-lg text-gray-300">
                Tell us about your project. We&apos;ll get back to you with a free
                quote within 24 hours.
              </p>
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: 'lg' }), 'h-14 bg-gradient-to-r from-violet-600 to-blue-600 px-10 text-lg font-semibold text-white hover:from-violet-500 hover:to-blue-500')}
              >
                Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
