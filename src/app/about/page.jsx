
import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Info } from 'lucide-react';

export const metadata = {
  title: 'About Us | T20Live| Your Real Time T20 Cricket Companion',
  description: 'Find out about T20Live a platform designed for T20 cricket fans. From real time scores to expert commentary, see how we deliver the excitement of every delivery on your screen.',
  alternates: {
    canonical: '/about',
  },
};

const AboutSection = ({ title, children }) => (
  <div className="space-y-4">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
    <div className="space-y-4 text-foreground/90 text-base md:text-lg">
      {children}
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <>
      <RankingsHero
        title="About T20Live"
        subtitle="At T20Live, we are living and breathing T20 cricket the game changer of a format that shocked the world with pace, intensity, and edge of the seat tension."
        topText="Our Story"
        icon={<Info className="w-5 h-5" />}
      />
      <div className="container py-16">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <p className="text-foreground/90 text-base md:text-lg">
            Born out of the passion of pure cricket aficionados, T20Live was developed to address a simple issue: how to track T20 matches quicker, wiser, and more meaningfully. In a game where a single ball can turn the game on its head, we think fans need live updates that are as fast and dynamic as the game itself and take the scoreboard a little more beyond.
          </p>

          <AboutSection title="What We Do">
            <p>
              T20Live is your one stop shop for T20 match coverage, providing: Live Scores & Ball by Ball Commentary, Future Fixtures & Tournament Calendar, Match Results, Highlights, and Scores, Player Statistics, Team Facts, and Records, T20 Cricket News, Reports, & Editorial Features.
            </p>
            <p>
              We provide coverage of all the top T20 leagues and international series from the IPL, BBL, and PSL to ICC T20 World Cups and more. You want to watch India v Australia or the emergence of a new star in a lesser known league, T20Live means you never have to miss a moment.
            </p>
          </AboutSection>
          
          <AboutSection title="Home to All Fans">
            <p>
              T20Live is designed with fans in mind. We understand that T20 cricket brings people together across ages and nations. You're a fantasy league captain, an analyst who crunches numbers, or you simply watch the game occasionally and check scores between meetings our website is your home.
            </p>
            <p>
              You can tailor your experience, track favorite teams, receive match alerts, and watch matches in formats that are your way from bite sized overviews to in depth data dives.
            </p>
          </AboutSection>

          <AboutSection title="Why T20Live?">
            <p>
              In contrast to broad sports sites, T20Live is solely dedicated to T20 cricket. That translates to more accuracy, improved depth, and a more acute fan experience. Our real time technology refreshes scores in an instant, and our writers give you content with context not numbers, but stories.
            </p>
             <p>
              Accuracy, velocity, and simplicity matter to us, and we continually refine based on input from the very individuals we're here to support: cricket enthusiasts like you.
            </p>
          </AboutSection>

          <AboutSection title="By Fans, for Fans">
            <p>
              Our squad consists of cricket journalists, data geeks, ex players, and above all people just like you. We understand what it's like to refresh a page in a final over or win with your heart pounding on the last ball.
            </p>
             <p>
              That's the passion we infuse into T20Live. It's not a product. It's a community. It's where cricket breathes outside of the lines, the numbers, and the feelings.
            </p>
          </AboutSection>
          
           <AboutSection title="Let's Connect">
            <p>
              Get suggestions, feedback, or business partnership ideas? We listen. T20Live is growing every day, and we want you to be a part of it. Stay with us on social media for live match memes, chats, and expert opinions. Let's discuss cricket 20 overs at a time.
            </p>
          </AboutSection>

          <div className="text-center bg-card p-8 rounded-2xl border">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Thank You for Being a Part of T20Live</h2>
              <p className="mt-4 text-foreground/90 text-base md:text-lg">
                Every fan counts. Every ball matters. At T20Live, we’re honored to be your companion through it all. it’s a thrilling chase, a hat trick, or a boundary that lights up the stadium we’ll be there to bring it to your screen.
              </p>
              <p className="mt-4 text-lg md:text-xl font-semibold text-primary">T20Live  because in the world of T20, every second counts.</p>
          </div>
        </div>
      </div>
    </>
  );
}
