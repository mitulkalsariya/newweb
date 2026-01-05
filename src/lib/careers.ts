import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const jobsDirectory = path.join(process.cwd(), 'content/careers')

export interface JobPosting {
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

// Check if we're on the server side
const isServer = typeof window === 'undefined'

// Sample jobs data for development
const sampleJobs: JobPosting[] = [
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
]

export async function getAllJobs(): Promise<JobPosting[]> {
  if (!isServer) {
    return sampleJobs
  }

  try {
    // Check if jobs directory exists
    if (!fs.existsSync(jobsDirectory)) {
      fs.mkdirSync(jobsDirectory, { recursive: true })
      // Create sample jobs if directory doesn't exist
      sampleJobs.forEach(job => {
        const filePath = path.join(jobsDirectory, `${job.id}.json`)
        fs.writeFileSync(filePath, JSON.stringify(job, null, 2))
      })
      return sampleJobs
    }

    const fileNames = fs.readdirSync(jobsDirectory)
    const jobs = fileNames
      .filter(fileName => fileName.endsWith('.json'))
      .map(fileName => {
        const filePath = path.join(jobsDirectory, fileName)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(fileContents) as JobPosting
      })

    return jobs.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
  } catch (error) {
    console.error('Error reading jobs:', error)
    return sampleJobs
  }
}

export async function getJobById(id: string): Promise<JobPosting | null> {
  if (!isServer) {
    return sampleJobs.find(job => job.id === id) || null
  }

  try {
    const filePath = path.join(jobsDirectory, `${id}.json`)
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents) as JobPosting
  } catch (error) {
    console.error('Error reading job:', error)
    return null
  }
}

export async function createJob(jobData: Omit<JobPosting, 'id' | 'postedDate'>): Promise<JobPosting> {
  if (!isServer) {
    throw new Error('Cannot create jobs on client side')
  }

  try {
    // Ensure directory exists
    if (!fs.existsSync(jobsDirectory)) {
      fs.mkdirSync(jobsDirectory, { recursive: true })
    }

    const jobs = await getAllJobs()
    const newId = (Math.max(...jobs.map(j => parseInt(j.id)), 0) + 1).toString()

    const newJob: JobPosting = {
      ...jobData,
      id: newId,
      postedDate: new Date().toISOString().split('T')[0]
    }

    const filePath = path.join(jobsDirectory, `${newId}.json`)
    fs.writeFileSync(filePath, JSON.stringify(newJob, null, 2))

    return newJob
  } catch (error) {
    console.error('Error creating job:', error)
    throw error
  }
}

export async function updateJob(id: string, jobData: Partial<JobPosting>): Promise<JobPosting> {
  if (!isServer) {
    throw new Error('Cannot update jobs on client side')
  }

  try {
    const existingJob = await getJobById(id)
    if (!existingJob) {
      throw new Error('Job not found')
    }

    const updatedJob = { ...existingJob, ...jobData }
    const filePath = path.join(jobsDirectory, `${id}.json`)
    fs.writeFileSync(filePath, JSON.stringify(updatedJob, null, 2))

    return updatedJob
  } catch (error) {
    console.error('Error updating job:', error)
    throw error
  }
}

export async function deleteJob(id: string): Promise<void> {
  if (!isServer) {
    throw new Error('Cannot delete jobs on client side')
  }

  try {
    const filePath = path.join(jobsDirectory, `${id}.json`)
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
    }
  } catch (error) {
    console.error('Error deleting job:', error)
    throw error
  }
}
