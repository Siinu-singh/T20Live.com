import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Shield } from 'lucide-react';
import { TeamCard } from '@/components/teams/team-card';
import teams from '@/data/teams.json';

export const metadata = {
  title: 'Teams',
  description: 'Explore all T20 teams, view their squads, stats, and recent performance.',
  alternates: {
    canonical: '/teams',
  },
};

export default function TeamsPage() {
  return (
    <>
      <RankingsHero
        title="Teams"
        subtitle="Discover information about all the T20 teams, including player rosters and match history."
        topText="Squads & Stats"
        icon={<Shield className="w-5 h-5" />}
      />
      <div className="container max-w-7xl px-8 py-16 text-center">
        <div className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </>
  );
}
