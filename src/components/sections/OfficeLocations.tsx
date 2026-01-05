"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail } from 'lucide-react'

const locations = [
  {
    city: 'Ahmedabad',
    address: 'CyberShield Pro\nAhmedabad, Gujarat\nIndia',
    phone: '+91 98765 43210',
    email: 'contact@cybershieldpro.com',
    coordinates: { lat: 23.0225, lng: 72.5714 }
  }
]

export default function OfficeLocations() {
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
            Our Location
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Visit our office or connect with our team for personalized cybersecurity solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 max-w-md mx-auto"
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-8 rounded-lg shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{location.city}</h3>
              </div>

              <div className="space-y-4 text-sm text-gray-600 mb-6">
                <p className="whitespace-pre-line">{location.address}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 text-gray-400 mr-3" />
                  <a href={`tel:${location.phone}`} className="text-primary-600 hover:text-primary-500">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 text-gray-400 mr-3" />
                  <a href={`mailto:${location.email}`} className="text-primary-600 hover:text-primary-500">
                    {location.email}
                  </a>
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
          <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Remote Consulting Available</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't visit our offices? No problem! We offer comprehensive remote consulting services,
              virtual assessments, and online security training from anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/book-call"
                className="btn-primary"
              >
                Schedule Virtual Meeting
              </a>
              <a
                href="/contact"
                className="text-primary-600 hover:text-primary-500 font-medium"
              >
                Contact Our Team →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
