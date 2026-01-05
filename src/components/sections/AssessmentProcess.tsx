"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Shield, FileText, CheckCircle, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    step: '01',
    title: 'Request Submission',
    description: 'Submit your free assessment request with details about your systems and security needs.',
    icon: Search,
    duration: 'Immediate'
  },
  {
    step: '02',
    title: 'Initial Review',
    description: 'Our experts review your request and prepare a customized assessment plan.',
    icon: Shield,
    duration: '24 hours'
  },
  {
    step: '03',
    title: 'Assessment Execution',
    description: 'Comprehensive security testing and vulnerability assessment of your systems.',
    icon: FileText,
    duration: '5-7 days'
  },
  {
    step: '04',
    title: 'Report & Recommendations',
    description: 'Detailed assessment report with prioritized findings and remediation guidance.',
    icon: CheckCircle,
    duration: '1-2 days'
  }
]

export default function AssessmentProcess() {
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
            How the Free Assessment Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our streamlined process ensures you get comprehensive security insights
            with minimal disruption to your operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Process Steps */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-200 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                      <step.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <span className="text-2xl font-bold text-primary-600">{step.step}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <div className="text-sm text-primary-600 font-medium">
                    Duration: {step.duration}
                  </div>
                </div>

                {/* Arrow connector for larger screens */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Comprehensive Report</h4>
                <p className="text-sm text-gray-600">Detailed findings with risk assessments</p>
              </div>
              <div>
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Action Plan</h4>
                <p className="text-sm text-gray-600">Prioritized remediation recommendations</p>
              </div>
              <div>
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Expert Consultation</h4>
                <p className="text-sm text-gray-600">Direct access to security professionals</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
