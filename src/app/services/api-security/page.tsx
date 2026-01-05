import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceOverview from '@/components/services/ServiceOverview'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServiceCTA from '@/components/services/ServiceCTA'

export const metadata: Metadata = {
  title: 'API Security Testing - REST, GraphQL & SOAP API Vulnerability Assessment',
  description: 'Comprehensive API security testing for REST, GraphQL, and SOAP APIs. Identify authentication flaws, authorization issues, and data exposure vulnerabilities.',
  keywords: 'API security testing, REST API security, GraphQL security, SOAP API testing, authentication testing, authorization testing, API vulnerabilities',
}

export default function APISecurityPage() {
  const serviceData = {
    title: "API Security Testing",
    subtitle: "Protect Your API Endpoints & Data",
    description: "Secure your APIs against sophisticated attacks with comprehensive testing covering authentication, authorization, data exposure, and injection vulnerabilities.",
    icon: "Server",
    features: [
      "Authentication & Authorization Testing",
      "API Endpoint Discovery & Mapping",
      "Injection Attack Prevention (SQL, NoSQL, Command)",
      "Rate Limiting & DoS Protection Testing",
      "Data Exposure & Information Leakage Assessment",
      "CORS Configuration Review",
      "API Versioning & Deprecation Testing",
      "OAuth & JWT Token Validation",
      "GraphQL Security Assessment",
      "SOAP API Security Testing"
    ],
    benefits: [
      "Prevent unauthorized API access and data breaches",
      "Ensure compliance with API security standards",
      "Protect sensitive data transmitted via APIs",
      "Maintain API availability and performance",
      "Build trust with API consumers and partners"
    ],
    process: [
      {
        step: "01",
        title: "API Discovery",
        description: "Comprehensive mapping of all API endpoints, parameters, and authentication methods."
      },
      {
        step: "02",
        title: "Security Assessment",
        description: "Automated and manual testing of API security controls and configurations."
      },
      {
        step: "03",
        title: "Vulnerability Validation",
        description: "Safe exploitation testing to validate identified security weaknesses."
      },
      {
        step: "04",
        title: "Remediation Guidance",
        description: "Detailed recommendations for securing APIs and preventing future vulnerabilities."
      }
    ],
    technologies: [
      "REST APIs",
      "GraphQL APIs",
      "SOAP Web Services",
      "OAuth 2.0",
      "JWT Tokens",
      "API Gateways",
      "Microservices",
      "Serverless APIs",
      "Third-party APIs",
      "Mobile App APIs"
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
