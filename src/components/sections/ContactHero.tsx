"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function ContactHero() {
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
            <MessageCircle className="mr-2 h-4 w-4" />
            Get in Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            Contact{' '}
            <span className="text-gradient">CyberShield Pro</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
          >
            Ready to strengthen your cybersecurity posture? Our expert team is here to help you
            identify vulnerabilities, implement robust security measures, and protect your digital assets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Email Support</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Get expert advice via email within 24 hours
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Phone className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Phone Consultation</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Speak directly with our security experts
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Office Visits</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Schedule in-person meetings at our offices
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
