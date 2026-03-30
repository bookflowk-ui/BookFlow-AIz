import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BookFlow AI - AI-Powered Appointment Booking',
  description: 'Let AI book appointments for your business 24/7. Convert more leads with intelligent phone calls that sound completely natural.',
  keywords: 'AI appointment booking, lead conversion, automated calls, sales automation',
  openGraph: {
    title: 'BookFlow AI - AI-Powered Appointment Booking',
    description: 'Let AI book appointments for your business 24/7',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
