import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceOverview from '@/components/services/ServiceOverview'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCTA from '@/components/services/ServiceCTA'

export const metadata: Metadata = {
  title: 'Security Consulting Services - Expert Cybersecurity Guidance',
  description: 'Strategic cybersecurity consulting services to help you build and maintain a robust security program. Expert guidance for security architecture and compliance.',
  keywords: 'security consulting, cybersecurity consulting, security strategy, compliance consulting, security architecture',
}

export default function ConsultingPage() {
  const serviceData = {
    title: "Security Consulting",
    subtitle: "Strategic Cybersecurity Guidance & Advisory",
    description: "Get expert guidance on building and maintaining a comprehensive security program. Our consultants help you navigate complex security challenges and regulatory requirements.",
    icon: "Users",
    features: [
      "Security Strategy Development",
      "Security Architecture Design",
      "Risk Assessment & Management",
      "Compliance Consulting (ISO, PCI-DSS, HIPAA)",
      "Security Program Development",
      "Incident Response Planning",
      "Security Awareness Training",
      "Third-Party Risk Assessment",
      "Cloud Security Strategy",
      "DevSecOps Implementation"
    ],
    benefits: [
      "Align security with business objectives",
      "Reduce security risks and costs",
      "Achieve and maintain compliance",
      "Build effective security programs",
      "Access to expert security professionals"
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description: "Evaluate current security posture, identify gaps, and understand business requirements."
      },
      {
        step: "02",
        title: "Strategy Development",
        description: "Create customized security strategy aligned with business goals and risk tolerance."
      },
      {
        step: "03",
        title: "Implementation Planning",
        description: "Develop detailed roadmap with priorities, timelines, and resource requirements."
      },
      {
        step: "04",
        title: "Ongoing Support",
        description: "Continuous guidance, monitoring, and adjustment to ensure program success."
      }
    ],
    technologies: [
      "Security Frameworks",
      "Compliance Standards",
      "Risk Management",
      "Governance Models",
      "Security Policies",
      "Incident Response",
      "Disaster Recovery",
      "Business Continuity",
      "Security Metrics",
      "Threat Intelligence"
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServiceHero data={serviceData} />
        <ServiceOverview data={serviceData} />
        <ServiceFeatures data={serviceData} />
        <ServiceProcess data={serviceData} />
        
        {/* Consulting Areas */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Consulting Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Security Strategy",
                  description: "Develop comprehensive security strategies aligned with your business goals",
                  areas: [
                    "Risk assessment and management",
                    "Security roadmap development",
                    "Budget planning and optimization",
                    "Technology selection and evaluation"
                  ]
                },
                {
                  title: "Compliance Consulting",
                  description: "Navigate complex regulatory requirements and achieve compliance",
                  areas: [
                    "ISO 27001, PCI-DSS, HIPAA",
                    "GDPR, SOC 2, NIST",
                    "Industry-specific regulations",
                    "Audit preparation and support"
                  ]
                },
                {
                  title: "Security Architecture",
                  description: "Design secure infrastructure and application architectures",
                  areas: [
                    "Zero trust architecture",
                    "Cloud security design",
                    "Network segmentation",
                    "Identity and access management"
                  ]
                },
                {
                  title: "Incident Response",
                  description: "Prepare for and respond to security incidents effectively",
                  areas: [
                    "IR plan development",
                    "Tabletop exercises",
                    "Forensic analysis",
                    "Post-incident review"
                  ]
                },
                {
                  title: "Security Program",
                  description: "Build and mature your security program",
                  areas: [
                    "Policy and procedure development",
                    "Security metrics and KPIs",
                    "Continuous improvement",
                    "Team structure and roles"
                  ]
                },
                {
                  title: "Training & Awareness",
                  description: "Educate your team on security best practices",
                  areas: [
                    "Security awareness training",
                    "Phishing simulation",
                    "Secure coding training",
                    "Role-specific training"
                  ]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.areas.map((area, idx) => (
                      <li key={idx} className="text-sm text-gray-700">
                        • {area}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCTA data={serviceData} />
      </main>
      <Footer />
    </div>
  )
}

