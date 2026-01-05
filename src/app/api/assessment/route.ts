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
    const {
      name,
      email,
      phone,
      company,
      jobTitle,
      companySize,
      industry,
      assessmentType,
      targetSystems,
      currentSecurity,
      compliance,
      urgency
    } = body

    // Validate required fields
    if (!name || !email || !phone || !company || !jobTitle || !companySize || !industry || !assessmentType || !targetSystems || !urgency) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      )
    }

    // Email content for admin
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">New Free Assessment Request</h2>

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
          <h3 style="color: #374151; margin-top: 0;">Assessment Details</h3>
          <p><strong>Assessment Types:</strong> ${Array.isArray(assessmentType) ? assessmentType.join(', ') : assessmentType}</p>
          <p><strong>Urgency:</strong> ${urgency}</p>
          <p><strong>Target Systems:</strong></p>
          <p style="white-space: pre-wrap; margin-left: 20px;">${targetSystems}</p>
        </div>

        ${currentSecurity ? `
        <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Current Security Measures</h3>
          <p style="white-space: pre-wrap;">${currentSecurity}</p>
        </div>
        ` : ''}

        ${compliance && Array.isArray(compliance) && compliance.length > 0 ? `
        <div style="background-color: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Compliance Requirements</h3>
          <p>${compliance.join(', ')}</p>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Free assessment request submitted through CyberShield Pro website.
          </p>
        </div>
      </div>
    `

    // Email content for client confirmation
    const clientEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">Free Assessment Request Confirmation</h2>

        <p>Dear ${name},</p>

        <p>Thank you for requesting a free security assessment from CyberShield Pro! We're committed to helping organizations like yours strengthen their cybersecurity posture.</p>

        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Your Assessment Request</h3>
          <p><strong>Assessment Types:</strong> ${Array.isArray(assessmentType) ? assessmentType.join(', ') : assessmentType}</p>
          <p><strong>Urgency Level:</strong> ${urgency}</p>
          <p><strong>Company:</strong> ${company}</p>
        </div>

        <div style="background-color: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">What Happens Next?</h3>
          <ol style="margin: 10px 0; padding-left: 20px;">
            <li style="margin-bottom: 8px;">Our security experts will review your request within 24 hours</li>
            <li style="margin-bottom: 8px;">We'll contact you to discuss the scope and timeline</li>
            <li style="margin-bottom: 8px;">Assessment execution typically takes 5-7 business days</li>
            <li style="margin-bottom: 8px;">You'll receive a comprehensive report with actionable recommendations</li>
          </ol>
        </div>

        <p>During this process, we'll maintain strict confidentiality and follow industry best practices for handling sensitive security information.</p>

        <div style="background-color: #d1fae5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">💡 Pro Tip</h3>
          <p style="margin: 10px 0;">While you wait, you can prepare by gathering information about your current security tools, recent security incidents, and any specific concerns you have about your systems.</p>
        </div>

        <p>If you have any questions or need to update your request, please don't hesitate to reply to this email.</p>

        <p>Best regards,<br/>
        The CyberShield Pro Assessment Team</p>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            CyberShield Pro - Advanced Cybersecurity Solutions<br/>
            Email: assessment@cybershieldpro.com | Phone: +91 98765 43210
          </p>
        </div>
      </div>
    `

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || 'admin@cybershieldpro.com',
      subject: `Free Assessment Request: ${name} from ${company} - ${urgency}`,
      html: adminEmailContent,
    })

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `Free Assessment Request Confirmation - CyberShield Pro`,
      html: clientEmailContent,
    })

    return NextResponse.json(
      { message: 'Assessment request submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting assessment request:', error)
    return NextResponse.json(
      { error: 'Failed to submit assessment request. Please try again.' },
      { status: 500 }
    )
  }
}
