import Link from 'next/link'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'

const services = [
  { href: '/services#software', label: 'Custom Software' },
  { href: '/services#chatbots', label: 'Chatbot Development' },
  { href: '/services#ai-agents', label: 'AI Agents' },
]

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

const legal = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/data-deletion', label: 'Data Deletion' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07070E]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-white">
                Zentrik<span className="text-violet-400"> Solutions</span>
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Building the future through intelligent software, chatbots, and AI agents.
              Zimbabwe-based. Globally delivered.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <a
                href="mailto:hello@zeentriksolutions.com"
                className="flex items-center gap-2 hover:text-violet-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@zeentriksolutions.com
              </a>
              <a
                href="tel:+263771234567"
                className="flex items-center gap-2 hover:text-violet-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +263 77 123 4567
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Harare, Zimbabwe
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 transition-colors hover:text-violet-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 transition-colors hover:text-violet-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 transition-colors hover:text-violet-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Zentrik Solutions. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Registered Business · Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  )
}
