import { notFound } from 'next/navigation';
import Image from 'next/image';
import players from '@/data/players.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function generateStaticParams() {
  return players.map((player) => ({
    id: player.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const player = players.find(p => p.id.toString() === params.id);
  if (!player) {
    return {
      title: 'Player Not Found',
    };
  }
  return {
    title: player.name,
    description: `Profile and stats for ${player.name}.`,
    alternates: {
      canonical: `/players/${player.id}`,
    },
  };
}

export default function PlayerDetailPage({ params }) {
  const player = players.find(p => p.id.toString() === params.id);

  if (!player) {
    notFound();
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <Card className="rounded-2xl overflow-hidden shadow-lg">
        <CardHeader className="flex flex-col md:flex-row items-center gap-8 p-8">
          <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-md flex-shrink-0">
            <Image
              src={player.imageUrl}
              alt={`Portrait of ${player.name}`}
              width={192}
              height={192}
              className="object-cover"
              data-ai-hint={player.imageHint}
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold">{player.name}</h1>
            <p className="text-xl text-muted-foreground">{player.team}</p>
            <Badge variant="secondary" className="mt-4 text-lg py-1 px-4">{player.role}</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <CardTitle className="mb-4">Player Details</CardTitle>
          <div className="prose dark:prose-invert max-w-none text-lg text-foreground/90">
            <p>This section would contain detailed statistics and biographical information for {player.name}. For instance, it might include:</p>
            <ul>
              <li><strong>Batting Average:</strong> 45.50</li>
              <li><strong>Strike Rate:</strong> 150.25</li>
              <li><strong>Wickets Taken:</strong> 50</li>
              <li><strong>Economy Rate:</strong> 7.50</li>
              <li><strong>Matches Played:</strong> 120</li>
            </ul>
            <p>Further details about their career achievements, debut information, and playing style would be listed here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
