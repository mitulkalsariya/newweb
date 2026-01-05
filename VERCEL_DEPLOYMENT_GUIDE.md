# Vercel Deployment Guide

## ✅ Yes, You Can Deploy to Vercel!

Your CyberShield Pro website is ready to deploy on Vercel. However, there's one important consideration regarding file storage.

## ⚠️ Important: File Storage Limitation

**The VAPT Report Upload feature has a limitation on Vercel:**

Vercel uses **ephemeral file storage**, which means:
- Files uploaded to `public/downloads/` will be **deleted on every deployment**
- The file system is **read-only in production**
- You cannot store user-uploaded files locally

### Options for VAPT Report Feature on Vercel:

#### **Option 1: Use Vercel Blob Storage (Recommended)**
- Vercel's built-in cloud storage
- Easy to integrate
- Automatic CDN distribution
- Pay-as-you-go pricing

#### **Option 2: Use AWS S3**
- Reliable and scalable
- More configuration needed
- Good for larger files

#### **Option 3: Use Cloudflare R2**
- S3-compatible
- No egress fees
- Good pricing

#### **Option 4: Manual Upload to Static Files**
- Upload PDF manually to `public/downloads/`
- Hardcode the filename in the component
- Re-deploy after each report update
- Simple but requires redeployment

## 🚀 Quick Deployment Steps

### Step 1: Prepare Your Code

1. **Commit all changes to Git:**
```bash
cd /Users/mitulkalsariya/Desktop/website
git add .
git commit -m "Ready for Vercel deployment"
```

2. **Push to GitHub:**
```bash
git push origin main
```
(or `git push origin master` depending on your branch name)

### Step 2: Deploy to Vercel

#### Method A: Using Vercel Dashboard (Easiest)

1. Go to https://vercel.com/dashboard
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Configure the project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)

6. **Add Environment Variables:**
   Click "Environment Variables" and add:
   ```
   ADMIN_USERNAME=your-admin-username
   ADMIN_PASSWORD=your-secure-password
   JWT_SECRET=your-jwt-secret-minimum-32-characters-long
   ```

7. Click **"Deploy"**
8. Wait 2-3 minutes for deployment to complete
9. Your site is live! 🎉

#### Method B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? cybershield-pro
# - In which directory? ./ (press Enter)
# - Want to override settings? No

# Add environment variables
vercel env add ADMIN_USERNAME
vercel env add ADMIN_PASSWORD
vercel env add JWT_SECRET

# Deploy to production
vercel --prod
```

## 🔧 Environment Variables Setup

After deployment, make sure to add these environment variables in Vercel:

1. Go to your project settings: `https://vercel.com/your-username/your-project/settings/environment-variables`

2. Add the following:

| Name | Value | Environment |
|------|-------|-------------|
| `ADMIN_USERNAME` | `admin` (or your choice) | Production, Preview, Development |
| `ADMIN_PASSWORD` | `your-secure-password` | Production, Preview, Development |
| `JWT_SECRET` | `min-32-chars-secret-key` | Production, Preview, Development |

## 📝 Fixing VAPT Report Feature for Vercel

### Quick Fix: Manual Static File Method

**If you want to deploy immediately with minimal changes:**

1. **Upload your PDF manually to `public/downloads/`:**
```bash
# Place your sample report in public/downloads/
cp /path/to/your/sample-report.pdf public/downloads/sample-vapt-report.pdf
```

2. **Modify the VAPTReportCTA component** to use a static file:

```typescript
// src/components/sections/VAPTReportCTA.tsx
// Replace the useEffect and fetch with:

const report = {
  filename: "Sample VAPT Report",
  path: "/downloads/sample-vapt-report.pdf",
  uploadedAt: new Date().toISOString()
}

// Remove the loading state and fetch logic
// The component will always show if the file exists
```

3. **Disable the admin upload feature:**
- Comment out or remove the VAPT Report Manager from admin
- The report will be static and updated only through code deployments

### Better Fix: Use Vercel Blob Storage

I can help you implement this after deployment if you want the full upload functionality to work on Vercel.

## 🌐 Custom Domain Setup

