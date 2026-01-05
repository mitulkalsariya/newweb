# Admin API Documentation

## Overview
This API provides endpoints for managing the CyberShield Pro website's content through a separate admin interface. All admin endpoints require JWT authentication.

## Base URL
- **Development:** `http://localhost:3000/api/admin`
- **Production:** `https://your-domain.com/api/admin`

## Authentication

### Login
**POST** `/api/admin/auth/login`

Request:
```json
{
  "username": "admin",
  "password": "your-password"
}
```

Response:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "username": "admin",
    "role": "admin"
  }
}
```

### Verify Token
**GET** `/api/admin/auth/verify`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "user": {
    "username": "admin",
    "role": "admin"
  }
}
```

### Logout
**POST** `/api/admin/auth/logout`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

## Blog Management

### Get All Posts
**GET** `/api/admin/blog`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "posts": [
    {
      "slug": "post-slug",
      "title": "Post Title",
      "description": "Post description",
      "date": "2026-01-06",
      "author": "Author Name",
      "tags": ["tag1", "tag2"],
      "image": "/blog/image.jpg",
      "readingTime": "5 min read",
      "featured": false,
      "content": "Markdown content...",
      "contentHtml": "<p>HTML content...</p>"
    }
  ]
}
```

### Create Post
**POST** `/api/admin/blog`

Headers:
```
Authorization: Bearer <token>
Content-Type: application/json
```

Request:
```json
{
  "slug": "new-post",
  "title": "New Post Title",
  "description": "Post description",
  "date": "2026-01-06",
  "author": "Author Name",
  "tags": ["tag1", "tag2"],
  "image": "/blog/image.jpg",
  "readingTime": "5 min read",
  "featured": false,
  "content": "# Markdown Content\n\nYour post content here..."
}
```

Response:
```json
{
  "success": true,
  "message": "Blog post created successfully",
  "slug": "new-post"
}
```

### Update Post
**PUT** `/api/admin/blog`

Headers:
```
Authorization: Bearer <token>
Content-Type: application/json
```

Request:
```json
{
  "slug": "existing-post",
  "title": "Updated Title",
  "description": "Updated description",
  "content": "Updated content..."
}
```

Response:
```json
{
  "success": true,
  "message": "Blog post updated successfully"
}
```

### Delete Post
**DELETE** `/api/admin/blog?slug=post-slug`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "message": "Blog post deleted successfully"
}
```

## Career Management

### Get All Jobs
**GET** `/api/admin/careers`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "jobs": [
    {
      "id": "1234567890",
      "title": "Senior Penetration Tester",
      "department": "Security",
      "location": "Mumbai, India",
      "type": "Full-time",
      "experience": "3-5 years",
      "postedDate": "2026-01-06",
      "description": "Job description...",
      "responsibilities": ["responsibility1", "responsibility2"],
      "requirements": ["requirement1", "requirement2"],
      "benefits": ["benefit1", "benefit2"]
    }
  ]
}
```

### Create Job
**POST** `/api/admin/careers`

Headers:
```
Authorization: Bearer <token>
Content-Type: application/json
```

Request:
```json
{
  "title": "Security Analyst",
  "department": "Security",
  "location": "Mumbai, India",
  "type": "Full-time",
  "experience": "2-4 years",
  "description": "Job description...",
  "responsibilities": ["responsibility1", "responsibility2"],
  "requirements": ["requirement1", "requirement2"],
  "benefits": ["benefit1", "benefit2"]
}
```

Response:
```json
{
  "success": true,
  "message": "Job posting created successfully",
  "job": { /* job object */ }
}
```

### Update Job
**PUT** `/api/admin/careers`

Headers:
```
Authorization: Bearer <token>
Content-Type: application/json
```

Request:
```json
{
  "id": "1234567890",
  "title": "Updated Job Title",
  "description": "Updated description..."
}
```

Response:
```json
{
  "success": true,
  "message": "Job posting updated successfully",
  "job": { /* updated job object */ }
}
```

### Delete Job
**DELETE** `/api/admin/careers?id=1234567890`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "message": "Job posting deleted successfully"
}
```

