import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceOverview from '@/components/services/ServiceOverview'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCTA from '@/components/services/ServiceCTA'

export const metadata: Metadata = {
  title: 'Web Application Security Testing - OWASP Top 10 & Vulnerability Assessment',
  description: 'Comprehensive web application security testing including OWASP Top 10 vulnerabilities, authentication testing, authorization flaws, and injection attack prevention.',
  keywords: 'web application security, OWASP Top 10, vulnerability assessment, web security testing, injection attacks, XSS prevention, CSRF protection',
}

export default function WebApplicationSecurityPage() {
  const serviceData = {
    title: "Web Application Security Testing",
    subtitle: "Comprehensive Security Assessment for Web Applications",
    description: "Protect your web applications from sophisticated cyber threats with our comprehensive security testing services. We identify and remediate vulnerabilities before attackers can exploit them.",
    icon: "Globe",
    features: [
      "OWASP Top 10 Vulnerability Assessment",
      "Authentication & Session Management Testing",
      "Authorization & Access Control Review",
      "Input Validation & Injection Testing",
      "Cross-Site Scripting (XSS) Prevention",
      "Cross-Site Request Forgery (CSRF) Protection",
      "Security Headers & SSL/TLS Configuration",
      "Business Logic Flaws Detection",
      "File Upload Vulnerabilities Testing",
      "API Endpoint Security Validation"
    ],
    benefits: [
      "Prevent data breaches and financial losses",
      "Maintain customer trust and compliance",
      "Reduce security incident response costs",
      "Stay ahead of evolving cyber threats",
      "Enhance overall security posture"
    ],
    process: [
      {
        step: "01",
        title: "Application Discovery",
        description: "Comprehensive mapping of your web application architecture, endpoints, and functionality."
      },
      {
        step: "02",
        title: "Vulnerability Assessment",
        description: "Automated and manual testing to identify security weaknesses and configuration issues."
      },
      {
        step: "03",
        title: "Exploitation Testing",
        description: "Safe exploitation of identified vulnerabilities to validate their real-world impact."
      },
      {
        step: "04",
        title: "Remediation Support",
        description: "Detailed recommendations and guidance for fixing identified security issues."
      }
    ],
    technologies: [
      "React & Next.js Applications",
      "Angular & Vue.js Applications",
      "PHP & Laravel Applications",
      "Python & Django Applications",
      "Java & Spring Applications",
      ".NET Applications",
      "WordPress & CMS Platforms",
      "E-commerce Platforms",
      "Custom Web Applications"
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <ServiceHero data={serviceData} />
        <ServiceOverview data={serviceData} />
        <ServiceFeatures data={serviceData} />
        <ServiceProcess data={serviceData} />
        <ServiceCTA data={serviceData} />
      </main>

      <Footer />
    </div>
  )
}
