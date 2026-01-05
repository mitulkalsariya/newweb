import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DemoHero from '@/components/sections/DemoHero'
import DemoForm from '@/components/forms/DemoForm'
import DemoFeatures from '@/components/sections/DemoFeatures'
import DemoTestimonials from '@/components/sections/DemoTestimonials'

export const metadata: Metadata = {
  title: 'Request Live Demo - CyberShield Pro AI Security Platform',
  description: 'Schedule a live demo of CyberShield Pro\'s AI-powered API security testing platform. See how our advanced cybersecurity solutions work in real-time.',
  keywords: 'live demo, cybersecurity demo, API security demo, VAPT demo, AI security platform demo',
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <DemoHero />
        <DemoForm />
        <DemoFeatures />
        <DemoTestimonials />
      </main>

      <Footer />
    </div>
  )
}
