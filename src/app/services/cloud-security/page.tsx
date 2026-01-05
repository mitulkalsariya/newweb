import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceOverview from '@/components/services/ServiceOverview'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCTA from '@/components/services/ServiceCTA'

export const metadata: Metadata = {
  title: 'Cloud Security Assessment - AWS, Azure & GCP Security Testing',
  description: 'Comprehensive cloud security assessment for AWS, Azure, and GCP environments. Identify misconfigurations, access control issues, and compliance gaps.',
  keywords: 'cloud security, AWS security, Azure security, GCP security, cloud misconfiguration, IAM testing, cloud compliance',
}

export default function CloudSecurityPage() {
  const serviceData = {
    title: "Cloud Security Assessment",
    subtitle: "Secure Your Cloud Infrastructure",
    description: "Comprehensive security assessment for cloud environments including misconfiguration detection, access control validation, and compliance verification.",
    icon: "Cloud",
    features: [
      "Cloud Misconfiguration Detection",
      "Identity & Access Management (IAM) Testing",
      "Storage Security Assessment",
      "Network Security Configuration Review",
      "Compliance Validation (CIS, NIST, ISO)",
      "Data Encryption & Key Management",
      "Logging & Monitoring Configuration",
      "Container & Serverless Security",
      "Multi-Cloud Environment Assessment",
      "Cloud Migration Security Review"
    ],
    benefits: [
      "Prevent cloud data breaches and unauthorized access",
      "Ensure compliance with cloud security standards",
      "Optimize cloud security configurations",
      "Reduce cloud security costs and risks",
      "Maintain regulatory compliance across cloud environments"
    ],
    process: [
      {
        step: "01",
        title: "Cloud Environment Analysis",
        description: "Comprehensive assessment of your cloud infrastructure, services, and configurations."
      },
      {
        step: "02",
        title: "Security Configuration Review",
        description: "Automated and manual testing of security controls, policies, and access controls."
      },
      {
        step: "03",
        title: "Vulnerability Assessment",
        description: "Identification of cloud-specific vulnerabilities and misconfigurations."
      },
      {
        step: "04",
        title: "Compliance & Remediation",
        description: "Detailed recommendations for securing cloud environments and ensuring compliance."
      }
    ],
    technologies: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "IBM Cloud",
      "Oracle Cloud",
      "Docker & Kubernetes",
      "Serverless Functions",
      "Cloud Storage Services",
      "Cloud Databases",
      "Multi-Cloud Environments"
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
        <ServiceCTA data={serviceData} />
      </main>
      <Footer />
    </div>
  )
}
