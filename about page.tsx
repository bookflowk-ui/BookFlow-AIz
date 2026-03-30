'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Target, Heart, Zap, Users, ArrowRight, Shield, Globe, Award } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure success by your success. Every feature we build is designed to help you convert more leads.',
    color: 'brand',
  },
  {
    icon: Heart,
    title: 'Customer-First',
    description: 'Your needs drive our roadmap. We listen, adapt, and deliver solutions that matter to your business.',
    color: 'pink',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We push the boundaries of AI technology to create tools that feel magical yet remain practical.',
    color: 'amber',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Your data is sacred. We employ enterprise-grade security to keep your information safe.',
    color: 'green',
  },
]

const stats = [
  { value: '500+', label: 'Businesses Served' },
  { value: '50K+', label: 'AI Calls Made' },
  { value: '12K+', label: 'Appointments Booked' },
  { value: '98%', label: 'Customer Satisfaction' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-dark-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              We're on a Mission to <span className="gradient-text">Revolutionize</span> Lead Conversion
            </h1>
            <p className="text-lg text-gray-400">
              BookFlow AI was born from a simple observation: businesses lose thousands of potential customers 
              because they can't respond to leads fast enough. We're here to change that.
            </p>
          </div>

          {/* Story Section */}
          <div className="glass rounded-3xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    In 2023, our founders experienced firsthand the frustration of losing leads. 
                    Running a service business, they watched potential customers slip away simply 
                    because they couldn't call back fast enough.
                  </p>
                  <p>
                    The solution seemed obvious: what if AI could make those calls instantly? 
                    What if every lead received a professional, personalized call within seconds 
                    of expressing interest?
                  </p>
                  <p>
                    That's when BookFlow AI was born. Today, we help hundreds of businesses 
                    convert leads they would have otherwise lost, booking thousands of appointments 
                    every month.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-2xl p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-gray-400">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
                  <div className={`w-12 h-12 rounded-xl bg-${value.color}-400/10 flex items-center justify-center mb-5`}>
                    <value.icon className={`w-6 h-6 text-${value.color}-400`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Section */}
          <div className="glass rounded-3xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-400/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-400 text-sm">SOC 2 compliant with end-to-end encryption for all data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-400/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Global Infrastructure</h3>
                <p className="text-gray-400 text-sm">99.9% uptime with servers across multiple regions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-400/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Award-Winning Support</h3>
                <p className="text-gray-400 text-sm">Dedicated team with average response time under 2 hours</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Lead Conversion?
            </h2>
            <p className="text-gray-400 mb-8">
              Join hundreds of businesses already using BookFlow AI
            </p>
            <Link 
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-400 to-blue-500 rounded-xl text-white font-semibold hover:from-brand-500 hover:to-blue-600 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
