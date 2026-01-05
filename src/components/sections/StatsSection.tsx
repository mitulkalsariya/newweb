"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const stats = [
  {
    number: 500,
    suffix: '+',
    label: 'Companies Protected',
    description: 'Trusted by leading organizations worldwide'
  },
  {
    number: 10000,
    suffix: '+',
    label: 'Vulnerabilities Found',
    description: 'Critical security issues identified and resolved'
  },
  {
    number: 99.5,
    suffix: '%',
    label: 'Detection Accuracy',
    description: 'Industry-leading vulnerability detection rate'
  },
  {
    number: 24,
    suffix: '/7',
    label: 'Support Available',
    description: 'Round-the-clock security monitoring and support'
  }
]

function AnimatedCounter({ targetNumber, suffix, duration = 2000 }: {
  targetNumber: number
  suffix: string
  duration?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * targetNumber))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [targetNumber, duration])

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsSection() {
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
            Trusted by Industry Leaders
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Our track record speaks for itself. We've helped hundreds of organizations
            strengthen their security posture and protect against cyber threats.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white sm:text-5xl">
                {inView ? (
                  <AnimatedCounter
                    targetNumber={stat.number}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="mt-4 text-lg font-semibold text-primary-100">
                {stat.label}
              </div>
              <div className="mt-2 text-sm text-primary-200">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white">ISO 27001</div>
            <div className="text-sm text-primary-200 mt-1">Certified Information Security</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">CEH</div>
            <div className="text-sm text-primary-200 mt-1">Certified Ethical Hackers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">OSCP</div>
            <div className="text-sm text-primary-200 mt-1">Offensive Security Certified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">GDPR</div>
            <div className="text-sm text-primary-200 mt-1">General Data Protection</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
