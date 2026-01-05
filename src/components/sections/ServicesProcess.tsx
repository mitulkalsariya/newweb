"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Shield, FileText, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const processSteps = [
  {
    step: '01',
    title: 'Initial Assessment',
    description: 'Comprehensive evaluation of your current security posture, systems, and potential vulnerabilities.',
    icon: Search,
    details: [
      'Scope definition and requirements gathering',
      'Asset inventory and risk assessment',
      'Current security controls evaluation',
      'Compliance requirements analysis'
    ]
  },
  {
    step: '02',
    title: 'VAPT Execution',
    description: 'Advanced penetration testing and vulnerability assessment across all identified systems and applications.',
    icon: Shield,
    details: [
      'Automated scanning and manual testing',
      'Exploit development and validation',
      'Business logic and configuration testing',
      'Advanced persistent threat simulation'
    ]
  },
  {
    step: '03',
    title: 'Analysis & Reporting',
    description: 'Detailed analysis of findings with prioritized remediation recommendations and actionable insights.',
    icon: FileText,
    details: [
      'Risk prioritization and impact assessment',
      'Detailed technical findings documentation',
      'Executive summary for stakeholders',
      'Remediation roadmap and timelines'
    ]
  },
  {
    step: '04',
    title: 'Remediation Support',
    description: 'Ongoing support and verification of implemented security fixes and improvements.',
    icon: CheckCircle,
    details: [
      'Implementation guidance and support',
      'Retesting and validation',
      'Continuous monitoring setup',
      'Security awareness training'
    ]
  }
]

export default function ServicesProcess() {
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
            Our Proven Process
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A systematic, comprehensive approach to identifying and resolving security vulnerabilities
            across your entire technology stack.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`flex flex-col lg:flex-row items-start gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                    <step.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-primary-600 px-6 py-12 shadow-xl sm:px-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Secure Your Systems?
            </h3>
            <p className="text-lg text-primary-100 mb-8">
              Start your security assessment today and protect your business from cyber threats.
            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Schedule Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
