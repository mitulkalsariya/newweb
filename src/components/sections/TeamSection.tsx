"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO & Founder',
    bio: '20+ years in cybersecurity with expertise in enterprise security architecture and risk management.',
    image: '/team/rajesh.jpg',
    linkedin: '#'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of VAPT Services',
    bio: 'Certified ethical hacker with 15+ years experience in penetration testing and vulnerability assessment.',
    image: '/team/priya.jpg',
    linkedin: '#'
  },
  {
    name: 'Amit Patel',
    role: 'Chief Technology Officer',
    bio: 'AI and machine learning expert specializing in cybersecurity automation and threat intelligence.',
    image: '/team/amit.jpg',
    linkedin: '#'
  },
  {
    name: 'Sneha Reddy',
    role: 'Compliance Officer',
    bio: 'Regulatory compliance specialist with deep knowledge of industry standards and frameworks.',
    image: '/team/sneha.jpg',
    linkedin: '#'
  }
]

export default function TeamSection() {
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
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our diverse team of cybersecurity experts brings together decades of experience
            and cutting-edge knowledge to deliver exceptional security services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-200 text-center"
            >
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm text-primary-600 mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-3">
                <button className="text-gray-400 hover:text-gray-600">
                  <Mail className="h-4 w-4" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
