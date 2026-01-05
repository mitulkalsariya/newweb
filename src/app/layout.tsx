import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'CyberShield Pro - Advanced Cybersecurity & VAPT Services',
  description: 'Leading provider of Vulnerability Assessment and Penetration Testing (VAPT) services for Web, API, Infrastructure, Cloud, and Thick Client applications. AI-powered security testing platform.',
  keywords: 'cybersecurity, VAPT, penetration testing, vulnerability assessment, API security, web security, cloud security, AI security testing',
  authors: [{ name: 'CyberShield Pro' }],
  creator: 'CyberShield Pro',
  publisher: 'CyberShield Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cybershieldpro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CyberShield Pro - Advanced Cybersecurity & VAPT Services',
    description: 'Leading provider of Vulnerability Assessment and Penetration Testing (VAPT) services for Web, API, Infrastructure, Cloud, and Thick Client applications.',
    url: 'https://cybershieldpro.com',
    siteName: 'CyberShield Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CyberShield Pro - Cybersecurity Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberShield Pro - Advanced Cybersecurity & VAPT Services',
    description: 'Leading provider of Vulnerability Assessment and Penetration Testing (VAPT) services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}