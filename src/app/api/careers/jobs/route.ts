import { NextRequest, NextResponse } from 'next/server'
import { getAllJobs, createJob } from '@/lib/careers'
import { JobPosting } from '@/lib/careers'

export async function GET() {
  try {
    const jobs = await getAllJobs()
    return NextResponse.json(jobs)
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['title', 'department', 'location', 'type', 'experience', 'salary', 'description']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    const jobData: Omit<JobPosting, 'id' | 'postedDate'> = {
      title: body.title,
      department: body.department,
      location: body.location,
      type: body.type,
      experience: body.experience,
      salary: body.salary,
      description: body.description,
      requirements: Array.isArray(body.requirements) ? body.requirements : [],
      benefits: Array.isArray(body.benefits) ? body.benefits : [],
      applicationDeadline: body.applicationDeadline || undefined,
      isActive: body.isActive !== undefined ? body.isActive : true,
    }

    const newJob = await createJob(jobData)
    return NextResponse.json(newJob, { status: 201 })
  } catch (error) {
    console.error('Error creating job:', error)
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 })
  }
}
