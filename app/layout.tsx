import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

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
    title: 'Santosh K Kammar',
    description:
        'Software Engineer • Backend Developer • Full Stack Developer',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Santosh K Kammar',
    description:
        'Software Engineer • Backend Developer • Full Stack Developer',
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
      {children}

      {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      </html>
  );
}