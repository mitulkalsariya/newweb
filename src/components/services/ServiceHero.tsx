"use client"

import { motion } from 'framer-motion'
import { Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceHeroProps {
  data: {
    title: string
    subtitle: string
    description: string
    icon: string
  }
}

const iconMap = {
  Globe: '🌐',
  Server: '🖥️',
  Cloud: '☁️',
  Monitor: '💻',
  Shield: '🛡️',
  Zap: '⚡',
  Target: '🎯',
  Code: '💻'
}

export default function ServiceHero({ data }: ServiceHeroProps) {
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
            <Shield className="mr-2 h-4 w-4" />
            Advanced Security Service
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl mb-6"
          >
            {iconMap[data.icon as keyof typeof iconMap] || '🛡️'}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            {data.title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-xl font-semibold text-primary-600"
          >
            {data.subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/book-call"
              className="btn-primary group flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
