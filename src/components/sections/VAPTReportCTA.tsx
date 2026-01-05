"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, CheckCircle } from 'lucide-react'

interface VAPTReport {
  filename: string
  path: string
  uploadedAt: string
}

export default function VAPTReportCTA() {
  const [report, setReport] = useState<VAPTReport | null>(null)
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    fetchReport()
  }, [])

  const fetchReport = async () => {
    try {
      const response = await fetch('/api/vapt-report')
      const data = await response.json()
      setReport(data.report)
    } catch (error) {
      console.error('Error fetching VAPT report:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading || !report) {
    return null
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-secondary-600 px-6 py-16 shadow-2xl sm:px-16 lg:px-24"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
            >
              <FileText className="h-10 w-10 text-white" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4"
            >
              Download Sample VAPT Report
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/90 mb-8"
            >
              Get a comprehensive sample of our professional VAPT reports to understand 
              the depth and quality of our security assessments.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
            >
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Detailed Findings</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Risk Analysis</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Remediation Steps</span>
              </div>
            </motion.div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href={report.path}
                download
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Sample Report (PDF)
              </a>
              <p className="mt-4 text-sm text-white/70">
                Free download • No registration required
              </p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}

