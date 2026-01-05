import { NextResponse } from 'next/server'
import { existsSync } from 'fs'
import path from 'path'

const METADATA_FILE = path.join(process.cwd(), 'data', 'vapt-report.json')

// GET - Get current VAPT report for public access
export async function GET() {
  try {
    // Check for environment variable first (for Vercel/production)
    const envReportUrl = process.env.VAPT_REPORT_URL
    if (envReportUrl) {
      return NextResponse.json({
        report: {
          filename: 'Sample VAPT Report',
          path: envReportUrl,
          uploadedAt: new Date().toISOString()
        }
      })
    }

    // Fallback to file system (for local development)
    if (!existsSync(METADATA_FILE)) {
      // Return a default placeholder so the section shows
      return NextResponse.json({
        report: {
          filename: 'Sample VAPT Report',
          path: '/downloads/sample-vapt-report.pdf',
          uploadedAt: new Date().toISOString()
        }
      })
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
    // Return placeholder even on error
    return NextResponse.json({
      report: {
        filename: 'Sample VAPT Report',
        path: '/downloads/sample-vapt-report.pdf',
        uploadedAt: new Date().toISOString()
      }
    })
  }
}

