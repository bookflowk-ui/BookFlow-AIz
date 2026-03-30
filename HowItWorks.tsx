'use client'

import { Upload, PhoneCall, CalendarCheck, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Connect Your Leads',
    description: 'Import leads from Facebook Ads, Google, your CRM, or any source. Just connect once and leads flow in automatically.',
    color: 'brand',
    gradient: 'from-brand-400 to-cyan-500',
  },
  {
    icon: PhoneCall,
    title: 'AI Makes the Call',
    description: 'Our AI instantly calls each lead with a natural, human-like conversation. It handles objections and answers questions.',
    color: 'blue',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    icon: CalendarCheck,
    title: 'Meetings Get Booked',
    description: 'When the lead is ready, the AI books the appointment directly into your calendar and sends confirmations.',
    color: 'green',
    gradient: 'from-green-400 to-emerald-500',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-sm font-medium mb-6">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How BookFlow AI Works
          </h2>
          <p className="text-lg text-gray-400">
            Three simple steps to automate your appointment booking and convert more leads into customers.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-400/50 via-blue-400/50 to-green-400/50 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-2xl bg-dark-800 flex items-center justify-center">
                      <step.icon className={`w-8 h-8 text-${step.color}-400`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  
                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Ready to see it in action?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white font-medium transition-all duration-300">
            Watch a Live Demo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
