"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Phone, Mail, FileText } from 'lucide-react'
import Link from 'next/link'

export default function SolutionsCTA() {
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
            Ready to Transform Your Security?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Take the first step towards comprehensive cybersecurity with our expert team
            and cutting-edge solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Schedule Consultation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-6">
                <Phone className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Consultation</h3>
              <p className="text-sm text-gray-600 mb-6">
                Book a detailed consultation with our security experts to discuss your specific requirements.
              </p>
              <Link
                href="/book-call"
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Request Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mb-6">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Demo</h3>
              <p className="text-sm text-gray-600 mb-6">
                Experience our AI-powered security platform with a personalized demo tailored to your needs.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Get Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group relative bg-gradient-to-br from-primary-600 to-primary-700 p-8 rounded-2xl text-white shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 mb-6">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Get Custom Quote</h3>
              <p className="text-sm text-primary-100 mb-6">
                Receive a detailed proposal with pricing and implementation timeline for your security needs.
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

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-8">
              Trusted by leading organizations worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-lg font-semibold text-gray-400">Fortune 500 Companies</div>
              <div className="text-lg font-semibold text-gray-400">Financial Institutions</div>
              <div className="text-lg font-semibold text-gray-400">Tech Startups</div>
              <div className="text-lg font-semibold text-gray-400">Government Agencies</div>
              <div className="text-lg font-semibold text-gray-400">Healthcare Providers</div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-primary-600 px-6 py-12 shadow-xl sm:px-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Security Journey Today
            </h3>
            <p className="text-lg text-primary-100 mb-8">
              Join hundreds of organizations that have strengthened their security posture with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-call"
                className="btn-primary flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Book Free Consultation</span>
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-primary-100 hover:text-white transition-colors"
              >
                Learn About Our Process →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
