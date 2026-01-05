"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Heart, Zap, Users, BookOpen, Target } from 'lucide-react'

const reasons = [
  {
    icon: Trophy,
    title: 'Industry Recognition',
    description: 'Work on projects that receive industry recognition and contribute to the advancement of cybersecurity practices.'
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible working arrangements, remote work options, and a culture that values personal well-being.'
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'Access to the latest security tools, technologies, and methodologies in the cybersecurity field.'
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    description: 'Work alongside talented professionals in a supportive and inclusive team environment.'
  },
  {
    icon: BookOpen,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities, certification support, and professional development programs.'
  },
  {
    icon: Target,
    title: 'Impactful Work',
    description: 'Make a real difference by protecting organizations and individuals from cyber threats.'
  }
]

export default function WhyJoinUs() {
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
            Why Join CyberShield Pro?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're more than just a cybersecurity company - we're a community of
            passionate professionals dedicated to making the digital world safer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-50 p-6 rounded-lg text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mx-auto mb-4">
                <reason.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
