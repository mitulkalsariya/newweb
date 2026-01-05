import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { jwtVerify } from 'jose'

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
)

const SETTINGS_DIR = path.join(process.cwd(), 'data')
const SETTINGS_FILE = path.join(SETTINGS_DIR, 'smtp-settings.json')

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

// Ensure data directory exists
async function ensureDirectory() {
  if (!existsSync(SETTINGS_DIR)) {
    await mkdir(SETTINGS_DIR, { recursive: true })
  }
}

// GET - Get SMTP settings
export async function GET(request: NextRequest) {
  const user = await verifyToken(request)
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await ensureDirectory()
    
    if (!existsSync(SETTINGS_FILE)) {
      return NextResponse.json({ settings: null })
    }

    const data = await readFile(SETTINGS_FILE, 'utf-8')
    const settings = JSON.parse(data)
    
    // Don't send password to frontend
    const { password, ...safeSettings } = settings
    
    return NextResponse.json({ settings: safeSettings })
  } catch (error) {
    console.error('Error reading SMTP settings:', error)
    return NextResponse.json(
      { error: 'Failed to read settings' },
      { status: 500 }
    )
  }
}

// POST - Save SMTP settings
export async function POST(request: NextRequest) {
  const user = await verifyToken(request)
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await ensureDirectory()
    
    const body = await request.json()
    
    // Validate required fields
    if (!body.host || !body.user || !body.fromEmail || !body.adminEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Read existing settings to preserve password if not provided
    let existingSettings: any = {}
    if (existsSync(SETTINGS_FILE)) {
      const data = await readFile(SETTINGS_FILE, 'utf-8')
      existingSettings = JSON.parse(data)
    }

    const settings = {
      host: body.host,
      port: body.port || 587,
      secure: body.secure || false,
      user: body.user,
      password: body.password || existingSettings.password || '',
      fromEmail: body.fromEmail,
      fromName: body.fromName || 'CyberShield Pro',
      adminEmail: body.adminEmail,
      updatedAt: new Date().toISOString(),
      updatedBy: user.username
    }

    await writeFile(SETTINGS_FILE, JSON.stringify(settings, null, 2))

    return NextResponse.json({
      message: 'SMTP settings saved successfully',
      success: true
    })
  } catch (error) {
    console.error('Error saving SMTP settings:', error)
    return NextResponse.json(
      { error: 'Failed to save settings' },
      { status: 500 }
    )
  }
}

