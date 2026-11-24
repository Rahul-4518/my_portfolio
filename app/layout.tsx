import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: {
    default: 'Rahul S — Full-Stack, Python & AI/ML Developer',
    template: '%s · Rahul S',
  },
  description:
    'Portfolio of Rahul S, an MCA student and aspiring Full-Stack Developer, Python Developer, and AI & Machine Learning enthusiast building intelligent, real-world applications.',
  keywords: [
    'Rahul S',
    'Full-Stack Developer',
    'Python Developer',
    'Machine Learning',
    'AI',
    'OpenCV',
    'Portfolio',
    'Bengaluru',
  ],
  authors: [{ name: 'Rahul S', url: 'https://github.com/Rahul-4518' }],
  openGraph: {
    title: 'Rahul S — Full-Stack, Python & AI/ML Developer',
    description:
      'I build intelligent applications and modern software solutions by combining programming, AI, machine learning, and full-stack development.',
    type: 'website',
    images: ['/projects/omr.png'],
  },
  twitter: { card: 'summary_large_image', title: 'Rahul S — Developer Portfolio' },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f9fc' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0e1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
