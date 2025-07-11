'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { topRunScorers, highestIndividualScores } from '@/lib/stats-data';

export function BattingStats() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Top Run Scorers</CardTitle>
          <CardDescription>Most runs in T20 Internationals in the last 2 years.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topRunScorers} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                  }}
                />
                <Bar dataKey="runs" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Highest Individual Scores</CardTitle>
          <CardDescription>All-time highest scores by a batsman in a single T20I innings.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Player</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Opponent</TableHead>
                <TableHead className="text-right">Score</TableHead>
                <TableHead className="text-right">Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {highestIndividualScores.map((s) => (
                <TableRow key={s.player}>
                  <TableCell className="font-medium">{s.player}</TableCell>
                  <TableCell>{s.team}</TableCell>
                  <TableCell>{s.opponent}</TableCell>
                  <TableCell className="text-right font-bold text-primary">{s.score}</TableCell>
                  <TableCell className="text-right">{s.year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
