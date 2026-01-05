"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Phone, Mail, Building2 } from 'lucide-react'
import Link from 'next/link'

export default function SectorsCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section className="py-24 bg-gray-900" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Industry-Specific Security Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Choose the cybersecurity expertise that matches your industry's unique security requirements
            and regulatory landscape.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* BFSI Focus */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 card-hover text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mx-auto mb-6">
                <Building2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">BFSI Sector</h3>
              <p className="text-sm text-gray-600 mb-6">
                Specialized security for banking, financial services, and insurance with regulatory compliance.
              </p>
              <Link
                href="/book-call"
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* SaaS Focus */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 card-hover text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mx-auto mb-6">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SaaS Companies</h3>
              <p className="text-sm text-gray-600 mb-6">
                Cloud-native security testing for multi-tenant SaaS applications and platforms.
              </p>
              <Link
                href="/book-call"
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Custom Sector */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group relative bg-gradient-to-br from-primary-600 to-primary-700 p-8 rounded-2xl text-white shadow-xl text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 mx-auto mb-6">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Other Industries</h3>
              <p className="text-sm text-primary-100 mb-6">
                Healthcare, retail, government, and other sectors with specialized security needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-white hover:text-primary-100 group-hover:translate-x-1 transition-transform duration-200"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white">Industry Certifications & Compliance</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-white">ISO 27001</div>
              <div className="text-sm text-gray-300">Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-white">PCI DSS</div>
              <div className="text-sm text-gray-300">Compliant</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-white">SOC 2</div>
              <div className="text-sm text-gray-300">Type II</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-white">GDPR</div>
              <div className="text-sm text-gray-300">Ready</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-primary-600 px-6 py-12 shadow-xl sm:px-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Industry-Specific Security?
            </h3>
            <p className="text-lg text-primary-100 mb-8">
              Our experts understand your industry's unique security challenges and regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-call"
                className="btn-primary flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Schedule Consultation</span>
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold text-primary-100 hover:text-white transition-colors"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
