import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Zentrik Solutions — Software, Chatbots & AI Agents',
    template: '%s | Zentrik Solutions',
  },
  description:
    'Zentrik Solutions builds custom software, intelligent chatbots and AI agents that automate and grow your business. Based in Zimbabwe, serving globally.',
  metadataBase: new URL('https://www.zentriksolutions.com'),
  openGraph: {
    type: 'website',
    siteName: 'Zentrik Solutions',
    title: 'Zentrik Solutions — Software, Chatbots & AI Agents',
    description: 'Zentrik Solutions builds custom software, intelligent chatbots, and AI agents that automate and grow your business. Based in Zimbabwe, serving clients globally.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Zentrik Solutions — Software, Chatbots & AI Agents' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zentrik Solutions — Software, Chatbots & AI Agents',
    description: 'Custom software, chatbots & AI agents — built in Zimbabwe, serving globally.',
    images: ['/opengraph-image'],
  },
  other: {
    'facebook-domain-verification': 'gaxwr7v7lytyzf884nrvqg9dh38jcv',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} style={{ background: '#ffffff', color: '#1d1d1f' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
