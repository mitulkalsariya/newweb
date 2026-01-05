"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Cloud,
  Shield,
  Zap,
  BarChart3,
  Users,
  Lock,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    name: 'Cloud Security Suite',
    description: 'Comprehensive cloud security assessment and monitoring for AWS, Azure, and GCP environments.',
    icon: Cloud,
    features: [
      'Multi-cloud security assessment',
      'Configuration compliance checking',
      'Access control validation',
      'Data protection verification',
      'Incident response automation'
    ],
    color: 'bg-blue-500',
    href: '/solutions/cloud-security'
  },
  {
    name: 'Enterprise Security Platform',
    description: 'Scalable enterprise-grade security platform with advanced threat intelligence and automated response.',
    icon: Shield,
    features: [
      'Advanced threat detection',
      'Automated incident response',
      'Compliance management',
      'Risk assessment framework',
      'Executive reporting dashboard'
    ],
    color: 'bg-red-500',
    href: '/solutions/enterprise-security'
  },
  {
    name: 'DevSecOps Integration',
    description: 'Seamlessly integrate security testing into your CI/CD pipelines for continuous security assurance.',
    icon: Zap,
    features: [
      'CI/CD pipeline integration',
      'Automated security gates',
      'Real-time vulnerability scanning',
      'Security as Code',
      'Compliance automation'
    ],
    color: 'bg-green-500',
    href: '/solutions/devsecops'
  },
  {
    name: 'Compliance Automation',
    description: 'Automated compliance testing and reporting for industry standards and regulatory requirements.',
    icon: BarChart3,
    features: [
      'Regulatory compliance testing',
      'Automated audit trails',
      'Compliance reporting',
      'Policy enforcement',
      'Risk management'
    ],
    color: 'bg-purple-500',
    href: '/solutions/compliance'
  },
  {
    name: 'Identity & Access Management',
    description: 'Comprehensive IAM security assessment including authentication, authorization, and access control testing.',
    icon: Users,
    features: [
      'Authentication testing',
      'Authorization validation',
      'Access control assessment',
      'Identity lifecycle management',
      'Privileged access monitoring'
    ],
    color: 'bg-orange-500',
    href: '/solutions/iam-security'
  },
  {
    name: 'Data Protection Platform',
    description: 'Advanced data security solutions including encryption validation, data loss prevention, and privacy compliance.',
    icon: Lock,
    features: [
      'Data encryption validation',
      'DLP policy assessment',
      'Privacy compliance testing',
      'Data classification',
      'Secure data handling'
    ],
    color: 'bg-indigo-500',
    href: '/solutions/data-protection'
  }
]

export default function SolutionsGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-white" ref={ref} id="solutions">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Security Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our full range of cybersecurity solutions designed to address every aspect
            of your organization's security needs.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group relative flex flex-col bg-white p-8 shadow-sm ring-1 ring-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${solution.color} mb-6`}>
                <solution.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold leading-8 text-gray-900 mb-4">
                {solution.name}
              </h3>

              <p className="text-sm leading-6 text-gray-600 mb-6 flex-1">
                {solution.description}
              </p>

              <ul className="space-y-2 mb-6">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={solution.href}
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50 px-6 py-12 sm:px-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Every organization is unique. Our team of experts can design and implement
                customized security solutions tailored to your specific requirements and challenges.
              </p>
              <Link
                href="/book-call"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Discuss Custom Solution</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
