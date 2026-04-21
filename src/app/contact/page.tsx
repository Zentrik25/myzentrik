import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Zentrik Solutions: Get a Free Project Quote',
  description: 'Get a free quote from Zentrik Solutions for custom software, WhatsApp chatbots, and AI agents. Based in Zimbabwe, serving globally. We respond within 24 hours.',
  alternates: { canonical: 'https://www.zentriksolutions.com/contact' },
  openGraph: {
    title: 'Contact Zentrik Solutions: Free Software & AI Quote',
    description: 'Get a free quote within 24 hours for custom software, WhatsApp chatbots, and AI agents. WhatsApp us at +263773934610.',
    url: 'https://www.zentriksolutions.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zentriksolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.zentriksolutions.com/contact' },
  ],
}

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'info@zentriksolutions.com', href: 'mailto:info@zentriksolutions.com' },
  { icon: Phone, label: 'WhatsApp / Phone', value: '+263 77 393 4610', href: 'https://wa.me/263773934610' },
  { icon: MapPin, label: 'Location', value: '6432 Chikanga 3, Mutare, Zimbabwe', href: null },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
]

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '56px' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <p className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.48)' }}>Get In Touch</p>
          <h1
            className="mb-4 font-semibold text-white"
            style={{ fontSize: 'clamp(40px, 6vw, 56px)', lineHeight: 1.07, letterSpacing: '-0.28px' }}
          >
            Contact Zentrik Solutions.
          </h1>
          <p style={{ fontSize: '21px', lineHeight: 1.19, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.231px' }}>
            Tell us about your project and we&apos;ll send you a free quote within 24 hours. No obligation. No spam.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2
                className="mb-6 font-semibold"
                style={{ fontSize: '21px', color: '#1d1d1f', letterSpacing: '0.231px' }}
              >
                Contact Information
              </h2>
              <div className="space-y-3">
                {contactDetails.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-start gap-4 rounded-lg p-5"
                    style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: '#0071e3' }}
                    >
                      <c.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(0,0,0,0.4)', letterSpacing: '0.5px' }}>
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="mt-0.5 block text-sm font-medium transition-colors hover:text-[#0066cc]"
                          style={{ color: '#1d1d1f' }}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium" style={{ color: '#1d1d1f' }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/263773934610?text=Hi%20Zentrik%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 rounded-full py-3 px-6 font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: '#25d366', fontSize: '17px' }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}>
                <h2
                  className="mb-6 font-semibold"
                  style={{ fontSize: '21px', color: '#1d1d1f', letterSpacing: '0.231px' }}
                >
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
