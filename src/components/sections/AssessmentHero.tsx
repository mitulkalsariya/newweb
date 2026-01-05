"use client"

import { motion } from 'framer-motion'
import { Shield, Search, FileText, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function AssessmentHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 mb-8"
          >
            <Shield className="mr-2 h-4 w-4" />
            Free Security Assessment
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            Free Comprehensive{' '}
            <span className="text-gradient">Security Assessment</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
          >
            Get a professional security assessment of your applications and infrastructure at no cost.
            Our experts will identify vulnerabilities, assess risks, and provide actionable recommendations
            to strengthen your security posture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-4"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Search className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Vulnerability Scan</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Comprehensive vulnerability identification
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Risk Assessment</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Detailed risk analysis and prioritization
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <FileText className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Expert Report</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Professional assessment report with findings
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <CheckCircle className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Action Plan</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Clear remediation recommendations
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <Link
              href="#assessment-form"
              className="btn-primary text-lg px-8 py-4"
            >
              Get Your Free Assessment
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
