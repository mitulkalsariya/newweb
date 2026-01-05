import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Shield, CheckCircle, Award, FileCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compliance & Certifications - CyberShield Pro',
  description: 'Learn about CyberShield Pro\'s compliance certifications, industry standards, and regulatory frameworks we support.',
}

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Shield className="h-16 w-16 text-primary-600" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Compliance & Certifications
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                CyberShield Pro maintains the highest standards of security and compliance. 
                We are certified and compliant with major industry standards and regulatory frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* Our Certifications */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'ISO 27001',
                  description: 'Information Security Management System',
                  details: 'Certified for implementing and maintaining comprehensive information security management systems.'
                },
                {
                  name: 'SOC 2 Type II',
                  description: 'Service Organization Control',
                  details: 'Verified security, availability, and confidentiality controls for service organizations.'
                },
                {
                  name: 'CEH',
                  description: 'Certified Ethical Hacker',
                  details: 'Our team includes certified ethical hackers with proven expertise in penetration testing.'
                },
                {
                  name: 'OSCP',
                  description: 'Offensive Security Certified Professional',
                  details: 'Advanced penetration testing certification demonstrating hands-on security skills.'
                }
              ].map((cert, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                  <Award className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-sm font-medium text-primary-600 mb-3">{cert.description}</p>
                  <p className="text-sm text-gray-600">{cert.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Compliance Frameworks We Support
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileCheck,
                  name: 'PCI-DSS',
                  description: 'Payment Card Industry Data Security Standard',
                  scope: 'We help organizations achieve and maintain PCI-DSS compliance for payment processing systems.'
                },
                {
                  icon: Shield,
                  name: 'GDPR',
                  description: 'General Data Protection Regulation',
                  scope: 'Comprehensive data protection and privacy compliance for EU operations.'
                },
                {
                  icon: FileCheck,
                  name: 'HIPAA',
                  description: 'Health Insurance Portability and Accountability Act',
                  scope: 'Healthcare data security and privacy compliance for medical organizations.'
                },
                {
                  icon: Shield,
                  name: 'ISO 27001',
                  description: 'Information Security Management',
                  scope: 'International standard for information security management systems.'
                },
                {
                  icon: FileCheck,
                  name: 'NIST',
                  description: 'Cybersecurity Framework',
                  scope: 'Risk-based approach to managing cybersecurity risk.'
                },
                {
                  icon: Shield,
                  name: 'RBI Guidelines',
                  description: 'Reserve Bank of India',
                  scope: 'Compliance with RBI cybersecurity guidelines for financial institutions.'
                },
                {
                  icon: FileCheck,
                  name: 'SEBI Regulations',
                  description: 'Securities and Exchange Board of India',
                  scope: 'Cybersecurity compliance for capital market participants.'
                },
                {
                  icon: Shield,
                  name: 'SOC 2',
                  description: 'Service Organization Control',
                  scope: 'Security, availability, and confidentiality controls for service providers.'
                },
                {
                  icon: FileCheck,
                  name: 'OWASP',
                  description: 'Open Web Application Security Project',
                  scope: 'Application security testing based on OWASP Top 10 and testing guidelines.'
                }
              ].map((framework, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <framework.icon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{framework.name}</h3>
                  <p className="text-sm font-medium text-gray-500 mb-3">{framework.description}</p>
                  <p className="text-sm text-gray-600">{framework.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Commitment to Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Continuous Monitoring',
                  description: 'We continuously monitor and update our security practices to maintain compliance with evolving standards and regulations.'
                },
                {
                  title: 'Regular Audits',
                  description: 'Independent third-party audits verify our compliance with industry standards and certifications annually.'
                },
                {
                  title: 'Data Protection',
                  description: 'We implement robust data protection measures including encryption, access controls, and secure data handling procedures.'
                },
                {
                  title: 'Team Training',
                  description: 'Our team receives regular training on compliance requirements, security best practices, and emerging threats.'
                },
                {
                  title: 'Transparent Reporting',
                  description: 'We provide detailed compliance reports and documentation to demonstrate adherence to regulatory requirements.'
                },
                {
                  title: 'Client Confidentiality',
                  description: 'Strict confidentiality agreements and data handling procedures protect all client information and assessment results.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Services */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Compliance Services We Provide
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We help organizations achieve and maintain compliance with industry standards and regulations
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Gap Assessment',
                  description: 'Identify gaps between current state and compliance requirements'
                },
                {
                  title: 'Compliance Roadmap',
                  description: 'Develop detailed plans to achieve compliance objectives'
                },
                {
                  title: 'Policy Development',
                  description: 'Create security policies and procedures aligned with standards'
                },
                {
                  title: 'Technical Implementation',
                  description: 'Implement required security controls and technical measures'
                },
                {
                  title: 'Audit Preparation',
                  description: 'Prepare for compliance audits and certification assessments'
                },
                {
                  title: 'Ongoing Support',
                  description: 'Continuous support to maintain compliance over time'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-primary-600">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help with Compliance?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Our compliance experts can help you achieve and maintain regulatory compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </a>
              <a href="/assessment" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

