import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Cairn Guide',
  description: 'Privacy Policy for the Cairn Guide.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-field-paper bg-paper-texture px-4 py-12 text-bark">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <div className="journal-card mt-8 space-y-4 p-6 font-body text-sm leading-relaxed text-bark-light">
          <p>
            Cairn Guide does not run user accounts, comment systems, or forms that ask visitors to submit personal
            information directly to us.
          </p>
          <p>
            Like most websites, we use third-party services such as Google Analytics and Google AdSense. Those
            services may collect technical information such as browser type, device type, approximate location, and
            page activity according to their own privacy policies.
          </p>
          <p>
            We use aggregate traffic information to understand which guides are helpful, improve site performance, and
            keep the guide updated. We do not sell personal data and we do not maintain a first-party database of
            individual visitor profiles.
          </p>
          <p>
            If you have questions about this policy, contact us at <span className="font-semibold">sonic6640@gmail.com</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
