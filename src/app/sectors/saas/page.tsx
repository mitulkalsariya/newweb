import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectorHero from '@/components/sectors/SectorHero'
import SectorOverview from '@/components/sectors/SectorOverview'
import SectorChallenges from '@/components/sectors/SectorChallenges'
import SectorSolutions from '@/components/sectors/SectorSolutions'
import SectorCTA from '@/components/sectors/SectorCTA'

export const metadata: Metadata = {
  title: 'SaaS Security Solutions - Cloud-Based Application Security & Compliance',
  description: 'Comprehensive cybersecurity solutions for SaaS companies. Protect cloud applications, ensure data privacy, and maintain regulatory compliance with our specialized SaaS security services.',
  keywords: 'SaaS security, cloud application security, SaaS compliance, data privacy, cloud security, SaaS protection, application security',
}

export default function SaaSPage() {
  const sectorData = {
    title: "SaaS Companies Security",
    subtitle: "Secure Your Cloud Applications & User Data",
    description: "Specialized cybersecurity solutions designed for SaaS companies. Protect your cloud applications, secure customer data, ensure regulatory compliance, and build trust with enterprise clients.",
    icon: "Building2",
    stats: "200+ SaaS Clients Protected",
    challenges: [
      "Multi-tenant Architecture Security",
      "Customer Data Protection & Privacy",
      "Regulatory Compliance (GDPR, SOC 2, ISO 27001)",
      "Cloud Infrastructure Security",
      "API Security & Third-party Integrations",
      "Scalable Security Solutions",
      "Customer Trust & Data Breach Prevention",
      "DevSecOps Integration"
    ],
    solutions: [
      "Multi-tenant Security Architecture Assessment",
      "GDPR & Privacy Compliance Audits",
      "Cloud Security Configuration Review",
      "API Security Testing & Protection",
      "Data Encryption & Access Control",
      "Compliance Certification Support",
      "Security Automation & DevSecOps",
      "Incident Response Planning"
    ],
    benefits: [
      "Build customer trust and confidence",
      "Ensure regulatory compliance",
      "Prevent data breaches and financial losses",
      "Accelerate enterprise sales cycles",
      "Reduce security incident response costs",
      "Maintain competitive advantage"
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SectorHero data={sectorData} />
        <SectorOverview data={sectorData} />
        <SectorChallenges data={sectorData} />
        <SectorSolutions data={sectorData} />
        <SectorCTA data={sectorData} />
      </main>
      <Footer />
    </div>
  )
}

