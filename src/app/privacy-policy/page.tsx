import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Zentrik Solutions: how we collect, use, and protect your personal data.',
}

const LAST_UPDATED = 'March 17, 2026'
const COMPANY = 'Zentrik Solutions'
const EMAIL = 'info@zentriksolutions.com'
const SITE = 'https://zentriksolutions.com'

const h2Style: React.CSSProperties = { fontSize: '24px', fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.28px', marginBottom: '12px' }
const strongStyle: React.CSSProperties = { color: '#1d1d1f', fontWeight: 600 }
const linkStyle: React.CSSProperties = { color: '#0066cc' }

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-32 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-2 text-sm" style={{ color: 'rgba(0,0,0,0.48)' }}>Last Updated: {LAST_UPDATED}</p>
        <h1 className="font-semibold" style={{ fontSize: '40px', letterSpacing: '-0.28px', color: '#1d1d1f' }}>Privacy Policy</h1>
        <p className="mt-3 leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)', fontSize: '17px' }}>
          This Privacy Policy describes how {COMPANY} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          collects, uses, and shares information about you when you use our website at{' '}
          <Link href="/" style={linkStyle}>{SITE}</Link> and when you interact with our services.
        </p>
      </div>

      <div className="space-y-10" style={{ color: 'rgba(0,0,0,0.7)', fontSize: '17px', lineHeight: 1.47 }}>
        <section>
          <h2 style={h2Style}>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li><strong style={strongStyle}>Contact information:</strong> Name, email address, phone number when you fill out our contact form.</li>
            <li><strong style={strongStyle}>Project details:</strong> Information about your project needs, budget range, and service requirements.</li>
            <li><strong style={strongStyle}>Communications:</strong> Messages you send us via email, WhatsApp, or contact forms.</li>
            <li><strong style={strongStyle}>Usage data:</strong> Pages visited, time on site, referring URLs, browser type, and device information (collected automatically via standard web analytics).</li>
          </ul>
        </section>

        <section>
          <h2 style={h2Style}>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>Respond to your enquiries and provide quotes for our services</li>
            <li>Deliver and improve our software, chatbot, and AI development services</li>
            <li>Send you project updates, invoices, and service-related communications</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and protect the security of our services</li>
          </ul>
          <p className="mt-3">We do <strong style={strongStyle}>not</strong> sell your personal information to third parties. We do not use your data for advertising purposes without your explicit consent.</p>
        </section>

        <section>
          <h2 style={h2Style}>3. Information Sharing</h2>
          <p>We may share your information only in the following limited circumstances:</p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li><strong style={strongStyle}>Service providers:</strong> We may share data with trusted service providers who assist in operating our website, strictly under confidentiality agreements.</li>
            <li><strong style={strongStyle}>Legal requirements:</strong> We may disclose information when required by law or to protect the rights, property, or safety of {COMPANY}, our clients, or others.</li>
            <li><strong style={strongStyle}>Business transfers:</strong> In the event of a merger or acquisition, your information may be transferred as a business asset.</li>
          </ul>
        </section>

        <section>
          <h2 style={h2Style}>4. Meta / Facebook Platform</h2>
          <p>
            We develop chatbots and integrations using the Meta (Facebook) Platform, including
            the WhatsApp Business API, Facebook Messenger API, and Instagram API. When you
            interact with our client&apos;s chatbots powered by these platforms:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>Conversations and messages are processed in accordance with Meta&apos;s Platform Terms.</li>
            <li>We only collect the minimum data necessary to deliver the chatbot service.</li>
            <li>We do not use Meta platform data for purposes beyond providing the contracted service.</li>
            <li>We do not transfer Meta platform data to data brokers or use it for targeting advertisements.</li>
            <li>Users can request deletion of their data at any time. See Section 7 for details.</li>
          </ul>
          <p className="mt-3">
            For more information on how Meta handles data, see the{' '}
            <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Meta Privacy Policy
            </a>.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>5. Cookies &amp; Tracking</h2>
          <p>
            Our website uses essential cookies to function properly. We may also use
            analytics tools (such as Vercel Analytics) to understand how visitors use our
            site. This data is anonymised and aggregated; it cannot be used to identify you personally.
          </p>
          <p className="mt-3">
            You can disable cookies in your browser settings. Note that some website
            functionality may be affected if cookies are disabled.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfil the
            purposes outlined in this Privacy Policy, including providing services to
            you and complying with legal obligations. Contact form submissions are
            retained for up to 2 years unless you request earlier deletion.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>7. Your Rights &amp; Data Deletion</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please visit our{' '}
            <Link href="/data-deletion" style={linkStyle}>Data Deletion page</Link>{' '}
            or email us at{' '}
            <a href={`mailto:${EMAIL}`} style={linkStyle}>{EMAIL}</a>.
            We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>8. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 13. We do not
            knowingly collect personal information from children. If you believe a child
            has provided us with personal information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>9. Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your
            information against unauthorised access, loss, or disclosure. Our website
            uses HTTPS encryption. However, no method of internet transmission is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will
            update the &quot;Last Updated&quot; date at the top of this page. Continued use
            of our website after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="list-none space-y-1 mt-3">
            <li><strong style={strongStyle}>Company:</strong> {COMPANY}</li>
            <li><strong style={strongStyle}>Email:</strong> <a href={`mailto:${EMAIL}`} style={linkStyle}>{EMAIL}</a></li>
            <li><strong style={strongStyle}>Location:</strong> Mutare, Zimbabwe</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
