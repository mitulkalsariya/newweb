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
      preferredDate,
      preferredTime,
      demoType,
      currentChallenges,
      specificFeatures
    } = body

    // Validate required fields
    if (!name || !email || !phone || !company || !jobTitle || !companySize || !industry || !preferredDate || !preferredTime || !demoType) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      )
    }

    // Email content for admin
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">New Demo Request</h2>

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
          <h3 style="color: #374151; margin-top: 0;">Demo Details</h3>
          <p><strong>Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          <p><strong>Demo Type:</strong> ${demoType}</p>
        </div>

        ${currentChallenges ? `
        <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Current Challenges</h3>
          <p style="white-space: pre-wrap;">${currentChallenges}</p>
        </div>
        ` : ''}

        ${specificFeatures ? `
        <div style="background-color: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Specific Features Requested</h3>
          <p style="white-space: pre-wrap;">${specificFeatures}</p>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Demo request submitted through CyberShield Pro website.
          </p>
        </div>
      </div>
    `

    // Email content for client confirmation
    const clientEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">Demo Request Confirmation - CyberShield Pro</h2>

        <p>Dear ${name},</p>

        <p>Thank you for your interest in CyberShield Pro's AI-powered security platform! We have received your demo request and are excited to show you how our technology can enhance your security posture.</p>

        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Demo Details</h3>
          <p><strong>Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          <p><strong>Demo Type:</strong> ${demoType}</p>
        </div>

        <p>Our demo specialist will contact you within 24 hours to confirm your appointment and prepare a personalized demonstration based on your specific needs and industry requirements.</p>

        <div style="background-color: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">What to Expect</h3>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li>45-minute personalized live demonstration</li>
            <li>Interactive Q&A session</li>
            <li>Real-time vulnerability detection examples</li>
            <li>Custom recommendations for your organization</li>
          </ul>
        </div>

        <p>If you have any questions before the demo, please don't hesitate to reply to this email.</p>

        <p>Best regards,<br/>
        The CyberShield Pro Demo Team</p>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            CyberShield Pro - Advanced Cybersecurity Solutions<br/>
            Email: demo@cybershieldpro.com | Phone: +91 98765 43210
          </p>
        </div>
      </div>
    `

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || 'admin@cybershieldpro.com',
      subject: `Demo Request: ${name} from ${company} - ${demoType}`,
      html: adminEmailContent,
    })

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `Demo Request Confirmation - CyberShield Pro`,
      html: clientEmailContent,
    })

    return NextResponse.json(
      { message: 'Demo request submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting demo request:', error)
    return NextResponse.json(
      { error: 'Failed to submit demo request. Please try again.' },
      { status: 500 }
    )
  }
}
