"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function AboutCTA() {
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
            Ready to Work with CyberShield Pro?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Join hundreds of companies that trust us with their cybersecurity needs.
            Let's discuss how we can help protect your digital assets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 card-hover text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mx-auto mb-6">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get in Touch</h3>
              <p className="text-sm text-gray-600 mb-6">
                Reach out to our team for any questions or to discuss your security requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Book Call */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 card-hover text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mx-auto mb-6">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book a Consultation</h3>
              <p className="text-sm text-gray-600 mb-6">
                Schedule a free consultation with our cybersecurity experts to discuss your needs.
              </p>
              <Link
                href="/book-call"
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500 group-hover:translate-x-1 transition-transform duration-200"
              >
                Book Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
