"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  FileText,
  Calendar,
  Tag
} from 'lucide-react'
import Link from 'next/link'
interface BlogPost {
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
import BlogPostEditor from './BlogPostEditor'

export default function BlogPostManager() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [showEditor, setShowEditor] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const response = await fetch('/api/blog')
      if (response.ok) {
        const allPosts = await response.json()
        setPosts(allPosts)
      }
    } catch (error) {
      console.error('Error loading posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreatePost = () => {
    setEditingPost(null)
    setShowEditor(true)
  }

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post)
    setShowEditor(true)
  }

  const handleDeletePost = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const response = await fetch(`/api/admin/blog/${slug}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        await loadPosts()
        alert('Post deleted successfully')
      } else {
        throw new Error('Failed to delete post')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Failed to delete post')
    }
  }

  const handleEditorClose = () => {
    setShowEditor(false)
    setEditingPost(null)
    loadPosts()
  }

  if (showEditor) {
    return <BlogPostEditor post={editingPost} onClose={handleEditorClose} />
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Blog Posts</h2>
          <p className="text-sm text-gray-600 mt-1">Manage your blog content and articles</p>
        </div>
        <button
          onClick={handleCreatePost}
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </button>
      </div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
          <p className="text-gray-600 mb-6">Create your first blog post to get started.</p>
          <button
            onClick={handleCreatePost}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create First Post
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                    {post.featured && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.description}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>By {post.author}</span>
                    </div>
                    {post.tags.length > 0 && (
                      <div className="flex items-center space-x-1">
                        <Tag className="h-4 w-4" />
                        <span>{post.tags.length} tags</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="inline-flex items-center p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="View post"
                  >
                    <Eye className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => handleEditPost(post)}
                    className="inline-flex items-center p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Edit post"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.slug)}
                    className="inline-flex items-center p-2 text-red-400 hover:text-red-600 transition-colors"
                    title="Delete post"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{posts.length}</div>
          <div className="text-sm text-blue-800">Total Posts</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {posts.filter(p => p.featured).length}
          </div>
          <div className="text-sm text-green-800">Featured Posts</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">
            {new Set(posts.flatMap(p => p.tags)).size}
          </div>
          <div className="text-sm text-purple-800">Unique Tags</div>
        </div>
      </div>
    </motion.div>
  )
}
