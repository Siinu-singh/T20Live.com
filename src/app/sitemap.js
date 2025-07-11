import newsArticles from '@/data/news.json';
import players from '@/data/players.json';
import teams from '@/data/teams.json';
import tournaments from '@/data/tournaments.json';

const URL = 'https://t20live.example.com';

export default function sitemap() {
  const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/fixtures',
    '/live',
    '/news',
    '/players',
    '/rankings',
    '/results',
    '/stats',
    '/teams',
    '/terms',
    '/tournaments',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const newsRoutes = newsArticles.map((article) => ({
    url: `${URL}/news/${article.id}`,
    lastModified: new Date(article.date).toISOString(),
  }));

  const playerRoutes = players.map((player) => ({
    url: `${URL}/players/${player.id}`,
    lastModified: new Date().toISOString(),
  }));

  const teamRoutes = teams.map((team) => ({
    url: `${URL}/teams/${team.id}`,
    lastModified: new Date().toISOString(),
  }));

  const tournamentRoutes = tournaments.map((tournament) => ({
    url: `${URL}/tournaments/${tournament.id}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    ...staticRoutes,
    ...newsRoutes,
    ...playerRoutes,
    ...teamRoutes,
    ...tournamentRoutes,
  ];
}
