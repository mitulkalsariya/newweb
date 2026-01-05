import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !company || !subject || !service || !message) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      )
    }

    // Email content for admin
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">New Contact Form Submission</h2>

        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Service:</strong> ${service}</p>
        </div>

        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent through CyberShield Pro contact form.
          </p>
        </div>
      </div>
    `

    // Email content for client confirmation
    const clientEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">Thank You for Contacting CyberShield Pro</h2>

        <p>Dear ${name},</p>

        <p>Thank you for reaching out to CyberShield Pro. We have received your message and will get back to you within 24 hours.</p>

        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Your Message Summary</h3>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
        </div>

        <p>Our team will review your inquiry and contact you shortly with more information about how we can help with your cybersecurity needs.</p>

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

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || 'admin@cybershieldpro.com',
      subject: `Contact Form: ${subject} - ${name} from ${company}`,
      html: adminEmailContent,
    })

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `Contact Confirmation - CyberShield Pro`,
      html: clientEmailContent,
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending contact message:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
