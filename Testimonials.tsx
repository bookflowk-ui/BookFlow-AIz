'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'RealtyPro Solutions',
    image: '/testimonials/michael.jpg',
    content: 'BookFlow AI transformed our lead conversion. We went from 15% to 42% booking rate in just one month. The AI sounds so natural that clients often think they\'re talking to a real person.',
    rating: 5,
    metric: '180% increase in bookings',
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'FitLife Gyms',
    image: '/testimonials/sarah.jpg',
    content: 'We were skeptical at first, but the results speak for themselves. Our team now focuses on actual consultations instead of cold calling. Game changer!',
    rating: 5,
    metric: '35 hours saved per week',
  },
  {
    name: 'David Martinez',
    role: 'Founder',
    company: 'LegalEase Consulting',
    image: '/testimonials/david.jpg',
    content: 'The integration was seamless. Within 24 hours, we had AI calling our leads from Facebook Ads. The ROI has been incredible - we\'re booking 3x more consultations.',
    rating: 5,
    metric: '3x more consultations',
  },
  {
    name: 'Emily Thompson',
    role: 'Operations Manager',
    company: 'HomeStyle Renovations',
    image: '/testimonials/emily.jpg',
    content: 'Best investment we\'ve made this year. The AI handles objections better than most of our sales reps. Our calendar is now fully booked weeks in advance.',
    rating: 5,
    metric: 'Fully booked calendar',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-400/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium mb-6">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by <span className="gradient-text">500+ Businesses</span>
          </h2>
          <p className="text-lg text-gray-400">
            See how businesses like yours are using BookFlow AI to convert more leads and save time.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-brand-400/30 mb-4" />
              
              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Metric Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-green-400 text-sm font-medium">{testimonial.metric}</span>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-2">
            Join 500+ businesses already using BookFlow AI
          </p>
          <div className="flex items-center justify-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
            <span className="ml-2 text-white font-medium">4.9/5</span>
            <span className="text-gray-500 ml-1">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
