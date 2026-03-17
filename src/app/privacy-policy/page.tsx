import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Zentrik Solutions — how we collect, use, and protect your personal data.',
}

const LAST_UPDATED = 'March 17, 2026'
const COMPANY = 'Zentrik Solutions'
const EMAIL = 'info@zentriksolutions.com'
const SITE = 'https://zentriksolutions.com'

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-32 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-2 text-sm text-gray-500">Last Updated: {LAST_UPDATED}</p>
        <h1 className="text-4xl font-black text-white">Privacy Policy</h1>
        <p className="mt-3 text-gray-400">
          This Privacy Policy describes how {COMPANY} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          collects, uses, and shares information about you when you use our website at{' '}
          <Link href="/" className="text-violet-400 hover:underline">{SITE}</Link> and when
          you interact with our services.
        </p>
      </div>

      <div className="prose prose-invert prose-violet max-w-none space-y-10 text-gray-400">

        <section>
          <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-gray-300">Contact information:</strong> Name, email address, phone number when you fill out our contact form.</li>
            <li><strong className="text-gray-300">Project details:</strong> Information about your project needs, budget range, and service requirements.</li>
            <li><strong className="text-gray-300">Communications:</strong> Messages you send us via email, WhatsApp, or contact forms.</li>
            <li><strong className="text-gray-300">Usage data:</strong> Pages visited, time on site, referring URLs, browser type, and device information (collected automatically via standard web analytics).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to your enquiries and provide quotes for our services</li>
            <li>Deliver and improve our software, chatbot, and AI development services</li>
            <li>Send you project updates, invoices, and service-related communications</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and protect the security of our services</li>
          </ul>
          <p>We do <strong className="text-gray-300">not</strong> sell your personal information to third parties. We do not use your data for advertising purposes without your explicit consent.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">3. Information Sharing</h2>
          <p>We may share your information only in the following limited circumstances:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-gray-300">Service providers:</strong> We may share data with trusted service providers (e.g., email providers, hosting services) who assist in operating our website, strictly under confidentiality agreements.</li>
            <li><strong className="text-gray-300">Legal requirements:</strong> We may disclose information when required by law or to protect the rights, property, or safety of {COMPANY}, our clients, or others.</li>
            <li><strong className="text-gray-300">Business transfers:</strong> In the event of a merger or acquisition, your information may be transferred as a business asset.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">4. Meta / Facebook Platform</h2>
          <p>
            We develop chatbots and integrations using the Meta (Facebook) Platform, including
            the WhatsApp Business API, Facebook Messenger API, and Instagram API. When you
            interact with our client&apos;s chatbots powered by these platforms:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Conversations and messages are processed in accordance with Meta&apos;s Platform Terms.</li>
            <li>We only collect the minimum data necessary to deliver the chatbot service.</li>
            <li>We do not use Meta platform data for purposes beyond providing the contracted service.</li>
            <li>We do not transfer Meta platform data to data brokers or use it for targeting advertisements.</li>
            <li>Users can request deletion of their data at any time. See Section 7 for details.</li>
          </ul>
          <p>
            For more information on how Meta handles data, see the{' '}
            <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
              Meta Privacy Policy
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">5. Cookies &amp; Tracking</h2>
          <p>
            Our website uses essential cookies to function properly. We may also use
            analytics tools (such as Vercel Analytics) to understand how visitors use our
            site. This data is anonymised and aggregated — it cannot be used to identify you personally.
          </p>
          <p>
            You can disable cookies in your browser settings. Note that some website
            functionality may be affected if cookies are disabled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfil the
            purposes outlined in this Privacy Policy, including providing services to
            you and complying with legal obligations. Contact form submissions are
            retained for up to 2 years unless you request earlier deletion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">7. Your Rights &amp; Data Deletion</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise any of these rights, or to request deletion of your data,
            please visit our{' '}
            <Link href="/data-deletion" className="text-violet-400 hover:underline">
              Data Deletion page
            </Link>{' '}
            or email us at{' '}
            <a href={`mailto:${EMAIL}`} className="text-violet-400 hover:underline">{EMAIL}</a>.
            We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">8. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 13. We do not
            knowingly collect personal information from children. If you believe a child
            has provided us with personal information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">9. Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your
            information against unauthorised access, loss, or disclosure. Our website
            uses HTTPS encryption. However, no method of internet transmission is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will
            update the &quot;Last Updated&quot; date at the top of this page. Continued use
            of our website after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices,
            please contact us:
          </p>
          <ul className="list-none space-y-1">
            <li><strong className="text-gray-300">Company:</strong> {COMPANY}</li>
            <li><strong className="text-gray-300">Email:</strong> <a href={`mailto:${EMAIL}`} className="text-violet-400 hover:underline">{EMAIL}</a></li>
            <li><strong className="text-gray-300">Location:</strong> Harare, Zimbabwe</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
