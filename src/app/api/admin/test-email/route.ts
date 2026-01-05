import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { jwtVerify } from 'jose'
import nodemailer from 'nodemailer'

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
)

const SETTINGS_FILE = path.join(process.cwd(), 'data', 'smtp-settings.json')

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

export async function POST(request: NextRequest) {
  const user = await verifyToken(request)
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Read SMTP settings
    if (!existsSync(SETTINGS_FILE)) {
      return NextResponse.json(
        { error: 'SMTP settings not configured' },
        { status: 400 }
      )
    }

    const data = await readFile(SETTINGS_FILE, 'utf-8')
    const settings = JSON.parse(data)

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: settings.host,
      port: settings.port,
      secure: settings.secure,
      auth: {
        user: settings.user,
        pass: settings.password
      }
    })

    // Send test email
    await transporter.sendMail({
      from: `"${settings.fromName}" <${settings.fromEmail}>`,
      to: email,
      subject: 'Test Email from CyberShield Pro Admin',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">SMTP Configuration Test</h2>
          <p>This is a test email from your CyberShield Pro admin panel.</p>
          <p>If you're reading this, your SMTP settings are configured correctly! ✅</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent from: ${settings.fromEmail}<br>
            SMTP Server: ${settings.host}:${settings.port}
          </p>
        </div>
      `
    })

    return NextResponse.json({
      message: 'Test email sent successfully',
      success: true
    })
  } catch (error: any) {
    console.error('Error sending test email:', error)
    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    )
  }
}

