"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Cloud,
  Building2,
  Scale,
  TrendingUp,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const sectors = [
  {
    name: 'SaaS Companies',
    description: 'Protect your cloud-based applications and multi-tenant architectures with specialized security testing designed for SaaS environments.',
    icon: Cloud,
    color: 'bg-blue-500',
    features: [
      'Multi-tenant Security Testing',
      'Cloud Infrastructure Assessment',
      'Data Isolation Verification',
      'API Security Validation',
      'Compliance Automation'
    ],
    stats: '200+ SaaS Clients'
  },
  {
    name: 'BFSI Sector',
    description: 'Comprehensive security solutions for banking, financial services, and insurance companies with regulatory compliance focus.',
    icon: Building2,
    color: 'bg-green-500',
    features: [
      'Regulatory Compliance (RBI, SEBI)',
      'Financial Data Protection',
      'Transaction Security Testing',
      'Risk Assessment Framework',
      'Incident Response Planning'
    ],
    stats: '50+ BFSI Clients'
  },
  {
    name: 'SEBI Compliance',
    description: 'Specialized security testing and compliance services for stock exchanges, brokers, and financial market participants.',
    icon: Scale,
    color: 'bg-purple-500',
    features: [
      'SEBI Regulatory Compliance',
      'Trading Platform Security',
      'Market Data Protection',
      'High-Frequency Trading Security',
      'Audit Trail Verification'
    ],
    stats: '30+ SEBI Compliant'
  },
  {
    name: 'Stock Brokers',
    description: 'Advanced security testing for stockbroking firms, trading platforms, and investment companies with focus on data integrity.',
    icon: TrendingUp,
    color: 'bg-orange-500',
    features: [
      'Trading Platform Security',
      'Client Data Protection',
      'Real-time Transaction Security',
      'Mobile Trading App Testing',
      'Regulatory Reporting Security'
    ],
    stats: '100+ Brokerage Firms'
  }
]

export default function SectorsSection() {
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
            Industry-Specific Security Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tailored cybersecurity services designed to meet the unique security challenges
            and regulatory requirements of different industry sectors.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group relative bg-white p-8 shadow-sm ring-1 ring-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${sector.color}`}>
                  <sector.icon className="h-6 w-6 text-white" />
                </div>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                  {sector.stats}
                </span>
              </div>

              <h3 className="text-xl font-semibold leading-8 text-gray-900 mb-4">
                {sector.name}
              </h3>

              <p className="text-sm leading-6 text-gray-600 mb-6">
                {sector.description}
              </p>

              <ul className="space-y-2 mb-6">
                {sector.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/sectors/${sector.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Learn more about {sector.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="rounded-2xl bg-white px-6 py-12 shadow-sm ring-1 ring-gray-200 sm:px-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Regulatory Compliance Expertise
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Our team has extensive experience working with regulatory bodies and compliance frameworks
                across different industries, ensuring your security practices meet the highest standards.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">ISO 27001</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">SOC 2</div>
                  <div className="text-sm text-gray-600">Type II</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">PCI DSS</div>
                  <div className="text-sm text-gray-600">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">GDPR</div>
                  <div className="text-sm text-gray-600">Ready</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
