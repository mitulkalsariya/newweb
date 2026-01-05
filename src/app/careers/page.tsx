import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CareersHero from '@/components/careers/CareersHero'
import JobListings from '@/components/careers/JobListings'
import WhyJoinUs from '@/components/careers/WhyJoinUs'
import CultureSection from '@/components/careers/CultureSection'

export const metadata: Metadata = {
  title: 'Careers at CyberShield Pro - Join Our Cybersecurity Team',
  description: 'Join CyberShield Pro and work with leading cybersecurity experts. Explore career opportunities in penetration testing, security consulting, and cyber defense.',
  keywords: 'cybersecurity careers, penetration testing jobs, security consulting, cyber defense jobs, VAPT careers, information security jobs',
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <CareersHero />
        <JobListings />
        <WhyJoinUs />
        <CultureSection />
      </main>

      <Footer />
    </div>
  )
}
