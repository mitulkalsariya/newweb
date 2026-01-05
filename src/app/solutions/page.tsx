import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SolutionsHero from '@/components/sections/SolutionsHero'
import AISecurityPlatform from '@/components/sections/AISecurityPlatform'
import SolutionsGrid from '@/components/sections/SolutionsGrid'
import SolutionsCTA from '@/components/sections/SolutionsCTA'

export const metadata: Metadata = {
  title: 'Advanced Cybersecurity Solutions - CyberShield Pro',
  description: 'Explore our cutting-edge cybersecurity solutions including AI-powered API security testing, automated vulnerability assessment, and enterprise security platforms.',
  keywords: 'cybersecurity solutions, AI API security, vulnerability assessment, enterprise security, automated testing',
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <SolutionsHero />
        <AISecurityPlatform />
        <SolutionsGrid />
        <SolutionsCTA />
      </main>

      <Footer />
    </div>
  )
}
