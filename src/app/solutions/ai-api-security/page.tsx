import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Brain, Shield, Zap, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI-Powered API Security Testing - Intelligent Vulnerability Detection',
  description: 'Leverage artificial intelligence and machine learning for advanced API security testing. Automated vulnerability detection and intelligent threat analysis.',
  keywords: 'AI API security, machine learning security, automated testing, intelligent vulnerability detection',
}

export default function AIAPISecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Brain className="h-16 w-16 text-primary-600" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                AI-Powered API Security Testing
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                Harness the power of artificial intelligence for comprehensive API security testing. 
                Our AI-driven platform automatically discovers vulnerabilities and provides intelligent 
                remediation recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Intelligent Vulnerability Detection',
                  description: 'AI algorithms automatically identify security flaws, including zero-day vulnerabilities.',
                  icon: Brain
                },
                {
                  title: 'Automated Testing',
                  description: 'Continuous security testing with minimal human intervention and maximum coverage.',
                  icon: Zap
                },
                {
                  title: 'Smart Pattern Recognition',
                  description: 'Machine learning models identify attack patterns and emerging threats.',
                  icon: Shield
                },
                {
                  title: 'Adaptive Learning',
                  description: 'System learns from each test to improve future vulnerability detection.',
                  icon: Brain
                },
                {
                  title: 'False Positive Reduction',
                  description: 'AI-powered analysis reduces false positives by up to 90%.',
                  icon: CheckCircle
                },
                {
                  title: 'Intelligent Prioritization',
                  description: 'Risk-based prioritization helps focus on critical vulnerabilities first.',
                  icon: Zap
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <feature.icon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose AI-Powered Testing?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                '75% faster vulnerability detection compared to traditional methods',
                '90% reduction in false positives',
                '24/7 continuous security monitoring',
                'Scalable testing for thousands of API endpoints',
                'Predictive threat intelligence',
                'Automated compliance reporting'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-primary-600">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your API Security?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get started with AI-powered security testing today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/demo" className="btn-secondary">
                Request Demo
              </a>
              <a href="/contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

