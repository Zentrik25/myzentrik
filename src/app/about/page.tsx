import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Zentrik Solutions: Zimbabwe Software & AI Company',
  description: 'Zentrik Solutions is a Zimbabwe-based software company specialising in custom software, chatbot development, and AI agents, serving clients across Africa, the UK, and USA.',
  alternates: { canonical: 'https://www.zentriksolutions.com/about' },
  openGraph: {
    title: 'About Zentrik Solutions: Zimbabwe-Based Software & AI Company',
    description: 'Born in Zimbabwe, built for the world. We build custom software, chatbots, and AI agents for businesses across Africa and globally.',
    url: 'https://www.zentriksolutions.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zentriksolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.zentriksolutions.com/about' },
  ],
}

const values = [
  {
    icon: Target,
    title: 'Precision',
    desc: 'We don\'t ship half-baked products. Every line of code is reviewed, tested, and built to production standards.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'Weekly updates, honest timelines, and no hidden fees. You always know exactly where your project stands.',
  },
  {
    icon: Heart,
    title: 'Partnership',
    desc: 'We\'re not just a vendor. We\'re a long-term technology partner invested in your business success.',
  },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-[740px] px-5 text-center">
          <p className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.48)' }}>About Us</p>
          <h1
            className="mb-6 font-semibold text-white"
            style={{ fontSize: 'clamp(40px, 6vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.28px' }}
          >
            We Are Zentrik Solutions.
          </h1>
          <p style={{ fontSize: '21px', lineHeight: 1.19, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.231px' }}>
            A Zimbabwe-based technology company making world-class software, AI, and automation accessible to businesses across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="section-label mb-4">Our Story</p>
              <h2
                className="mb-6 font-semibold"
                style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px', color: '#1d1d1f' }}
              >
                Born in Zimbabwe.<br />Built for the World.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                <p>
                  Zentrik Solutions was founded with one belief: African businesses deserve
                  access to the same cutting-edge technology as companies in Silicon Valley,
                  without the Silicon Valley price tag.
                </p>
                <p>
                  We started by building custom software for local businesses in Harare.
                  Today we develop AI agents, enterprise platforms, and intelligent chatbots
                  for clients across Zimbabwe, South Africa, Nigeria, the UK, and the USA.
                </p>
                <p>
                  Our team combines deep technical expertise with a genuine passion for
                  solving real problems. We don&apos;t just write code. We build solutions
                  that make a measurable difference to your bottom line.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '50+', l: 'Projects Delivered' },
                { v: '5+', l: 'Years in Business' },
                { v: '98%', l: 'Client Retention' },
                { v: '3', l: 'Continents Served' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-lg p-6 text-center"
                  style={{ background: '#f5f5f7' }}
                >
                  <p
                    className="font-semibold"
                    style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px', color: '#1d1d1f' }}
                  >
                    {s.v}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#f5f5f7', padding: '80px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="mb-12 text-center">
            <p className="section-label mb-2">Our Values</p>
            <h2
              className="font-semibold"
              style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px', color: '#1d1d1f' }}
            >
              How We Operate
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg p-8 text-center"
                style={{ background: '#ffffff' }}
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ background: '#0071e3' }}
                >
                  <v.icon className="h-7 w-7 text-white" />
                </div>
                <h3
                  className="mb-3 font-semibold"
                  style={{ fontSize: '21px', letterSpacing: '0.231px', color: '#1d1d1f' }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="mb-12 text-center">
            <h2
              className="font-semibold"
              style={{ fontSize: '32px', letterSpacing: '-0.28px', color: '#1d1d1f' }}
            >
              Technologies We Use
            </h2>
            <p className="mt-3 text-[17px]" style={{ color: 'rgba(0,0,0,0.6)' }}>
              Production-grade stack. No shortcuts.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Next.js', 'React', 'TypeScript', 'Node.js', 'Python',
              'Supabase', 'PostgreSQL', 'OpenAI GPT-4', 'Claude AI', 'Gemini',
              'WhatsApp Business API', 'Meta API', 'Vercel', 'AWS', 'Docker',
              'n8n', 'LangChain', 'Tailwind CSS', 'React Native', 'Stripe',
            ].map((tech) => (
              <span
                key={tech}
                className="text-sm"
                style={{
                  background: '#f5f5f7',
                  color: '#1d1d1f',
                  padding: '6px 14px',
                  borderRadius: '980px',
                  border: '1px solid #d2d2d7',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#000000', padding: '80px 0' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <h2
            className="mb-4 font-semibold text-white"
            style={{ fontSize: '40px', lineHeight: 1.10, letterSpacing: '-0.28px' }}
          >
            Let&apos;s Build Together
          </h2>
          <p className="mb-8 text-[17px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Ready to start your project? We&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="apple-btn-primary">
            Get in Touch <ArrowRight className="ml-2 inline-block h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
