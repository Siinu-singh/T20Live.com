'use client';

import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button variant="outline" className="flex items-center" onClick={scrollToTop}>
      <ArrowUp className="mr-2 h-4 w-4" />
      Back to Top
    </Button>
  );
};
