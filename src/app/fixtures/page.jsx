import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: 'Upcoming Matches',
  description: 'Check the schedule for all upcoming T20 matches, including dates, times, and venues.',
  alternates: {
    canonical: '/fixtures',
  },
};

export default function FixturesPage() {
  return (
    <RankingsHero
      title="Upcoming Matches"
      subtitle="Here you can find a complete list of all scheduled T20 matches."
      topText="Match Schedule"
      icon={<Calendar className="w-5 h-5" />}
    />
  );
}
