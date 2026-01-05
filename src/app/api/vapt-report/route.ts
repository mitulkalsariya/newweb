import { NextResponse } from 'next/server'
import { existsSync } from 'fs'
import path from 'path'

const METADATA_FILE = path.join(process.cwd(), 'data', 'vapt-report.json')

// GET - Get current VAPT report for public access
export async function GET() {
  try {
    if (!existsSync(METADATA_FILE)) {
      return NextResponse.json({ report: null })
    }

    const fs = require('fs')
    const metadata = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf-8'))
    
    // Return only necessary information for public
    return NextResponse.json({
      report: {
        filename: metadata.filename,
        path: metadata.path,
        uploadedAt: metadata.uploadedAt
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get report' },
      { status: 500 }
    )
  }
}

