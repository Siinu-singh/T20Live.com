import { notFound } from 'next/navigation';
import Image from 'next/image';
import teams from '@/data/teams.json';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function generateStaticParams() {
  return teams.map((team) => ({
    id: team.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const team = teams.find(t => t.id === params.id);
  if (!team) {
    return {
      title: 'Team Not Found',
    };
  }
  return {
    title: team.name,
    description: `Information and squad for ${team.name}.`,
    alternates: {
      canonical: `/teams/${team.id}`,
    },
  };
}


export default function TeamDetailPage({ params }) {
  const team = teams.find(t => t.id === params.id);

  if (!team) {
    notFound();
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <Card className="rounded-2xl overflow-hidden shadow-lg">
        <CardHeader className="flex flex-col items-center gap-6 p-8 bg-muted/30">
          <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-md">
            <Image
              src={team.logoUrl}
              alt={`${team.name} logo`}
              width={128}
              height={128}
              className="object-cover"
              data-ai-hint={team.logoHint}
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold">{team.name}</h1>
            <p className="text-xl text-muted-foreground">{team.id}</p>
          </div>
        </CardHeader>
        <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Team Information</h2>
            <div className="prose dark:prose-invert max-w-none text-lg text-foreground/90">
                <p>This page would feature detailed information about the {team.name}, including their history, home ground, recent performance, and a full list of their current squad.</p>
                <p>For example, a list of players would appear here:</p>
                <ul>
                    <li>Player One (Captain)</li>
                    <li>Player Two (Vice-Captain)</li>
                    <li>Player Three (Wicketkeeper)</li>
                    <li>...and so on.</li>
                </ul>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
