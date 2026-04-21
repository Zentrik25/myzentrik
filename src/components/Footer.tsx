import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const services = [
  { href: '/services#software', label: 'Custom Software' },
  { href: '/services#chatbots', label: 'WhatsApp Chatbots' },
  { href: '/services#ai-agents', label: 'AI Agents' },
]

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/work', label: 'Our Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

const legal = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/data-deletion', label: 'Data Deletion' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#f5f5f7', borderTop: '1px solid #d2d2d7' }}>
      <div className="mx-auto max-w-[980px] px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="mb-4 block text-base font-semibold"
              style={{ color: '#1d1d1f', letterSpacing: '-0.28px' }}
            >
              Zentrik Solutions
            </Link>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
              Building the future through intelligent software, chatbots, and AI agents.
              Zimbabwe-based. Globally delivered.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@zentriksolutions.com"
                className="flex items-center gap-2 text-sm transition-colors hover:text-[#0066cc]"
                style={{ color: 'rgba(0,0,0,0.6)' }}
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@zentriksolutions.com
              </a>
              <a
                href="tel:+263773934610"
                className="flex items-center gap-2 text-sm transition-colors hover:text-[#0066cc]"
                style={{ color: 'rgba(0,0,0,0.6)' }}
              >
                <Phone className="h-4 w-4 shrink-0" />
                +263 77 393 4610
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>
                <MapPin className="h-4 w-4 shrink-0" />
                Mutare, Zimbabwe
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: '#1d1d1f', letterSpacing: '0.5px' }}
            >
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-[#0066cc]"
                    style={{ color: 'rgba(0,0,0,0.6)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: '#1d1d1f', letterSpacing: '0.5px' }}
            >
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-[#0066cc]"
                    style={{ color: 'rgba(0,0,0,0.6)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: '#1d1d1f', letterSpacing: '0.5px' }}
            >
              Legal
            </h3>
            <ul className="space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-[#0066cc]"
                    style={{ color: 'rgba(0,0,0,0.6)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
          style={{ borderColor: '#d2d2d7' }}
        >
          <p className="text-xs" style={{ color: 'rgba(0,0,0,0.48)' }}>
            © {new Date().getFullYear()} Zentrik Solutions. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(0,0,0,0.48)' }}>
            Registered Business · Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  )
}
