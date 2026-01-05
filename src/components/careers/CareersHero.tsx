"use client"

import { motion } from 'framer-motion'
import { Users, Target, Award } from 'lucide-react'

export default function CareersHero() {
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
            <Users className="mr-2 h-4 w-4" />
            Join Our Team
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            Shape the Future of{' '}
            <span className="text-gradient">Cybersecurity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
          >
            Join a team of passionate cybersecurity professionals working on cutting-edge
            security solutions. Help protect organizations worldwide from evolving cyber threats.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Mission-Driven</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Work on projects that make a real difference in cybersecurity
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Continuous Learning</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Access to training, certifications, and professional development
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Collaborative Culture</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Work with talented professionals in a supportive environment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
