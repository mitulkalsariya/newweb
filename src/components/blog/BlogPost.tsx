"use client"

import { motion } from 'framer-motion'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'
import { BlogPost as BlogPostType } from '@/lib/blog'

interface BlogPostProps {
  post: BlogPostType
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {post.featured && (
            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-800 mb-6">
              Featured Article
            </span>
          )}

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {post.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.header>

        {/* Featured Image */}
        {post.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Tag className="h-8 w-8" />
                  </div>
                  <p>Blog Image</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Article Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg"
        >
          <div className="flex items-center space-x-4">
            <button className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors">
              <Bookmark className="mr-2 h-4 w-4" />
              Save Article
            </button>
            <button className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </button>
          </div>
          <div className="text-sm text-gray-500">
            {post.readingTime} read
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Article Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 hover:bg-primary-200 transition-colors"
                  >
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share Article */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <User className="h-6 w-6 text-primary-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900">{post.author}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Cybersecurity expert and consultant at CyberShield Pro with extensive experience
                  in vulnerability assessment and penetration testing.
                </p>
              </div>
            </div>
          </div>
        </motion.footer>

        {/* Related Articles CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-primary-600 px-6 py-12 shadow-xl sm:px-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Cybersecurity Solutions?
            </h3>
            <p className="text-lg text-primary-100 mb-8">
              Learn more about our comprehensive VAPT services and AI-powered security solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-call"
                className="btn-primary flex items-center space-x-2"
              >
                <span>Book a Consultation</span>
              </Link>
              <Link
                href="/solutions"
                className="text-sm font-semibold text-primary-100 hover:text-white transition-colors"
              >
                View All Solutions →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
