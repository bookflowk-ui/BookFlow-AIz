'use client'

import Link from 'next/link'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started',
    price: '$49',
    period: 'per month',
    perBooking: '$15',
    features: [
      'Up to 100 AI calls/month',
      'Basic integrations',
      'Email notifications',
      'Call recordings',
      '7-day call history',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing businesses that need more power',
    price: '$149',
    period: 'per month',
    perBooking: '$10',
    features: [
      'Up to 500 AI calls/month',
      'All integrations',
      'Email + SMS notifications',
      'Call recordings + transcripts',
      '30-day call history',
      'Priority support',
      'Custom AI script',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large teams with custom needs',
    price: 'Custom',
    period: 'contact us',
    perBooking: 'Volume pricing',
    features: [
      'Unlimited AI calls',
      'Custom integrations',
      'All notification channels',
      'Unlimited history',
      'Dedicated account manager',
      'Custom AI training',
      'SLA guarantee',
      'API access',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function PricingPreview() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-400/10 border border-pink-400/20 text-pink-400 text-sm font-medium mb-6">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pay Only for <span className="gradient-text">Results</span>
          </h2>
          <p className="text-lg text-gray-400">
            Transparent pricing with no hidden fees. Choose the plan that fits your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative glass rounded-2xl p-6 md:p-8 ${
                plan.popular 
                  ? 'border-2 border-brand-400 bg-brand-400/5' 
                  : 'hover:bg-white/5'
              } transition-all duration-500`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-brand-400 to-blue-500 rounded-full text-white text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-brand-400 text-sm mt-2">
                  + {plan.perBooking} per booked appointment
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link 
                href={plan.name === 'Enterprise' ? '/contact' : '/register'}
                className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-brand-400 to-blue-500 text-white hover:from-brand-500 hover:to-blue-600'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <Link 
            href="/pricing" 
            className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors font-medium"
          >
            View full pricing details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
