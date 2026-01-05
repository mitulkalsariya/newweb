import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const SETTINGS_FILE = path.join(process.cwd(), 'data', 'smtp-settings.json')

async function getSMTPSettings() {
  if (existsSync(SETTINGS_FILE)) {
    const data = await readFile(SETTINGS_FILE, 'utf-8')
    return JSON.parse(data)
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      company,
      jobTitle,
      preferredDate,
      preferredTime,
      serviceType,
      message,
      companySize,
      industry,
    } = body

    // Validate required fields
    if (!name || !email || !phone || !company || !jobTitle || !preferredDate || !preferredTime || !serviceType || !companySize || !industry) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      )
    }

    // Email content for admin
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">New Consultation Booking Request</h2>

        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Client Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Job Title:</strong> ${jobTitle}</p>
          <p><strong>Company Size:</strong> ${companySize}</p>
          <p><strong>Industry:</strong> ${industry}</p>
        </div>

        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Consultation Details</h3>
          <p><strong>Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          <p><strong>Service Type:</strong> ${serviceType}</p>
        </div>

        ${message ? `
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Additional Information</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This booking request was submitted through CyberShield Pro website.
          </p>
        </div>
      </div>
    `

    // Email content for client confirmation
    const clientEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">Consultation Booking Confirmation</h2>

        <p>Dear ${name},</p>

        <p>Thank you for your interest in CyberShield Pro's cybersecurity services. We have received your consultation request and will contact you shortly to confirm the appointment.</p>

        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Booking Details</h3>
          <p><strong>Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          <p><strong>Service:</strong> ${serviceType}</p>
        </div>

        <p>Our team will review your request and contact you within 24 hours to schedule the consultation. If you have any urgent questions, please feel free to reply to this email.</p>

        <p>Best regards,<br/>
        The CyberShield Pro Team</p>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            CyberShield Pro - Advanced Cybersecurity Solutions<br/>
            Email: contact@cybershieldpro.com | Phone: +91 98765 43210
          </p>
        </div>
      </div>
    `

    // Get SMTP settings
    const smtpSettings = await getSMTPSettings()

    if (!smtpSettings) {
      // If no SMTP settings, still accept booking but don't send email
      console.warn('SMTP not configured, email notifications disabled')
      return NextResponse.json(
        { message: 'Consultation booked successfully (email notifications not configured)' },
        { status: 200 }
      )
    }

    // Create transporter with admin settings
    const transporter = nodemailer.createTransport({
      host: smtpSettings.host,
      port: smtpSettings.port,
      secure: smtpSettings.secure,
      auth: {
        user: smtpSettings.user,
        pass: smtpSettings.password
      }
    })

    // Send email to admin
    await transporter.sendMail({
      from: `"${smtpSettings.fromName}" <${smtpSettings.fromEmail}>`,
      to: smtpSettings.adminEmail,
      subject: `🔔 New Consultation Booking: ${name} from ${company}`,
      html: adminEmailContent,
    })

    // Send confirmation email to client
    await transporter.sendMail({
      from: `"${smtpSettings.fromName}" <${smtpSettings.fromEmail}>`,
      to: email,
      subject: 'Consultation Booking Confirmation - CyberShield Pro',
      html: clientEmailContent,
    })

    return NextResponse.json(
      { message: 'Consultation booked successfully and confirmation email sent' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error booking consultation:', error)
    return NextResponse.json(
      { error: 'Failed to book consultation. Please try again.' },
      { status: 500 }
    )
  }
}
