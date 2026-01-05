import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import SolutionsSection from '@/components/sections/SolutionsSection'
import SectorsGrid from '@/components/sections/SectorsGrid'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'CyberShield Pro - Advanced Cybersecurity & VAPT Services',
  description: 'Leading provider of Vulnerability Assessment and Penetration Testing (VAPT) services for Web, API, Infrastructure, Cloud, and Thick Client applications. AI-powered security testing platform.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <SolutionsSection />
        <SectorsGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}