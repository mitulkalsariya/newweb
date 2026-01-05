"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
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
            Ready to Secure Your Future?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Don't wait for a security breach to happen. Take proactive steps today
            to protect your business with our comprehensive cybersecurity solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Book a Call */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-6">
                <Phone className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book a Call</h3>
              <p className="text-sm text-gray-600 mb-6">
                Schedule a consultation with our security experts to discuss your specific requirements.
              </p>
              <Link
                href="/book-call"
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Schedule Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Get Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mb-6">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get a Quote</h3>
              <p className="text-sm text-gray-600 mb-6">
                Receive a customized security assessment quote tailored to your business needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Free Assessment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group relative bg-gradient-to-br from-primary-600 to-primary-700 p-8 rounded-2xl text-white shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 mb-6">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Free Assessment</h3>
              <p className="text-sm text-primary-100 mb-6">
                Get a complimentary security assessment of your applications and infrastructure.
              </p>
              <Link
                href="/assessment"
                className="inline-flex items-center text-sm font-semibold text-white hover:text-primary-100 group-hover:translate-x-1 transition-transform duration-200"
              >
                Start Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-primary-600 px-6 py-12 shadow-xl sm:px-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Companies That Trust Us
            </h3>
            <p className="text-lg text-primary-100 mb-8">
              Start your journey towards robust cybersecurity today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-call"
                className="btn-primary flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Book a Free Consultation</span>
              </Link>
              <Link
                href="/solutions"
                className="text-sm font-semibold text-primary-100 hover:text-white transition-colors"
              >
                Explore Solutions →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
