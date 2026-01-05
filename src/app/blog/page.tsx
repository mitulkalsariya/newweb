import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BlogList from '@/components/blog/BlogList'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Cybersecurity Blog - CyberShield Pro',
  description: 'Stay updated with the latest cybersecurity trends, threats, best practices, and insights from our expert team at CyberShield Pro.',
  keywords: 'cybersecurity blog, security news, VAPT insights, API security, penetration testing, vulnerability assessment',
}

export default async function BlogPage() {
  let posts = []

  try {
    posts = await getAllPosts()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Cybersecurity Insights & Updates
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay informed with the latest cybersecurity trends, threat intelligence,
              best practices, and expert insights from our security professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <BlogList posts={posts} />

      <Footer />
    </div>
  )
}
