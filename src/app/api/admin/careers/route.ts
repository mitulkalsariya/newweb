import { NextRequest, NextResponse } from 'next/server'
import { getAllJobs } from '@/lib/careers'
import { verifyAuth, unauthorizedResponse } from '@/middleware/auth'
import fs from 'fs'
import path from 'path'

const careersDirectory = path.join(process.cwd(), 'content/careers')
const careersFile = path.join(careersDirectory, 'jobs.json')

// GET - List all job postings (requires auth)
export async function GET(request: NextRequest) {
  const auth = await verifyAuth(request)
  
  if (!auth.authenticated) {
    return unauthorizedResponse(auth.error)
  }

  try {
    const jobs = await getAllJobs()
    return NextResponse.json({
      success: true,
      jobs
    })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch jobs' },
      { status: 500 }
    )
  }
}

// POST - Create new job posting (requires auth)
export async function POST(request: NextRequest) {
  const auth = await verifyAuth(request)
  
  if (!auth.authenticated) {
    return unauthorizedResponse(auth.error)
  }

  try {
    const body = await request.json()
    const { title, department, location, type, experience, description, responsibilities, requirements, benefits } = body

    // Validate required fields
    if (!title || !department || !location) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Ensure directory exists
    if (!fs.existsSync(careersDirectory)) {
      fs.mkdirSync(careersDirectory, { recursive: true })
    }

    // Read existing jobs or create empty array
    let jobs = []
    if (fs.existsSync(careersFile)) {
      const fileContent = fs.readFileSync(careersFile, 'utf8')
      jobs = JSON.parse(fileContent)
    }

    // Create new job
    const newJob = {
      id: Date.now().toString(),
      title,
      department,
      location,
      type: type || 'Full-time',
      experience: experience || '2-5 years',
      postedDate: new Date().toISOString().split('T')[0],
      description,
      responsibilities: responsibilities || [],
      requirements: requirements || [],
      benefits: benefits || []
    }

    jobs.push(newJob)

    // Write back to file
    fs.writeFileSync(careersFile, JSON.stringify(jobs, null, 2))

    return NextResponse.json({
      success: true,
      message: 'Job posting created successfully',
      job: newJob
    })
  } catch (error) {
    console.error('Error creating job:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to create job' },
      { status: 500 }
    )
  }
}

// PUT - Update job posting (requires auth)
export async function PUT(request: NextRequest) {
  const auth = await verifyAuth(request)
  
  if (!auth.authenticated) {
    return unauthorizedResponse(auth.error)
  }

  try {
    const body = await request.json()
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Job ID is required' },
        { status: 400 }
      )
    }

    if (!fs.existsSync(careersFile)) {
      return NextResponse.json(
        { success: false, message: 'No jobs found' },
        { status: 404 }
      )
    }

    const fileContent = fs.readFileSync(careersFile, 'utf8')
    let jobs = JSON.parse(fileContent)

    const jobIndex = jobs.findIndex((job: any) => job.id === id)

    if (jobIndex === -1) {
      return NextResponse.json(
        { success: false, message: 'Job not found' },
        { status: 404 }
      )
    }

    // Update job
    jobs[jobIndex] = { ...jobs[jobIndex], ...updateData }

    // Write back to file
    fs.writeFileSync(careersFile, JSON.stringify(jobs, null, 2))

    return NextResponse.json({
      success: true,
      message: 'Job posting updated successfully',
      job: jobs[jobIndex]
    })
  } catch (error) {
    console.error('Error updating job:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update job' },
      { status: 500 }
    )
  }
}

// DELETE - Delete job posting (requires auth)
export async function DELETE(request: NextRequest) {
  const auth = await verifyAuth(request)
  
  if (!auth.authenticated) {
    return unauthorizedResponse(auth.error)
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Job ID is required' },
        { status: 400 }
      )
    }

    if (!fs.existsSync(careersFile)) {
      return NextResponse.json(
        { success: false, message: 'No jobs found' },
        { status: 404 }
      )
    }

    const fileContent = fs.readFileSync(careersFile, 'utf8')
    let jobs = JSON.parse(fileContent)

    const jobIndex = jobs.findIndex((job: any) => job.id === id)

    if (jobIndex === -1) {
      return NextResponse.json(
        { success: false, message: 'Job not found' },
        { status: 404 }
      )
    }

    // Remove job
    jobs.splice(jobIndex, 1)

    // Write back to file
    fs.writeFileSync(careersFile, JSON.stringify(jobs, null, 2))

    return NextResponse.json({
      success: true,
      message: 'Job posting deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting job:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to delete job' },
      { status: 500 }
    )
  }
}

