import { RankingsHero } from '@/components/rankings/rankings-hero';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BarChart2, Shield, Star, Users } from 'lucide-react';

export const metadata = {
  title: 'Rankings',
  description: 'View the official ICC rankings for T20 teams, batsmen, bowlers, and all-rounders.',
  alternates: {
    canonical: '/rankings',
  },
};

const teamRankings = [
  { rank: 1, team: 'India', matches: 55, points: 15589, rating: 283 },
  { rank: 2, team: 'Australia', matches: 45, points: 11844, rating: 263 },
  { rank: 3, team: 'England', matches: 38, points: 9875, rating: 260 },
  { rank: 4, team: 'South Africa', matches: 40, points: 10134, rating: 253 },
  { rank: 5, team: 'New Zealand', matches: 49, points: 12345, rating: 252 },
  { rank: 6, team: 'Pakistan', matches: 52, points: 12948, rating: 249 },
];

const battingRankings = [
  { rank: 1, player: 'Suryakumar Yadav', team: 'India', rating: 861 },
  { rank: 2, player: 'Phil Salt', team: 'England', rating: 802 },
  { rank: 3, player: 'Mohammad Rizwan', team: 'Pakistan', rating: 781 },
  { rank: 4, player: 'Babar Azam', team: 'Pakistan', rating: 765 },
  { rank: 5, player: 'Aiden Markram', team: 'South Africa', rating: 755 },
  { rank: 6, player: 'Jos Buttler', team: 'England', rating: 715 },
];

const bowlingRankings = [
    { rank: 1, player: 'Adil Rashid', team: 'England', rating: 726 },
    { rank: 2, player: 'Wanindu Hasaranga', team: 'Sri Lanka', rating: 687 },
    { rank: 3, player: 'Akeal Hosein', team: 'West Indies', rating: 664 },
    { rank: 4, player: 'Maheesh Theekshana', team: 'Sri Lanka', rating: 659 },
    { rank: 5, player: 'Rashid Khan', team: 'Afghanistan', rating: 655 },
    { rank: 6, player: 'Anrich Nortje', team: 'South Africa', rating: 654 },
];

const allRounderRankings = [
    { rank: 1, player: 'Shakib Al Hasan', team: 'Bangladesh', rating: 231 },
    { rank: 2, player: 'Wanindu Hasaranga', team: 'Sri Lanka', rating: 228 },
    { rank: 3, player: 'Sikandar Raza', team: 'Zimbabwe', rating: 210 },
    { rank: 4, player: 'Mohammad Nabi', team: 'Afghanistan', rating: 204 },
    { rank: 5, player: 'Aiden Markram', team: 'South Africa', rating: 203 },
    { rank: 6, player: 'Hardik Pandya', team: 'India', rating: 185 },
];

const RankingsTable = ({ data, headers }) => (
    <Table>
        <TableHeader>
            <TableRow>
                {headers.map(header => <TableHead key={header} className={header === 'Rank' ? 'w-16' : ''}>{header}</TableHead>)}
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.map(item => (
                <TableRow key={item.rank}>
                    {Object.values(item).map((value, i) => <TableCell key={i} className={i === 0 ? 'font-bold text-primary' : ''}>{value}</TableCell>)}
                </TableRow>
            ))}
        </TableBody>
    </Table>
);


export default function RankingsPage() {
  return (
    <>
      <RankingsHero
        title="The Best of the Best"
        subtitle="Explore the official T20 rankings for teams, batsmen, bowlers, and all-rounders. See who's climbing the charts."
        topText="ICC T20 Rankings"
        icon={<BarChart2 className="w-5 h-5" />}
      />
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="teams" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-8 rounded-full p-1.5 bg-muted">
                <TabsTrigger value="teams" className="py-2.5 rounded-full data-[state=active]:bg-background data-[state=active]:shadow-md"><Shield className="w-4 h-4 mr-2" />Teams</TabsTrigger>
                <TabsTrigger value="batsmen" className="py-2.5 rounded-full data-[state=active]:bg-background data-[state=active]:shadow-md"><Award className="w-4 h-4 mr-2" />Batting</TabsTrigger>
                <TabsTrigger value="bowlers" className="py-2.5 rounded-full data-[state=active]:bg-background data-[state=active]:shadow-md"><Star className="w-4 h-4 mr-2" />Bowling</TabsTrigger>
                <TabsTrigger value="all-rounders" className="py-2.5 rounded-full data-[state=active]:bg-background data-[state=active]:shadow-md"><Users className="w-4 h-4 mr-2" />All-Rounders</TabsTrigger>
            </TabsList>
            
            <Card className="rounded-2xl">
                <TabsContent value="teams" className="m-0">
                    <CardHeader>
                        <CardTitle>ICC Men's T20I Team Rankings</CardTitle>
                        <CardDescription>Official International T20 Cricket Team Rankings.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <RankingsTable data={teamRankings} headers={['Rank', 'Team', 'Matches', 'Points', 'Rating']} />
                    </CardContent>
                </TabsContent>
                <TabsContent value="batsmen" className="m-0">
                    <CardHeader>
                        <CardTitle>ICC Men's T20I Batting Rankings</CardTitle>
                        <CardDescription>Top-ranked T20 batsmen in the world.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <RankingsTable data={battingRankings} headers={['Rank', 'Player', 'Team', 'Rating']} />
                    </CardContent>
                </TabsContent>
                <TabsContent value="bowlers" className="m-0">
                     <CardHeader>
                        <CardTitle>ICC Men's T20I Bowling Rankings</CardTitle>
                        <CardDescription>Top-ranked T20 bowlers in the world.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RankingsTable data={bowlingRankings} headers={['Rank', 'Player', 'Team', 'Rating']} />
                    </CardContent>
                </TabsContent>
                <TabsContent value="all-rounders" className="m-0">
                     <CardHeader>
                        <CardTitle>ICC Men's T20I All-Rounder Rankings</CardTitle>
                        <CardDescription>Top-ranked T20 all-rounders in the world.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RankingsTable data={allRounderRankings} headers={['Rank', 'Player', 'Team', 'Rating']} />
                    </CardContent>
                </TabsContent>
            </Card>
        </Tabs>
      </div>
    </>
  );
}
