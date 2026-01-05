import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Cloud, Shield, Lock, CheckCircle, Settings, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cloud Security Solutions - AWS, Azure & GCP Protection',
  description: 'Comprehensive cloud security solutions for AWS, Azure, and Google Cloud Platform. Cloud security assessment and compliance.',
  keywords: 'cloud security, AWS security, Azure security, GCP security, cloud compliance',
}

export default function CloudSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Cloud className="h-16 w-16 text-sky-600" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Cloud Security Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                Comprehensive cloud security for AWS, Azure, and Google Cloud Platform. 
                Protect your cloud infrastructure with expert security assessments and continuous monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Multi-Cloud Security Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Amazon Web Services',
                  description: 'Complete AWS security assessment and configuration review',
                  features: [
                    'IAM policy review',
                    'S3 bucket security',
                    'EC2 hardening',
                    'VPC configuration',
                    'CloudTrail monitoring',
                    'Lambda security'
                  ]
                },
                {
                  name: 'Microsoft Azure',
                  description: 'Azure security posture management and compliance',
                  features: [
                    'Azure AD security',
                    'Network security groups',
                    'Storage account security',
                    'VM hardening',
                    'Azure Monitor setup',
                    'Key Vault management'
                  ]
                },
                {
                  name: 'Google Cloud Platform',
                  description: 'GCP security assessment and best practices implementation',
                  features: [
                    'Cloud IAM review',
                    'GCS security',
                    'GCE configuration',
                    'VPC security',
                    'Cloud Logging',
                    'Secret Manager'
                  ]
                }
              ].map((platform, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Cloud Security Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Security Posture Assessment',
                  description: 'Comprehensive evaluation of your cloud security configuration and compliance status.'
                },
                {
                  icon: Lock,
                  title: 'Identity & Access Management',
                  description: 'Review and optimization of IAM policies, roles, and permissions across cloud platforms.'
                },
                {
                  icon: Settings,
                  title: 'Configuration Management',
                  description: 'Automated security configuration checks and remediation recommendations.'
                },
                {
                  icon: AlertCircle,
                  title: 'Threat Detection',
                  description: 'Real-time threat monitoring and incident response for cloud environments.'
                },
                {
                  icon: Cloud,
                  title: 'Container Security',
                  description: 'Security assessment for Docker, Kubernetes, and containerized applications.'
                },
                {
                  icon: CheckCircle,
                  title: 'Compliance Management',
                  description: 'Ensure compliance with SOC 2, ISO 27001, HIPAA, and other standards.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <service.icon className="h-10 w-10 text-sky-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Cloud Security Matters
                </h2>
                <div className="space-y-4">
                  {[
                    'Protect sensitive data stored in the cloud',
                    'Prevent unauthorized access and data breaches',
                    'Ensure compliance with industry regulations',
                    'Reduce cloud security risks and vulnerabilities',
                    'Optimize cloud security costs',
                    'Maintain business continuity and disaster recovery'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-sky-500 to-blue-600 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Cloud Security Stats</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Misconfiguration Prevention', value: '95%' },
                    { label: 'Compliance Achievement', value: '100%' },
                    { label: 'Cost Optimization', value: '40%' },
                    { label: 'Threat Detection Speed', value: '10x' }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{stat.label}</span>
                        <span className="font-bold">{stat.value}</span>
                      </div>
                      <div className="bg-white/20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2" style={{ width: typeof stat.value === 'string' && stat.value.includes('%') ? stat.value : '100%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-sky-600">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Secure Your Cloud Infrastructure
            </h2>
            <p className="text-xl text-sky-100 mb-8">
              Get a comprehensive cloud security assessment today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/assessment" className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Free Cloud Assessment
              </a>
              <a href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Talk to Expert
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

