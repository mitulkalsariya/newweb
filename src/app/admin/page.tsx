import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AdminDashboard from '@/components/admin/AdminDashboard'

export const metadata: Metadata = {
  title: 'Admin Dashboard - CyberShield Pro',
  description: 'Admin dashboard for managing blog posts and website content.',
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AdminDashboard />
        </div>
      </main>

      <Footer />
    </div>
  )
}
