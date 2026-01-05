import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceOverview from '@/components/services/ServiceOverview'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCTA from '@/components/services/ServiceCTA'
import VAPTReportCTA from '@/components/sections/VAPTReportCTA'
import { Workflow, FileCheck, LifeBuoy, Zap, CheckCircle, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VAPT Services - Vulnerability Assessment & Penetration Testing',
  description: 'Comprehensive Vulnerability Assessment and Penetration Testing (VAPT) services. Identify and fix security vulnerabilities before attackers exploit them.',
  keywords: 'VAPT services, vulnerability assessment, penetration testing, security testing, ethical hacking',
}

export default function VAPTPage() {
  const serviceData = {
    title: "VAPT Services",
    subtitle: "Comprehensive Vulnerability Assessment & Penetration Testing",
    description: "Protect your organization with our expert VAPT services. We combine automated vulnerability scanning with manual penetration testing to identify and help fix security weaknesses.",
    icon: "Shield",
    features: [
      "Comprehensive Vulnerability Assessment",
      "Manual Penetration Testing",
      "Network Security Testing",
      "Application Security Testing",
      "Infrastructure Security Review",
      "Social Engineering Testing",
      "Wireless Network Security",
      "Configuration Review",
      "Security Compliance Testing",
      "Post-Exploitation Analysis"
    ],
    benefits: [
      "Identify vulnerabilities before attackers do",
      "Meet compliance requirements (PCI-DSS, ISO 27001, etc.)",
      "Reduce risk of data breaches and cyber attacks",
      "Get actionable remediation recommendations",
      "Improve overall security posture"
    ],
    process: [
      {
        step: "01",
        title: "Planning & Scoping",
        description: "Define testing objectives, scope, and methodology based on your specific needs."
      },
      {
        step: "02",
        title: "Vulnerability Assessment",
        description: "Automated and manual scanning to identify security vulnerabilities across systems."
      },
      {
        step: "03",
        title: "Penetration Testing",
        description: "Manual exploitation testing by certified ethical hackers to validate vulnerabilities."
      },
      {
        step: "04",
        title: "Reporting & Remediation",
        description: "Detailed report with findings, risk ratings, and step-by-step remediation guidance."
      }
    ],
    technologies: [
      "Web Applications",
      "Mobile Applications",
      "APIs & Web Services",
      "Network Infrastructure",
      "Cloud Environments",
      "Databases",
      "IoT Devices",
      "Thick Client Applications",
      "Active Directory",
      "Wireless Networks"
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServiceHero data={serviceData} />
        <ServiceOverview data={serviceData} />
        
        {/* USP Section - What Makes Us Different */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                What Makes Our VAPT Services Different
              </h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Industry-leading capabilities that ensure comprehensive security assessment and faster remediation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Multi-Phase Testing Cycle */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-white/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <Workflow className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Multi-Phase Testing Cycle
                </h3>
                <p className="text-primary-100 mb-4">
                  Comprehensive testing across reconnaissance, vulnerability scanning, exploitation, and post-exploitation phases.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Pre-engagement planning</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Active vulnerability discovery</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Manual exploitation validation</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Post-exploitation assessment</span>
                  </li>
                </ul>
              </div>

              {/* Compliance Based Testing */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-white/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <FileCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Compliance-Based Testing & Reporting
                </h3>
                <p className="text-primary-100 mb-4">
                  Tailored assessments aligned with industry standards and regulatory requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>PCI-DSS compliant testing</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>ISO 27001 audit-ready reports</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>HIPAA & SOC 2 frameworks</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Custom compliance mapping</span>
                  </li>
                </ul>
              </div>

              {/* Remediation Support */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-white/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <LifeBuoy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Dedicated Remediation Support
                </h3>
                <p className="text-primary-100 mb-4">
                  Expert guidance throughout the vulnerability remediation lifecycle.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Step-by-step fix guidance</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Developer consultations</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Re-testing after fixes</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>30-day post-test support</span>
                  </li>
                </ul>
              </div>

              {/* Automated API Vulnerability Assessment */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-white/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Automated API Vulnerability Assessment Tool
                </h3>
                <p className="text-primary-100 mb-4">
                  Proprietary AI-powered tool for comprehensive API security testing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>REST, GraphQL & SOAP APIs</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Automated endpoint discovery</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>OWASP API Top 10 testing</span>
                  </li>
                  <li className="flex items-start space-x-2 text-primary-50 text-sm">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Continuous API monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-primary-200 mr-2" />
                  <div className="text-4xl font-bold text-white">90%</div>
                </div>
                <p className="text-primary-100 text-sm">Faster API Testing</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-6 w-6 text-primary-200 mr-2" />
                  <div className="text-4xl font-bold text-white">100%</div>
                </div>
                <p className="text-primary-100 text-sm">Compliance Coverage</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <LifeBuoy className="h-6 w-6 text-primary-200 mr-2" />
                  <div className="text-4xl font-bold text-white">24/7</div>
                </div>
                <p className="text-primary-100 text-sm">Support Available</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Workflow className="h-6 w-6 text-primary-200 mr-2" />
                  <div className="text-4xl font-bold text-white">4+</div>
                </div>
                <p className="text-primary-100 text-sm">Testing Phases</p>
              </div>
            </div>
          </div>
        </section>

        <ServiceFeatures data={serviceData} />
        <ServiceProcess data={serviceData} />
        
        {/* Additional VAPT-specific section */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              VAPT Methodology
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-primary-600">
                  Vulnerability Assessment
                </h3>
                <p className="text-gray-600 mb-4">
                  Systematic identification and classification of security vulnerabilities using:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Automated vulnerability scanners</li>
                  <li>• Configuration review tools</li>
                  <li>• Compliance checking</li>
                  <li>• Security best practices validation</li>
                  <li>• Asset discovery and mapping</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-primary-600">
                  Penetration Testing
                </h3>
                <p className="text-gray-600 mb-4">
                  Real-world attack simulation to validate vulnerabilities using:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Manual exploitation techniques</li>
                  <li>• Custom payload development</li>
                  <li>• Privilege escalation testing</li>
                  <li>• Lateral movement simulation</li>
                  <li>• Post-exploitation analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Industry Compliance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { name: 'PCI-DSS', description: 'Payment Card Industry' },
                { name: 'ISO 27001', description: 'Information Security' },
                { name: 'HIPAA', description: 'Healthcare Data' },
                { name: 'SOC 2', description: 'Service Organization' },
                { name: 'GDPR', description: 'Data Protection' },
                { name: 'NIST', description: 'Cybersecurity Framework' },
                { name: 'OWASP', description: 'Top 10 Testing' },
                { name: 'SEBI', description: 'Financial Regulations' }
              ].map((standard, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {standard.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {standard.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <VAPTReportCTA />
        <ServiceCTA data={serviceData} />
      </main>
      <Footer />
    </div>
  )
}

