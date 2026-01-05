import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectorHero from '@/components/sectors/SectorHero'
import SectorOverview from '@/components/sectors/SectorOverview'
import SectorChallenges from '@/components/sectors/SectorChallenges'
import SectorSolutions from '@/components/sectors/SectorSolutions'
import SectorCTA from '@/components/sectors/SectorCTA'

export const metadata: Metadata = {
  title: 'SEBI Compliance & Security - Financial Market Regulations & Cybersecurity',
  description: 'Ensure SEBI compliance with comprehensive cybersecurity solutions for financial market participants. Protect trading systems, customer data, and maintain regulatory compliance.',
  keywords: 'SEBI compliance, financial market security, trading system security, regulatory compliance, SEBI cybersecurity, financial data protection',
}

export default function SEBIPage() {
  const sectorData = {
    title: "SEBI Compliance & Security",
    subtitle: "Regulatory Compliance & Market Integrity Protection",
    description: "Comprehensive cybersecurity and compliance solutions for SEBI-regulated entities. Protect trading platforms, secure financial data, ensure market integrity, and maintain regulatory compliance with SEBI guidelines.",
    icon: "Building2",
    stats: "150+ SEBI Regulated Clients",
    challenges: [
      "SEBI Regulatory Compliance Requirements",
      "Trading Platform Security & Integrity",
      "Market Data Protection & Confidentiality",
      "High-Frequency Trading Security",
      "Insider Trading Prevention",
      "System Availability & Business Continuity",
      "Audit Trail & Transaction Monitoring",
      "Cyber Threat Protection for Financial Markets"
    ],
    solutions: [
      "SEBI Compliance Assessment & Gap Analysis",
      "Trading Platform Security Testing",
      "Market Data Protection Solutions",
      "High-Frequency Trading Security",
      "Insider Threat Detection Systems",
      "Business Continuity Planning",
      "Audit & Monitoring Solutions",
      "Regulatory Reporting Automation"
    ],
    benefits: [
      "Ensure SEBI regulatory compliance",
      "Protect market integrity and investor confidence",
      "Prevent financial fraud and market manipulation",
      "Maintain system availability and uptime",
      "Reduce regulatory penalties and fines",
      "Stay ahead of evolving cyber threats"
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

