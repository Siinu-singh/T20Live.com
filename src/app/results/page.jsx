import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Trophy } from 'lucide-react';
import { ResultsList } from '@/components/results/results-list';
import matches from '@/data/live_result.json';

export const metadata = {
  title: 'Match Results',
  description: 'Find summaries, scorecards, and results for all recently completed T20 matches.',
  alternates: {
    canonical: '/results',
  },
};

export default function ResultsPage() {
  const finishedMatches = matches.filter(match => match.status === 'Finished');

  return (
    <>
      <RankingsHero
        title="Match Results"
        subtitle="This page contains the results and detailed scoreboards of past matches."
        topText="Final Scores"
        icon={<Trophy className="w-5 h-5" />}
      />
      <div className="container max-w-7xl px-8 py-16">
        <ResultsList matches={finishedMatches} />
      </div>
    </>
  );
}
