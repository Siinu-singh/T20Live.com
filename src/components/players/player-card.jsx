import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function PlayerCard({ player }) {
  return (
    <Card className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-sm text-center flex flex-col h-full">
      <CardContent className="pt-6 flex-grow flex flex-col items-center justify-center">
        <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden">
          <Image
            src={player.imageUrl}
            alt={`Portrait of ${player.name}`}
            width={128}
            height={128}
            className="object-cover transition-transform duration-300"
            data-ai-hint={player.imageHint}
          />
        </div>
        <h3 className="font-bold text-xl">{player.name}</h3>
        <p className="text-sm text-muted-foreground">{player.team}</p>
      </CardContent>
      <div className="pb-6">
        <Badge variant="outline">
          {player.role}
        </Badge>
      </div>
    </Card>
  );
}
