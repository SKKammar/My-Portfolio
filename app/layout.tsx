import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { BackToTop } from '@/components/ui/BackToTop';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Santosh K Kammar',
    template: '%s | Santosh K Kammar',
  },

  description:
      'Computer Science student building production-grade backend systems, full-stack web applications, AI-powered solutions, and scalable software.',

  keywords: [
    'Santosh K Kammar',
    'Software Engineer',
    'Java',
    'Spring Boot',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Backend Developer',
    'Full Stack Developer',
  ],

  authors: [
    {
      name: 'Santosh K Kammar',
    },
  ],

  creator: 'Santosh K Kammar',

  openGraph: {
    title: 'Santosh K Kammar | Full-Stack Developer',
    description:
        'Software Engineer • Backend Developer • Full Stack Developer • Next.js & Spring Boot',
    url: 'https://my-portfolio-sanka.vercel.app/',
    siteName: 'Santosh K Kammar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Santosh K Kammar - Full-Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Santosh K Kammar | Full-Stack Developer',
    description:
        'Software Engineer • Backend Developer • Full Stack Developer • Next.js & Spring Boot',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090B',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="en"
          suppressHydrationWarning
          className={`${geistSans.variable} ${geistMono.variable}`}
      >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <MotionConfig reducedMotion="user">
          <CustomCursor />
          {children}
          <BackToTop />
        </MotionConfig>

      {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      </html>
  );
}