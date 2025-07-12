import { MatchCard } from '@/components/live/match-card';
import matches from '@/data/live_result.json';
import { Separator } from '@/components/ui/separator';
import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Radio } from 'lucide-react';

export const metadata = {
  title: 'Live Scores',
  description: 'Real-time T20 match updates and scores for ongoing games.',
  alternates: {
    canonical: '/live',
  },
};

const MatchGrid = ({ matches }) => {
  if (!matches || matches.length === 0) {
    return (
      <div className="text-center py-10 rounded-lg bg-card border">
        <p className="text-muted-foreground">No matches found for this category.</p>
      </div>
    );
  }
  return (
    <div className="text-center">
      <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default function LivePage() {
  const liveMatches = matches.filter(match => match.status === 'Live');
  const upcomingMatches = matches.filter(match => match.status === 'Upcoming');
  const finishedMatches = matches.filter(match => match.status === 'Finished');

  return (
    <div>
      <RankingsHero
        title="Live Scores"
        subtitle="Real-time T20 match updates and scores for ongoing games."
        topText="Live Action"
        icon={<Radio className="w-5 h-5" />}
      />
      <div className="container max-w-7xl px-8 py-16 space-y-16">
        <div className="flex justify-center">
            <section>
                <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">Live Now</h2>
                <MatchGrid matches={liveMatches} />
            </section>
        </div>

        <Separator />
        
        <div className="flex justify-center">
            <section>
                <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">Upcoming Matches</h2>
                <MatchGrid matches={upcomingMatches} />
            </section>
        </div>

        <Separator />
        
        <div className="flex justify-center">
            <section>
                <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">Recent Results</h2>
                <MatchGrid matches={finishedMatches} />
            </section>
        </div>
      </div>
    </div>
  );
}
