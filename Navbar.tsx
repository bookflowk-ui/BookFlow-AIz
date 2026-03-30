'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-800/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-brand-400 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 pulse-glow">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold">
                <span className="gradient-text">BookFlow</span>
                <span className="text-white"> AI</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              How it Works
            </Link>
            <Link href="/#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium px-4 py-2"
            >
              Log in
            </Link>
            <Link 
              href="/register" 
              className="relative group px-5 py-2.5 bg-gradient-to-r from-brand-400 to-blue-500 rounded-lg text-white text-sm font-semibold hover:from-brand-500 hover:to-blue-600 transition-all duration-300 glow-button overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial
                <Sparkles className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/#how-it-works" 
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </Link>
            <Link 
              href="/#features" 
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link 
                href="/login" 
                className="block text-center text-gray-300 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="/register" 
                className="block text-center px-5 py-3 bg-gradient-to-r from-brand-400 to-blue-500 rounded-lg text-white font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
