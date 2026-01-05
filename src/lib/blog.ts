import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

// Check if we're on the server side
const isServer = typeof window === 'undefined'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  image: string
  readingTime: string
  featured: boolean
  content: string
  contentHtml: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!isServer) {
    return []
  }

  // Check if posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        // Convert markdown to HTML
        const processedContent = await remark()
          .use(html)
          .process(content)
        const contentHtml = processedContent.toString()

        return {
          slug,
          title: data.title || '',
          description: data.description || '',
          date: data.date || '',
          author: data.author || '',
          tags: data.tags || [],
          image: data.image || '',
          readingTime: data.readingTime || '',
          featured: data.featured || false,
          content,
          contentHtml,
        } as BlogPost
      })
  )

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isServer) {
    return null
  }

  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || '',
      tags: data.tags || [],
      image: data.image || '',
      readingTime: data.readingTime || '',
      featured: data.featured || false,
      content,
      contentHtml,
    } as BlogPost
  } catch (error) {
    return null
  }
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  if (!isServer) {
    return []
  }
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.featured)
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  if (!isServer) {
    return []
  }
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.tags.includes(tag))
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  // This would need to be implemented to scan all posts for tags
  // For now, returning some common tags
  return ['AI', 'API Security', 'VAPT', 'Penetration Testing', 'Cybersecurity', 'Vulnerability Assessment']
}
