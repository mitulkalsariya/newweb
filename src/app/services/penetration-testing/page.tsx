import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceOverview from '@/components/services/ServiceOverview'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCTA from '@/components/services/ServiceCTA'

export const metadata: Metadata = {
  title: 'Penetration Testing Services - Ethical Hacking & Security Assessment',
  description: 'Professional penetration testing services by certified ethical hackers. Identify security vulnerabilities through simulated cyber attacks before real hackers exploit them.',
  keywords: 'penetration testing, pen testing, ethical hacking, security testing, vulnerability exploitation, penetration test, pentest services',
}

export default function PenetrationTestingPage() {
  const serviceData = {
    title: "Penetration Testing",
    subtitle: "Real-World Attack Simulation by Certified Ethical Hackers",
    description: "Go beyond automated scans with manual penetration testing. Our certified ethical hackers simulate real-world attacks to identify exploitable vulnerabilities before malicious actors do.",
    icon: "Target",
    features: [
      "Manual Security Testing by Expert Hackers",
      "External Network Penetration Testing",
      "Internal Network Penetration Testing",
      "Web Application Penetration Testing",
      "Mobile Application Penetration Testing",
      "API Penetration Testing",
      "Wireless Network Penetration Testing",
      "Social Engineering Testing",
      "Physical Security Testing",
      "Red Team Assessment"
    ],
    benefits: [
      "Identify exploitable vulnerabilities before attackers",
      "Validate security controls and defenses",
      "Meet compliance requirements (PCI-DSS, ISO 27001)",
      "Understand real-world attack scenarios",
      "Get actionable remediation guidance from experts"
    ],
    process: [
      {
        step: "01",
        title: "Reconnaissance & Planning",
        description: "Gather intelligence about target systems and plan the attack strategy like a real attacker would."
      },
      {
        step: "02",
        title: "Scanning & Enumeration",
        description: "Identify live systems, open ports, services, and potential entry points for exploitation."
      },
      {
        step: "03",
        title: "Exploitation & Access",
        description: "Attempt to exploit identified vulnerabilities to gain unauthorized access to systems and data."
      },
      {
        step: "04",
        title: "Post-Exploitation & Reporting",
        description: "Assess the impact of successful exploits and provide detailed findings with remediation steps."
      }
    ],
    technologies: [
      "Web Applications",
      "Mobile Apps (iOS/Android)",
      "APIs & Web Services",
      "Network Infrastructure",
      "Cloud Environments (AWS, Azure, GCP)",
      "Wireless Networks",
      "IoT Devices",
      "Active Directory",
      "Databases",
      "Thick Client Applications"
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
