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
  metadataBase: new URL('https://zentriksolutions.com'),
  keywords: ['software development', 'chatbot development', 'AI agents', 'Zimbabwe', 'Zentrik Solutions'],
  openGraph: {
    type: 'website',
    siteName: 'Zentrik Solutions',
    title: 'Zentrik Solutions — Software, Chatbots & AI Agents',
    description: 'Custom software, intelligent chatbots, and AI agents for modern businesses.',
  },
  twitter: { card: 'summary_large_image' },
  other: {
    'facebook-domain-verification': 'gaxwr7v7lytyzf884nrvqg9dh38jcv',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#05050A] text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
