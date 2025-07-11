'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { topWicketTakers, bestBowlingFigures } from '@/lib/stats-data';

export function BowlingStats() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Top Wicket Takers</CardTitle>
          <CardDescription>Most wickets in T20 Internationals in the last 2 years.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topWicketTakers} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                  }}
                />
                <Bar dataKey="wickets" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Best Bowling Figures</CardTitle>
          <CardDescription>All-time best bowling figures in a single T20I innings.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Player</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Opponent</TableHead>
                <TableHead className="text-right">Figures</TableHead>
                <TableHead className="text-right">Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bestBowlingFigures.map((b) => (
                <TableRow key={b.player}>
                  <TableCell className="font-medium">{b.player}</TableCell>
                  <TableCell>{b.team}</TableCell>
                  <TableCell>{b.opponent}</TableCell>
                  <TableCell className="text-right font-bold text-primary">{b.figures}</TableCell>
                  <TableCell className="text-right">{b.year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
