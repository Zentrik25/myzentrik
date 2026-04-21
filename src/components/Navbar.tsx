'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Our Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full apple-nav">
      <div className="mx-auto flex h-12 max-w-[980px] items-center justify-between px-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold text-white hover:text-white/80 transition-colors"
          style={{ letterSpacing: '-0.28px' }}
        >
          Zentrik Solutions
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'text-xs transition-colors',
                pathname === l.href
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="apple-btn-primary-sm hidden md:inline-flex"
        >
          Get a Free Quote
        </Link>

        {/* Mobile toggle */}
        <button
          className="flex h-8 w-8 items-center justify-center text-white/80 hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="border-t md:hidden"
          style={{ background: 'rgba(0,0,0,0.92)', borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <nav className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-2.5 text-sm transition-colors',
                  pathname === l.href
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="apple-btn-primary mt-3 w-full text-center text-sm"
              style={{ fontSize: '14px', padding: '10px 16px' }}
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
