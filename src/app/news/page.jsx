import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Newspaper } from 'lucide-react';
import { NewsList } from '@/components/news/news-list';

export const metadata = {
  title: 'News',
  description: 'Get the latest T20 cricket news, match previews, analysis, and updates from around the world.',
  alternates: {
    canonical: '/news',
  },
};

export default function NewsPage() {
  return (
    <>
      <RankingsHero
        title="Cricket News"
        subtitle="This page features the latest news, articles, and updates from the world of T20 cricket."
        topText="Latest Updates"
        icon={<Newspaper className="w-5 h-5" />}
      />
      <div className="container mx-auto px-8 py-16">
        <NewsList />
      </div>
    </>
  );
}
