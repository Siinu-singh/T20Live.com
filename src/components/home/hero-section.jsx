import Image from 'next/image';
import { Clock } from 'lucide-react';
import Link from 'next/link';

export function HeroSection({ article }) {
  if (!article) return null;

  return (
    <Link href="/news" className="lg:col-span-2">
      <div
        className="bg-card rounded-2xl shadow-sm overflow-hidden relative group cursor-pointer h-full"
      >
        <Image 
          src={article.imageUrl} 
          alt={article.title} 
          width={800} 
          height={600} 
          className="w-full h-full object-cover transition-transform duration-300 rounded-2xl" 
          data-ai-hint={article.imageHint}
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <div className="flex items-center gap-4 mb-2">
            <span className="bg-primary text-primary-foreground font-semibold px-3 py-1 rounded text-sm">{article.category}</span>
            <span className="flex items-center gap-1.5 text-sm"><Clock className="w-4 h-4" /> {article.time}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{article.title}</h1>
        </div>
      </div>
    </Link>
  );
}
