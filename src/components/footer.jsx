'use client';

import Link from 'next/link';
import { T20Logo } from './t20-logo';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

const siteMapLinks = [
  { label: 'Home', href: '/' },
  { label: 'Live Scores', href: '/live' },
  { label: 'Results', href: '/results' },
  { label: 'News', href: '/news' },
];

const legalLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Rankings', href: '/rankings' },
];

export function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <T20Logo className="w-10 h-10" />
              <span className="text-xl tracking-tighter font-extrabold bg-gradient-to-br from-yellow-400 to-amber-500 bg-clip-text text-transparent" style={{ textShadow: '0 0 8px rgba(245, 158, 11, 0.7)' }}>T20Live</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Your ultimate destination for real-time T20 cricket scores, updates, and in-depth match analysis.
            </p>
            <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
            </div>
             <Button variant="outline" className="flex items-center" onClick={scrollToTop}>
                <ArrowUp className="mr-2 h-4 w-4" />
                Back to Top
            </Button>
          </div>

          <div className="md:col-span-2 relative">
            <div className="absolute inset-0 w-full h-full z-0 opacity-40 overflow-hidden rounded-lg">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 960 350"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
                            <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.3 }} />
                        </linearGradient>
                    </defs>
                    <path
                        d="M-40 300 L 400 100 L 840 300 L 1240 100"
                        stroke="url(#footer-gradient)"
                        strokeWidth="2"
                        fill="none"
                    />
                    <path
                        d="M-40 250 L 400 50 L 840 250 L 1240 50"
                        stroke="url(#footer-gradient)"
                        strokeWidth="2"
                        fill="none"
                    />
                    <path
                        d="M-40 200 L 400 0 L 840 200 L 1240 0"
                        stroke="url(#footer-gradient)"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div>
                    <h3 className="font-semibold text-foreground mb-4">Site Map</h3>
                    <ul className="space-y-3">
                    {siteMapLinks.map(link => (
                        <li key={link.label}>
                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">{link.label}</Link>
                        </li>
                    ))}
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                    <ul className="space-y-3">
                    {legalLinks.map(link => (
                        <li key={link.label}>
                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">{link.label}</Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4 text-center text-sm">
          Copyright &copy; {year} T20Live. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
