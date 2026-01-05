import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Globe, Shield, Lock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Application Security Solutions - Comprehensive Protection',
  description: 'Complete web application security solutions including OWASP Top 10 testing, authentication security, and data protection.',
  keywords: 'web application security, OWASP testing, web security solutions, application protection',
}

export default function WebSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Globe className="h-16 w-16 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Web Application Security
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                Comprehensive security solutions for modern web applications. Protect against 
                OWASP Top 10 vulnerabilities and emerging web-based threats.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Complete Web Security Platform
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our web application security solutions provide end-to-end protection for 
                  your web properties, from frontend to backend infrastructure.
                </p>
                <ul className="space-y-4">
                  {[
                    'OWASP Top 10 vulnerability testing',
                    'SQL Injection and XSS prevention',
                    'Authentication and session management',
                    'CSRF and clickjacking protection',
                    'Secure API integration',
                    'Real-time threat monitoring'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Security Coverage</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Frontend Security', value: '100%' },
                    { label: 'Backend Protection', value: '100%' },
                    { label: 'Database Security', value: '100%' },
                    { label: 'API Security', value: '100%' }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span>{stat.label}</span>
                        <span className="font-bold">{stat.value}</span>
                      </div>
                      <div className="bg-white/20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2 w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Comprehensive Security Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Vulnerability Scanning',
                  description: 'Automated scanning for common and emerging vulnerabilities across your web applications.'
                },
                {
                  icon: Lock,
                  title: 'Penetration Testing',
                  description: 'Manual testing by expert security professionals to uncover complex security issues.'
                },
                {
                  icon: Globe,
                  title: 'Continuous Monitoring',
                  description: 'Real-time monitoring and alerts for suspicious activities and potential threats.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-blue-600">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Secure Your Web Applications Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a comprehensive security assessment for your web properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/assessment" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Free Assessment
              </a>
              <a href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

