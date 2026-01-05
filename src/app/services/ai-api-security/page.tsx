import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceOverview from '@/components/services/ServiceOverview'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCTA from '@/components/services/ServiceCTA'

export const metadata: Metadata = {
  title: 'Infrastructure Security Testing - Network & Server Security Assessment',
  description: 'Comprehensive infrastructure security testing including network penetration testing, server hardening, and internal system security assessment.',
  keywords: 'infrastructure security, network security testing, server security, penetration testing, network assessment, server hardening',
}

export default function InfrastructureSecurityPage() {
  const serviceData = {
    title: "Infrastructure Security Testing",
    subtitle: "Secure Your Network & Systems",
    description: "Comprehensive security assessment of your IT infrastructure including networks, servers, databases, and internal systems.",
    icon: "Server",
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
