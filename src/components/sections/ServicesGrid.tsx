"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Globe,
  Code,
  Server,
  Cloud,
  Monitor,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    name: 'Web Application Security',
    href: 'web-application',
    description: 'Comprehensive security testing for web applications including OWASP Top 10 vulnerabilities, authentication bypasses, and injection attacks.',
    icon: Globe,
    features: [
      'OWASP Top 10 Assessment',
      'Authentication & Authorization Testing',
      'Session Management Review',
      'Input Validation Testing',
      'CSRF & XSS Prevention'
    ],
    color: 'bg-blue-500'
  },
  {
    name: 'API Security Testing',
    href: 'api-security',
    description: 'AI-powered API security assessment covering REST, GraphQL, and SOAP APIs with automated vulnerability detection.',
    icon: Code,
    features: [
      'AI-Powered API Discovery',
      'Authentication Testing',
      'Authorization Flaws Detection',
      'Rate Limiting Assessment',
      'Data Exposure Prevention'
    ],
    color: 'bg-green-500'
  },
  {
    name: 'Infrastructure Security',
    href: 'infrastructure',
    description: 'Network infrastructure penetration testing including servers, databases, and internal systems security assessment.',
    icon: Server,
    features: [
      'Network Penetration Testing',
      'Server Hardening Review',
      'Database Security Assessment',
      'Internal System Testing',
      'Configuration Management'
    ],
    color: 'bg-purple-500'
  },
  {
    name: 'Cloud Security',
    href: 'cloud-security',
    description: 'Cloud platform security assessment for AWS, Azure, and GCP including misconfigurations and access control testing.',
    icon: Cloud,
    features: [
      'Cloud Misconfiguration Detection',
      'Access Control Testing',
      'Data Security Assessment',
      'Compliance Validation',
      'Multi-Cloud Support'
    ],
    color: 'bg-orange-500'
  },
  {
    name: 'Thick Client Security',
    href: 'thick-client',
    description: 'Desktop application security testing including reverse engineering, code analysis, and client-side attack vectors.',
    icon: Monitor,
    features: [
      'Reverse Engineering',
      'Code Analysis',
      'Client-Side Attacks',
      'Data Storage Security',
      'Communication Security'
    ],
    color: 'bg-red-500'
  },
  {
    name: 'VAPT Consulting',
    href: 'vapt-consulting',
    description: 'Expert cybersecurity consulting services including security architecture review and remediation guidance.',
    icon: Shield,
    features: [
      'Security Architecture Review',
      'Remediation Planning',
      'Compliance Consulting',
      'Security Training',
      'Incident Response Planning'
    ],
    color: 'bg-indigo-500'
  }
]

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive VAPT Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our expert team provides end-to-end vulnerability assessment and penetration testing services
            across all major technology stacks and platforms.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group relative flex flex-col items-start bg-white p-8 shadow-sm ring-1 ring-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${service.color} mb-6`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold leading-8 text-gray-900 mb-4">
                {service.name}
              </h3>

              <p className="text-sm leading-6 text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="flex-1 space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/services/${service.href}`}
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-primary-600 px-6 py-12 shadow-xl sm:px-12">
            <h3 className="text-2xl font-bold text-white">
              Ready to Secure Your Applications?
            </h3>
            <p className="mt-4 text-lg text-primary-100">
              Get started with our comprehensive VAPT services today.
            </p>
            <Link
              href="/book-call"
              className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 transition-colors duration-200"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
