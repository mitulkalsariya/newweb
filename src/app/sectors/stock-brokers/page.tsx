import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectorHero from '@/components/sectors/SectorHero'
import SectorOverview from '@/components/sectors/SectorOverview'
import SectorChallenges from '@/components/sectors/SectorChallenges'
import SectorSolutions from '@/components/sectors/SectorSolutions'
import SectorCTA from '@/components/sectors/SectorCTA'

export const metadata: Metadata = {
  title: 'Stock Brokers Cybersecurity - Trading Platform Security & Client Protection',
  description: 'Specialized cybersecurity solutions for stock brokers. Protect trading platforms, secure client data, ensure regulatory compliance, and maintain market integrity.',
  keywords: 'stock broker security, trading platform security, client data protection, broker compliance, financial trading security, market data security',
}

export default function StockBrokersPage() {
  const sectorData = {
    title: "Stock Brokers Security",
    subtitle: "Secure Trading Platforms & Client Assets",
    description: "Comprehensive cybersecurity solutions tailored for stock brokers. Protect trading systems, secure client portfolios and personal data, ensure regulatory compliance, and maintain operational integrity in high-stakes financial environments.",
    icon: "Building2",
    stats: "300+ Brokerage Firms Secured",
    challenges: [
      "Trading Platform Security & Real-time Protection",
      "Client Portfolio & Personal Data Protection",
      "Regulatory Compliance (SEBI, RBI, PMLA)",
      "High-Value Transaction Security",
      "Market Data Integrity & Confidentiality",
      "24/7 System Availability Requirements",
      "Insider Threat & Employee Access Control",
      "Cyber Attacks on Financial Infrastructure"
    ],
    solutions: [
      "Trading Platform Security Assessment",
      "Client Data Encryption & Protection",
      "Regulatory Compliance Audits",
      "Transaction Security & Fraud Prevention",
      "Market Data Security Solutions",
      "High Availability Security Architecture",
      "Access Control & Identity Management",
      "Incident Response & Recovery Planning"
    ],
    benefits: [
      "Protect client assets and personal data",
      "Ensure regulatory compliance and avoid penalties",
      "Prevent trading disruptions and financial losses",
      "Build client trust and loyalty",
      "Maintain competitive advantage in the market",
      "Reduce operational and compliance costs"
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
