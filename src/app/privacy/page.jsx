
import { RankingsHero } from '@/components/rankings/rankings-hero';
import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | T20Live | Your Data, Our Responsibility',
  description: 'Check out the T20Live Privacy Policy to see how we collect, use, and keep your personal data safe. We value your privacy and trust above everything else.',
  alternates: {
    canonical: '/privacy',
  },
};

const PolicySection = ({ title, children }) => (
    <div className="space-y-4">
      <h2 className="font-semibold text-2xl border-b pb-2">{title}</h2>
      <div className="space-y-3 text-foreground/90 text-base">
        {children}
      </div>
    </div>
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <RankingsHero
        title="Privacy Policy"
        subtitle="At T20Live, your privacy matters to us. We strive to safeguard your personal information and provide a secure and safe browsing experience."
        topText="Your Data, Our Responsibility"
        icon={<Shield className="w-5 h-5" />}
      />
      <div className="container py-16">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
            <p className="text-foreground/90 text-base">
                By accessing T20Live, you consent to the terms of this policy. If you don't agree, we suggest that you stop using our services.
            </p>

            <PolicySection title="Information We Collect">
                <p>
                    You may provide us with both personal and non personal data whenever you access T20Live. This may consist of: Your name and email address (if you subscribe to newsletters or alerts), Device and browser information, IP address and geolocation, Pages visited and time spent on our site, Preferences and interactions with our features. We also employ cookies and similar technology to offer an improved user experience, remember your preferences, and analyze traffic patterns.
                </p>
            </PolicySection>

            <PolicySection title="How We Use Your Information">
                <p>
                    The data we gather assists us in: Delivering live scores accurately and content that is tailored to you, Optimizing website speed, design, and user experience, Responding to user support inquiries and feedback, Sending you notifications or newsletters (if you choose to opt in), Identifying and preventing fraudulent or malicious activity. We do not rent or sell your personal information to third parties.
                </p>
            </PolicySection>
            
            <PolicySection title="Third Party Services">
                <p>
                    T20Live can employ trusted third party services like Google Analytics or advertisement networks to improve our services. The providers may set their own cookie or monitor your usage according to their privacy policies. We do not have control over how these third party tools deal with your data but only engage companies having strong privacy practices.
                </p>
            </PolicySection>
            
            <PolicySection title="Cookies Policy">
                <p>
                    Cookies are tiny text files placed on your device to enhance your experience when browsing. T20Live employs cookies to: Remember your preferences and settings, Analyze user behavior for site optimization, Deliver relevant content and restricted ads. You can opt to manage or turn off cookies via your browser options, though some site functionality may not work as intended as a consequence.
                </p>
            </PolicySection>

            <PolicySection title="Communication by Email">
                <p>
                    If you have signed up for our newsletter or match alerts, we will send you appropriate updates. You can unsubscribe at any time by clicking the unsubscribe link at the bottom of any email or directly by contacting us on privacy@t20live.com.
                </p>
            </PolicySection>

            <PolicySection title="Data Protection">
                 <p>
                    We respect your privacy. T20Live has security features like SSL encryption, firewalls, and secure servers to shield your information. No system is 100% safe, but we do our best to secure your information against unauthorized access, misuse, or loss.
                </p>
            </PolicySection>

            <PolicySection title="Children's Privacy">
                <p>
                    T20Live is not suitable for use by children under the age of 13. We do not knowingly collect and store personal information from children. If we find that a child has provided personal information, we shall take all reasonable measures to delete it promptly.
                </p>
            </PolicySection>

             <PolicySection title="Your Rights">
                <p>
                    You are entitled to: Access or update your personal data, Withdraw consent or unsubscribe from messages, Ask us to delete your data, Report issues about misuse, To invoke any of these rights, just email us at privacy@T20live.com.
                </p>
            </PolicySection>
            
            <PolicySection title="Changes to This Policy">
                <p>
                    We can make changes to this Privacy Policy at any time to accommodate changes in laws, technology, or practices. Any changes will be posted here with an updated effective date. By continuing to use the site after updates, you agree to the updated terms.
                </p>
            </PolicySection>

            <PolicySection title="Contact Us">
                <p>
                    Have questions regarding our privacy practices or how your data is being treated?
                </p>
                <p>
                    <strong>Email:</strong>
                    <a href="mailto:privacy@t20live.com" className="text-primary font-medium ml-2 hover:underline">
                        privacy@t20live.com
                    </a>
                </p>
                 <p>
                    <strong>Website:</strong>
                    <a href="https://www.t20live.com" className="text-primary font-medium ml-2 hover:underline" target="_blank" rel="noopener noreferrer">
                        www.t20live.com
                    </a>
                </p>
            </PolicySection>

            <div className="text-center bg-card p-8 rounded-2xl border">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Thank You for Trusting T20Live</h2>
              <p className="mt-4 text-foreground/90 text-base md:text-lg">
                Your trust and privacy are important to us. At T20Live, we take pride in building a safe, open, and thrilling environment for all cricket enthusiasts one where your personal data is treated with care and responsibility.
              </p>
          </div>
        </div>
      </div>
    </>
  );
}
