import { notFound } from 'next/navigation';
import Image from 'next/image';
import tournaments from '@/data/tournaments.json';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Globe } from 'lucide-react';

export function generateStaticParams() {
  return tournaments.map((tournament) => ({
    id: tournament.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const tournament = tournaments.find(t => t.id.toString() === params.id);
  if (!tournament) {
    return {
      title: 'Tournament Not Found',
    };
  }
  return {
    title: tournament.name,
    description: `Details about the ${tournament.name}.`,
    alternates: {
      canonical: `/tournaments/${tournament.id}`,
    },
  };
}


export default function TournamentDetailPage({ params }) {
  const tournament = tournaments.find(t => t.id.toString() === params.id);

  if (!tournament) {
    notFound();
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <Card className="rounded-2xl overflow-hidden shadow-lg">
        <CardHeader className="p-0 relative">
          <div className="aspect-video">
            <Image
              src={tournament.logoUrl}
              alt={tournament.name}
              width={1200}
              height={675}
              className="object-cover w-full h-full"
              data-ai-hint={tournament.imageHint}
              priority
            />
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <h1 className="text-4xl font-bold mb-2">{tournament.name}</h1>
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <Globe className="w-5 h-5" />
            <span>{tournament.region}</span>
          </div>
          <div className="prose dark:prose-invert max-w-none text-lg text-foreground/90">
            <p>{tournament.description}</p>
            <p>This page would provide comprehensive details about the {tournament.name}, including participating teams, match schedules, points tables, and historical results. It would be the central hub for fans following this specific tournament.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
