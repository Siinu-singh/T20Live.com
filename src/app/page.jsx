'use client';

import matches from '@/data/live_result.json';
import { HeroSection } from '@/components/home/hero-section';
import { RecentNews } from '@/components/home/recent-news';
import { TrendyNews } from '@/components/home/trendy-news';
import { FeaturedNews } from '@/components/home/featured-news';
import { LiveMatch } from '@/components/home/live-match';
import { FaqSection } from '@/components/home/faq-section';

export default function Home() {
  const heroArticle = {
    category: 'Cricket',
    time: '5 Minutes',
    title: "T20 World Cup: Unforgettable moments from the tournament's history",
    imageUrl: 'https://images.unsplash.com/photo-1595207732481-22cccd3480fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8Y3JpY2tldHxlbnwwfHx8fDE3NTE4ODU5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'cricket batting'
  };

  const recentNews = [
    {
      category: 'T20 League',
      time: '15 min',
      title: "Qualifier 1: Giants vs Vipers - Who will reach the final?",
      imageUrl: 'https://images.unsplash.com/photo-1652814973415-c69d014c27df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjcmlja2V0JTIwc3RhZGl1bSUyMGxpZ2h0c3xlbnwwfHx8fDE3NTE4ODIzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'cricket stadium lights',
      highlighted: false,
    },
    {
      category: 'Analysis',
      time: '30 min',
      title: 'Expert picks for the top players of the season',
      imageUrl: 'https://images.unsplash.com/photo-1659081431824-77f72421f32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjcmlja2V0JTIwcGxheWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUxODgyMzUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'cricket player portrait',
      highlighted: true,
    },
    {
      category: 'Team News',
      time: '1 hr',
      title: 'Capitals announce new captain for the upcoming season',
      imageUrl: 'https://images.unsplash.com/photo-1638842492347-796030d7c6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjcmlja2V0JTIwdGVhbSUyMGh1ZGRsZXxlbnwwfHx8fDE3NTE4ODIzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'cricket team huddle',
      highlighted: false,
    },
  ];

  const topStories = [
    {
      category: 'Breaking',
      time: '5 min',
      title: 'Star Player Ruled Out of T20 World Cup with Injury',
      imageUrl: 'https://images.unsplash.com/photo-1685541000847-f764510e2175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVyJTIwaW5qdXJ5fGVufDB8fHx8MTc1MTg4NTIzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'cricket player injury',
      highlighted: true,
    },
    {
      category: 'T20 World Cup',
      time: '45 min',
      title: 'Underdogs Cause Major Upset in Opening Match',
      imageUrl: 'https://images.unsplash.com/photo-1709233955602-5a58b2f4c5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjcmlja2V0JTIwY2VsZWJyYXRpb24lMjBzdXJwcmlzZXxlbnwwfHx8fDE3NTE4ODUyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'cricket celebration surprise',
      highlighted: false,
    },
    {
      category: 'Records',
      time: '2 hr',
      title: 'New Record for Most Sixes in a Single T20 Innings',
      imageUrl: 'https://images.unsplash.com/photo-1706102005258-aa606694526a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjcmlja2V0JTIwYmF0c21hbiUyMGhpdHRpbmd8ZW58MHx8fHwxNzUxODg1MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'cricket batsman hitting',
      highlighted: false,
    },
  ];
  
  const trendyNews = [
    {
        category: 'Player Profile',
        time: '3 hr',
        title: "The rise of a young superstar in T20 cricket",
        imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjcmlja2V0fGVufDB8fHx8MTc1MTg4NTkwMXww&ixlib=rb-4.1.0&q=80&w=1080',
        imageHint: 'cricket player celebrating'
    },
    {
        category: 'Technology',
        time: '5 hr',
        title: "How Hawkeye is changing umpiring decisions in cricket",
        imageUrl: 'https://images.unsplash.com/photo-1743342398244-c8c5a307d290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjcmlja2V0JTIwYmFsbCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzUxODgyMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        imageHint: 'cricket ball technology'
    },
    {
        category: 'History',
        time: '8 hr',
        title: "Revisiting the first-ever T20 international match",
        imageUrl: 'https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMG1hdGNofGVufDB8fHx8MTc1MTg4MjM1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        imageHint: 'vintage cricket match'
    },
    {
      category: 'Tactics',
      time: '10 hr',
      title: 'The evolution of power-hitting in T20s',
      imageUrl: 'https://images.unsplash.com/photo-1624897174291-1bd715e371d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjcmlja2V0fGVufDB8fHx8MTc1MTg4NTkwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'cricket batting action',
    },
    {
      category: 'Fan Culture',
      time: '12 hr',
      title: 'The most iconic chants from cricket stadiums',
      imageUrl: 'https://images.unsplash.com/photo-1583072728920-4ed8c72cbc01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjcmlja2V0JTIwZmFucyUyMGNoZWVyaW5nfGVufDB8fHx8MTc1MTg4NTY4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'cricket fans cheering',
    },
  ];

  const allFeaturedNews = [
    {
      mainArticle: {
        category: 'Interview',
        time: '2 hr',
        title: "Exclusive: A captain's take on leadership and strategy",
        imageUrl: 'https://images.unsplash.com/photo-1703182612564-dd42bba0e1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjcmlja2V0JTIwY2FwdGFpbiUyMHRoaW5raW5nfGVufDB8fHx8MTc1MTg4MjM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
        imageHint: 'cricket captain thinking'
      },
      sideArticles: [
        {
            category: 'Records',
            time: '4 hr',
            title: "Breaking down the fastest centuries in T20 history",
            imageUrl: 'https://images.unsplash.com/photo-1654267837327-203c8bfb5f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjcmlja2V0JTIwc2NvcmVib2FyZHxlbnwwfHx8fDE3NTE4ODIzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            imageHint: 'cricket scoreboard'
        },
        {
            category: 'Fan Zone',
            time: '6 hr',
            title: "Top 5 most passionate cricket fan bases in the world",
            imageUrl: 'https://images.unsplash.com/photo-1656678636406-60770fb73071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjcmlja2V0JTIwZmFucyUyMGNyb3dkfGVufDB8fHx8MTc1MTg4MjM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
            imageHint: 'cricket fans crowd'
        }
      ]
    },
    {
      mainArticle: {
        category: 'Cricket',
        time: '1 day',
        title: "The impact of dew on night matches in T20s",
        imageUrl: 'https://images.unsplash.com/photo-1728659964407-ed9a942ec2de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMG5pZ2h0fGVufDB8fHx8MTc1MTg4Njc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        imageHint: 'cricket stadium night'
      },
      sideArticles: [
        {
            category: 'Analysis',
            time: '2 days',
            title: "Analyzing the effectiveness of wrist-spinners",
            imageUrl: 'https://images.unsplash.com/photo-1633498023978-9776f9cabedf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3JpY2tldCUyMHNwaW5uZXIlMjBhY3Rpb258ZW58MHx8fHwxNzUxODg2Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
            imageHint: 'cricket spinner action'
        },
        {
            category: 'History',
            time: '3 days',
            title: "Greatest comebacks in T20 World Cup history",
            imageUrl: 'https://images.unsplash.com/photo-1580831800257-f83135932664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJvcGh5JTIwY2VsZWJyYXRpb258ZW58MHx8fHwxNzUxODg2Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
            imageHint: 'cricket trophy celebration'
        }
      ]
    },
    {
      mainArticle: {
        category: 'Analysis',
        time: '4 days',
        title: "The art of death bowling: a game changer",
        imageUrl: 'https://images.unsplash.com/photo-1709233955537-c2f14fc975c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3JpY2tldCUyMGJvd2xlciUyMGFjdGlvbnxlbnwwfHx8fDE3NTE4ODY4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        imageHint: 'cricket bowler action'
      },
      sideArticles: [
        {
            category: 'Interview',
            time: '5 days',
            title: "A coach's perspective on building a winning team",
            imageUrl: 'https://images.unsplash.com/photo-1685541000847-f764510e2175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjcmlja2V0JTIwY29hY2glMjB0YWxraW5nfGVufDB8fHx8MTc1MTg4Njg0NXww&ixlib=rb-4.1.0&q=80&w=1080',
            imageHint: 'cricket coach talking'
        },
        {
            category: 'Cricket',
            time: '6 days',
            title: "Fielding masterclass: How to save crucial runs",
            imageUrl: 'https://images.unsplash.com/photo-1586783895894-4c036d758b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjcmlja2V0JTIwZmllbGRpbmclMjBkaXZlfGVufDB8fHx8MTc1MTg4Njg0NXww&ixlib=rb-4.1.0&q=80&w=1080',
            imageHint: 'cricket fielding dive'
        }
      ]
    }
  ];
  
  const liveMatch = matches.find(m => m.status === 'Live');
  
  return (
    <div className="bg-background">
      <main className="container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <HeroSection article={heroArticle} />
          <RecentNews recentNews={recentNews} topStories={topStories} />
        </section>

        <TrendyNews news={trendyNews} />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <FeaturedNews articles={allFeaturedNews} />
          <LiveMatch match={liveMatch} />
        </section>

        <FaqSection />
      </main>
    </div>
  );
}
