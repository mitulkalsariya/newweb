import { NextRequest, NextResponse } from 'next/server'
import { getJobById, updateJob, deleteJob } from '@/lib/careers'
import { JobPosting } from '@/lib/careers'

interface RouteParams {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const job = await getJobById(params.id)

    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    return NextResponse.json(job)
  } catch (error) {
    console.error('Error fetching job:', error)
    return NextResponse.json({ error: 'Failed to fetch job' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const body = await request.json()

    const jobData: Partial<JobPosting> = {
      title: body.title,
      department: body.department,
      location: body.location,
      type: body.type,
      experience: body.experience,
      salary: body.salary,
      description: body.description,
      requirements: Array.isArray(body.requirements) ? body.requirements : undefined,
      benefits: Array.isArray(body.benefits) ? body.benefits : undefined,
      applicationDeadline: body.applicationDeadline,
      isActive: body.isActive,
    }

    const updatedJob = await updateJob(params.id, jobData)
    return NextResponse.json(updatedJob)
  } catch (error) {
    console.error('Error updating job:', error)
    if (error instanceof Error && error.message === 'Job not found') {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Failed to update job' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    await deleteJob(params.id)
    return NextResponse.json({ message: 'Job deleted successfully' })
  } catch (error) {
    console.error('Error deleting job:', error)
    return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 })
  }
}
