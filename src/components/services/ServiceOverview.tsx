"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ServiceOverviewProps {
  data: {
    title: string
    description: string
    benefits: string[]
  }
}

export default function ServiceOverview({ data }: ServiceOverviewProps) {
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
              Why Choose Our {data.title} Service?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive {data.title.toLowerCase()} service provides thorough protection
              against modern cyber threats with industry-leading expertise and cutting-edge technology.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium text-gray-900">Expert Team</span>
                <span className="text-primary-600">✓ Certified Professionals</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium text-gray-900">Methodology</span>
                <span className="text-primary-600">✓ Industry Standards</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium text-gray-900">Reporting</span>
                <span className="text-primary-600">✓ Detailed & Actionable</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium text-gray-900">Support</span>
                <span className="text-primary-600">✓ Ongoing Assistance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
