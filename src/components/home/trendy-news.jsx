'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export function TrendyNews({ news }) {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Trendy News</h2>
        <div className="flex items-center gap-2">
          <Button onClick={() => handleScroll('left')} variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button onClick={() => handleScroll('right')} variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div ref={scrollContainerRef} className="overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="grid grid-flow-col auto-cols-[90%] sm:auto-cols-[calc(50%-1rem)] lg:auto-cols-[calc(33.33%-1.34rem)] gap-8">
          {news.map((item, index) => (
            <Link href="/news" key={index} className="flex">
              <motion.div 
                className="bg-card rounded-2xl shadow-sm overflow-hidden group cursor-pointer w-full flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="overflow-hidden rounded-t-2xl h-48">
                    <Image src={item.imageUrl} alt={item.title} width={400} height={300} className="w-full h-full object-cover transition-transform duration-300" data-ai-hint={item.imageHint} />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs text-muted-foreground font-semibold">{item.category} • {item.time}</span>
                  <h3 className="font-bold mt-1">{item.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
