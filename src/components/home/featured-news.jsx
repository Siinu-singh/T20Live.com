'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const filterCategories = ['All', 'Cricket', 'Analysis', 'Interview'];

export function FeaturedNews({ articles }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(
        (article) =>
          article.mainArticle.category === activeFilter ||
          article.sideArticles.some((sa) => sa.category === activeFilter)
      );
      setFilteredArticles(filtered);
    }
    setCurrentIndex(0);
  }, [activeFilter, articles]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredArticles.length) % filteredArticles.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredArticles.length);
  };

  if (!filteredArticles || filteredArticles.length === 0) {
    return (
      <div className="lg:col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Featured News</h2>
        </div>
        <div className="bg-card rounded-2xl p-8 text-center h-full flex items-center justify-center">
            <p className="text-muted-foreground">No featured articles found for this category.</p>
        </div>
      </div>
    );
  }

  const { mainArticle, sideArticles } = filteredArticles[currentIndex];

  return (
    <div className="lg:col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Featured News</h2>
        <div className="hidden md:flex items-center gap-2">
          {filterCategories.map((category) => (
            <Button
              key={category}
              variant="link"
              onClick={() => setActiveFilter(category)}
              className={
                activeFilter === category
                  ? 'text-foreground font-bold'
                  : 'text-muted-foreground'
              }
            >
              {category}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-7 h-7 ml-4"
            onClick={handlePrev}
            disabled={filteredArticles.length <= 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-7 h-7"
            onClick={handleNext}
            disabled={filteredArticles.length <= 1}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <motion.div 
        key={currentIndex}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/news">
          <div
            className="bg-card rounded-2xl shadow-sm overflow-hidden group cursor-pointer h-full flex flex-col"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <Image
                src={mainArticle.imageUrl}
                alt={mainArticle.title}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-300"
                data-ai-hint={mainArticle.imageHint}
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <span className="text-xs text-muted-foreground font-semibold">
                {mainArticle.category} • {mainArticle.time}
              </span>
              <h3 className="font-bold text-xl mt-1">
                {mainArticle.title}
              </h3>
            </div>
          </div>
        </Link>
        <div className="space-y-4">
          {sideArticles.map((item, index) => (
            <Link href="/news" key={index}>
              <div
                className="flex items-center gap-4 p-3 rounded-2xl bg-card cursor-pointer"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  data-ai-hint={item.imageHint}
                />
                <div>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {item.category} • {item.time}
                  </span>
                  <p className="font-semibold leading-tight">{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
