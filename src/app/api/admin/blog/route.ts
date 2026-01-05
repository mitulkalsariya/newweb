import { NextRequest, NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/blog'
import { verifyAuth, unauthorizedResponse } from '@/middleware/auth'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

// GET - List all blog posts (requires auth)
export async function GET(request: NextRequest) {
  const auth = await verifyAuth(request)
  
  if (!auth.authenticated) {
    return unauthorizedResponse(auth.error)
  }

  try {
    const posts = await getAllPosts()
    return NextResponse.json({
      success: true,
      posts
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

// POST - Create new blog post (requires auth)
export async function POST(request: NextRequest) {
  const auth = await verifyAuth(request)
  
  if (!auth.authenticated) {
    return unauthorizedResponse(auth.error)
  }

  try {
    const body = await request.json()
    const { slug, title, description, date, author, tags, image, readingTime, featured, content } = body

    // Validate required fields
    if (!slug || !title || !content) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields: slug, title, content' },
        { status: 400 }
      )
    }

    // Create frontmatter
    const frontmatter = {
      title,
      description: description || '',
      date: date || new Date().toISOString().split('T')[0],
      author: author || 'CyberShield Pro',
      tags: tags || [],
      image: image || '/blog/default.jpg',
      readingTime: readingTime || '5 min read',
      featured: featured || false
    }

    // Create markdown file content
    const fileContent = matter.stringify(content, frontmatter)

    // Ensure directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
    }

    // Write file
    const filePath = path.join(postsDirectory, `${slug}.md`)
    
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { success: false, message: 'Blog post with this slug already exists' },
        { status: 409 }
      )
    }

    fs.writeFileSync(filePath, fileContent)

    return NextResponse.json({
      success: true,
      message: 'Blog post created successfully',
      slug
    })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to create post' },
      { status: 500 }
    )
  }
}

// PUT - Update blog post (requires auth)
export async function PUT(request: NextRequest) {
  const auth = await verifyAuth(request)
  
  if (!auth.authenticated) {
    return unauthorizedResponse(auth.error)
  }

  try {
    const body = await request.json()
    const { slug, title, description, date, author, tags, image, readingTime, featured, content } = body

    if (!slug) {
      return NextResponse.json(
        { success: false, message: 'Slug is required' },
        { status: 400 }
      )
    }

    const filePath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { success: false, message: 'Blog post not found' },
        { status: 404 }
      )
    }

    // Create frontmatter
    const frontmatter = {
      title,
      description,
      date,
      author,
      tags,
      image,
      readingTime,
      featured
    }

    // Create markdown file content
    const fileContent = matter.stringify(content, frontmatter)

    // Update file
    fs.writeFileSync(filePath, fileContent)

    return NextResponse.json({
      success: true,
      message: 'Blog post updated successfully'
    })
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update post' },
      { status: 500 }
    )
  }
}

// DELETE - Delete blog post (requires auth)
export async function DELETE(request: NextRequest) {
  const auth = await verifyAuth(request)
  
  if (!auth.authenticated) {
    return unauthorizedResponse(auth.error)
  }

  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (!slug) {
      return NextResponse.json(
        { success: false, message: 'Slug is required' },
        { status: 400 }
      )
    }

    const filePath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { success: false, message: 'Blog post not found' },
        { status: 404 }
      )
    }

    fs.unlinkSync(filePath)

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to delete post' },
      { status: 500 }
    )
  }
}

