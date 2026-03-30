'use client'

import { 
  Mic, 
  Brain, 
  Calendar, 
  Bell, 
  Headphones, 
  BarChart3, 
  Plug, 
  CreditCard,
  Shield,
  Clock,
  Globe,
  Zap
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Human-Like Voice',
    description: 'Natural AI voice that sounds like a real person, not a robot. Your leads won\'t know the difference.',
    color: 'brand',
  },
  {
    icon: Brain,
    title: 'Smart Objection Handling',
    description: 'AI trained to handle common objections and questions, keeping the conversation flowing naturally.',
    color: 'purple',
  },
  {
    icon: Calendar,
    title: 'Direct Calendar Booking',
    description: 'Integrates with Google Calendar, Calendly, and more. Appointments are booked automatically.',
    color: 'blue',
  },
  {
    icon: Bell,
    title: 'Instant Notifications',
    description: 'Get notified the moment a meeting is booked via email, SMS, or in-app notifications.',
    color: 'green',
  },
  {
    icon: Headphones,
    title: 'Call Recordings',
    description: 'Every call is recorded with full transcripts. Review conversations anytime.',
    color: 'pink',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track conversion rates, call outcomes, and performance metrics in real-time.',
    color: 'amber',
  },
  {
    icon: Plug,
    title: 'Easy Integrations',
    description: 'Connect with Facebook Ads, Google Ads, GoHighLevel, HubSpot, and 50+ more platforms.',
    color: 'indigo',
  },
  {
    icon: CreditCard,
    title: 'Pay Per Booking',
    description: 'Only pay for successful appointments. No monthly fees, no wasted spend.',
    color: 'emerald',
  },
]

const colorClasses: { [key: string]: string } = {
  brand: 'bg-brand-400/10 text-brand-400',
  purple: 'bg-purple-400/10 text-purple-400',
  blue: 'bg-blue-400/10 text-blue-400',
  green: 'bg-green-400/10 text-green-400',
  pink: 'bg-pink-400/10 text-pink-400',
  amber: 'bg-amber-400/10 text-amber-400',
  indigo: 'bg-indigo-400/10 text-indigo-400',
  emerald: 'bg-emerald-400/10 text-emerald-400',
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-400 text-sm font-medium mb-6">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to <span className="gradient-text">Convert More Leads</span>
          </h2>
          <p className="text-lg text-gray-400">
            BookFlow AI comes packed with features designed to maximize your conversion rate and save you time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${colorClasses[feature.color]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 glass rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-2xl md:text-3xl font-bold text-white">99.9%</span>
              </div>
              <span className="text-gray-400 text-sm">Uptime SLA</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-brand-400" />
                <span className="text-2xl md:text-3xl font-bold text-white">&lt;30s</span>
              </div>
              <span className="text-gray-400 text-sm">Response Time</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-2xl md:text-3xl font-bold text-white">50+</span>
              </div>
              <span className="text-gray-400 text-sm">Integrations</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-2xl md:text-3xl font-bold text-white">24/7</span>
              </div>
              <span className="text-gray-400 text-sm">Always Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
