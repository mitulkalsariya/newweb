"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  Plus,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  Users,
  TrendingUp,
  Briefcase
} from 'lucide-react'
import Link from 'next/link'
import BlogPostManager from './BlogPostManager'
import CareerManager from './CareerManager'
import StatsOverview from './StatsOverview'

type TabType = 'overview' | 'blog' | 'careers' | 'analytics'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('overview')

const tabs = [
  {
    id: 'overview' as TabType,
    name: 'Overview',
    icon: BarChart3,
  },
  {
    id: 'blog' as TabType,
    name: 'Blog Management',
    icon: FileText,
  },
  {
    id: 'careers' as TabType,
    name: 'Careers Management',
    icon: Briefcase,
  },
  {
    id: 'analytics' as TabType,
    name: 'Analytics',
    icon: TrendingUp,
  },
]

  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1">Manage your website content and monitor performance</p>
      </div>

      {/* Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="mr-2 h-4 w-4" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'overview' && <StatsOverview />}
        {activeTab === 'blog' && <BlogPostManager />}
        {activeTab === 'careers' && <CareerManager />}
        {activeTab === 'analytics' && <AnalyticsPanel />}
      </div>
    </div>
  )
}

function AnalyticsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center py-12">
        <BarChart3 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Coming Soon</h3>
        <p className="text-gray-600">
          Advanced analytics and reporting features will be available in the next update.
        </p>
      </div>
    </motion.div>
  )
}
