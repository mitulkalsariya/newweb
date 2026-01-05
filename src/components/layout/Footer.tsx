import Link from 'next/link'
import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react'

const footerNavigation = {
  solutions: [
    { name: 'AI API Security Testing', href: '/solutions/ai-api-security' },
    { name: 'Web Application Security', href: '/solutions/web-security' },
    { name: 'Infrastructure Security', href: '/solutions/infrastructure-security' },
    { name: 'Cloud Security', href: '/solutions/cloud-security' },
  ],
  services: [
    { name: 'VAPT Services', href: '/services/vapt' },
    { name: 'Penetration Testing', href: '/services/penetration-testing' },
    { name: 'Vulnerability Assessment', href: '/services/vulnerability-assessment' },
    { name: 'Security Consulting', href: '/services/consulting' },
  ],
  sectors: [
    { name: 'SaaS Companies', href: '/sectors/saas' },
    { name: 'BFSI Sector', href: '/sectors/bfsi' },
    { name: 'SEBI Compliance', href: '/sectors/sebi' },
    { name: 'Stock Brokers', href: '/sectors/stock-brokers' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Compliance', href: '/compliance' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">CyberShield Pro</span>
            </div>
            <p className="text-gray-300 text-sm leading-6 max-w-sm">
              Leading provider of advanced cybersecurity solutions and VAPT services.
              Protecting your digital assets with AI-powered security testing and expert
              penetration testing services.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Sectors</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.sectors.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary-400" />
              <span className="text-sm text-gray-300">contact@cybershieldpro.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary-400" />
              <span className="text-sm text-gray-300">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary-400" />
              <span className="text-sm text-gray-300">Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs leading-5 text-gray-400 hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2026 CyberShield Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
