import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BlogPost from '@/components/blog/BlogPost'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  let post = null

  try {
    const { slug } = await params
    post = await getPostBySlug(slug)
  } catch (error) {
    console.error('Error fetching post for metadata:', error)
  }

  if (!post) {
    return {
      title: 'Post Not Found - CyberShield Pro Blog',
    }
  }

  return {
    title: `${post.title} - CyberShield Pro Blog`,
    description: post.description,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export async function generateStaticParams() {
  let posts: any[] = []

  try {
    posts = await getAllPosts()
  } catch (error) {
    console.error('Error fetching posts for static params:', error)
  }

  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post = null

  try {
    const { slug } = await params
    post = await getPostBySlug(slug)
  } catch (error) {
    console.error('Error fetching post:', error)
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <BlogPost post={post} />

      <Footer />
    </div>
  )
}
