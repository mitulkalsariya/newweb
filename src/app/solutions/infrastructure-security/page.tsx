import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Server, Network, Shield, CheckCircle, Lock, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Infrastructure Security Solutions - Network & Server Protection',
  description: 'Comprehensive infrastructure security solutions for network, server, and data center protection. Secure your IT infrastructure.',
  keywords: 'infrastructure security, network security, server security, data center protection',
}

export default function InfrastructureSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Server className="h-16 w-16 text-gray-700" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Infrastructure Security Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                Protect your critical IT infrastructure with comprehensive security solutions 
                covering networks, servers, databases, and data centers.
              </p>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Complete Infrastructure Protection
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Network,
                  title: 'Network Security',
                  description: 'Firewall configuration, intrusion detection, and network segmentation testing.',
                  features: [
                    'Firewall rule review',
                    'Network segmentation',
                    'IDS/IPS testing',
                    'VPN security'
                  ]
                },
                {
                  icon: Server,
                  title: 'Server Hardening',
                  description: 'Comprehensive server security assessment and hardening recommendations.',
                  features: [
                    'OS hardening',
                    'Patch management',
                    'Service configuration',
                    'Access control'
                  ]
                },
                {
                  icon: Lock,
                  title: 'Database Security',
                  description: 'Database security assessment, encryption, and access control testing.',
                  features: [
                    'SQL injection testing',
                    'Encryption review',
                    'Access policies',
                    'Backup security'
                  ]
                },
                {
                  icon: Shield,
                  title: 'Physical Security',
                  description: 'Data center and physical infrastructure security assessment.',
                  features: [
                    'Access controls',
                    'Environmental controls',
                    'Asset management',
                    'Incident response'
                  ]
                },
                {
                  icon: AlertTriangle,
                  title: 'Threat Detection',
                  description: 'Real-time threat monitoring and incident response capabilities.',
                  features: [
                    'SIEM integration',
                    'Log analysis',
                    'Anomaly detection',
                    'Threat intelligence'
                  ]
                },
                {
                  icon: CheckCircle,
                  title: 'Compliance Testing',
                  description: 'Ensure compliance with industry standards and regulations.',
                  features: [
                    'ISO 27001',
                    'PCI DSS',
                    'HIPAA',
                    'SOC 2'
                  ]
                }
              ].map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                  <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Security Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'Comprehensive infrastructure mapping and asset inventory'
                },
                {
                  step: '02',
                  title: 'Assessment',
                  description: 'Vulnerability scanning and penetration testing'
                },
                {
                  step: '03',
                  title: 'Analysis',
                  description: 'Risk assessment and prioritization'
                },
                {
                  step: '04',
                  title: 'Remediation',
                  description: 'Detailed recommendations and support'
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '99.9%', label: 'Uptime Guarantee' },
                { value: '1000+', label: 'Servers Protected' },
                { value: '24/7', label: 'Monitoring' },
                { value: '<15min', label: 'Response Time' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-gray-900 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Secure Your Infrastructure Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a comprehensive infrastructure security assessment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/assessment" className="btn-primary">
                Free Assessment
              </a>
              <a href="/contact" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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

