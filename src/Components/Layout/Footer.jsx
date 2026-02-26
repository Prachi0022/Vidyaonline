import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Building2, CheckCircle, Shield, Handshake } from 'lucide-react'
import RevealAnimation from '../animation/RevealAnimation'

const officeLocations = [
  {
    country: 'Noida HQ',
    icon: 'building',
    address: 'B-25, Sector 56, Noida - 201301, Delhi-NCR, India',
  },
  {
    country: 'Pune Office',
    icon: 'building',
    address: 'Pune, Maharashtra, India',
  },
]

const footerLinks = {
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Clients', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  services: [
    { label: 'Software Development', href: '#' },
    { label: 'Mobile App Development', href: '#' },
    { label: 'Banking Solutions', href: '#' },
    { label: 'Web Development', href: '#' },
    { label: 'IT Consulting', href: '#' },
    { label: 'View More', href: '#' },
  ],
  solutions: [
    { label: 'Core Banking Systems', href: '#' },
    { label: 'Digital Banking', href: '#' },
    { label: 'Loan Management', href: '#' },
    { label: 'Payment Gateway', href: '#' },
  ],
  clients: [
    { label: 'Government', href: '#' },
    { label: 'Banking & Finance', href: '#' },
    { label: 'Enterprise', href: '#' },
    { label: 'Public Sector', href: '#' },
  ],
  certifications: [
    { label: 'ISO 9001:2015', href: '#' },
    { label: 'CMMI Level 3', href: '#' },
    { label: 'Our Empanelments', href: '#' },
  ],
  resources: [
    { label: 'Support', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
}

function Footer() {
  return (
    <footer className="bg-black overflow-hidden text-gray-100 relative">
      {/* Animated Gradient Background */}
      <div className="absolute bottom-0 w-full left-1/2 -translate-x-1/2 h-1/3 pointer-events-none">
        <div className="absolute inset-0 h-[17rem] bg-gradient-to-b from-blue-600/50 via-purple-600/50 to-transparent bottom-0 blur-3xl">
          <div className="absolute left-0 top-0 w-1/3 h-[30rem] bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-20 animate-[footerLeft_6s_ease-in-out_infinite_alternate]"></div>
          <div className="absolute right-0 top-0 w-1/2 h-[30rem] bg-gradient-to-l from-purple-300 to-blue-300 rounded-full blur-3xl opacity-20 animate-[footerRight_7s_ease-in-out_infinite_alternate]"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 pb-16 border-b border-gray-800">
          {/* Brand Section */}
          <RevealAnimation delay={0.1}>
            <div>
              <div className="flex  items-center gap-3 mb-6">
                <img src="../../../logo.jpeg" alt="Nexmove Solutions" className="h-10 rounded-full overflow-hidden w-auto" />
                <h3 className="text-lg font-bold text-white">Nexmove Solutions</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Premier IT solutions for banking, government, and enterprise organizations.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-gray-900 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 border border-gray-700 hover:border-blue-600">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-900 hover:bg-blue-400 flex items-center justify-center transition-colors duration-300 border border-gray-700 hover:border-blue-400">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-900 hover:bg-pink-600 flex items-center justify-center transition-colors duration-300 border border-gray-700 hover:border-pink-600">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </RevealAnimation>

          {/* Company */}
          <RevealAnimation delay={0.15}>
            <div>
              <h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h5>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Services */}
          <RevealAnimation delay={0.2}>
            <div>
              <h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h5>
              <ul className="space-y-3">
                {footerLinks.services.slice(0, 4).map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Resources */}
          <RevealAnimation delay={0.25}>
            <div>
              <h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h5>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Certifications
                  </a>
                </li>
              </ul>
            </div>
          </RevealAnimation>

          {/* Solutions */}
          <RevealAnimation delay={0.3}>
            <div>
              <h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Solutions</h5>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            Copyright © 2026 <span className="text-white font-semibold">Nexmoves</span> – digital excellence delivered
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer