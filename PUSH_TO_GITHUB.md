# Push to GitHub - Command Guide

## Quick Commands

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details:

```bash
# Navigate to project directory
cd /Users/mitulkalsariya/Desktop/website

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Example

If your GitHub username is `mitulkalsariya` and repo name is `cybershield-pro`:

```bash
cd /Users/mitulkalsariya/Desktop/website
git remote add origin https://github.com/mitulkalsariya/cybershield-pro.git
git push -u origin main
```

## If You Get Authentication Error

GitHub requires a Personal Access Token (PAT) instead of password:

### Generate Token:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "Vercel Deployment"
4. Select scopes: `repo` (check the box)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)

### When Pushing:
- Username: `your-github-username`
- Password: `paste-your-token-here`

## After Successful Push

You'll see output like:
```
Enumerating objects: 150, done.
Counting objects: 100% (150/150), done.
...
To https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
 * [new branch]      main -> main
```

✅ Your code is now on GitHub!

## Next: Deploy to Vercel

1. Go to: https://vercel.com/new
2. Import your GitHub repository
3. Add environment variables
4. Deploy!

---

**Need help?** Just tell me your GitHub username and repo name, and I'll give you exact commands!

