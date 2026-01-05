"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Clock, DollarSign, ArrowRight, Briefcase } from 'lucide-react'
import Link from 'next/link'

interface JobPosting {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
  postedDate: string
  applicationDeadline?: string
  isActive: boolean
}

export default function JobListings() {
  const [jobs, setJobs] = useState<JobPosting[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    loadJobs()
  }, [])

  const loadJobs = async () => {
    try {
      const response = await fetch('/api/careers/jobs')
      if (response.ok) {
        const jobsData = await response.json()
        setJobs(jobsData.filter((job: JobPosting) => job.isActive))
      }
    } catch (error) {
      console.error('Error loading jobs:', error)
      // Fallback to sample data if API fails
      setJobs([
        {
          id: '1',
          title: 'Senior Penetration Tester',
          department: 'Security Testing',
          location: 'Ahmedabad, Gujarat, India',
          type: 'Full-time',
          experience: '3-5 years',
          salary: 'Competitive',
          description: 'Join our elite penetration testing team to conduct advanced security assessments for enterprise clients.',
          requirements: [
            'CEH/OSCP certification required',
            '3+ years of penetration testing experience',
            'Strong knowledge of web application and network security',
            'Experience with security tools and methodologies'
          ],
          benefits: [
            'Competitive salary and bonuses',
            'Professional development budget',
            'Flexible working hours',
            'Health insurance coverage'
          ],
          postedDate: '2025-12-30',
          isActive: true
        },
        {
          id: '2',
          title: 'Security Consultant',
          department: 'Consulting',
          location: 'Delhi, India',
          type: 'Full-time',
          experience: '2-4 years',
          salary: 'Competitive',
          description: 'Provide security consulting services and help clients implement robust cybersecurity solutions.',
          requirements: [
            'CISSP or equivalent certification preferred',
            'Experience in security consulting',
            'Knowledge of compliance frameworks',
            'Strong communication skills'
          ],
          benefits: [
            'Travel opportunities',
            'Client interaction experience',
            'Professional certifications support',
            'Performance incentives'
          ],
          postedDate: '2025-12-29',
          isActive: true
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const filteredJobs = filter === 'all'
    ? jobs
    : jobs.filter(job => job.department.toLowerCase() === filter)

  if (loading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Open Positions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our growing team of cybersecurity professionals
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'security testing', 'consulting', 'development'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All Positions' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Job Listings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No positions available</h3>
              <p className="text-gray-600">Check back later for new opportunities.</p>
            </div>
          ) : (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                        {job.department}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{job.description}</p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <Link
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-600 rounded-2xl px-6 py-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't see the perfect role?</h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented cybersecurity professionals.
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Send Your Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
