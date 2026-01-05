import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AssessmentHero from '@/components/sections/AssessmentHero'
import AssessmentForm from '@/components/forms/AssessmentForm'
import AssessmentProcess from '@/components/sections/AssessmentProcess'
import AssessmentBenefits from '@/components/sections/AssessmentBenefits'

export const metadata: Metadata = {
  title: 'Free Security Assessment - CyberShield Pro Vulnerability Testing',
  description: 'Get a free cybersecurity assessment of your applications and infrastructure. Our experts will identify vulnerabilities and provide remediation recommendations.',
  keywords: 'free security assessment, vulnerability assessment, cybersecurity audit, security testing, VAPT assessment',
}

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <AssessmentHero />
        <AssessmentForm />
        <AssessmentProcess />
        <AssessmentBenefits />
      </main>

      <Footer />
    </div>
  )
}
