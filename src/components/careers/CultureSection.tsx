"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Coffee, Users, Lightbulb, Target } from 'lucide-react'

const cultureValues = [
  {
    icon: Coffee,
    title: 'Collaborative Spirit',
    description: 'We believe in the power of teamwork and open communication. Our collaborative culture fosters innovation and shared success.'
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description: 'We welcome diverse perspectives and backgrounds, creating an inclusive environment where everyone can thrive and contribute.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Mindset',
    description: 'We encourage creative thinking and continuous improvement, staying ahead of emerging cybersecurity challenges.'
  },
  {
    icon: Target,
    title: 'Results-Oriented',
    description: 'We focus on delivering measurable results while maintaining the highest standards of security and professionalism.'
  }
]

export default function CultureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Culture
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At CyberShield Pro, we cultivate a culture of excellence, innovation, and collaboration
            that empowers our team to deliver exceptional cybersecurity solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {cultureValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 flex-shrink-0">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-600 rounded-2xl px-6 py-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Take the next step in your cybersecurity career. We're always looking for
              talented professionals who share our passion for security excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#job-listings"
                className="btn-primary"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="text-primary-100 hover:text-white font-medium underline"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
