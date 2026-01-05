"use client"

import { motion } from 'framer-motion'
import { Building2, Shield, Target } from 'lucide-react'

export default function SectorsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-800 mb-8"
          >
            <Building2 className="mr-2 h-4 w-4" />
            Industry-Specific Security
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            Security Solutions for{' '}
            <span className="text-gradient">Every Industry</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
          >
            Tailored cybersecurity services designed to meet the unique security challenges,
            regulatory requirements, and compliance standards of different industry sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Regulatory Compliance</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Meet industry-specific compliance requirements and standards
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Risk Mitigation</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Address sector-specific threats and vulnerabilities
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Building2 className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Industry Expertise</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Deep understanding of sector-specific security challenges
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
