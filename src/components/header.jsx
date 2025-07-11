'use client';

import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from '@/components/theme-toggle';
import { T20Logo } from './t20-logo';
import { useState } from 'react';

const mainNavLinks = [
  { label: 'Live', href: '/live' },
  { label: 'Results', href: '/results' },
  { label: 'News', href: '/news' },
  { label: 'Rankings', href: '/rankings' },
];

const moreNavLinks = [
  { label: 'Teams', href: '/teams' },
  { label: 'Players', href: '/players' },
  { label: 'Stats', href: '/stats' },
  { label: 'Tournaments', href: '/tournaments' },
];

const allNavLinks = [...mainNavLinks, ...moreNavLinks];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 mr-4">
            <T20Logo className="w-12 h-12" />
            <span className="text-2xl tracking-tighter font-extrabold bg-gradient-to-br from-yellow-400 to-amber-500 bg-clip-text text-transparent" style={{ textShadow: '0 0 8px rgba(245, 158, 11, 0.7)' }}>T20Live</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm lg:flex">
            {mainNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors text-muted-foreground hover:text-foreground font-medium"
              >
                {link.label}
              </Link>
            ))}
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium text-sm p-0 h-auto hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                  More
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {moreNavLinks.map((link) => (
                  <DropdownMenuItem key={link.label} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <ThemeToggle />
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex flex-col gap-4 p-4">
                  <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                    <T20Logo className="w-12 h-12" />
                    <span className="text-2xl tracking-tighter font-extrabold bg-gradient-to-br from-yellow-400 to-amber-500 bg-clip-text text-transparent" style={{ textShadow: '0 0 8px rgba(245, 158, 11, 0.7)' }}>T20Live</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    <Link href="/" className="transition-colors text-muted-foreground hover:text-foreground font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    {allNavLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="transition-colors text-muted-foreground hover:text-foreground font-medium text-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-4">
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
