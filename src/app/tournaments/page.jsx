import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Award } from 'lucide-react';
import { TournamentCard } from '@/components/tournaments/tournament-card';
import tournaments from '@/data/tournaments.json';

export const metadata = {
  title: 'Tournaments',
  description: 'Follow major T20 tournaments like the World Cup, IPL, and PSL, with schedules, teams, and results.',
  alternates: {
    canonical: '/tournaments',
  },
};

export default function TournamentsPage() {
  return (
    <>
      <RankingsHero
        title="Tournaments"
        subtitle="Find information on all major T20 tournaments, including schedules, standings, and participating teams."
        topText="Major Leagues"
        icon={<Award className="w-5 h-5" />}
      />
      <div className="container max-w-7xl px-8 py-16 text-center">
        <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </div>
    </>
  );
}
