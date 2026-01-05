import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectorsHero from '@/components/sections/SectorsHero'
import SectorsGrid from '@/components/sections/SectorsGrid'
import SectorsCTA from '@/components/sections/SectorsCTA'

export const metadata: Metadata = {
  title: 'Industry Sectors - Cybersecurity Solutions for BFSI, SaaS, SEBI & More',
  description: 'Tailored cybersecurity solutions for different industry sectors including BFSI, SaaS companies, SEBI compliance, and stock brokers with specialized VAPT services.',
  keywords: 'industry cybersecurity, BFSI security, SaaS security, SEBI compliance, stock broker security, sector-specific security',
}

export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <SectorsHero />
        <SectorsGrid />
        <SectorsCTA />
      </main>

      <Footer />
    </div>
  )
}
