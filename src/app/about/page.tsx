import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutHero from '@/components/sections/AboutHero'
import AboutStory from '@/components/sections/AboutStory'
import ValuesSection from '@/components/sections/ValuesSection'
import AboutCTA from '@/components/sections/AboutCTA'

export const metadata: Metadata = {
  title: 'About CyberShield Pro - Leading Cybersecurity & VAPT Services',
  description: 'Learn about CyberShield Pro, our mission to provide advanced cybersecurity solutions, expert team, and commitment to protecting businesses from cyber threats.',
  keywords: 'about CyberShield Pro, cybersecurity company, VAPT experts, security professionals, company mission, cybersecurity team',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <AboutHero />
        <AboutStory />
        <ValuesSection />
        <AboutCTA />
      </main>

      <Footer />
    </div>
  )
}
