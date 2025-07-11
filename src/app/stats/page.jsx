import { RankingsHero } from '@/components/rankings/rankings-hero';
import { LineChart, BarChart2, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BattingStats } from '@/components/stats/batting-stats';
import { BowlingStats } from '@/components/stats/bowling-stats';

export const metadata = {
  title: 'Stats',
  description: 'Dive into detailed T20 statistics, including top run-scorers, leading wicket-takers, and more.',
  alternates: {
    canonical: '/stats',
  },
};

export default function StatsPage() {
  return (
    <>
      <RankingsHero
        title="Statistics Center"
        subtitle="Explore a comprehensive database of T20 match and player statistics. From top run-scorers to leading wicket-takers."
        topText="Deep Dive"
        icon={<LineChart className="w-5 h-5" />}
      />
      <div className="container max-w-7xl px-8 py-16">
         <Tabs defaultValue="batting" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-auto mb-8 rounded-full p-1.5 bg-muted max-w-md mx-auto">
                <TabsTrigger value="batting" className="py-2.5 rounded-full data-[state=active]:bg-background data-[state=active]:shadow-md"><BarChart2 className="w-4 h-4 mr-2" />Batting</TabsTrigger>
                <TabsTrigger value="bowling" className="py-2.5 rounded-full data-[state=active]:bg-background data-[state=active]:shadow-md"><Star className="w-4 h-4 mr-2" />Bowling</TabsTrigger>
            </TabsList>
            <TabsContent value="batting">
                <BattingStats />
            </TabsContent>
            <TabsContent value="bowling">
                <BowlingStats />
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
