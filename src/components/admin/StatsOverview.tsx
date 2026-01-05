"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  FileText,
  Users,
  Eye,
  TrendingUp,
  Calendar,
  BarChart3
} from 'lucide-react'
// Removed import - will use API route instead

interface Stats {
  totalPosts: number
  featuredPosts: number
  totalTags: number
  recentActivity: number
}

export default function StatsOverview() {
  const [stats, setStats] = useState<Stats>({
    totalPosts: 0,
    featuredPosts: 0,
    totalTags: 0,
    recentActivity: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    try {
      const response = await fetch('/api/blog')
      if (response.ok) {
        const posts = await response.json()
        const tags = new Set(posts.flatMap((post: any) => post.tags))
        const recentPosts = posts.filter((post: any) => {
          const postDate = new Date(post.date)
          const weekAgo = new Date()
          weekAgo.setDate(weekAgo.getDate() - 7)
          return postDate >= weekAgo
        })

        setStats({
          totalPosts: posts.length,
          featuredPosts: posts.filter((p: any) => p.featured).length,
          totalTags: tags.size,
          recentActivity: recentPosts.length
        })
      }
    } catch (error) {
      console.error('Error loading stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      icon: FileText,
      color: 'bg-blue-500',
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      title: 'Featured Posts',
      value: stats.featuredPosts,
      icon: BarChart3,
      color: 'bg-green-500',
      change: '+8%',
      changeType: 'positive' as const
    },
    {
      title: 'Unique Tags',
      value: stats.totalTags,
      icon: Users,
      color: 'bg-purple-500',
      change: '+15%',
      changeType: 'positive' as const
    },
    {
      title: 'Recent Activity',
      value: stats.recentActivity,
      icon: Calendar,
      color: 'bg-orange-500',
      change: 'This week',
      changeType: 'neutral' as const
    }
  ]

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
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900">Dashboard Overview</h2>
        <p className="text-sm text-gray-600 mt-1">Monitor your website performance and content metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' :
                stat.changeType === 'neutral' ? 'text-gray-600' :
                'text-gray-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-600 ml-1">vs last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <FileText className="h-5 w-5 text-primary-600 mr-3" />
            <span className="text-sm font-medium">New Blog Post</span>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Eye className="h-5 w-5 text-blue-600 mr-3" />
            <span className="text-sm font-medium">View Analytics</span>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Users className="h-5 w-5 text-green-600 mr-3" />
            <span className="text-sm font-medium">Manage Users</span>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <TrendingUp className="h-5 w-5 text-purple-600 mr-3" />
            <span className="text-sm font-medium">SEO Settings</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">New blog post published: "AI API Security Testing"</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Consultation request received from TechCorp</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">SEO optimization completed for solutions page</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
