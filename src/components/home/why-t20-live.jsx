import { Radio, Calendar, Users, Newspaper, LineChart, Globe, Heart, MessageSquare } from "lucide-react";

const Feature = ({ icon, title, children }) => (
    <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-6">
        <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-4">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{children}</p>
        </div>
    </div>
);

export function WhyT20Live() {
    return (
        <section className="py-16 sm:py-24 bg-card rounded-2xl">
            <div className="container mx-auto px-4 space-y-16">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Welcome to T20Live</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Every Ball. Every Run. Every Heartbeat.</p>
                    <p className="mt-6 text-foreground/80">
                        The big hits, nail biting finishes, and quicker than quicks make it the heartbeat of cricket fans around the world. At T20Live, we take that heartbeat to your screen live, up to date, and edge of the seat, just the way T20 cricket is meant to be. Whether it’s an international T20 showdown, a domestic league like the IPL, or emerging tournaments from around the world, T20Live delivers real time scores, match highlights, insightful analysis, and up to date news all in one place. We’re not just about numbers. We’re about the story behind every delivery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    <Feature icon={<Radio className="w-7 h-7" />} title="Live Scores Without Delay">
                        T20 matches move at lightning speed, and so do we. Our live score engine updates in real time so you’re never behind the action. Whether you're watching from the stands, waiting in traffic, or catching a peek at your phone between meetings, T20Live gets you in the match with ball by ball commentary, player stats, and highlights delivered on the spot.
                    </Feature>

                    <Feature icon={<Calendar className="w-7 h-7" />} title="Fixtures, Results & Schedules">
                        With T20Live's easy to use match center, you can see upcoming games, match times, venue information, and completed scorecards in an easy, structured layout. You can sort matches by date, team, tournament, or country, putting you in charge of your cricket schedule.
                    </Feature>

                    <Feature icon={<Users className="w-7 h-7" />} title="Player & Team Insights">
                        On T20Live, you receive detailed player profiles of your favorite players from their batting strike rates and economy bowling figures to recent form and career milestones. Our data driven graphics and expert opinion assist you in tracking the game within the game.
                    </Feature>

                    <Feature icon={<Newspaper className="w-7 h-7" />} title="Breaking News, Not Breakin' Balls">
                        T20Live keeps you in the loop, not just on scores, but on all that molds the game, is team announcements, injury updates, squad overhauls, venue information, and in depth interviews. Our editorial staff delivers quick, fact checked cricket news with a beat on what matters to fans.
                    </Feature>
                    
                     <Feature icon={<LineChart className="w-7 h-7" />} title="Live Stats & Analytics">
                        With our match momentum meters, win probability graphs, and comparison tools, we provide a smarter way of comprehending the match. T20Live transforms raw data into useful insight, making all viewers intelligent fans.
                    </Feature>

                    <Feature icon={<Globe className="w-7 h-7" />} title="Global T20 Coverage">
                        T20 is a global phenomenon. That's why T20Live covers leagues from all cricket loving countries. Our objective is to provide equal emphasis to the legends and the young guns, irrespective of the venue where the game is being played.
                    </Feature>
                    
                    <Feature icon={<Heart className="w-7 h-7" />} title="Fan Centric Features">
                        T20Live is designed for you. Set alerts for matches, track your favorite teams, and customize your view. Prefer dark mode for evening matches? Only want to see your national team's fixtures? T20Live is completely responsive and customizable.
                    </Feature>

                    <Feature icon={<MessageSquare className="w-7 h-7" />} title="Interactive, Not Just Informative">
                        We think the heart of cricket is the fans, so we welcome debate, polls, match previews, and social media engagement. From matchday reactions to memes and trivia, we bring the T20 cricket culture to life.
                    </Feature>
                </div>
                 <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Join the T20Live Community</h2>
                    <p className="mt-6 text-foreground/80">
                       Whether you’re cheering from the stands, watching from home, or following updates on the go, T20Live is your companion for every match. We’re fast, reliable, easy to use, and built on one core belief: every moment in T20 cricket deserves to be felt. So save T20Live, track your team, set your reminders, and never miss the excitement of a six, a super over, or a stumping that changes the game. Because at T20Live, cricket isn't just a sport, it's a heartbeat, and we make it happen.
                    </p>
                </div>
            </div>
        </section>
    );
}
