"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle } from 'lucide-react'

interface ServiceFeaturesProps {
  data: {
    title: string
    features: string[]
    technologies?: string[]
  }
}

export default function ServiceFeatures({ data }: ServiceFeaturesProps) {
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
            Comprehensive {data.title} Coverage
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our {data.title.toLowerCase()} service covers all critical aspects to ensure
            complete protection and compliance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {data.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive assessment and remediation guidance for {feature.toLowerCase()}.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {data.technologies && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Supported Technologies & Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + (index * 0.05) }}
                  className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-200"
                >
                  <span className="text-sm font-medium text-gray-900">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
