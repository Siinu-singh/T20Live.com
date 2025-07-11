'use client';

import Image from 'next/image';
import { Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import teams from '@/data/teams.json';
import { useState } from 'react';

const otherSports = [
  {
    title: 'Football • La Liga • No Camp • 36m',
    teams: [
      { name: 'FCB', score: '01' },
      { name: 'RMA', score: '03' },
    ],
  },
  {
    title: 'Tennis • Davis Cup • London • 2nd sr',
    teams: [
      { name: 'Federer', score: '01' },
      { name: 'Nadal', score: '03' },
    ],
  },
  {
    title: 'Basketball • NBA • Crypto.com Arena • Q3',
    teams: [
        { name: 'LAL', score: '88' },
        { name: 'BOS', score: '85' }
    ]
  }
];

const INITIAL_VISIBLE_SPORTS = 2;

export function LiveMatch({ match }) {
  const [visibleSportsCount, setVisibleSportsCount] = useState(INITIAL_VISIBLE_SPORTS);

  const getTeamData = (shortName) => {
    const team = teams.find(t => t.id === shortName);
    return team || { logoUrl: 'https://placehold.co/40x40.png', logoHint: 'team logo' };
  }

  const handleLoadMore = () => {
    setVisibleSportsCount(prevCount => Math.min(prevCount + 1, otherSports.length));
  };
  
  const handleShowLess = () => {
    setVisibleSportsCount(INITIAL_VISIBLE_SPORTS);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
          <Radio className="w-5 h-5 text-red-500 animate-pulse" />
          <h2 className="text-2xl font-bold">Live Match</h2>
      </div>
      <div className="space-y-4">
          {match && (
               <div className="bg-card rounded-2xl p-4 shadow-sm">
                  <p className="text-xs text-muted-foreground mb-2">Cricket • 1st T20 • 2nd Innings • Lord's</p>
                  <div className="space-y-3">
                      <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                              <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                                <Image src={getTeamData(match.teams[0].shortName).logoUrl} alt={match.teams[0].name} width={28} height={28} data-ai-hint={getTeamData(match.teams[0].shortName).logoHint} className="w-full h-full object-cover"/>
                              </div>
                              <span className="font-bold">{match.teams[0].name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">({match.teams[0].overs} ov)</span>
                              <span className="font-bold text-lg">{match.teams[0].score}/{match.teams[0].wickets}</span>
                          </div>
                      </div>
                       <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                               <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                                <Image src={getTeamData(match.teams[1].shortName).logoUrl} alt={match.teams[1].name} width={28} height={28} data-ai-hint={getTeamData(match.teams[1].shortName).logoHint} className="w-full h-full object-cover"/>
                              </div>
                              <span className="font-bold">{match.teams[1].name}</span>
                          </div>
                           <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">({match.teams[1].overs} ov)</span>
                              <span className="font-bold text-lg">{match.teams[1].score}/{match.teams[1].wickets}</span>
                          </div>
                      </div>
                  </div>
              </div>
          )}
          
          {otherSports.slice(0, visibleSportsCount).map((sport, index) => (
            <div key={index} className="bg-card rounded-2xl p-4 shadow-sm opacity-70">
              <p className="text-xs text-muted-foreground mb-2">{sport.title}</p>
              <div className="space-y-3">
                {sport.teams.map((team, teamIndex) => (
                  <div key={teamIndex} className="flex justify-between items-center">
                    <span className="font-bold">{team.name}</span>
                    <span className="font-bold text-lg">{team.score}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-2">
            {visibleSportsCount < otherSports.length && (
               <Button onClick={handleLoadMore} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg h-12">More</Button>
            )}
            {visibleSportsCount > INITIAL_VISIBLE_SPORTS && (
              <Button onClick={handleShowLess} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg h-12">Less</Button>
            )}
          </div>
      </div>
    </div>
  );
}
