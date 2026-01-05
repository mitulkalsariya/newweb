"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Brain,
  Zap,
  Shield,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    title: 'AI-Powered API Security Testing',
    description: 'Our advanced AI platform automatically discovers, tests, and secures your APIs with intelligent vulnerability detection and remediation suggestions.',
    features: [
      'Automated API Discovery',
      'AI-Driven Vulnerability Detection',
      'Smart Remediation Recommendations',
      'Continuous Security Monitoring',
      'Comprehensive Reporting'
    ],
    icon: Brain,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Automated Security Assessment',
    description: 'Streamline your security testing process with our automated tools that provide rapid, accurate vulnerability assessments across all platforms.',
    features: [
      'Rapid Vulnerability Scanning',
      'Automated Report Generation',
      'Integration with CI/CD Pipelines',
      'Real-time Security Monitoring',
      'Compliance Automation'
    ],
    icon: Zap,
    gradient: 'from-green-500 to-teal-600'
  },
  {
    title: 'Enterprise Security Platform',
    description: 'A comprehensive security platform designed for enterprises with advanced threat detection, compliance management, and risk assessment.',
    features: [
      'Enterprise-Scale Security',
      'Advanced Threat Intelligence',
      'Compliance Management',
      'Risk Assessment Framework',
      'Multi-tenant Architecture'
    ],
    icon: Shield,
    gradient: 'from-red-500 to-pink-600'
  }
]

const benefits = [
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get detailed insights into your security posture with comprehensive analytics and reporting.'
  },
  {
    icon: Clock,
    title: 'Time Efficiency',
    description: 'Reduce security testing time by up to 80% with our automated AI-powered platform.'
  },
  {
    icon: CheckCircle,
    title: 'Compliance Ready',
    description: 'Meet industry standards and compliance requirements with our certified security solutions.'
  }
]

export default function SolutionsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cutting-Edge Security Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leverage our AI-powered security platform and advanced testing methodologies
            to protect your digital assets with confidence.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
              className="group relative flex flex-col bg-white p-8 shadow-sm ring-1 ring-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${solution.gradient} mb-6`}>
                <solution.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold leading-8 text-gray-900 mb-4">
                {solution.title}
              </h3>

              <p className="text-sm leading-6 text-gray-600 mb-6">
                {solution.description}
              </p>

              <ul className="flex-1 space-y-3 mb-6">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-')}`}
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Why Choose Our Solutions?
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Experience the difference with our advanced security platform
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + (index * 0.1) }}
                className="text-center"
              >
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-primary-100 mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
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
          <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-12 shadow-xl sm:px-12">
            <h3 className="text-2xl font-bold text-white">
              Ready to Transform Your Security?
            </h3>
            <p className="mt-4 text-lg text-primary-100">
              Join hundreds of companies that trust our AI-powered security solutions.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link
                href="/book-call"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 transition-colors duration-200"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/solutions"
                className="text-sm font-semibold text-primary-100 hover:text-white transition-colors"
              >
                View All Solutions →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
