"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AlertTriangle } from 'lucide-react'

interface SectorChallengesProps {
  data: {
    title: string
    challenges: string[]
  }
}

export default function SectorChallenges({ data }: SectorChallengesProps) {
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
            Unique Security Challenges in {data.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Understanding the specific cybersecurity threats and compliance requirements
            facing the {data.title.toLowerCase()}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {data.challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge}</h3>
                  <p className="text-gray-600 text-sm">
                    Specialized security measures required to address this critical challenge in the {data.title.toLowerCase()}.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
