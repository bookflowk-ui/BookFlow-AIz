'use client'

import Link from 'next/link'
import { Play, Sparkles, ArrowRight, CheckCircle, Phone, Calendar, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 animated-gradient opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjJEMzYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0tOCA4aC0ydi00aDJ2NHptMC04aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-400/10 border border-brand-400/20 mb-8 fade-in">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-brand-400 font-medium">AI-Powered Appointment Booking</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 fade-in-delay-1">
            <span className="text-white">Let AI Book</span>
            <br />
            <span className="gradient-text">Appointments for You</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-delay-2">
            Stop losing leads. Our AI calls your prospects instantly, handles objections naturally, 
            and books meetings directly into your calendar — 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in-delay-3">
            <Link 
              href="/register"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-400 to-blue-500 rounded-xl text-white font-semibold text-lg hover:from-brand-500 hover:to-blue-600 transition-all duration-300 glow-button flex items-center justify-center gap-3 pulse-glow"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              className="group w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-gray-500 text-sm fade-in-delay-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-brand-400/10 flex items-center justify-center">
              <Phone className="w-7 h-7 text-brand-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">50,000+</div>
            <div className="text-gray-400 text-sm">AI Calls Made</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Calendar className="w-7 h-7 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">12,000+</div>
            <div className="text-gray-400 text-sm">Appointments Booked</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">35%</div>
            <div className="text-gray-400 text-sm">Avg. Conversion Rate</div>
          </div>
        </div>

        {/* Floating Phone Mockup - Visual Element */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent z-10" />
          <div className="relative mx-auto max-w-5xl">
            <div className="glass rounded-3xl p-4 md:p-8 float">
              <div className="bg-dark-900 rounded-2xl overflow-hidden border border-white/10">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-dark-800 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-full max-w-sm mx-auto h-6 bg-dark-700 rounded-md flex items-center justify-center text-xs text-gray-500">
                      app.bookflow.ai
                    </div>
                  </div>
                </div>
                {/* Dashboard Preview */}
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-4 w-32 bg-white/10 rounded mb-2" />
                      <div className="h-3 w-24 bg-white/5 rounded" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-20 bg-brand-400/20 rounded-lg" />
                      <div className="h-8 w-20 bg-white/5 rounded-lg" />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="h-3 w-16 bg-white/10 rounded mb-3" />
                      <div className="h-6 w-12 bg-brand-400/30 rounded" />
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="h-3 w-16 bg-white/10 rounded mb-3" />
                      <div className="h-6 w-10 bg-green-500/30 rounded" />
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="h-3 w-16 bg-white/10 rounded mb-3" />
                      <div className="h-6 w-14 bg-purple-500/30 rounded" />
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="h-3 w-16 bg-white/10 rounded mb-3" />
                      <div className="h-6 w-8 bg-yellow-500/30 rounded" />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-3 w-20 bg-white/10 rounded" />
                      <div className="h-3 w-16 bg-white/5 rounded" />
                      <div className="h-3 w-16 bg-white/5 rounded" />
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                          <div className="w-8 h-8 bg-brand-400/20 rounded-full" />
                          <div className="flex-1">
                            <div className="h-3 w-24 bg-white/10 rounded mb-1" />
                            <div className="h-2 w-16 bg-white/5 rounded" />
                          </div>
                          <div className="h-6 w-16 bg-green-500/20 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
