'use client'

import { useState } from 'react'
import { Play, Pause, Volume2, MessageSquare } from 'lucide-react'

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // In real implementation, this would control an audio element
  }

  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-sm font-medium mb-6">
            Live Demo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Hear How Natural It Sounds
          </h2>
          <p className="text-lg text-gray-400">
            Listen to a real conversation between our AI and a lead. 
            Notice how natural and human-like the interaction feels.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-6 md:p-10">
            {/* Audio Player */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
              {/* Play Button */}
              <button 
                onClick={togglePlay}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-400 to-blue-500 flex items-center justify-center hover:scale-105 transition-transform duration-300 pulse-glow"
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-white" />
                ) : (
                  <Play className="w-10 h-10 text-white ml-1" />
                )}
              </button>

              {/* Progress Bar */}
              <div className="flex-1 w-full">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Sample AI Call</span>
                  <span>1:24</span>
                </div>
                <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-400 to-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span>0:00</span>
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4" />
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transcript Preview */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">Conversation Transcript</span>
              </div>

              <div className="space-y-4 max-h-64 overflow-y-auto">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-400 text-xs font-bold">AI</span>
                  </div>
                  <div>
                    <p className="text-white text-sm leading-relaxed">
                      "Hi Sarah, this is Alex from HomeStyle Renovations. I noticed you recently requested information about kitchen remodeling. Do you have a moment to chat?"
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-xs font-bold">S</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      "Oh yes, hi! I was looking at some options online. I'm interested but I'm not sure about pricing..."
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-400 text-xs font-bold">AI</span>
                  </div>
                  <div>
                    <p className="text-white text-sm leading-relaxed">
                      "Absolutely understand, Sarah. Our pricing varies based on the scope of work. What I can do is schedule a free consultation where our expert can visit your home, understand your vision, and provide a detailed quote. Would that work for you?"
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-xs font-bold">S</span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      "That sounds great! What times do you have available?"
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-400 text-xs font-bold">AI</span>
                  </div>
                  <div>
                    <p className="text-white text-sm leading-relaxed">
                      "We have openings this Thursday at 2 PM or Friday at 10 AM. Which works better for your schedule?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call Outcome Badge */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 font-medium">Meeting Booked: Thursday at 2 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
