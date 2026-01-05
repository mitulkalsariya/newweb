"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Phone, Mail, Shield } from 'lucide-react'
import Link from 'next/link'

interface SectorCTAProps {
  data: {
    title: string
  }
}

export default function SectorCTA({ data }: SectorCTAProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section className="py-24 bg-primary-600" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Secure Your {data.title} Today
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Don't wait for a security breach to happen. Protect your organization with
            industry-leading cybersecurity solutions tailored for the {data.title.toLowerCase()}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 card-hover text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mx-auto mb-6">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Assessment</h3>
              <p className="text-sm text-gray-600 mb-6">
                Comprehensive security assessment tailored for your industry requirements.
              </p>
              <Link
                href="/assessment"
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Get Free Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 card-hover text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mx-auto mb-6">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Consultation</h3>
              <p className="text-sm text-gray-600 mb-6">
                Speak with industry specialists about your specific security challenges.
              </p>
              <Link
                href="/book-call"
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group relative bg-gradient-to-br from-primary-600 to-primary-700 p-8 rounded-2xl text-white shadow-xl text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 mx-auto mb-6">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
              <p className="text-sm text-primary-100 mb-6">
                Bespoke security solutions designed specifically for your industry needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-white hover:text-primary-100 group-hover:translate-x-1 transition-transform duration-200"
              >
                Get Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Industry Compliance & Standards</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-white">ISO 27001</div>
                <div className="text-sm text-primary-200">Information Security</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-white">PCI DSS</div>
                <div className="text-sm text-primary-200">Payment Security</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-white">GDPR</div>
                <div className="text-sm text-primary-200">Data Protection</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-white">Industry Specific</div>
                <div className="text-sm text-primary-200">Regulatory Compliance</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
