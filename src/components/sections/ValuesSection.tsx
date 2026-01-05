"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Users, Target, Award, Heart, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We prioritize the security and protection of our clients\' digital assets above everything else.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work closely with our clients as trusted partners, not just service providers.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every assessment, report, and recommendation we provide.'
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'We maintain the highest standards of integrity and ethical conduct in all our work.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously innovate and adopt the latest technologies to stay ahead of threats.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about cybersecurity and dedicated to making the digital world safer.'
  }
]

export default function ValuesSection() {
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
            Our Values
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The principles that guide everything we do and shape our approach to cybersecurity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mx-auto mb-4">
                <value.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
