# Admin Portal API Setup Guide

## 🎉 What's Been Created

A complete **API-based admin portal** with JWT authentication that can be deployed separately from your frontend!

### ✅ Features Implemented:
1. **JWT Authentication** - Secure token-based auth
2. **Blog Management API** - Create, Read, Update, Delete blog posts
3. **Career Management API** - Manage job postings
4. **Protected Routes** - All admin APIs require authentication
5. **Separate Deployment Ready** - Backend can run independently

---

## 📁 Files Created

### Authentication APIs
- `/src/app/api/admin/auth/login/route.ts` - Login endpoint
- `/src/app/api/admin/auth/verify/route.ts` - Token verification
- `/src/app/api/admin/auth/logout/route.ts` - Logout endpoint

### Admin APIs
- `/src/app/api/admin/blog/route.ts` - Blog CRUD operations
- `/src/app/api/admin/careers/route.ts` - Career CRUD operations

### Middleware
- `/src/middleware/auth.ts` - JWT verification middleware

### Documentation
- `/ADMIN_API_DOCUMENTATION.md` - Complete API reference

---

## 🚀 Quick Start

### 1. Create Environment File

Create `.env.local` in project root:

```env
# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=ChangeMeToSecurePassword123!

# JWT Secret (use a strong random string, minimum 32 characters)
JWT_SECRET=your-super-secret-jwt-key-min-32-chars-change-this-now

# API URLs
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_ADMIN_API_URL=http://localhost:3000/api/admin
```

**⚠️ IMPORTANT:** Change the default password and JWT secret immediately!

### 2. Test the API

#### Login
```bash
curl -X POST http://localhost:3000/api/admin/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "ChangeMeToSecurePassword123!"
  }'
```

Save the returned `token` for subsequent requests.

#### Get Blog Posts
```bash
curl -X GET http://localhost:3000/api/admin/blog \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

#### Create Blog Post
```bash
curl -X POST http://localhost:3000/api/admin/blog \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "test-post",
    "title": "Test Post",
    "description": "This is a test post",
    "content": "# Test Post\n\nThis is the content of my test post."
  }'
```

---

## 🔧 Deployment Options

### Option 1: All-in-One (Current Setup)
**Best for:** Small to medium sites, simple deployment

- Frontend and backend in same Next.js app
- Deploy to Vercel, Netlify, or any Node.js host
- APIs at `/api/admin/*`

**Pros:**
- Easy to deploy
- Single codebase
- No CORS issues

**Cons:**
- Coupled architecture
- Can't scale independently

---

### Option 2: Separate Backend Server
**Best for:** Larger applications, multiple frontends

#### Step 1: Extract Backend
Create a new Express.js project:

```bash
mkdir admin-backend
cd admin-backend
npm init -y
npm install express cors dotenv jose
```

#### Step 2: Create Server
```javascript
// server.js
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}))
app.use(express.json())

// Copy your API routes here
app.post('/auth/login', /* ... */)
app.get('/auth/verify', /* ... */)
app.get('/blog', /* ... */)
// etc...

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Admin API running on port ${PORT}`)
})
```

#### Step 3: Deploy Backend
Deploy to:
- **Railway** (easiest)
- **Render**
- **DigitalOcean App Platform**
- **AWS ECS/Lambda**
- **Google Cloud Run**

#### Step 4: Update Frontend
Update `.env.local`:
```env
NEXT_PUBLIC_ADMIN_API_URL=https://your-backend-api.com
```

---

### Option 3: Microservices Architecture
**Best for:** Enterprise applications, high scalability needs

```
┌─────────────────┐
│  Admin Frontend │ (React/Next.js)
│   (Port 3000)   │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   API Gateway   │ (Kong/Tyk)
│   (Port 8000)   │
└────────┬────────┘
         │
    ┌────┴────┐
    ↓         ↓
┌────────┐ ┌────────┐
│  Auth  │ │Content │
│Service │ │Service │
│(4001)  │ │(4002)  │
└────────┘ └────────┘
```

---

## 🔒 Security Best Practices

### 1. Environment Variables
```env
# ✅ Good
JWT_SECRET=8kF9mP2nR5wX3tY7jL4hQ6vB1cN0zS9aD8fG7kJ3mP5nR2wX4tY6

# ❌ Bad
JWT_SECRET=secret
```

### 2. Password Requirements
- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- Use a password manager

