import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceOverview from '@/components/services/ServiceOverview'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCTA from '@/components/services/ServiceCTA'

export const metadata: Metadata = {
  title: 'VAPT Consulting Services - Expert Cybersecurity Guidance & Strategy',
  description: 'Professional VAPT consulting services including security architecture review, remediation planning, compliance guidance, and security strategy development.',
  keywords: 'VAPT consulting, cybersecurity consulting, security strategy, compliance consulting, security architecture, remediation planning',
}

export default function VAPTConsultingPage() {
  const serviceData = {
    title: "VAPT Consulting Services",
    subtitle: "Expert Cybersecurity Guidance & Strategy",
    description: "Professional consulting services to help you implement robust cybersecurity practices, develop security strategies, and ensure compliance.",
    icon: "Shield",
    features: [
      "Network Penetration Testing",
      "Server Hardening Assessment",
      "Database Security Testing",
      "Internal Network Security",
      "Firewall Configuration Review",
      "VPN & Remote Access Security",
      "Active Directory Security",
      "Windows & Linux Server Security",
      "Wireless Network Security",
      "IoT & OT Device Security"
    ],
    benefits: [
      "Protect critical infrastructure from cyber threats",
      "Ensure network perimeter security",
      "Prevent unauthorized internal access",
      "Maintain system availability and integrity",
      "Reduce infrastructure-related security risks"
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure Mapping",
        description: "Comprehensive discovery and mapping of network devices, servers, and systems."
      },
      {
        step: "02",
        title: "Vulnerability Scanning",
        description: "Automated scanning and manual assessment of infrastructure vulnerabilities."
      },
      {
        step: "03",
        title: "Penetration Testing",
        description: "Simulated attacks on network infrastructure and systems to test defenses."
      },
      {
        step: "04",
        title: "Security Hardening",
        description: "Detailed recommendations for securing and hardening infrastructure components."
      }
    ],
    technologies: [
      "Network Infrastructure",
      "Windows Servers",
      "Linux/Unix Servers",
      "Database Servers",
      "Web Servers",
      "Application Servers",
      "Virtualization Platforms",
      "Storage Systems",
      "Backup Systems",
      "IoT Devices"
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