### Step 1: Add Domain in Vercel
1. Go to your project settings
2. Click "Domains"
3. Enter your domain (e.g., `cybershieldpro.com`)
4. Click "Add"

### Step 2: Update DNS Records
Add these records to your domain registrar:

**For Root Domain (cybershieldpro.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Vercel will automatically provision SSL certificates.

## 🔍 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Navigation works
- [ ] Forms are functional
- [ ] Admin login works (test at: `your-domain.com/ADMIN_DASHBOARD_EXAMPLE.html`)
- [ ] Environment variables are set
- [ ] SSL certificate is active
- [ ] Custom domain configured (if applicable)

## 🐛 Common Issues & Solutions

### Issue: "Build failed"
**Solution:** Check the build logs in Vercel dashboard. Common causes:
- TypeScript errors
- Missing dependencies
- Linter errors

Fix locally first:
```bash
npm run build
npm run lint
```

### Issue: "Environment variables not working"
**Solution:** 
- Make sure you added them in Vercel dashboard
- Redeploy after adding environment variables
- Check variable names match exactly

### Issue: "Admin login not working"
**Solution:**
- Verify `JWT_SECRET` is at least 32 characters
- Check `ADMIN_USERNAME` and `ADMIN_PASSWORD` are set
- Clear browser cache and try again

### Issue: "VAPT Report upload not working"
**Solution:**
- This is expected on Vercel (ephemeral storage)
- Use one of the solutions mentioned above
- Either use Vercel Blob or manual static files

### Issue: "404 on some pages"
**Solution:**
- Ensure all page files are committed to Git
- Check file names and folder structure
- Redeploy

## 📊 Monitoring & Analytics

### Enable Vercel Analytics
1. Go to your project in Vercel
2. Click "Analytics" tab
3. Enable Web Analytics (free tier available)
4. View visitor data, page views, and performance metrics

### Enable Speed Insights
```bash
npm install @vercel/speed-insights
```

Add to your root layout:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

## 🚀 Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch = automatic production deployment
- Every push to other branches = preview deployment
- Pull requests get their own preview URLs

## 💰 Vercel Pricing

**Free Tier (Hobby) Includes:**
- Unlimited personal projects
- 100 GB bandwidth/month
- Automatic SSL
- CDN included
- Serverless Functions
- Good for this project!

**Pro Tier ($20/month):**
- Unlimited projects
- 1TB bandwidth
- Advanced analytics
- Team collaboration
- Password protection

Your website will work perfectly on the **Free Tier**!

## 🔄 Redeployment

To redeploy after making changes:

```bash
# Make your changes
git add .
git commit -m "Update XYZ"
git push origin main

# Vercel automatically deploys! ✨
```

Or redeploy manually in Vercel dashboard:
1. Go to "Deployments" tab
2. Click "..." menu on latest deployment
3. Click "Redeploy"

## 📱 Preview Deployments

Every Git branch gets its own preview URL:
- Create a branch: `git checkout -b feature/new-page`
- Push: `git push origin feature/new-page`
- Vercel creates preview URL automatically
- Test before merging to main

## 🎯 Next Steps After Deployment

1. ✅ Test all functionality on live site
2. ✅ Set up custom domain (if you have one)
3. ✅ Enable Vercel Analytics
4. ✅ Share the URL with stakeholders
5. ✅ Set up automated backups for your content
6. ✅ Decide on VAPT report storage solution
7. ✅ Add Google Analytics (optional)
8. ✅ Test admin portal functionality

## 🆘 Need Help?

- **Vercel Documentation:** https://vercel.com/docs
- **Next.js on Vercel:** https://vercel.com/docs/frameworks/nextjs
- **Vercel Support:** Available in dashboard

## 📧 Important Security Notes

1. **Never commit `.env.local` to Git** (already in .gitignore)
2. **Use strong passwords** for admin credentials
3. **Use a long JWT_SECRET** (minimum 32 characters)
4. **Enable 2FA** on your Vercel account
5. **Review deployment logs** regularly

---

## Quick Commands Reference

```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm deployment-url
```

---

**Ready to deploy? Just follow the steps above!** 🚀

Your website will be live on Vercel in minutes. If you need help with Vercel Blob storage for the VAPT report feature, let me know after deployment!

