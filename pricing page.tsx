'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Check, X, Sparkles, HelpCircle } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started',
    price: '$49',
    period: '/month',
    perBooking: '$15 per booking',
    features: {
      'AI calls per month': '100',
      'Lead sources': '2',
      'Call recordings': true,
      'Email notifications': true,
      'SMS notifications': false,
      'Call transcripts': false,
      'Call history': '7 days',
      'Custom AI script': false,
      'Priority support': false,
      'Calendar integrations': '1',
      'API access': false,
      'White-label': false,
    },
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing businesses that need more power',
    price: '$149',
    period: '/month',
    perBooking: '$10 per booking',
    features: {
      'AI calls per month': '500',
      'Lead sources': 'Unlimited',
      'Call recordings': true,
      'Email notifications': true,
      'SMS notifications': true,
      'Call transcripts': true,
      'Call history': '30 days',
      'Custom AI script': true,
      'Priority support': true,
      'Calendar integrations': 'Unlimited',
      'API access': false,
      'White-label': false,
    },
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large teams with custom needs',
    price: 'Custom',
    period: '',
    perBooking: 'Volume pricing',
    features: {
      'AI calls per month': 'Unlimited',
      'Lead sources': 'Unlimited',
      'Call recordings': true,
      'Email notifications': true,
      'SMS notifications': true,
      'Call transcripts': true,
      'Call history': 'Unlimited',
      'Custom AI script': true,
      'Priority support': true,
      'Calendar integrations': 'Unlimited',
      'API access': true,
      'White-label': true,
    },
    cta: 'Contact Sales',
    popular: false,
  },
]

const featureList = [
  'AI calls per month',
  'Lead sources',
  'Call recordings',
  'Email notifications',
  'SMS notifications',
  'Call transcripts',
  'Call history',
  'Custom AI script',
  'Priority support',
  'Calendar integrations',
  'API access',
  'White-label',
]

const faqs = [
  {
    question: 'What counts as a "booking"?',
    answer: 'A booking is counted when a lead confirms an appointment time with the AI. If the same lead reschedules, it\'s not counted as a new booking.',
  },
  {
    question: 'What happens if I exceed my call limit?',
    answer: 'You can purchase additional calls at the same per-call rate, or upgrade to a higher plan. We\'ll notify you when you\'re approaching your limit.',
  },
  {
    question: 'Can I change plans at any time?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees. You only pay the monthly subscription plus per-booking fees.',
  },
]

export default function PricingPage() {
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-sm font-medium mb-6">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-gray-400">
              Choose the plan that fits your business. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative glass rounded-2xl p-6 md:p-8 ${
                  plan.popular 
                    ? 'border-2 border-brand-400 bg-brand-400/5' 
                    : 'hover:bg-white/5'
                } transition-all duration-500`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-brand-400 to-blue-500 rounded-full text-white text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-brand-400 text-sm mt-2">+ {plan.perBooking}</p>
                </div>

                <Link 
                  href={plan.name === 'Enterprise' ? '/contact' : '/register'}
                  className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-400 to-blue-500 text-white hover:from-brand-500 hover:to-blue-600'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-3">
                  {featureList.map((feature, fIndex) => {
                    const value = plan.features[feature as keyof typeof plan.features]
                    const isIncluded = value === true || (typeof value === 'string' && value !== 'false')
                    
                    return (
                      <li key={fIndex} className="flex items-center gap-3">
                        {isIncluded ? (
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${isIncluded ? 'text-gray-300' : 'text-gray-500'}`}>
                          {feature}: {typeof value === 'boolean' ? '' : value}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pricing FAQ
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass rounded-xl p-6">
                  <h3 className="text-white font-medium mb-2 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm ml-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
