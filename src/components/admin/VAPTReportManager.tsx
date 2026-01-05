"use client"

import { useState, useEffect } from 'react'
import { Upload, Download, Trash2, FileText, AlertCircle } from 'lucide-react'

interface VAPTReport {
  filename: string
  path: string
  uploadedAt: string
  uploadedBy: string
  size: number
}

export default function VAPTReportManager() {
  const [report, setReport] = useState<VAPTReport | null>(null)
  const [uploading, setUploading] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    fetchReport()
  }, [])

  const fetchReport = async () => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch('/api/admin/vapt-report', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      if (response.ok) {
        setReport(data.report)
      }
    } catch (error) {
      console.error('Error fetching report:', error)
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.name.endsWith('.pdf')) {
      setError('Only PDF files are allowed')
      return
    }

    setUploading(true)
    setError('')
    setSuccess('')

    try {
      const formData = new FormData()
      formData.append('file', file)

      const token = localStorage.getItem('admin_token')
      const response = await fetch('/api/admin/vapt-report', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      })

      const data = await response.json()

      if (response.ok) {
        setReport(data.report)
        setSuccess('VAPT report uploaded successfully')
        setTimeout(() => setSuccess(''), 3000)
      } else {
        setError(data.error || 'Failed to upload report')
      }
    } catch (error) {
      setError('Failed to upload report')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete the current VAPT report?')) {
      return
    }

    setDeleting(true)
    setError('')
    setSuccess('')

    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch('/api/admin/vapt-report', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        setReport(null)
        setSuccess('VAPT report deleted successfully')
        setTimeout(() => setSuccess(''), 3000)
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to delete report')
      }
    } catch (error) {
      setError('Failed to delete report')
    } finally {
      setDeleting(false)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">VAPT Report Manager</h2>
      </div>

      {/* Success Message */}
      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
          <p className="text-sm text-green-800">{success}</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Current Report */}
      {report ? (
        <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <FileText className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{report.filename}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Size: {formatFileSize(report.size)}</p>
                  <p>Uploaded: {new Date(report.uploadedAt).toLocaleString()}</p>
                  <p>Uploaded by: {report.uploadedBy}</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <a
                href={report.path}
                download
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </a>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="inline-flex items-center px-3 py-2 border border-red-300 rounded-lg text-sm font-medium text-red-700 bg-white hover:bg-red-50 disabled:opacity-50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-6 p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 text-center">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600">No VAPT report uploaded yet</p>
        </div>
      )}

      {/* Upload Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {report ? 'Replace VAPT Report' : 'Upload VAPT Report'}
        </label>
        <div className="flex items-center space-x-4">
          <label className="flex-1 cursor-pointer">
            <div className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 transition-colors">
              <Upload className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">
                {uploading ? 'Uploading...' : 'Choose PDF file'}
              </span>
            </div>
            <input
              type="file"
              accept=".pdf"
              onChange={handleUpload}
              disabled={uploading}
              className="hidden"
            />
          </label>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Only PDF files are allowed. This report will be available for download on the website.
        </p>
      </div>
    </div>
  )
}