## Error Responses

### 401 Unauthorized
```json
{
  "success": false,
  "message": "No token provided" | "Invalid or expired token"
}
```

### 400 Bad Request
```json
{
  "success": false,
  "message": "Missing required fields"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal server error"
}
```

## VAPT Report Management

### Get Current VAPT Report
**GET** `/api/admin/vapt-report`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{
  "report": {
    "filename": "Sample_VAPT_Report.pdf",
    "path": "/downloads/sample-vapt-report-1234567890.pdf",
    "uploadedAt": "2026-01-06T10:30:00.000Z",
    "uploadedBy": "admin",
    "size": 2048576
  }
}
```

### Upload VAPT Report
**POST** `/api/admin/vapt-report`

Headers:
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

Body:
```
file: [PDF File]
```

Response:
```json
{
  "message": "VAPT report uploaded successfully",
  "report": {
    "filename": "Sample_VAPT_Report.pdf",
    "path": "/downloads/sample-vapt-report-1234567890.pdf",
    "uploadedAt": "2026-01-06T10:30:00.000Z",
    "uploadedBy": "admin",
    "size": 2048576
  }
}
```

**Notes:**
- Only PDF files are allowed
- Uploading a new report will replace the existing one
- The old file is automatically deleted when a new one is uploaded
- File size limit is controlled by Next.js (default 4MB, configurable)

### Delete VAPT Report
**DELETE** `/api/admin/vapt-report`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{
  "message": "VAPT report deleted successfully"
}
```

### Public VAPT Report Endpoint
**GET** `/api/vapt-report`

No authentication required. Returns report information for public download.

Response:
```json
{
  "report": {
    "filename": "Sample_VAPT_Report.pdf",
    "path": "/downloads/sample-vapt-report-1234567890.pdf",
    "uploadedAt": "2026-01-06T10:30:00.000Z"
  }
}
```

## Setup Instructions

### Environment Variables
Create a `.env.local` file:
```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password
JWT_SECRET=your-jwt-secret-key-min-32-characters
```

### Security Best Practices
1. **Change default credentials** immediately
2. **Use strong JWT secret** (minimum 32 characters)
3. **Enable HTTPS** in production
4. **Set CORS** properly for your frontend domain
5. **Rate limit** authentication endpoints
6. **Log** all admin actions for audit trail
7. **Use environment variables** for sensitive data

### Deployment Options

#### Option 1: Same Server (Current Setup)
- Backend and frontend in same Next.js app
- APIs at `/api/admin/*`
- Easy to deploy

#### Option 2: Separate Backend
1. Extract API routes to standalone Express/Fastify server
2. Deploy backend separately (e.g., Railway, Render, DigitalOcean)
3. Update `NEXT_PUBLIC_ADMIN_API_URL` to point to backend
4. Configure CORS to allow your admin frontend

#### Option 3: Microservices
1. Separate authentication service
2. Separate content management service
3. API Gateway (e.g., Kong, Tyk)
4. Better scalability

## Example: Separate Admin Frontend

### React/Next.js Admin App
```typescript
// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL

export async function login(username: string, password: string) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  return response.json()
}

export async function getBlogPosts(token: string) {
  const response = await fetch(`${API_URL}/blog`, {
    headers: { 
      'Authorization': `Bearer ${token}`
    }
  })
  return response.json()
}

export async function createBlogPost(token: string, post: any) {
  const response = await fetch(`${API_URL}/blog`, {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  return response.json()
}
```

## Testing with Postman/curl

### Login
```bash
curl -X POST http://localhost:3000/api/admin/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

### Get Posts
```bash
curl -X GET http://localhost:3000/api/admin/blog \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Create Post
```bash
curl -X POST http://localhost:3000/api/admin/blog \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "test-post",
    "title": "Test Post",
    "content": "# Test\n\nThis is a test post"
  }'
```

## Need Help?
For questions or issues, please refer to the main documentation or contact the development team.

