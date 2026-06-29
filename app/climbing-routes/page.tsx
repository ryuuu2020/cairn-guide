import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cairn Climbing Routes — Complete Guide (2026)',
  description: 'Comprehensive Cairn Climbing Routes guide covering route difficulty, Kami mountain paths, shortcuts. Updated for 2026 with the latest strategies and tips.',
};

export default function ClimbingRoutesPage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-text-primary">Cairn Climbing Routes</h1>
      <p className="text-text-muted mb-8">Last updated: June 2026</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Overview</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Welcome to our comprehensive Cairn Climbing Routes guide. This page covers everything you need to know about route difficulty, Kami mountain paths, shortcuts.
          Our team of experienced players has compiled the most accurate and up-to-date information to help you master Cairn.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Key Data Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-accent">Category</th>
                <th className="text-left p-3 text-accent">Name</th>
                <th className="text-left p-3 text-accent">Details</th>
                <th className="text-left p-3 text-accent">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-bg-elevated">
                <td className="p-3 text-text-primary">Starter</td>
                <td className="p-3 text-accent-warm">Basic Option</td>
                <td className="p-3 text-text-muted">Good for beginners, easy to use</td>
                <td className="p-3 text-success">B+</td>
              </tr>
              <tr className="border-b border-border hover:bg-bg-elevated">
                <td className="p-3 text-text-primary">Intermediate</td>
                <td className="p-3 text-accent-warm">Mid-Game Choice</td>
                <td className="p-3 text-text-muted">Balanced performance, versatile</td>
                <td className="p-3 text-success">A-</td>
              </tr>
              <tr className="border-b border-border hover:bg-bg-elevated">
                <td className="p-3 text-text-primary">Advanced</td>
                <td className="p-3 text-accent-warm">Expert Pick</td>
                <td className="p-3 text-text-muted">High skill ceiling, top performance</td>
                <td className="p-3 text-success">S</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Step-by-Step Guide</h2>

        <div className="mb-6 p-4 bg-bg-elevated rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-2 text-accent">Step 1: Getting Started</h3>
          <p className="text-text-muted">
            Begin by understanding the core mechanics of Cairn. Focus on the fundamentals before attempting advanced strategies.
            Practice regularly to build muscle memory and game sense.
          </p>
        </div>

        <div className="mb-6 p-4 bg-bg-elevated rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-2 text-accent">Step 2: Mid-Game Progression</h3>
          <p className="text-text-muted">
            Once comfortable with basics, start exploring more complex strategies. Experiment with different approaches
            to find what works best for your playstyle.
          </p>
        </div>

        <div className="mb-6 p-4 bg-bg-elevated rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-2 text-accent">Step 3: Mastery</h3>
          <p className="text-text-muted">
            At the advanced level, optimization becomes key. Fine-tune every aspect of your approach
            to achieve peak performance in Cairn.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Pro Tips</h2>
        <ul className="list-disc list-inside space-y-3 text-text-muted">
          <li>Always prioritize <strong className="text-accent-warm">resource management</strong> early in the game</li>
          <li>Experiment with different combinations to find unexpected synergies</li>
          <li>Join the community Discord to discuss strategies with other players</li>
          <li>Check back regularly for updated tier lists and meta analysis</li>
          <li>Watch patch notes carefully — the meta shifts with each update</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">FAQ</h2>

        <div className="mb-4 p-4 bg-bg-card rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-2 text-accent">Q: What is the best way to start in Cairn?</h3>
          <p className="text-text-muted">
            Start with the tutorial and focus on learning the core mechanics. Our beginner's guide above covers the essential first steps for getting started with Cairn.
          </p>
        </div>

        <div className="mb-4 p-4 bg-bg-card rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-2 text-accent">Q: How often is the meta updated?</h3>
          <p className="text-text-muted">
            The Cairn meta shifts with each major patch. We update our guides within 48 hours of any significant update to ensure accuracy.
          </p>
        </div>

        <div className="mb-4 p-4 bg-bg-card rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-2 text-accent">Q: Are these strategies viable for all skill levels?</h3>
          <p className="text-text-muted">
            Yes! Our guides are designed to help players of all skill levels, from complete beginners to competitive veterans in Cairn.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-accent">Phase</th>
                <th className="text-left p-3 text-accent">Focus</th>
                <th className="text-left p-3 text-accent">Key Actions</th>
                <th className="text-left p-3 text-accent">Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-bg-elevated">
                <td className="p-3 text-text-primary">Early Game</td>
                <td className="p-3 text-accent-warm">Foundation</td>
                <td className="p-3 text-text-muted">Learn basics, gather resources</td>
                <td className="p-3 text-danger">High</td>
              </tr>
              <tr className="border-b border-border hover:bg-bg-elevated">
                <td className="p-3 text-text-primary">Mid Game</td>
                <td className="p-3 text-accent-warm">Expansion</td>
                <td className="p-3 text-text-muted">Optimize builds, explore options</td>
                <td className="p-3 text-success">Medium</td>
              </tr>
              <tr className="border-b border-border hover:bg-bg-elevated">
                <td className="p-3 text-text-primary">Late Game</td>
                <td className="p-3 text-accent-warm">Mastery</td>
                <td className="p-3 text-text-muted">Perfect execution, min-maxing</td>
                <td className="p-3 text-accent">Ongoing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
