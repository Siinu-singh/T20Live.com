import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Info } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about T20Live and our mission to bring you the best live cricket experience.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <RankingsHero
        title="About T20Live"
        subtitle="Learn more about T20Live and our mission to bring you the best live cricket experience."
        topText="Our Mission"
        icon={<Info className="w-5 h-5" />}
      />
      <div className="container max-w-4xl py-12">
        <div className="space-y-6 text-foreground/90 text-base md:text-lg">
          <p>
            Our mission is to revolutionize the way cricket fans follow the game. We believe in providing a seamless, engaging, and modern platform that not only delivers live scores but also offers unique insights that enhance the viewing experience.
          </p>
          <p>
            We leverage cutting-edge technology to deliver a fast, reliable, and beautiful user experience. Our platform is built with a passion for cricket and a commitment to user-centric design.
          </p>
          <p>
            From the vibrant colors that capture the energy of T20 cricket to the clean, responsive layout, every aspect of T20Live is designed with the fan in mind. Whether you're on your desktop or on the go, we ensure you have the best seat in the house.
          </p>
        </div>
      </div>
    </>
  );
}
