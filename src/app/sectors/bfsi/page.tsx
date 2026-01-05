import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectorHero from '@/components/sectors/SectorHero'
import SectorOverview from '@/components/sectors/SectorOverview'
import SectorChallenges from '@/components/sectors/SectorChallenges'
import SectorSolutions from '@/components/sectors/SectorSolutions'
import SectorCTA from '@/components/sectors/SectorCTA'

export const metadata: Metadata = {
  title: 'BFSI Sector Cybersecurity - Banking & Financial Security Solutions',
  description: 'Specialized cybersecurity solutions for Banking, Financial Services, and Insurance sector. RBI compliance, financial data protection, and regulatory security requirements.',
  keywords: 'BFSI security, banking cybersecurity, financial services security, RBI compliance, banking security, financial data protection',
}

export default function BFSIPage() {
  const sectorData = {
    title: "BFSI Sector Security",
    subtitle: "Protecting Financial Assets & Customer Trust",
    description: "Comprehensive cybersecurity solutions tailored for the Banking, Financial Services, and Insurance sector. Ensure compliance with RBI guidelines, protect sensitive financial data, and maintain customer trust.",
    icon: "Building2",
    stats: "50+ BFSI Clients Protected",
    challenges: [
      "RBI Regulatory Compliance Requirements",
      "Protection of Sensitive Financial Data",
      "Transaction Security & Fraud Prevention",
      "Customer Data Privacy (PDPA)",
      "Critical Infrastructure Protection",
      "Third-party Vendor Risk Management",
      "Insider Threat Detection",
      "Real-time Transaction Monitoring"
    ],
    solutions: [
      "Comprehensive VAPT for Banking Applications",
      "RBI Guidelines Compliance Assessment",
      "Financial Data Encryption & Protection",
      "Transaction Security Testing",
      "Fraud Detection System Assessment",
      "Regulatory Reporting Automation",
      "Third-party Risk Assessment",
      "Incident Response Planning"
    ],
    benefits: [
      "Ensure RBI regulatory compliance",
      "Protect customer financial data",
      "Prevent financial fraud and losses",
      "Maintain customer trust and confidence",
      "Reduce regulatory penalties and fines",
      "Strengthen overall security posture"
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

