import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/lib/button-variants'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Target, Eye, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Zentrik Solutions is a Zimbabwe-based software company specialising in custom software development, chatbot development and AI agents.',
}

const values = [
  {
    icon: Target,
    title: 'Precision',
    desc: 'We don\'t ship half-baked products. Every line of code is reviewed, tested and built to production standards.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'Weekly updates, honest timelines, and no hidden fees. You always know exactly where your project stands.',
  },
  {
    icon: Heart,
    title: 'Partnership',
    desc: 'We\'re not just a vendor — we\'re a long-term technology partner invested in your business success.',
  },
]

const team = [
  {
    name: 'Zentrik Team',
    role: 'Engineering & AI',
    bio: 'Our team of engineers, designers and AI specialists has built products used by thousands of people across Africa and beyond.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Badge variant="outline" className="mb-6 border-violet-500/40 bg-violet-500/10 text-violet-300">
            About Us
          </Badge>
          <h1 className="mb-6 text-5xl font-black text-white sm:text-6xl">
            We Are{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Zentrik Solutions
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-400">
            A Zimbabwe-based technology company on a mission to make world-class
            software, AI and automation accessible to businesses across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-violet-500/40 bg-violet-500/10 text-violet-300">
                Our Story
              </Badge>
              <h2 className="mb-6 text-4xl font-black text-white">
                Born in Zimbabwe. Built for the World.
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Zentrik Solutions was founded with one belief: African businesses deserve
                  access to the same cutting-edge technology as companies in Silicon Valley
                  without the Silicon Valley price tag.
                </p>
                <p>
                  We started by building custom software for local businesses in Harare.
                  Today we develop AI agents, enterprise platforms and intelligent chatbots
                  for clients across Zimbabwe, South Africa, Nigeria, the UK and the USA.
                </p>
                <p>
                  Our team combines deep technical expertise with a genuine passion for
                  solving real problems. We don&apos;t just write code, we build solutions
                  that make a measurable difference to your bottom line.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-600/10" />
              <div className="relative grid grid-cols-2 gap-6">
                {[
                  { v: '50+', l: 'Projects Delivered' },
                  { v: '5+', l: 'Years in Business' },
                  { v: '98%', l: 'Client Retention' },
                  { v: '3', l: 'Continents Served' },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                    <p className="text-3xl font-black text-white">{s.v}</p>
                    <p className="mt-1 text-sm text-gray-400">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-violet-500/40 bg-violet-500/10 text-violet-300">
              Our Values
            </Badge>
            <h2 className="text-4xl font-black text-white">How We Operate</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10">
                  <v.icon className="h-7 w-7 text-violet-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{v.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build with */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-white">Technologies We Use</h2>
            <p className="mt-3 text-gray-400">Production-grade stack. No shortcuts.</p>
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
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-black text-white">
            Let&apos;s Build Together
          </h2>
          <p className="mb-8 text-gray-400">
            Ready to start your project? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: 'lg' }), 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500')}
          >Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </div>
      </section>
    </>
  )
}
