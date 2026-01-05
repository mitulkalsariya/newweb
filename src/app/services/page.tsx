import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServicesHero from '@/components/sections/ServicesHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ServicesProcess from '@/components/sections/ServicesProcess'
import ServicesCTA from '@/components/sections/ServicesCTA'

export const metadata: Metadata = {
  title: 'Cybersecurity Services - VAPT, Penetration Testing & Security Solutions',
  description: 'Comprehensive cybersecurity services including VAPT, penetration testing, vulnerability assessment for Web, API, Infrastructure, Cloud, and Thick Client applications.',
  keywords: 'cybersecurity services, VAPT services, penetration testing, vulnerability assessment, security testing, web security, API security, cloud security',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  )
}
