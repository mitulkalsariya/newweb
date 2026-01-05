import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Cookie Policy - CyberShield Pro',
  description: 'Cookie Policy for CyberShield Pro. Learn about how we use cookies and tracking technologies.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <p className="text-sm text-gray-600 mb-12">Last Updated: January 5, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to website owners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                CyberShield Pro uses cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Ensure our website functions properly</li>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve our website and services</li>
                <li>Provide personalized content and advertisements</li>
                <li>Analyze website traffic and user behavior</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences or logging in.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p className="text-sm text-gray-600"><strong>Duration:</strong> Session or up to 1 year</p>
                  <p className="text-sm text-gray-600"><strong>Purpose:</strong> Authentication, security, site functionality</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. They help us understand which pages are most and least popular.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p className="text-sm text-gray-600"><strong>Duration:</strong> Up to 2 years</p>
                  <p className="text-sm text-gray-600"><strong>Purpose:</strong> Analytics, site optimization</p>
                  <p className="text-sm text-gray-600"><strong>Examples:</strong> Google Analytics</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences and providing personalized content.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p className="text-sm text-gray-600"><strong>Duration:</strong> Session to 1 year</p>
                  <p className="text-sm text-gray-600"><strong>Purpose:</strong> User preferences, language settings</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Targeting/Advertising Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p className="text-sm text-gray-600"><strong>Duration:</strong> Up to 2 years</p>
                  <p className="text-sm text-gray-600"><strong>Purpose:</strong> Targeted advertising, remarketing</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that set cookies on our website. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Google Analytics:</strong> Web analytics service to understand user behavior</li>
                <li><strong>Social Media Platforms:</strong> Enable social sharing and display social content</li>
                <li><strong>Marketing Platforms:</strong> Track conversions and optimize advertising</li>
              </ul>
              <p className="text-gray-700 mt-4">
                These third parties have their own privacy policies and may use cookies for their own purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How to Control Cookies</h2>
              <p className="text-gray-700 mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Delete all cookies from your browser</li>
                <li>Block all cookies from being set</li>
                <li>Allow only first-party cookies</li>
                <li>Clear cookies when you close your browser</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Note:</strong> If you disable or refuse cookies, some parts of our website may become inaccessible or not function properly.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Browser-Specific Instructions</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Edge:</strong> Settings &gt; Privacy, search, and services &gt; Cookies and site permissions</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Opt-Out Options</h2>
              <p className="text-gray-700 mb-4">
                You can opt out of specific types of cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Google Analytics:</strong> Use the <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary-600 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Advertising Cookies:</strong> Visit industry opt-out pages like <a href="http://www.aboutads.info/choices/" className="text-primary-600 hover:underline">Digital Advertising Alliance</a></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Other Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                In addition to cookies, we may use other tracking technologies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Web Beacons:</strong> Small graphic images used to track page views and email opens</li>
                <li><strong>Local Storage:</strong> HTML5 local storage for storing preferences and settings</li>
                <li><strong>Session Storage:</strong> Temporary storage cleared when you close your browser</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Cookie Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please check this page regularly for updates.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> privacy@cybershieldpro.com</p>
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

