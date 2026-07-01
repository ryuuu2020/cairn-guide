import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Cairn Guide',
  description: 'Terms of Service for the Cairn Guide.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-field-paper bg-paper-texture px-4 py-12 text-bark">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight">Terms of Service</h1>
        <div className="journal-card mt-8 space-y-4 p-6 font-body text-sm leading-relaxed text-bark-light">
          <p>
            Cairn Guide is an unofficial fan resource. All route notes, survival tips, and strategy recommendations
            are provided for informational purposes only.
          </p>
          <p>
            We aim to keep this guide accurate, but patches, balancing updates, and new discoveries can make specific
            details outdated. Use your own judgment when applying any recommendation during a run.
          </p>
          <p>
            Game names, screenshots, mechanics, and trademarks related to Cairn remain the property of The Game
            Bakers and their respective rights holders. This site is not affiliated with them.
          </p>
          <p>
            By using the site, you agree that external links, advertisements, and third-party services are accessed at
            your own discretion and under their own terms.
          </p>
        </div>
      </div>
    </main>
  );
}
