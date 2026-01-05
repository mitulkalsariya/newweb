"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Target, Users, Award } from 'lucide-react'

export default function AboutStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Founded with a vision to make cybersecurity accessible and effective for businesses of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              CyberShield Pro is dedicated to providing comprehensive cybersecurity solutions 
              and VAPT services to businesses of all sizes. We recognize the growing need for 
              robust security testing services in an increasingly digital world.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to help organizations proactively identify and mitigate security 
              risks through expert penetration testing, vulnerability assessment, and security 
              consulting across various industries including finance, healthcare, technology, 
              and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                <Shield className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Security First</h4>
                <p className="text-gray-600">Comprehensive VAPT services and security assessments</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                <Target className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Innovative Solutions</h4>
                <p className="text-gray-600">AI-powered security testing and automation</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                <Users className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Expert Team</h4>
                <p className="text-gray-600">Certified security professionals committed to excellence</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                <Award className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Quality Assurance</h4>
                <p className="text-gray-600">Thorough testing and detailed security reports</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
