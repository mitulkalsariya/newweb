"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Shield, DollarSign, Clock, CheckCircle, Target } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Identify Hidden Risks',
    description: 'Uncover vulnerabilities that traditional security tools might miss, giving you a complete security picture.'
  },
  {
    icon: Shield,
    title: 'Strengthen Security Posture',
    description: 'Get expert recommendations to improve your security defenses and prevent potential breaches.'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Insights',
    description: 'Avoid expensive security incidents by addressing vulnerabilities before they can be exploited.'
  },
  {
    icon: Clock,
    title: 'Save Time & Resources',
    description: 'Receive prioritized remediation plans that focus your security efforts where they matter most.'
  },
  {
    icon: CheckCircle,
    title: 'Meet Compliance Requirements',
    description: 'Ensure your security measures align with industry standards and regulatory requirements.'
  },
  {
    icon: Target,
    title: 'Peace of Mind',
    description: 'Rest assured knowing your systems have been thoroughly assessed by cybersecurity experts.'
  }
]

export default function AssessmentBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Get a Free Assessment?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive security assessments provide invaluable insights that help you
            protect your business and stay ahead of cyber threats.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-4">
                <benefit.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment Coverage</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">Web Apps</div>
                <div className="text-sm text-gray-600">OWASP Top 10</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">APIs</div>
                <div className="text-sm text-gray-600">REST & GraphQL</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">Cloud</div>
                <div className="text-sm text-gray-600">AWS, Azure, GCP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">Infrastructure</div>
                <div className="text-sm text-gray-600">Servers & Networks</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
