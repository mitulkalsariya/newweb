"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Shield, BarChart3, Zap, Clock, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Live API Discovery',
    description: 'Watch our AI automatically discover and map your API endpoints in real-time'
  },
  {
    icon: Shield,
    title: 'Vulnerability Detection',
    description: 'See how our AI identifies complex vulnerabilities that traditional tools miss'
  },
  {
    icon: BarChart3,
    title: 'Risk Assessment',
    description: 'Get instant risk prioritization and actionable remediation recommendations'
  },
  {
    icon: Zap,
    title: 'Automated Testing',
    description: 'Experience lightning-fast automated security testing across multiple platforms'
  },
  {
    icon: Clock,
    title: 'Real-time Monitoring',
    description: 'Observe continuous security monitoring and instant alert generation'
  },
  {
    icon: CheckCircle,
    title: 'Compliance Reporting',
    description: 'Generate comprehensive compliance reports for regulatory requirements'
  }
]

export default function DemoFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What You'll See in the Demo
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the full power of CyberShield Pro's AI-driven security platform
            with a personalized demonstration tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-4">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
