'use client';

import { useState } from 'react';
import { NewsArticleCard } from '@/components/news/news-article-card';
import { Button } from '@/components/ui/button';
import newsArticles from '@/data/news.json';
import { useToast } from '@/hooks/use-toast';

const INITIAL_ARTICLES = 9;
const ARTICLES_TO_LOAD = 3;

export function NewsList() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_ARTICLES);
  const { toast } = useToast();

  const handleLoadMore = () => {
    if (visibleCount < newsArticles.length) {
      setVisibleCount(prevCount => Math.min(prevCount + ARTICLES_TO_LOAD, newsArticles.length));
    } else {
      toast({
        title: "You're all caught up!",
        description: "There are no more articles to load at the moment.",
      });
    }
  };

  return (
    <>
      <div className="text-center">
        <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {newsArticles.slice(0, visibleCount).map(article => (
            <NewsArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <Button size="lg" className="rounded-full" onClick={handleLoadMore}>
          Load More Articles
        </Button>
      </div>
    </>
  );
}
