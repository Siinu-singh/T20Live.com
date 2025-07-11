'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Globe } from 'lucide-react';

export function TournamentCard({ tournament }) {
  return (
    <Card className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-sm flex flex-col h-full">
      <CardHeader className="p-0 relative">
          <div className="aspect-video overflow-hidden rounded-t-2xl">
            <Image
              src={tournament.logoUrl}
              alt={tournament.name}
              width={400}
              height={225}
              className="w-full h-full object-cover transition-transform duration-300"
              data-ai-hint={tournament.imageHint}
            />
          </div>
        </CardHeader>
      <CardContent className="p-6 flex-1 flex flex-col">
        <CardTitle className="text-xl font-bold mb-2">{tournament.name}</CardTitle>
        <CardDescription className="flex-1">{tournament.description}</CardDescription>
        <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <Globe className="w-4 h-4" />
            <span>{tournament.region}</span>
        </div>
      </CardContent>
    </Card>
  );
}
