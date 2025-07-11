import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Users } from 'lucide-react';
import { PlayerCard } from '@/components/players/player-card';
import players from '@/data/players.json';

export const metadata = {
  title: 'Players',
  description: 'Get detailed profiles, stats, and career information for all T20 players.',
  alternates: {
    canonical: '/players',
  },
};

export default function PlayersPage() {
  return (
    <>
      <RankingsHero
        title="Player Profiles"
        subtitle="This section provides in-depth profiles and statistics for every T20 player."
        topText="Meet The Players"
        icon={<Users className="w-5 h-5" />}
      />
      <div className="container max-w-7xl px-8 py-16 text-center">
        <div className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </>
  );
}
