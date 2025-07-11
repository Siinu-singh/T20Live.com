'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function TeamCard({ team }) {
  return (
    <Card className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-sm flex flex-col h-full text-center">
      <CardContent className="p-6 flex-1 flex flex-col items-center justify-center">
        <div className="w-24 h-24 mb-4 relative rounded-full overflow-hidden">
          <Image
            src={team.logoUrl}
            alt={`${team.name} logo`}
            width={96}
            height={96}
            className="w-full h-full object-cover"
            data-ai-hint={team.logoHint}
          />
        </div>
        <h3 className="font-bold text-lg mb-2">{team.name}</h3>
        <p className="text-sm text-muted-foreground">{team.id}</p>
      </CardContent>
      <div className="p-4 bg-muted/30">
        <Button asChild variant="secondary" size="sm">
          <Link href="/teams">View Squad</Link>
        </Button>
      </div>
    </Card>
  );
}
