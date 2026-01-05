"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechFlow SaaS',
    content: 'The live demo was incredible. Seeing the AI detect vulnerabilities in real-time that our previous tools completely missed was eye-opening. The platform is incredibly intuitive and powerful.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'CISO',
    company: 'FinServe Bank',
    content: 'The demo team walked us through complex API security scenarios that were directly relevant to our banking environment. The automated remediation suggestions saved us weeks of manual analysis.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Security Lead',
    company: 'HealthFirst',
    content: 'As a healthcare company, compliance is critical. The demo showed how CyberShield Pro handles HIPAA requirements while providing deep security insights. Highly impressed with the platform.',
    rating: 5
  }
]

export default function DemoTestimonials() {
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
            What Demo Attendees Say
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from security professionals who experienced our live demos and saw
            the power of AI-driven security testing firsthand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-gray-200 mb-4" />

              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-primary-600">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
