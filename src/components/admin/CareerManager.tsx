"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Briefcase,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react'
import Link from 'next/link'
import CareerEditor from './CareerEditor'

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

export default function CareerManager() {
  const [jobs, setJobs] = useState<JobPosting[]>([])
  const [loading, setLoading] = useState(true)
  const [showEditor, setShowEditor] = useState(false)
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null)

  useEffect(() => {
    loadJobs()
  }, [])

  const loadJobs = async () => {
    try {
      const response = await fetch('/api/careers/jobs')
      if (response.ok) {
        const jobsData = await response.json()
        setJobs(jobsData)
      }
    } catch (error) {
      console.error('Error loading jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateJob = () => {
    setEditingJob(null)
    setShowEditor(true)
  }

  const handleEditJob = (job: JobPosting) => {
    setEditingJob(job)
    setShowEditor(true)
  }

  const handleDeleteJob = async (jobId: string) => {
    if (!confirm('Are you sure you want to delete this job posting?')) return

    try {
      const response = await fetch(`/api/careers/jobs/${jobId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        await loadJobs()
        alert('Job posting deleted successfully')
      } else {
        throw new Error('Failed to delete job posting')
      }
    } catch (error) {
      console.error('Error deleting job:', error)
      alert('Failed to delete job posting')
    }
  }

  const handleEditorClose = () => {
    setShowEditor(false)
    setEditingJob(null)
    loadJobs()
  }

  if (showEditor) {
    return <CareerEditor job={editingJob} onClose={handleEditorClose} />
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Career Management</h2>
          <p className="text-sm text-gray-600 mt-1">Manage job postings and career opportunities</p>
        </div>
        <button
          onClick={handleCreateJob}
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="mr-2 h-4 w-4" />
          New Job Posting
        </button>
      </div>

      {/* Jobs List */}
      {jobs.length === 0 ? (
        <div className="text-center py-12">
          <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No job postings yet</h3>
          <p className="text-gray-600 mb-6">Create your first job posting to attract top talent.</p>
          <button
            onClick={handleCreateJob}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create First Job Posting
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      job.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {job.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{job.description}</p>

                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Link
                    href={`/careers/${job.id}`}
                    target="_blank"
                    className="inline-flex items-center p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="View job posting"
                  >
                    <Eye className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => handleEditJob(job)}
                    className="inline-flex items-center p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Edit job posting"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteJob(job.id)}
                    className="inline-flex items-center p-2 text-red-400 hover:text-red-600 transition-colors"
                    title="Delete job posting"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{jobs.length}</div>
          <div className="text-sm text-blue-800 mt-1">Total Job Postings</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {jobs.filter(j => j.isActive).length}
          </div>
          <div className="text-sm text-green-800 mt-1">Active Positions</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">
            {new Set(jobs.map(j => j.department)).size}
          </div>
          <div className="text-sm text-purple-800 mt-1">Departments</div>
        </div>
      </div>
    </motion.div>
  )
}
