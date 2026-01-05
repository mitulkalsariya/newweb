# VAPT Report Download Feature - Quick Start Guide

## ✅ What's Been Created

I've implemented a complete system for uploading and displaying a sample VAPT report that users can download from your website.

### Backend (API Routes)
1. **`/api/admin/vapt-report`** - Admin endpoint to upload, get, and delete reports (requires authentication)
2. **`/api/vapt-report`** - Public endpoint for users to fetch the report

### Frontend Components
1. **`VAPTReportCTA`** - Beautiful CTA section shown on the website (already added to `/services/vapt` page)
2. **`VAPTReportManager`** - Admin component for managing the report upload/delete

### Documentation
1. **`VAPT_REPORT_FEATURE.md`** - Comprehensive feature documentation
2. **`ADMIN_DASHBOARD_EXAMPLE.html`** - Standalone admin dashboard example
3. **`ADMIN_API_DOCUMENTATION.md`** - Updated with VAPT report endpoints

## 🚀 How to Use

### Step 1: Start Your Server
```bash
npm run dev
```

### Step 2: Access Admin Dashboard

#### Option A: Use the Standalone HTML Dashboard
1. Open in browser: `http://localhost:3000/ADMIN_DASHBOARD_EXAMPLE.html`
2. Login with your admin credentials (set in `.env.local`):
   - Username: `admin` (or your custom username)
   - Password: `admin123` (or your custom password)
3. Upload a PDF file using the VAPT Report Manager
4. Done! The report is now available on your website

#### Option B: Use API Directly with Postman/curl

**1. Login:**
```bash
curl -X POST http://localhost:3000/api/admin/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

**2. Upload Report:**
```bash
curl -X POST http://localhost:3000/api/admin/vapt-report \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -F "file=@/path/to/your/sample-report.pdf"
```

### Step 3: View on Website
Visit: `http://localhost:3000/services/vapt`

You'll see a beautiful CTA section at the bottom of the page with a "Download Sample Report" button!

## 📁 Directory Structure

```
website/
├── public/
│   └── downloads/              # PDF files stored here
│       └── sample-vapt-report-*.pdf
├── data/
│   └── vapt-report.json       # Metadata about the current report
├── src/
│   ├── app/
│   │   └── api/
│   │       ├── admin/
│   │       │   └── vapt-report/
│   │       │       └── route.ts  # Admin API (upload/delete)
│   │       └── vapt-report/
│   │           └── route.ts      # Public API (get report)
│   └── components/
│       ├── admin/
│       │   └── VAPTReportManager.tsx  # Admin UI component
│       └── sections/
│           └── VAPTReportCTA.tsx      # Website CTA component
└── ADMIN_DASHBOARD_EXAMPLE.html       # Standalone admin page
```

## 🎨 What Users See

When a report is uploaded, users see a gorgeous CTA section with:
- 🎯 Gradient background with animations
- 📄 "Download Sample Report" button
- ✅ Key features: Detailed Findings, Risk Analysis, Remediation Steps
- 📱 Fully responsive design
- ⚡ Smooth hover effects

**If no report is uploaded, the section doesn't appear at all.**

## 🔐 Security

- ✅ JWT authentication required for upload/delete
- ✅ Only PDF files allowed
- ✅ File type validation
- ✅ Automatic old file cleanup
- ✅ Public download doesn't expose sensitive admin data

## ⚙️ Configuration

### Environment Variables (.env.local)
```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password-here
JWT_SECRET=your-jwt-secret-minimum-32-characters
```

## 📝 Common Tasks

### Upload a New Report
1. Login to admin dashboard
2. Click "Choose PDF file"
3. Select your PDF
4. Wait for "Upload successful" message
5. The old report is automatically replaced

### Delete Current Report
1. Login to admin dashboard
2. Click "Delete" button
3. Confirm deletion
4. Report removed from website

### Change Report
Just upload a new one - the old one is automatically deleted!

## 🌐 Adding CTA to Other Pages

Want to show the download CTA on other pages? Easy!

```typescript
// In any page file, like src/app/page.tsx
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

The component automatically checks if a report exists and only renders if one is available.

## 🐛 Troubleshooting

### "Report not showing on website"
- Make sure you've uploaded a PDF through the admin dashboard
- Check browser console for errors
- Verify the file exists: `ls public/downloads/`
- Check metadata: `cat data/vapt-report.json`

### "Upload fails"
- Ensure file is a PDF
- Check file size (default limit is 4MB)
- Verify directories exist and are writable
- Check server logs in terminal

### "Cannot access admin dashboard"
- Make sure server is running: `npm run dev`
- Verify credentials in `.env.local`
- Check JWT_SECRET is set (minimum 32 characters)

### "Download button doesn't work"
- Check browser console for errors
- Verify file path in `data/vapt-report.json`
- Ensure file exists in `public/downloads/`

## 📊 File Storage Notes

### Development
- Files stored locally in `public/downloads/`
- Perfect for local development and testing

### Production (Important!)

**If deploying to Vercel/Netlify:**
- These platforms have ephemeral storage
- Files will be deleted on each deployment
- **Solution:** Use cloud storage (AWS S3, Cloudflare R2, etc.)

**If deploying to your own server:**
- Ensure `public/downloads/` is writable
- Backup the `data/` directory regularly
- Consider setting up automated backups

## 🎯 Next Steps

1. ✅ Start your development server
2. ✅ Upload a sample VAPT report through admin dashboard
3. ✅ Visit `/services/vapt` to see it in action
4. ✅ Test the download functionality
5. ✅ Customize the CTA text/design if needed (edit `VAPTReportCTA.tsx`)

## 📚 Additional Resources

- **Full Feature Documentation:** `VAPT_REPORT_FEATURE.md`
- **API Documentation:** `ADMIN_API_DOCUMENTATION.md`
- **Admin Setup:** `ADMIN_SETUP_GUIDE.md`

## 💡 Tips

1. **Use a professional report name:** e.g., "Sample_VAPT_Report_2026.pdf"
2. **Keep file size reasonable:** Aim for under 2MB for faster downloads
3. **Update regularly:** Replace the sample report every few months
4. **Monitor downloads:** Consider adding analytics to track downloads
5. **Test on mobile:** The CTA is fully responsive

## ✨ That's It!

You now have a fully functional VAPT report download system. Users can easily access your sample report, and you can update it anytime through the admin dashboard.

**Questions?** Check the other documentation files or review the code comments in the components.

---

**Built with ❤️ for CyberShield Pro**

