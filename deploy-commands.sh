#!/bin/bash

# Deployment Commands for CyberShield Pro
# Replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME with your actual values

echo "🚀 Deploying CyberShield Pro to Vercel"
echo ""
echo "Step 1: Push to GitHub"
echo "Replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME below:"
echo ""
echo "git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git"
echo "git push -u origin main"
echo ""
echo "After pushing to GitHub:"
echo "1. Go to https://vercel.com/new"
echo "2. Click 'Import Git Repository'"
echo "3. Select your repository"
echo "4. Add environment variables:"
echo "   - ADMIN_USERNAME = admin"
echo "   - ADMIN_PASSWORD = YourSecurePassword"
echo "   - JWT_SECRET = min-32-chars-secret-key"
echo "5. Click 'Deploy'"
echo ""
echo "Done! Your site will be live in 2-3 minutes! 🎉"

