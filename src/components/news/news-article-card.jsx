'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

export function NewsArticleCard({ article }) {
  return (
    <Link href="/news" className="group">
      <Card className="rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-sm">
        <CardHeader className="p-0 relative">
          <div className="overflow-hidden aspect-video rounded-t-2xl">
            <Image
              src={article.imageUrl}
              alt={article.title}
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300"
              data-ai-hint={article.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-1">
          <Badge variant="default" className="mb-2 bg-primary/20 text-primary hover:bg-primary/30">{article.category}</Badge>
          <CardTitle className="text-xl font-bold leading-snug">{article.title}</CardTitle>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={article.authorImageUrl} alt={article.author} />
              <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{article.author}</p>
              <p className="text-xs">{article.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
