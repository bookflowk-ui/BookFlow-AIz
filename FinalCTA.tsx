'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Calendar, Zap, Shield } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjJEM0YiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0tOCA4aC0ydi00aDJ2NHptMC04aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-400/10 border border-brand-400/20 mb-8">
            <Zap className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-brand-400 font-medium">Start Converting More Leads Today</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Automate Your
            <br />
            <span className="gradient-text">Appointment Booking?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Join 500+ businesses using BookFlow AI to convert leads into meetings. 
            Set up in minutes, see results immediately.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link 
              href="/register"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-400 to-blue-500 rounded-xl text-white font-semibold text-lg hover:from-brand-500 hover:to-blue-600 transition-all duration-300 glow-button flex items-center justify-center gap-3 pulse-glow"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Book a Demo
            </Link>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
