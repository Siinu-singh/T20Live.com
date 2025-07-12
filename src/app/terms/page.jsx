
import { RankingsHero } from '@/components/rankings/rankings-hero';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms and Conditions | T20Live | Your Rights & Responsibilities',
  description: 'Read our terms and conditions for T20Live usage. Find out about user obligations, use of content, and how we provide a safe and fair experience for all cricket enthusiasts.',
  alternates: {
    canonical: '/terms',
  },
};

const TermsSection = ({ title, children }) => (
    <div className="space-y-4">
      <h2 className="font-semibold text-2xl border-b pb-2">{title}</h2>
      <div className="space-y-3 text-foreground/90 text-base">
        {children}
      </div>
    </div>
);


export default function TermsPage() {
  return (
    <>
      <RankingsHero
        title="Terms and Conditions"
        subtitle="Welcome to T20Live, your go to source of live T20 cricket scores, match news, updates, and analysis."
        topText="Legal"
        icon={<FileText className="w-5 h-5" />}
      />
      <div className="container py-16">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
            <p className="text-foreground/90 text-base">
                The following Terms and Conditions apply to your use of our website and services. By accessing or using T20Live, you undertake to comply with the terms set out below. If you do not agree, we request that you do not use the platform.
            </p>

            <TermsSection title="1. Acceptance of Terms">
                <p>
                    By accessing T20Live, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions, as well as our Privacy Policy. These terms bind all visitors, users, and others accessing the website.
                </p>
            </TermsSection>

            <TermsSection title="2. Use of Content">
                <p>
                    All material on T20Live such as live scores, facts and figures, articles, logos, photos, and design features is the intellectual property of T20Live or its licensors. Such material is provided for personal, noncommercial use only. Reproduction, distribution, or alteration of any material without our prior written consent is prohibited.
                </p>
            </TermsSection>
            
            <TermsSection title="3. User Conduct">
                <p>
                    We anticipate that users will behave on T20Live in a responsible and respectful manner. You undertake not to: Use the site for illegal or detrimental purposes, Try to hack, interfere with, or destroy the website or its information, Publish or send indecent, offensive, or deceptive material, Infringe intellectual property rights or privacy of other parties. We have the right to suspend or block access to violating users.
                </p>
            </TermsSection>

            <TermsSection title="4. Account & Subscriptions">
                <p>
                    Certain aspects of T20Live can make you subscribe or register. In creating an account or signing up to receive alerts, you consent to give us accurate and complete information. You are accountable for keeping your account credentials secure and for all actions taken under your account.
                </p>
            </TermsSection>

            <TermsSection title="5. Accuracy of Information">
                 <p>
                    T20Live strives to be accurate and timely in its data. Live scores, stats, and news sometimes may have errors or delays. We strive to be accurate but do not warrant the completeness or accuracy of any information on the site. Use official sources for the ultimate decision, particularly for betting or commercial purposes.
                </p>
            </TermsSection>

            <TermsSection title="6. Third Party Links">
                <p>
                    T20Live may have links to third party sites or services not owned or controlled by us. We are not liable for the content, privacy practices, or policies of third party sites. Usage of such links is at your risk.
                </p>
            </TermsSection>
            
            <TermsSection title="7. Disclaimer of Warranties">
                <p>
                    T20Live is offered as is and as available. We give no warranties, express or implied, in terms of the availability, reliability, or accuracy of our services. We do not warrant that the site will be uninterrupted, error free, or virus free.
                </p>
            </TermsSection>

             <TermsSection title="8. Limitation of Liability">
                <p>
                    T20Live is not liable for direct, indirect, incidental, or consequential damages arising from: Your use or inability to use the site, Errors or inaccuracies in the content, Unauthorized use or data losses, References to third party web pages, Use of our website is completely at your own risk and discretion.
                </p>
            </TermsSection>
            
            <TermsSection title="9. Modifications to Terms">
                <p>
                    We can make changes to these Terms and Conditions at any moment in time. Changes will be added to this page with an updated Effective Date. Ongoing use of T20Live following any changes indicates you accept the changed terms.
                </p>
            </TermsSection>

            <TermsSection title="10. Governing Law">
                 <p>
                    These terms are applied in accordance with the law and without reference to the conflict of law principles. Any disagreements emerging from these terms will be under the sole jurisdiction of the courts.
                </p>
            </TermsSection>
            
            <TermsSection title="11. Contact Us">
                <p>
                    In case you have any questions or issues with these Terms and Conditions, do not hesitate to contact us:
                </p>
                <p>
                    <strong>Email:</strong>
                    <a href="mailto:legal@t20live.com" className="text-primary font-medium ml-2 hover:underline">
                        legal@t20live.com
                    </a>
                </p>
                 <p>
                    <strong>Website:</strong>
                    <a href="https://www.t20live.com" className="text-primary font-medium ml-2 hover:underline" target="_blank" rel="noopener noreferrer">
                        www.t20live.com
                    </a>
                </p>
            </TermsSection>
            
            <div className="text-center bg-card p-8 rounded-2xl border">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Thank You for Choosing T20Live</h2>
              <p className="mt-4 text-foreground/90 text-base md:text-lg">
                We value your confidence in T20Live. Our goal is to provide timely, reliable, and thrilling cricket coverage while making every user have a secure, respectful, and equitable experience. Let's enjoy the thrill of T20 cricket together.
              </p>
          </div>
        </div>
      </div>
    </>
  );
}
