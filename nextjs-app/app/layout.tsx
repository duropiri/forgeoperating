import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ForgeOS | AI Marketing System for Local Businesses',
  description: 'Turn your local business into a customer-generating machine. AI-powered websites, chatbots, review automation, and more. Get more 5-star reviews and never miss a lead.',
  keywords: ['AI marketing', 'local business', 'review automation', 'chatbot', 'lead generation', 'GoHighLevel'],
  authors: [{ name: 'ForgeOS' }],
  openGraph: {
    title: 'ForgeOS | AI Marketing System for Local Businesses',
    description: 'Turn your local business into a customer-generating machine.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForgeOS | AI Marketing System for Local Businesses',
    description: 'Turn your local business into a customer-generating machine.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
