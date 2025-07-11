import { RankingsHero } from '@/components/rankings/rankings-hero';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions for using the T20Live service.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <RankingsHero
        title="Terms of Service"
        subtitle="Please read these terms and conditions carefully before using Our Service."
        topText="Legal"
        icon={<FileText className="w-5 h-5" />}
      />
      <div className="container max-w-4xl py-12">
        <div className="space-y-6 text-foreground/90 text-base">
          <h2 className="font-semibold text-2xl border-b pb-2">Interpretation and Definitions</h2>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>
          <h2 className="font-semibold text-2xl border-b pb-2">Acknowledgment</h2>
          <p>
            These are the Terms of Service governing the use of this Service and the agreement that operates between You and the Company. These Terms of Service set out the rights and obligations of all users regarding the use of the Service.
          </p>
          <p>
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms of Service. These Terms of Service apply to all visitors, users and others who access or use the Service.
          </p>
          <h2 className="font-semibold text-2xl border-b pb-2">Limitation of Liability</h2>
          <p>
            The data provided on T20Live is for informational purposes only. We do not guarantee the accuracy or timeliness of the information. Use of this service is at your own risk.
          </p>
        </div>
      </div>
    </>
  );
}
