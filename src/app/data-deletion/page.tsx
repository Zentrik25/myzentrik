import type { Metadata } from 'next'
import Link from 'next/link'
import { Trash2, Mail, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Deletion Request',
  description: 'Request deletion of your personal data from Zentrik Solutions systems, including data collected via Facebook/Meta integrations.',
}

export default function DataDeletionPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-32 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="section-label mb-4">Data Deletion</p>
        <h1 className="mb-4 font-semibold" style={{ fontSize: '40px', letterSpacing: '-0.28px', color: '#1d1d1f' }}>
          Request Data Deletion
        </h1>
        <p className="text-[17px] leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
          You have the right to request deletion of your personal data at any time.
          We will process your request and confirm deletion within 30 days.
        </p>
      </div>

      {/* Facebook note */}
      <div
        className="mb-6 rounded-lg p-6"
        style={{ background: 'rgba(0,113,227,0.06)', border: '1px solid rgba(0,113,227,0.2)' }}
      >
        <h2 className="mb-2 font-semibold" style={{ color: '#1d1d1f', fontSize: '17px' }}>
          Facebook / Meta App Data Deletion
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
          If you used Facebook Login or interacted with our chatbots via Facebook Messenger,
          WhatsApp, or Instagram, you can request deletion of all data we collected through
          those interactions, including conversation history, profile information, and any
          data stored in our systems linked to your Facebook/Meta account.
        </p>
      </div>

      {/* How to request */}
      <div
        className="mb-6 rounded-2xl p-8"
        style={{ background: '#f5f5f7', border: '1px solid #d2d2d7' }}
      >
        <div
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl"
          style={{ background: 'rgba(255,59,48,0.1)' }}
        >
          <Trash2 className="h-7 w-7" style={{ color: '#ff3b30' }} />
        </div>

        <h2 className="mb-6 font-semibold" style={{ fontSize: '21px', color: '#1d1d1f', letterSpacing: '0.231px' }}>
          How to Request Deletion
        </h2>

        <div className="space-y-5">
          {[
            {
              n: '1',
              title: 'Send us an email',
              body: (
                <>
                  Email us at{' '}
                  <a
                    href="mailto:info@zentriksolutions.com?subject=Data%20Deletion%20Request&body=Please%20delete%20all%20personal%20data%20associated%20with%20this%20email%20address%20and%20any%20linked%20Facebook%2FMeta%20accounts."
                    style={{ color: '#0066cc' }}
                  >
                    info@zentriksolutions.com
                  </a>{' '}
                  with the subject line: <strong style={{ color: '#1d1d1f' }}>&quot;Data Deletion Request&quot;</strong>
                </>
              ),
            },
            {
              n: '2',
              title: 'Include your details',
              body: 'Include your name, email address, and if applicable, your Facebook profile URL or the name associated with your Meta account so we can locate your data.',
            },
            {
              n: '3',
              title: 'We confirm deletion',
              body: 'We will process your request and send you a confirmation email once all your data has been permanently deleted from our systems, within 30 days.',
            },
          ].map((step) => (
            <div key={step.n} className="flex items-start gap-4">
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{ background: '#0071e3' }}
              >
                {step.n}
              </div>
              <div>
                <p className="font-semibold" style={{ color: '#1d1d1f', fontSize: '14px' }}>{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="mailto:info@zentriksolutions.com?subject=Data%20Deletion%20Request&body=Please%20delete%20all%20personal%20data%20associated%20with%20this%20email%20address%20and%20any%20linked%20Facebook%2FMeta%20accounts.%0A%0AMy%20name%3A%20%0AMy%20email%3A%20%0AFacebook%20profile%20(if%20applicable)%3A"
          className="mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-opacity hover:opacity-88"
          style={{ background: '#ff3b30', fontSize: '17px' }}
        >
          <Mail className="h-5 w-5" />
          Send Deletion Request via Email
        </a>
      </div>

      {/* What gets deleted */}
      <div
        className="rounded-2xl p-6"
        style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}
      >
        <h2 className="mb-4 font-semibold" style={{ color: '#1d1d1f', fontSize: '17px' }}>What Data We Delete</h2>
        <ul className="space-y-2">
          {[
            'Name, email address, and phone number from contact form submissions',
            'Project enquiry and communication history',
            'Facebook/Meta profile data collected via platform integrations',
            'Chatbot conversation history linked to your account',
            'Any other personal identifiers stored in our systems',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(0,0,0,0.7)' }}>
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#34c759' }} />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>
          Note: We may retain certain records where required by law (e.g., financial transaction records).
          These will be communicated to you in your deletion confirmation.
        </p>
      </div>

      <p className="mt-8 text-center text-sm" style={{ color: 'rgba(0,0,0,0.48)' }}>
        For more information, see our{' '}
        <Link href="/privacy-policy" style={{ color: '#0066cc' }}>
          Privacy Policy
        </Link>.
      </p>
    </div>
  )
}
