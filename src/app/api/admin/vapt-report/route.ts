import { NextRequest, NextResponse } from 'next/server'
import { writeFile, unlink, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { jwtVerify } from 'jose'

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
)

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'downloads')
const METADATA_FILE = path.join(process.cwd(), 'data', 'vapt-report.json')

// Ensure directories exist
async function ensureDirectories() {
  if (!existsSync(UPLOAD_DIR)) {
    await mkdir(UPLOAD_DIR, { recursive: true })
  }
  const dataDir = path.join(process.cwd(), 'data')
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true })
  }
}

// Verify JWT token
async function verifyToken(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  
  if (!token) {
    return null
  }

  try {
    const { payload } = await jwtVerify(token, SECRET_KEY)
    return payload
  } catch (error) {
    return null
  }
}

// GET - Get current VAPT report metadata
export async function GET(request: NextRequest) {
  const user = await verifyToken(request)
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await ensureDirectories()
    
    if (!existsSync(METADATA_FILE)) {
      return NextResponse.json({ report: null })
    }

    const fs = require('fs')
    const metadata = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf-8'))
    
    return NextResponse.json({ report: metadata })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get report metadata' },
      { status: 500 }
    )
  }
}

// POST - Upload new VAPT report
export async function POST(request: NextRequest) {
  const user = await verifyToken(request)
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await ensureDirectories()
    
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type (PDF only)
    if (!file.name.endsWith('.pdf')) {
      return NextResponse.json(
        { error: 'Only PDF files are allowed' },
        { status: 400 }
      )
    }

    // Delete old file if exists
    if (existsSync(METADATA_FILE)) {
      const fs = require('fs')
      const oldMetadata = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf-8'))
      const oldFilePath = path.join(process.cwd(), 'public', oldMetadata.path)
      if (existsSync(oldFilePath)) {
        await unlink(oldFilePath)
      }
    }

    // Save new file
    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = `sample-vapt-report-${Date.now()}.pdf`
    const filepath = path.join(UPLOAD_DIR, filename)
    
    await writeFile(filepath, buffer)

    // Save metadata
    const metadata = {
      filename: file.name,
      path: `/downloads/${filename}`,
      uploadedAt: new Date().toISOString(),
      uploadedBy: user.username,
      size: file.size
    }

    const fs = require('fs')
    fs.writeFileSync(METADATA_FILE, JSON.stringify(metadata, null, 2))

    return NextResponse.json({
      message: 'VAPT report uploaded successfully',
      report: metadata
    })
  } catch (error) {
    console.error('Error uploading VAPT report:', error)
    return NextResponse.json(
      { error: 'Failed to upload report' },
      { status: 500 }
    )
  }
}

// DELETE - Remove VAPT report
export async function DELETE(request: NextRequest) {
  const user = await verifyToken(request)
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    if (!existsSync(METADATA_FILE)) {
      return NextResponse.json({ error: 'No report found' }, { status: 404 })
    }

    // Delete file
    const fs = require('fs')
    const metadata = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf-8'))
    const filepath = path.join(process.cwd(), 'public', metadata.path)
    
    if (existsSync(filepath)) {
      await unlink(filepath)
    }

    // Delete metadata
    await unlink(METADATA_FILE)

    return NextResponse.json({ message: 'VAPT report deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete report' },
      { status: 500 }
    )
  }
}

