import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Trash2, Mail, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Deletion Request',
  description: 'Request deletion of your personal data from Zentrik Solutions systems, including data collected via Facebook/Meta integrations.',
}

// This page is REQUIRED by Meta to approve Facebook Login and WhatsApp/Messenger API access.
// URL to submit in Meta App settings: https://yourdomain.com/data-deletion

export default function DataDeletionPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-32 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <Badge variant="outline" className="mb-4 border-violet-500/40 bg-violet-500/10 text-violet-300">
          Data Deletion
        </Badge>
        <h1 className="mb-4 text-4xl font-black text-white">
          Request Data Deletion
        </h1>
        <p className="text-gray-400">
          You have the right to request deletion of your personal data at any time.
          We will process your request and confirm deletion within 30 days.
        </p>
      </div>

      {/* Facebook-specific note */}
      <div className="mb-8 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">
        <h2 className="mb-2 font-bold text-white">Facebook / Meta App Data Deletion</h2>
        <p className="text-sm text-gray-400">
          If you used Facebook Login or interacted with our chatbots via Facebook Messenger,
          WhatsApp, or Instagram, you can request deletion of all data we collected through
          those interactions. This includes conversation history, profile information, and
          any data stored in our systems linked to your Facebook/Meta account.
        </p>
      </div>

      {/* How to request */}
      <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10">
          <Trash2 className="h-7 w-7 text-red-400" />
        </div>

        <h2 className="mb-4 text-xl font-bold text-white">How to Request Deletion</h2>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-sm font-bold text-violet-400">
              1
            </div>
            <div>
              <p className="font-medium text-white">Send us an email</p>
              <p className="text-sm text-gray-400">
                Email us at{' '}
                <a
                  href="mailto:info@zentriksolutions.com?subject=Data%20Deletion%20Request&body=Please%20delete%20all%20personal%20data%20associated%20with%20this%20email%20address%20and%20any%20linked%20Facebook%2FMeta%20accounts."
                  className="text-violet-400 hover:underline"
                >
                  info@zentriksolutions.com
                </a>{' '}
                with the subject line: <strong className="text-gray-300">&quot;Data Deletion Request&quot;</strong>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-sm font-bold text-violet-400">
              2
            </div>
            <div>
              <p className="font-medium text-white">Include your details</p>
              <p className="text-sm text-gray-400">
                Include your name, email address, and if applicable, your Facebook profile
                URL or the name associated with your Meta account so we can locate your data.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-sm font-bold text-violet-400">
              3
            </div>
            <div>
              <p className="font-medium text-white">We confirm deletion</p>
              <p className="text-sm text-gray-400">
                We will process your request and send you a confirmation email once all your
                data has been permanently deleted from our systems — within 30 days.
              </p>
            </div>
          </div>
        </div>

        <a
          href="mailto:info@zentriksolutions.com?subject=Data%20Deletion%20Request&body=Please%20delete%20all%20personal%20data%20associated%20with%20this%20email%20address%20and%20any%20linked%20Facebook%2FMeta%20accounts.%0A%0AMy%20name%3A%20%0AMy%20email%3A%20%0AFacebook%20profile%20(if%20applicable)%3A"
          className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-500"
        >
          <Mail className="h-5 w-5" />
          Send Deletion Request via Email
        </a>
      </div>

      {/* What gets deleted */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-4 font-bold text-white">What Data We Delete</h2>
        <ul className="space-y-2">
          {[
            'Name, email address, and phone number from contact form submissions',
            'Project enquiry and communication history',
            'Facebook/Meta profile data collected via platform integrations',
            'Chatbot conversation history linked to your account',
            'Any other personal identifiers stored in our systems',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-gray-500">
          Note: We may retain certain records where required by law (e.g., financial
          transaction records). These will be communicated to you in your deletion confirmation.
        </p>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        For more information, see our{' '}
        <Link href="/privacy-policy" className="text-violet-400 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  )
}
