"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Brain,
  Search,
  Shield,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Code,
  AlertTriangle,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Search,
    title: 'Intelligent API Discovery',
    description: 'Automatically discovers and maps all your APIs, endpoints, and data flows with advanced AI algorithms.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Machine learning models analyze API behavior patterns to identify vulnerabilities and security risks.'
  },
  {
    icon: AlertTriangle,
    title: 'Advanced Threat Detection',
    description: 'Detects sophisticated attack vectors including injection attacks, authentication bypasses, and data leaks.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Monitoring',
    description: 'Continuous monitoring with instant alerts for security incidents and policy violations.'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Security',
    description: 'Predicts potential security issues before they become critical using historical data and patterns.'
  },
  {
    icon: Shield,
    title: 'Automated Remediation',
    description: 'Provides actionable remediation steps and automated fixes for identified vulnerabilities.'
  }
]

export default function AISecurityPlatform() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            AI-Powered API Security Testing Platform
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our revolutionary AI-based platform transforms API security testing with intelligent automation,
            advanced threat detection, and predictive security analysis.
          </p>
        </motion.div>

        {/* Platform Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Revolutionizing API Security Testing
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Traditional API security testing methods are time-consuming and often miss sophisticated threats.
                Our AI-powered platform changes everything by combining machine learning, automated testing,
                and intelligent analysis to deliver comprehensive security coverage.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Automated API discovery and mapping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Real-time vulnerability assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Predictive threat intelligence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Automated remediation suggestions</span>
                </div>
              </div>

              <Link
                href="/book-call"
                className="btn-primary group flex items-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Schedule Demo</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 shadow-2xl">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <Brain className="h-16 w-16 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">AI Security Engine</h4>
                    <p className="text-primary-100">
                      Advanced machine learning algorithms power our intelligent security testing platform
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3"
              >
                <Code className="h-6 w-6 text-primary-600" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3"
              >
                <Shield className="h-6 w-6 text-green-600" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-primary-600 px-6 py-12 shadow-xl sm:px-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience AI-Powered Security?
            </h3>
            <p className="text-lg text-primary-100 mb-8">
              Join leading organizations that trust our AI platform for comprehensive API security testing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-call"
                className="btn-primary flex items-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Schedule Live Demo</span>
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-primary-100 hover:text-white transition-colors"
              >
                Request Technical Specs →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
