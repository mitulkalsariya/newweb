import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceOverview from '@/components/services/ServiceOverview'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Workflow, FileCheck, LifeBuoy, Zap, CheckCircle, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VAPT Services - Complete Vulnerability Assessment & Penetration Testing',
  description: 'Industry-leading VAPT services with multi-phase testing, compliance reporting, remediation support, and automated API vulnerability assessment.',
  keywords: 'VAPT services, vulnerability assessment, penetration testing, security testing, compliance testing, API security, remediation support',
}

export default function VAPTServicesPage() {
  const serviceData = {
    title: "VAPT Services",
    subtitle: "Complete Vulnerability Assessment & Penetration Testing",
    description: "Industry-leading VAPT services with multi-phase testing cycles, compliance-based reporting, dedicated remediation support, and automated API vulnerability assessment.",
    icon: "Shield",
    features: [
      "Comprehensive Vulnerability Assessment",
      "Manual Penetration Testing",
      "Web Application Security Testing",
      "API Security Testing",
      "Mobile Application Security",
      "Network Security Testing",
      "Infrastructure Security Review",
      "Cloud Security Assessment",
      "Compliance-Based Testing",
      "Automated Vulnerability Scanning"
    ],
    benefits: [
      "Identify vulnerabilities before attackers exploit them",
      "Meet compliance requirements (PCI-DSS, ISO 27001, HIPAA, SOC 2)",
      "Reduce risk of data breaches and cyber attacks",
      "Get expert remediation support and guidance",
      "Leverage automated API security testing tools"
    ],
    process: [
      {
        step: "01",
        title: "Planning & Reconnaissance",
        description: "Define scope, gather intelligence, and map attack surface with comprehensive discovery."
      },
      {
        step: "02",
        title: "Vulnerability Assessment",
        description: "Automated and manual scanning to identify all security vulnerabilities across systems."
      },
      {
        step: "03",
        title: "Exploitation & Testing",
        description: "Manual penetration testing by certified ethical hackers to validate and exploit vulnerabilities."
      },
      {
        step: "04",
        title: "Reporting & Remediation",
        description: "Detailed compliance-aligned reports with prioritized findings and ongoing remediation support."
      }
    ],
    technologies: [
      "Web Applications",
      "REST & GraphQL APIs",
      "Mobile Apps (iOS/Android)",
      "Network Infrastructure",
      "Cloud Environments",
      "Databases",
      "Thick Client Applications",
      "Active Directory",
      "Wireless Networks",
      "IoT Devices"
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
        <ServiceCTA data={serviceData} />
      </main>
      <Footer />
    </div>
  )
}
