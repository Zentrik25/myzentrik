import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Zentrik Solutions.',
}

const LAST_UPDATED = 'March 17, 2026'
const COMPANY = 'Zentrik Solutions'
const EMAIL = 'hello@zeentriksolutions.com'

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-32 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-2 text-sm text-gray-500">Last Updated: {LAST_UPDATED}</p>
        <h1 className="text-4xl font-black text-white">Terms of Service</h1>
        <p className="mt-3 text-gray-400">
          Please read these Terms of Service carefully before using our website or engaging
          our services. By accessing our website or commissioning our services, you agree to
          be bound by these terms.
        </p>
      </div>

      <div className="prose prose-invert prose-violet max-w-none space-y-10 text-gray-400">

        <section>
          <h2 className="text-2xl font-bold text-white">1. About Zentrik Solutions</h2>
          <p>
            {COMPANY} is a software development company based in Harare, Zimbabwe.
            We provide custom software development, chatbot development, and AI agent
            development services to businesses worldwide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">2. Services</h2>
          <p>
            Our services include but are not limited to: custom web and mobile application
            development, chatbot development for platforms including WhatsApp, Facebook
            Messenger, and Instagram, and AI agent development. The specific scope of each
            engagement is defined in a written project agreement or proposal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">3. Use of Our Website</h2>
          <p>You agree to use our website only for lawful purposes. You must not:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the site in any way that violates applicable laws or regulations</li>
            <li>Transmit any unsolicited or unauthorised advertising or spam</li>
            <li>Attempt to gain unauthorised access to our systems</li>
            <li>Reproduce or redistribute our content without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">4. Intellectual Property</h2>
          <p>
            Upon full payment, you own the custom software, code, and deliverables we create
            specifically for you under a project agreement. We retain ownership of any
            pre-existing tools, frameworks, libraries, or components that we incorporate
            into your project, subject to their respective open-source licences.
          </p>
          <p>
            All content on this website — including text, logos, and design — is the property
            of {COMPANY} and may not be used without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">5. Payment Terms</h2>
          <p>
            Payment terms are specified in individual project agreements. Typically, we
            require a deposit before work commences, with the balance due upon delivery.
            Invoices not paid within 14 days of the due date may incur a late payment fee.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {COMPANY} shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from
            your use of our website or services. Our total liability in any matter shall
            not exceed the amount paid by you for the specific service giving rise to the claim.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">7. Privacy</h2>
          <p>
            Your use of our services is also governed by our{' '}
            <Link href="/privacy-policy" className="text-violet-400 hover:underline">
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">8. Third-Party Platforms</h2>
          <p>
            When we develop chatbots or integrations for third-party platforms (including
            Meta/Facebook, WhatsApp, Instagram), your use of those platforms is also subject
            to the respective platform&apos;s terms of service. We are not responsible for
            changes to third-party platform policies that affect your service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">9. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our website or services
            at any time, with or without notice, for conduct that we believe violates these
            Terms or is harmful to other users, us, or third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Zimbabwe. Any disputes shall be resolved
            under the jurisdiction of the courts of Zimbabwe.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">11. Changes to These Terms</h2>
          <p>
            We may update these Terms at any time. Changes will be effective upon posting to
            this page. Continued use of our website or services constitutes acceptance of
            the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">12. Contact</h2>
          <p>
            Questions about these Terms? Contact us at{' '}
            <a href={`mailto:${EMAIL}`} className="text-violet-400 hover:underline">{EMAIL}</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
