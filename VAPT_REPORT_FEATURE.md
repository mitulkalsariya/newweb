# VAPT Report Download Feature

## Overview
This feature allows you to upload a sample VAPT report from the admin portal, and users can download it from the website. The report is displayed as a prominent CTA section on the VAPT services page.

## How It Works

### Frontend (User Side)
1. Users see a beautiful CTA section on the VAPT services page
2. The section displays a "Download Sample Report" button
3. Clicking the button downloads the PDF file
4. The section only appears if a report has been uploaded

### Backend (Admin Side)
1. Admin logs into the admin portal
2. Uses the VAPT Report Manager to upload a PDF file
3. The system stores the file and metadata
4. The report becomes immediately available on the website
5. Admin can replace or delete the report anytime

## Setup Instructions

### 1. Create Required Directories
The system will automatically create these directories, but you can create them manually:
```bash
mkdir -p public/downloads
mkdir -p data
```

### 2. File Storage
- PDF files are stored in: `public/downloads/`
- Metadata is stored in: `data/vapt-report.json`

### 3. File Permissions
Ensure the directories are writable:
```bash
chmod 755 public/downloads
chmod 755 data
```

## Admin Portal Integration

### Using the VAPT Report Manager Component

You can add the VAPT Report Manager to your admin dashboard:

```typescript
import VAPTReportManager from '@/components/admin/VAPTReportManager'

export default function AdminDashboard() {
  return (
    <div>
      {/* Other admin components */}
      <VAPTReportManager />
    </div>
  )
}
```

### Features
- ✅ Upload PDF files (only PDFs allowed)
- ✅ Preview current report details
- ✅ Download current report
- ✅ Delete current report
- ✅ Automatic replacement (old file deleted when new one uploaded)
- ✅ File size display
- ✅ Upload timestamp and user tracking

## API Endpoints

### Admin Endpoints (Require Authentication)

#### Upload Report
```bash
POST /api/admin/vapt-report
Authorization: Bearer <token>
Content-Type: multipart/form-data
Body: file=[PDF file]
```

#### Get Report Details
```bash
GET /api/admin/vapt-report
Authorization: Bearer <token>
```

#### Delete Report
```bash
DELETE /api/admin/vapt-report
Authorization: Bearer <token>
```

### Public Endpoint (No Authentication)

#### Get Report for Download
```bash
GET /api/vapt-report
```

## Frontend CTA Component

The `VAPTReportCTA` component is already added to:
- `/services/vapt` page

### Features
- 🎨 Beautiful gradient design with animations
- 📱 Fully responsive
- ⚡ Only renders if report exists
- 🎯 Clear download button with icon
- ✨ Hover effects and smooth transitions
- 📊 Shows key benefits (Detailed Findings, Risk Analysis, Remediation Steps)

### Adding to Other Pages

You can add the CTA to any page:

```typescript
import VAPTReportCTA from '@/components/sections/VAPTReportCTA'

export default function YourPage() {
  return (
    <div>
      {/* Your content */}
      <VAPTReportCTA />
      {/* More content */}
    </div>
  )
}
```

## File Size Limits

By default, Next.js limits file uploads to **4MB**. To increase this:

### 1. Create/update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Set desired max size
    },
  },
}

module.exports = nextConfig
```

### 2. For API Routes using App Router:
Create `route.config.ts` in your API route folder:
```typescript
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}
```

## Security Considerations

### ✅ Implemented
- JWT authentication for upload/delete
- File type validation (PDFs only)
- Automatic old file cleanup
- Public directory for downloads (safe for Next.js)

### 🔒 Recommended
1. Add file size validation
2. Scan uploaded PDFs for malware
3. Add rate limiting to upload endpoint
4. Monitor storage usage
5. Add file name sanitization

## Deployment Notes

### Vercel/Netlify
These platforms have ephemeral file systems. Uploaded files won't persist between deployments. Consider:
1. Use cloud storage (AWS S3, Cloudflare R2, etc.)
2. Use a CMS with file storage
3. Deploy to a server with persistent storage (DigitalOcean, AWS EC2, etc.)

### Alternative: Cloud Storage
To use cloud storage, modify the API routes to:
1. Upload to S3/R2 instead of local filesystem
2. Store the cloud URL in metadata
3. Return cloud URL to frontend

Example with AWS S3:
```typescript
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3 = new S3Client({ region: 'us-east-1' })

const uploadToS3 = async (file: File) => {
  const buffer = Buffer.from(await file.arrayBuffer())
  const key = `vapt-reports/sample-${Date.now()}.pdf`
  
  await s3.send(new PutObjectCommand({
    Bucket: 'your-bucket',
    Key: key,
    Body: buffer,
    ContentType: 'application/pdf',
  }))
  
  return `https://your-bucket.s3.amazonaws.com/${key}`
}
```

## Troubleshooting

### Report Not Showing on Website
1. Check if file exists: `ls public/downloads/`
2. Check metadata: `cat data/vapt-report.json`
3. Check browser console for errors
4. Verify file permissions

### Upload Fails
1. Check directory permissions
2. Check file size (must be under limit)
3. Verify file is a PDF
4. Check server logs for errors

### File Not Downloadable
1. Verify file exists in `public/downloads/`
2. Check file permissions (should be readable)
3. Check network tab for download errors
4. Verify path in metadata matches actual file

## Future Enhancements

Potential improvements:
- Multiple sample reports (by category)
- Report preview before download
- Analytics on download count
- Email gate (collect email before download)
- Multiple file format support
- Report versioning
- Automatic report expiration

## Support

For issues or questions:
1. Check the logs in the terminal
2. Review API responses in browser DevTools
3. Verify environment variables are set
4. Check file permissions on server


