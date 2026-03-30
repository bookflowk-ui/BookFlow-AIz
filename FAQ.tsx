'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How natural does the AI voice sound?',
    answer: 'Our AI uses advanced voice synthesis technology that sounds remarkably human. Most leads don\'t realize they\'re talking to an AI. We offer sample calls so you can hear for yourself before signing up.',
  },
  {
    question: 'What happens if the lead asks a question the AI can\'t answer?',
    answer: 'The AI is trained on your business information and common objections. For questions outside its knowledge, it gracefully handles the situation by offering to have a human team member follow up, or by redirecting to the main goal: booking an appointment.',
  },
  {
    question: 'How quickly will the AI call my new leads?',
    answer: 'The AI can call leads within seconds of them entering your system. You can also set specific calling hours and time delays based on your preferences. Speed-to-lead is crucial, and our AI helps you respond faster than competitors.',
  },
  {
    question: 'Can I customize what the AI says?',
    answer: 'Absolutely! During onboarding, you\'ll provide your business information, common objections, and key talking points. We use this to create a custom script that matches your brand voice and sales approach.',
  },
  {
    question: 'Which integrations do you support?',
    answer: 'We integrate with 50+ platforms including Facebook Lead Ads, Google Ads, GoHighLevel, HubSpot, Salesforce, Calendly, Google Calendar, Zapier, and many more. If you don\'t see your platform, we offer a universal webhook that works with almost anything.',
  },
  {
    question: 'What if a lead doesn\'t answer?',
    answer: 'The AI will automatically retry calls based on your settings. You can configure the number of attempts, timing between calls, and even leave voicemails. The system tracks all attempts so no lead falls through the cracks.',
  },
  {
    question: 'Is there a contract or long-term commitment?',
    answer: 'No long-term contracts required. All plans are month-to-month and you can cancel anytime. We\'re confident you\'ll love the results, but we don\'t want to lock you in.',
  },
  {
    question: 'How does billing work?',
    answer: 'You\'ll pay a base monthly fee plus a per-booking fee for each successful appointment. This means you\'re mostly paying for results, not just calls. We provide detailed invoices showing exactly what you\'re paying for.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-400/10 border border-indigo-400/20 text-indigo-400 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about BookFlow AI
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center glass rounded-2xl p-8">
          <p className="text-white font-medium mb-2">Still have questions?</p>
          <p className="text-gray-400 mb-6">We're here to help. Reach out to our team anytime.</p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white font-medium transition-all duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
