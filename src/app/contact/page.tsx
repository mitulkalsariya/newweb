import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactHero from '@/components/sections/ContactHero'
import ContactForm from '@/components/forms/ContactForm'
import ContactInfo from '@/components/sections/ContactInfo'
import OfficeLocations from '@/components/sections/OfficeLocations'

export const metadata: Metadata = {
  title: 'Contact CyberShield Pro - Get in Touch with Our Cybersecurity Experts',
  description: 'Contact CyberShield Pro for cybersecurity consulting, VAPT services, and security solutions. Reach out to our expert team for your security needs.',
  keywords: 'contact CyberShield Pro, cybersecurity contact, VAPT consultation, security experts, cybersecurity support',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <OfficeLocations />
      </main>

      <Footer />
    </div>
  )
}
