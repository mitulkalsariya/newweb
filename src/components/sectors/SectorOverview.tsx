"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectorOverviewProps {
  data: {
    title: string
    benefits: string[]
  }
}

export default function SectorOverview({ data }: SectorOverviewProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Why {data.title} Needs Specialized Security
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The {data.title.toLowerCase()} faces unique cybersecurity challenges that require
              specialized expertise and industry-specific security solutions.
            </p>

            <div className="space-y-4">
              {data.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Industry Statistics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium text-gray-900">Cyber Attacks per Year</span>
                <span className="text-primary-600 font-bold">300,000+</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium text-gray-900">Average Breach Cost</span>
                <span className="text-primary-600 font-bold">$5.9M</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium text-gray-900">Regulatory Fines</span>
                <span className="text-primary-600 font-bold">$10M+</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium text-gray-900">Data Breach Impact</span>
                <span className="text-primary-600 font-bold">Critical</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
