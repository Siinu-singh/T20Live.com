
import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Mail, Clock, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | T20Live | We’re Here to Assist You',
  description: 'Have questions or feedback? Get in touch with the T20Live team for support, suggestions, or media inquiries. We’re always ready to help passionate cricket fans.',
  alternates: {
    canonical: '/contact',
  },
};

const ContactSection = ({ icon, title, children }) => (
    <div className="bg-card p-8 rounded-2xl border flex flex-col items-center gap-6">
        <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-4">
            {icon}
        </div>
        <div className="flex-1">
            <h3 className="font-bold text-2xl mb-2">{title}</h3>
            <div className="space-y-3 text-foreground/90 text-base md:text-lg">
                {children}
            </div>
        </div>
    </div>
);

export default function ContactPage() {
  return (
    <>
      <RankingsHero
        title="Let’s Stay Connected"
        subtitle="At T20Live, we do not only report the game we hear out our fans. If you need to ask a question regarding live scores, have a feature idea, or just want to give feedback on some recent match, we are here for you."
        topText="Contact Us"
        icon={<Mail className="w-5 h-5" />}
      />
      <div className="container py-16">
        <div className="max-w-4xl mx-auto space-y-10 text-center">
            <p className="text-foreground/90 text-base md:text-lg">
                Your input helps us develop, enhance, and keep on bringing you the fastest, most reliable T20 cricket news. Get in touch we look forward to hearing from you.
            </p>

            <ContactSection icon={<Mail className="w-7 h-7" />} title="General Support & Queries">
                <p>
                    For website queries, score update issues, match statistics, or account related issues, feel free to email us anytime. We'll get back to you within 24 to 48 working hours.
                </p>
                <p>
                    <strong>Email:</strong>
                    <a href="mailto:support@t20live.com" className="text-primary font-medium ml-2 hover:underline">
                        support@t20live.com
                    </a>
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>Support Timings: Monday to Saturday, 10:00 AM to 6:00 PM (IST)</span>
                </div>
            </ContactSection>

            <ContactSection icon={<Briefcase className="w-7 h-7" />} title="Business & Partnership Opportunities">
                 <p>
                    If you're a brand, content creator, or publisher seeking to work with us for ads, sponsored content, or data collaborations we're keen on discussions that benefit cricket fans.
                </p>
                <p>
                    <strong>Partnerships:</strong>
                    <a href="mailto:partnerships@t20live.com" className="text-primary font-medium ml-2 hover:underline">
                        partnerships@t20live.com
                    </a>
                </p>
            </ContactSection>

            <div className="text-foreground/90 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">We’re Listening</h2>
                <p className="max-w-2xl mx-auto text-base md:text-lg">
                    At T20Live, our mission is straightforward to bring cricket coverage quicker, smarter, and more thrilling. Your voice matters greatly in helping us reach that. it's a technical query, an idea for content, or an appreciation don't shy away from us.
                </p>
                <p className="font-semibold text-lg text-primary">
                    Thanks for being part of the T20Live community. Together, let's adore the magic of each over.
                </p>
            </div>
        </div>
      </div>
    </>
  );
}
