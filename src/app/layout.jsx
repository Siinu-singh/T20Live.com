import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'T20Live - Live Cricket Scores & Summaries',
    template: `%s - T20Live`,
  },
  description: 'Get real-time T20 cricket match scores, updates, and analysis. Your ultimate companion for live cricket action.',
  keywords: ['T20', 'live cricket score', 'cricket summary', 'sports', 'T20Live'],
  metadataBase: new URL('https://t20live.example.com'),
  openGraph: {
    title: 'T20Live - Live Cricket Scores & Summaries',
    description: 'Real-time T20 cricket scores and match analysis.',
    url: 'https://t20live.example.com',
    siteName: 'T20Live',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T20Live - Live Cricket Scores & Summaries',
    description: 'Real-time T20 cricket scores and match analysis.',
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head />
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
