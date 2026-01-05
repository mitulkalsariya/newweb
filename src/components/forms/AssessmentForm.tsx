"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import toast from 'react-hot-toast'
import { Shield, Globe, Server, Cloud, Monitor, Database } from 'lucide-react'

const assessmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  companySize: z.string().min(1, 'Please select company size'),
  industry: z.string().min(1, 'Please select your industry'),
  assessmentType: z.array(z.string()).min(1, 'Please select at least one assessment type'),
  targetSystems: z.string().min(10, 'Please describe your target systems'),
  currentSecurity: z.string().optional(),
  compliance: z.array(z.string()).optional(),
  urgency: z.string().min(1, 'Please select urgency level'),
})

type AssessmentFormData = z.infer<typeof assessmentSchema>

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-1000 employees',
  '1000+ employees'
]

const industries = [
  'Technology/SaaS',
  'Banking/Financial Services',
  'Stock Market/Brokerage',
  'Healthcare',
  'Retail/E-commerce',
  'Manufacturing',
  'Government',
  'Other'
]

const assessmentTypes = [
  { id: 'web', name: 'Web Application Security', icon: Globe },
  { id: 'api', name: 'API Security Testing', icon: Server },
  { id: 'cloud', name: 'Cloud Security Assessment', icon: Cloud },
  { id: 'infrastructure', name: 'Infrastructure Security', icon: Monitor },
  { id: 'database', name: 'Database Security', icon: Database },
  { id: 'network', name: 'Network Security', icon: Shield },
]

const complianceOptions = [
  'GDPR',
  'HIPAA',
  'PCI DSS',
  'ISO 27001',
  'SOC 2',
  'RBI Guidelines',
  'SEBI Compliance',
  'Other'
]

const urgencyLevels = [
  'Low - General assessment needed',
  'Medium - Planning security improvements',
  'High - Recent security incident',
  'Critical - Immediate security concerns'
]

export default function AssessmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
      assessmentType: [],
      compliance: [],
    },
  })

  const toggleAssessmentType = (typeId: string) => {
    const newSelected = selectedTypes.includes(typeId)
      ? selectedTypes.filter(id => id !== typeId)
      : [...selectedTypes, typeId]

    setSelectedTypes(newSelected)
    setValue('assessmentType', newSelected)
  }

  const onSubmit = async (data: AssessmentFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success('Assessment request submitted! Our team will contact you within 24 hours.')
        reset()
        setSelectedTypes([])
      } else {
        throw new Error('Failed to submit assessment request')
      }
    } catch (error) {
      console.error('Error submitting assessment request:', error)
      toast.error('Failed to submit assessment request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="assessment-form" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Request Your Free Assessment
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tell us about your systems and security needs, and we'll provide a comprehensive assessment plan.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 lg:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    {...register('jobTitle')}
                    type="text"
                    id="jobTitle"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="CTO, Security Officer, etc."
                  />
                  {errors.jobTitle && (
                    <p className="mt-1 text-sm text-red-600">{errors.jobTitle.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Company Ltd."
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size *
                  </label>
                  <select
                    {...register('companySize')}
                    id="companySize"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select company size</option>
                    {companySizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  {errors.companySize && (
                    <p className="mt-1 text-sm text-red-600">{errors.companySize.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  {...register('industry')}
                  id="industry"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
                )}
              </div>

              {/* Assessment Types */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Assessment Types Needed *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {assessmentTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => toggleAssessmentType(type.id)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedTypes.includes(type.id)
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <type.icon className={`h-5 w-5 ${
                          selectedTypes.includes(type.id) ? 'text-primary-600' : 'text-gray-400'
                        }`} />
                        <span className={`text-sm font-medium ${
                          selectedTypes.includes(type.id) ? 'text-primary-900' : 'text-gray-700'
                        }`}>
                          {type.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.assessmentType && (
                  <p className="mt-2 text-sm text-red-600">{errors.assessmentType.message}</p>
                )}
              </div>

              {/* Target Systems */}
              <div>
                <label htmlFor="targetSystems" className="block text-sm font-medium text-gray-700 mb-2">
                  Target Systems & Applications *
                </label>
                <textarea
                  {...register('targetSystems')}
                  id="targetSystems"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Please describe the systems, applications, or infrastructure you want assessed (e.g., web applications, APIs, cloud infrastructure, databases, etc.)"
                />
                {errors.targetSystems && (
                  <p className="mt-1 text-sm text-red-600">{errors.targetSystems.message}</p>
                )}
              </div>

              {/* Current Security */}
              <div>
                <label htmlFor="currentSecurity" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Security Measures (Optional)
                </label>
                <textarea
                  {...register('currentSecurity')}
                  id="currentSecurity"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Describe any existing security tools, processes, or measures you currently have in place..."
                />
              </div>

              {/* Compliance Requirements */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Compliance Requirements (Optional)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {complianceOptions.map((compliance) => (
                    <label key={compliance} className="flex items-center">
                      <input
                        {...register('compliance')}
                        type="checkbox"
                        value={compliance}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{compliance}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Urgency Level */}
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  Assessment Urgency *
                </label>
                <select
                  {...register('urgency')}
                  id="urgency"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select urgency level</option>
                  {urgencyLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
                {errors.urgency && (
                  <p className="mt-1 text-sm text-red-600">{errors.urgency.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Shield className="h-4 w-4" />
                    <span>Request Free Assessment</span>
                  </>
                )}
              </button>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>What happens next?</strong> Our security experts will review your request within 24 hours
                  and contact you to schedule your free assessment. The assessment typically takes 5-7 business days
                  and includes a comprehensive report with actionable recommendations.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