### 3. HTTPS Only in Production
```javascript
// In production
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (!req.secure) {
      return res.redirect('https://' + req.headers.host + req.url)
    }
    next()
  })
}
```

### 4. Rate Limiting
```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit')

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: 'Too many login attempts'
})

app.post('/auth/login', loginLimiter, /* handler */)
```

### 5. Token Expiration
Tokens expire after 24 hours by default. Implement refresh tokens for longer sessions.

### 6. Audit Logging
Log all admin actions:
```javascript
function logAdminAction(user, action, details) {
  console.log({
    timestamp: new Date().toISOString(),
    user: user.username,
    action,
    details,
    ip: req.ip
  })
}
```

---

## 📱 Building a Separate Admin Frontend

### React Admin App Structure
```
admin-frontend/
├── src/
│   ├── api/
│   │   ├── auth.ts       # Login, logout, verify
│   │   ├── blog.ts       # Blog CRUD
│   │   └── careers.ts    # Career CRUD
│   ├── components/
│   │   ├── LoginForm.tsx
│   │   ├── BlogEditor.tsx
│   │   └── JobEditor.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Blog.tsx
│   │   └── Careers.tsx
│   └── App.tsx
└── package.json
```

### Example API Client
```typescript
// src/api/client.ts
const API_URL = process.env.REACT_APP_ADMIN_API_URL

export class AdminAPI {
  private token: string | null = null

  setToken(token: string) {
    this.token = token
    localStorage.setItem('admin_token', token)
  }

  async request(endpoint: string, options: RequestInit = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...(this.token && { 'Authorization': `Bearer ${this.token}` }),
      ...options.headers
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
  }

  // Auth
  async login(username: string, password: string) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    })
    if (data.token) {
      this.setToken(data.token)
    }
    return data
  }

  // Blog
  async getBlogPosts() {
    return this.request('/blog')
  }

  async createBlogPost(post: any) {
    return this.request('/blog', {
      method: 'POST',
      body: JSON.stringify(post)
    })
  }

  // Careers
  async getJobs() {
    return this.request('/careers')
  }

  async createJob(job: any) {
    return this.request('/careers', {
      method: 'POST',
      body: JSON.stringify(job)
    })
  }
}

export const api = new AdminAPI()
```

---

## 🧪 Testing

### Using Postman
1. Import the API collection (see documentation)
2. Create environment with variables:
   - `base_url`: `http://localhost:3000/api/admin`
   - `token`: (set after login)

### Using Thunder Client (VS Code)
1. Install Thunder Client extension
2. Create new request
3. Set headers and body as per documentation

---

## 📊 Monitoring & Logging

### Add Logging Service
```bash
npm install winston
```

```javascript
const winston = require('winston')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'admin-error.log', level: 'error' }),
    new winston.transports.File({ filename: 'admin-combined.log' })
  ]
})

// Log admin actions
logger.info('Admin action', {
  user: req.user.username,
  action: 'CREATE_POST',
  timestamp: new Date().toISOString()
})
```

---

## 🆘 Troubleshooting

### Token Expired
- Tokens expire after 24 hours
- User needs to login again
- Implement refresh tokens for better UX

### CORS Errors
If frontend is on different domain:
```javascript
app.use(cors({
  origin: ['https://admin.yourdomain.com', 'http://localhost:3000'],
  credentials: true
}))
```

### Permission Denied
- Check file permissions in `content/` directory
- Ensure backend can read/write files

---

## 📈 Next Steps

1. **✅ Set up environment variables**
2. **✅ Test all endpoints with curl/Postman**
3. **🔲 Build admin frontend** (React/Next.js)
4. **🔲 Add refresh tokens** for better UX
5. **🔲 Implement role-based access** (admin, editor, viewer)
6. **🔲 Add audit logging** for compliance
7. **🔲 Set up monitoring** (Sentry, LogRocket)
8. **🔲 Configure CI/CD** pipeline
9. **🔲 Add automated tests**
10. **🔲 Deploy to production**

---

## 📚 Additional Resources

- [JWT Best Practices](https://jwt.io/introduction)
- [Express.js Security](https://expressjs.com/en/advanced/best-practice-security.html)
- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

---

## 💡 Need Help?

For detailed API documentation, see `ADMIN_API_DOCUMENTATION.md`

Happy coding! 🚀

