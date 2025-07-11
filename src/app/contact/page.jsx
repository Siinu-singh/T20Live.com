import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the T20Live team. We\'d love to hear from you!',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <RankingsHero
        title="Contact Us"
        subtitle="Have questions, feedback, or partnership inquiries? We'd love to hear from you."
        topText="Get In Touch"
        icon={<Mail className="w-5 h-5" />}
      />
      <div className="container max-w-4xl py-12">
        <div className="space-y-6 text-foreground/90 text-base md:text-lg">
          <p>
            For any general questions or feedback about our platform, please feel free to reach out. We are constantly working to improve the T20Live experience and your input is valuable to us.
          </p>
          <div>
            <h3 className="font-semibold text-xl mb-2">Email Us</h3>
            <p>
              You can contact our support team directly via email:
              <a href="mailto:support@t20live.example.com" className="text-primary font-medium ml-2">
                support@t20live.example.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Business Inquiries</h3>
            <p>
              For any business or partnership related inquiries, please contact our business development team at:
              <a href="mailto:business@t20live.example.com" className="text-primary font-medium ml-2">
                business@t20live.example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
