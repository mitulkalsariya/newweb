# CyberShield Pro - Cybersecurity Services Website

A modern, professional website for CyberShield Pro built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🌟 Features

- ✅ Modern, responsive design
- ✅ Full VAPT services showcase
- ✅ AI-powered security solutions
- ✅ Industry-specific solutions (SaaS, BFSI, SEBI)
- ✅ Blog with markdown support
- ✅ Career opportunities section
- ✅ Contact forms
- ✅ Admin portal with JWT authentication
- ✅ VAPT report download feature
- ✅ SEO optimized
- ✅ Fast performance

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd website

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your environment variables to .env.local
# ADMIN_USERNAME=admin
# ADMIN_PASSWORD=your-secure-password
# JWT_SECRET=your-minimum-32-characters-jwt-secret

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── services/          # Service pages
│   │   ├── solutions/         # Solution pages
│   │   ├── sectors/           # Sector pages
│   │   └── ...
│   ├── components/            # React components
│   │   ├── admin/            # Admin components
│   │   ├── layout/           # Layout components
│   │   ├── sections/         # Page sections
│   │   └── ...
│   └── lib/                   # Utility functions
├── public/                    # Static assets
│   ├── downloads/            # VAPT reports (not in Git)
│   └── blog/                 # Blog images
├── content/                   # Markdown content
│   └── blog/                 # Blog posts
└── data/                     # Dynamic data (not in Git)
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Authentication:** JWT (jose)
- **Markdown:** Gray Matter, Remark
- **Icons:** Lucide React

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🔐 Environment Variables

Create `.env.local` with:

```env
# Admin Authentication
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password-here
JWT_SECRET=your-jwt-secret-minimum-32-characters-long

# Optional
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📄 Pages

### Public Pages
- `/` - Homepage
- `/about` - About Us
- `/services/*` - Service pages (VAPT, API Security, etc.)
- `/solutions/*` - Solution pages (AI API Security, Web Security, etc.)
- `/sectors/*` - Sector pages (SaaS, BFSI, SEBI)
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog posts
- `/careers` - Career opportunities
- `/contact` - Contact page
- `/book-call` - Book consultation
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/cookies` - Cookie Policy
- `/compliance` - Compliance & Certifications

### Admin Pages
- `/ADMIN_DASHBOARD_EXAMPLE.html` - Admin dashboard

### API Routes
- `/api/admin/auth/*` - Authentication endpoints
- `/api/admin/blog` - Blog management
- `/api/admin/careers` - Career management
- `/api/admin/vapt-report` - VAPT report management
- `/api/vapt-report` - Public VAPT report endpoint

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: {...},
  secondary: {...}
}
```

### Content
- **Blog Posts:** Add markdown files to `content/blog/`
- **Services:** Edit files in `src/app/services/`
- **Solutions:** Edit files in `src/app/solutions/`

## 📦 Deployment

### Vercel (Recommended)

See `DEPLOY_NOW.md` for detailed instructions.

Quick deploy:
```bash
vercel
```

**Important:** VAPT report upload feature requires additional setup on Vercel (see `VERCEL_DEPLOYMENT_GUIDE.md`)

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Your own server

## 📚 Documentation

- `DEPLOY_NOW.md` - Quick deployment guide
- `VERCEL_DEPLOYMENT_GUIDE.md` - Detailed Vercel deployment guide
- `VAPT_REPORT_SETUP_GUIDE.md` - VAPT report feature guide
- `VAPT_REPORT_FEATURE.md` - Complete feature documentation
- `ADMIN_API_DOCUMENTATION.md` - API reference
- `ADMIN_SETUP_GUIDE.md` - Admin portal setup

## 🔒 Security

- JWT authentication for admin routes
- Environment variables for sensitive data
- Input validation with Zod
- CSRF protection
- XSS prevention

## 🐛 Troubleshooting

### Build fails
```bash
npm run build
# Check for TypeScript or ESLint errors
```

### Admin login not working
- Verify environment variables are set
- JWT_SECRET must be 32+ characters
- Check browser console for errors

### Pages not loading
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check for TypeScript errors

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review the code comments
3. Check Next.js documentation: https://nextjs.org/docs

## 📄 License

Private - All rights reserved

## 🙏 Acknowledgments

Built with modern web technologies for optimal performance and user experience.

---

**Version:** 1.0.0  
**Built with:** Next.js 14 + TypeScript + Tailwind CSS  
**Company:** CyberShield Pro  
**Location:** Ahmedabad, Gujarat, India
