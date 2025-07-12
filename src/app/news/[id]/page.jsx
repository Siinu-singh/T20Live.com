import { notFound } from 'next/navigation';
import Image from 'next/image';
import newsArticles from '@/data/news.json';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock } from 'lucide-react';

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const article = newsArticles.find(p => p.id.toString() === params.id);
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }
  return {
    title: article.title,
    description: `Read the latest news about ${article.title}.`,
    alternates: {
      canonical: `/news/${article.id}`,
    },
  };
}

export default function NewsArticlePage({ params }) {
  const article = newsArticles.find(p => p.id.toString() === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <article className="space-y-8">
        <div className="space-y-4">
          <Badge variant="default" className="mb-2 bg-primary/20 text-primary hover:bg-primary/30">{article.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{article.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={article.authorImageUrl} alt={article.author} />
                <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{article.author}</p>
                <p className="text-sm">{article.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                data-ai-hint={article.imageHint}
            />
        </div>

        <div className="prose dark:prose-invert max-w-none text-lg text-foreground/90">
            <p>This is a placeholder for the full article content. In a real application, this would be populated with the actual news story, likely from a CMS or a more detailed JSON file. For now, we'll imagine what the article might discuss based on its title.</p>
            <p>The story would likely delve into the specifics of the match, highlighting key moments, standout performances, and the tactical decisions that led to the outcome described in the title, "{article.title}". It might include quotes from players and coaches, expert analysis, and fan reactions to the event.</p>
        </div>
      </article>
    </div>
  );
}
