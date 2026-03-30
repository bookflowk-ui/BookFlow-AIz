# BookFlow AI 🚀

AI-Powered Appointment Booking Platform

## Overview

BookFlow AI is a modern SaaS platform that uses AI to automatically call leads and book appointments. Built with Next.js 14, Tailwind CSS, and designed for seamless deployment on Vercel.

## Features

- 🎯 **AI Voice Calls** - Natural-sounding AI calls your leads
- 📅 **Calendar Integration** - Direct booking to Google Calendar, Calendly, etc.
- 📊 **Analytics Dashboard** - Track conversions and performance
- 💳 **Stripe Billing** - Automated monthly billing
- 🔗 **50+ Integrations** - Facebook Ads, Google Ads, CRMs, and more

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel (Recommended)

### Option A: Deploy via GitHub (Easiest)

1. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Create a new repository (e.g., "bookflow-ai")
   - Keep it public or private

2. **Upload Files to GitHub**
   - Download this project as a ZIP
   - Extract and open the folder
   - Drag all files into your GitHub repository

3. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live at `your-project.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts
```

## Project Structure

```
bookflow-ai/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── pricing/          # Pricing page
│   ├── contact/          # Contact page
│   ├── about/            # About page
│   ├── login/            # Login page
│   └── register/         # Register page
├── components/
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Hero section
│   ├── HowItWorks.tsx    # How it works section
│   ├── Features.tsx      # Features grid
│   ├── Demo.tsx          # Demo/audio player
│   ├── Testimonials.tsx  # Testimonials
│   ├── PricingPreview.tsx # Pricing preview
│   ├── FAQ.tsx           # FAQ section
│   └── FinalCTA.tsx      # Final call-to-action
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies
```

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  brand: {
    400: '#22d3ee', // Main brand color
    500: '#06b6d4',
    // ... more shades
  }
}
```

### Content
- Edit component files in `/components` to change text
- Update metadata in `/app/layout.tsx` for SEO

### Adding New Pages
Create a new folder in `/app` with a `page.tsx` file:

```
app/
└── new-page/
    └── page.tsx
```

## Next Steps (Phase 2+)

To add full functionality, you'll need to integrate:

1. **Authentication** - Supabase Auth or NextAuth.js
2. **Database** - Supabase or PlanetScale
3. **Payments** - Stripe
4. **AI Calls** - VAPI integration
5. **Webhooks** - For lead sources

## Environment Variables (for Phase 2)

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
STRIPE_SECRET_KEY=your_stripe_key
VAPI_API_KEY=your_vapi_key
```

## Support

For questions or issues:
- Email: hello@bookflow.ai
- Website: [bookflow.ai](https://bookflow.ai)

## License

MIT License - Feel free to use this for your own projects.

---

Built with ❤️ by the BookFlow AI Team
