"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 24 hours',
    contact: 'contact@cybershieldpro.com',
    action: 'mailto:contact@cybershieldpro.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our security experts',
    contact: '+91 98765 43210',
    action: 'tel:+919876543210'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Schedule an in-person meeting at our office',
    contact: 'Ahmedabad, Gujarat, India',
    action: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Our team is available during business hours',
    contact: 'Mon-Fri: 9AM - 6PM IST',
    action: '#'
  }
]

export default function ContactInfo() {
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
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Multiple ways to reach our cybersecurity experts and get the support you need.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => method.action.startsWith('http') || method.action.startsWith('mailto') || method.action.startsWith('tel') ? window.open(method.action, '_blank') : null}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mx-auto mb-4">
                <method.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{method.description}</p>
              <p className="text-sm font-medium text-primary-600">{method.contact}</p>
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
            <Globe className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Global Reach, Local Expertise</h3>
            <p className="text-primary-100 max-w-2xl mx-auto">
              While our office is in Ahmedabad, we serve clients globally with remote consulting,
              virtual assessments, and international compliance support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
