import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service - CyberShield Pro',
  description: 'Terms of Service for CyberShield Pro. Read our terms and conditions for using our cybersecurity services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-12">Last Updated: January 5, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and CyberShield Pro ("Company," "we," "us," or "our") concerning your access to and use of our website and cybersecurity services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-4">
                CyberShield Pro provides cybersecurity services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Vulnerability Assessment and Penetration Testing (VAPT)</li>
                <li>Web Application Security Testing</li>
                <li>API Security Testing</li>
                <li>Infrastructure Security Assessment</li>
                <li>Cloud Security Services</li>
                <li>Security Consulting</li>
                <li>Compliance Assessment</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Obligations</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">You agree to:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate and complete information when using our services</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with the proper functioning of our services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Scope and Authorization</h2>
              <p className="text-gray-700 mb-4">
                Before conducting any security testing, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide written authorization for all systems to be tested</li>
                <li>Ensure you have the legal right to authorize testing</li>
                <li>Define the scope and limitations of testing</li>
                <li>Agree to the testing methodology and timeframes</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We will not conduct any testing without proper authorization and a signed agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Confidentiality</h2>
              <p className="text-gray-700">
                We maintain strict confidentiality regarding all information obtained during our security assessments. All findings, vulnerabilities, and related data will be treated as confidential and shared only with authorized personnel from your organization.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitations of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability shall not exceed the fees paid for the specific service</li>
                <li>We are not responsible for issues arising from systems outside our testing scope</li>
                <li>We cannot guarantee that all vulnerabilities will be discovered</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700">
                All content, tools, methodologies, and materials provided by CyberShield Pro remain our intellectual property. You may not reproduce, distribute, or create derivative works without our written consent. Security reports provided to you are for your internal use only.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms are specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fees are quoted and agreed upon before service delivery</li>
                <li>Payment is typically due within 30 days of invoice</li>
                <li>Late payments may incur interest charges</li>
                <li>Refunds are subject to the terms of your service agreement</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Service Warranties and Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                We warrant that our services will be performed with reasonable skill and care. However:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Services are provided "as is" without warranties of any kind</li>
                <li>We cannot guarantee specific results or outcomes</li>
                <li>Security testing may not identify all vulnerabilities</li>
                <li>No security assessment can provide absolute security</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700">
                Either party may terminate services according to the terms specified in the service agreement. Upon termination, you must cease using our services and destroy any confidential materials. We will provide any final reports or deliverables as specified in the agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify and hold CyberShield Pro harmless from any claims, damages, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
              <p className="text-gray-700">
                These Terms are governed by the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@cybershieldpro.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 98765 43210</p>
                <p className="text-gray-700"><strong>Address:</strong> Ahmedabad, Gujarat, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

