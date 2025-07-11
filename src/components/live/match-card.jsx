'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Radio, Calendar, CheckCircle } from 'lucide-react';
import teams from '@/data/teams.json';
import Link from 'next/link';

export function MatchCard({ match }) {
  const getTeamData = (shortName) => {
    return teams.find(t => t.id === shortName) || { logoUrl: 'https://placehold.co/40x40.png', logoHint: 'team logo' };
  };

  const team1 = getTeamData(match.teams[0].shortName);
  const team2 = getTeamData(match.teams[1].shortName);
  
  const isLive = match.status === 'Live';
  const isFinished = match.status === 'Finished';
  const isUpcoming = match.status === 'Upcoming';

  const StatusIndicator = () => {
    if (isLive) {
      return (
        <div className="flex items-center gap-2 text-red-500 font-semibold text-sm">
          <Radio className="w-4 h-4 animate-pulse" />
          <span>LIVE</span>
        </div>
      );
    }
    if (isFinished) {
      return (
        <div className="flex items-center gap-2 text-primary font-semibold text-sm">
          <CheckCircle className="w-4 h-4" />
          <span>FINISHED</span>
        </div>
      );
    }
    if (isUpcoming) {
      return (
        <div className="flex items-center gap-2 text-muted-foreground font-semibold text-sm">
          <Calendar className="w-4 h-4" />
          <span>UPCOMING</span>
        </div>
      );
    }
    return null;
  };
  
  return (
    <Card className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-sm flex flex-col h-full">
      <CardHeader className="p-4 flex flex-row justify-between items-center">
        <h3 className="font-semibold">{match.matchTitle}</h3>
        <StatusIndicator />
      </CardHeader>
      <CardContent className="p-6 flex-1">
        <div className="space-y-4">
          {/* Team 1 Info */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-grow min-w-0">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image src={team1.logoUrl} alt={match.teams[0].name} layout="fill" objectFit="cover" data-ai-hint={team1.logoHint} className="w-full h-full object-cover"/>
              </div>
              <span className="font-semibold">{match.teams[0].name}</span>
            </div>
            <div className="font-bold text-lg text-right whitespace-nowrap">
              {!isUpcoming && <span>{match.teams[0].score}/{match.teams[0].wickets} {match.teams[0].overs > 0 ? `(${match.teams[0].overs} ov)` : ''}</span>}
            </div>
          </div>

          {/* Team 2 Info */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-grow min-w-0">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image src={team2.logoUrl} alt={match.teams[1].name} layout="fill" objectFit="cover" data-ai-hint={team2.logoHint} className="w-full h-full object-cover"/>
              </div>
              <span className="font-semibold">{match.teams[1].name}</span>
            </div>
            <div className="font-bold text-lg text-right whitespace-nowrap">
              {!isUpcoming && <span>{match.teams[1].score}/{match.teams[1].wickets} {match.teams[1].overs > 0 ? `(${match.teams[1].overs} ov)` : ''}</span>}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/30 p-4 flex justify-between items-center">
        <p className="text-sm text-muted-foreground flex-1 truncate">{match.statusText}</p>
        <Button asChild variant="secondary" size="sm" className="shrink-0">
          <Link href="/live">Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
