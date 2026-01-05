import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import JobDetail from '@/components/careers/JobDetail'
import { getJobById } from '@/lib/careers'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const job = await getJobById(params.id)

    if (!job) {
      return {
        title: 'Job Not Found | CyberShield Pro Careers',
      }
    }

    return {
      title: `${job.title} | CyberShield Pro Careers`,
      description: job.description,
      keywords: [job.title, job.department, 'cybersecurity jobs', 'security careers', job.location],
    }
  } catch (error) {
    return {
      title: 'Job Posting | CyberShield Pro Careers',
    }
  }
}

export default async function JobDetailPage({ params }: PageProps) {
  try {
    const job = await getJobById(params.id)

    if (!job) {
      notFound()
    }

    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <JobDetail job={job} />
        </main>
        <Footer />
      </div>
    )
  } catch (error) {
    console.error('Error loading job:', error)
    notFound()
  }
}
