import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BookCallForm from '@/components/forms/BookCallForm'

export const metadata: Metadata = {
  title: 'Book a Call - CyberShield Pro',
  description: 'Schedule a consultation with our cybersecurity experts. Get personalized security assessment and recommendations for your business.',
  keywords: 'book call, cybersecurity consultation, security assessment, VAPT consultation',
}

export default function BookCallPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Book a Free Consultation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Schedule a call with our cybersecurity experts to discuss your security needs
              and get personalized recommendations for protecting your business.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Tell us about your needs
                </h2>
                <BookCallForm />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  What to expect from the call?
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100">
                      <span className="text-sm font-semibold text-primary-600">1</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Initial Assessment</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        We'll discuss your current security posture and identify key areas of concern.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100">
                      <span className="text-sm font-semibold text-primary-600">2</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Customized Solutions</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Get recommendations tailored to your industry and specific security requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100">
                      <span className="text-sm font-semibold text-primary-600">3</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Action Plan</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Receive a clear roadmap for implementing robust cybersecurity measures.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    📞 Call Duration: 30-45 minutes
                  </h4>
                  <p className="text-sm text-gray-600">
                    Our experts will provide valuable insights and answer all your security questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
