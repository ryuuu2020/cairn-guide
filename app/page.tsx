'use client';
import { useState, useRef, useEffect } from 'react';

/* ============================================
   Template C: Field Journal
   Horizontal Scroll Nav + Asymmetric Layout + Hand-Drawn Elements
   ============================================ */

const NAV_ITEMS = [
  { label: 'Field Journal', href: '/', active: true },
  { label: 'Beginners Guide', href: '/guides' },
  { label: 'Climbing Routes', href: '/crafting' },
  { label: 'Gear & Equipment', href: '/map' },
  { label: 'Survival Tips', href: '/tips' },
  { label: 'Map & Locations', href: '/community' },
];

const FEATURED_GUIDES = [
  {
    title: 'Cairn Beginners Guide',
    excerpt: 'Everything you need to know to get started in Cairn. Core mechanics, survival climbing game, and essential tips for beginners.',
    tag: 'GUIDE',
    tagType: 'moss' as const,
    readTime: '12 min read',
  },
  {
    title: 'Cairn Tier List & Best Strategies',
    excerpt: 'Comprehensive tier rankings and proven strategies for Cairn. Updated for the latest patch with community-verified data.',
    tag: 'TUTORIAL',
    tagType: 'terracotta' as const,
    readTime: '15 min read',
  },
];

const CRAFTING_RECIPES = [
  { name: 'Basic Anchor', materials: 'Basic Anchor_MATS', tier: 'Basic Anchor_TIER' },
  { name: 'Ice Axe (Forged)', materials: 'Ice Axe (Forged)_MATS', tier: 'Ice Axe (Forged)_TIER' },
  { name: 'Climbing Harness', materials: 'Climbing Harness_MATS', tier: 'Climbing Harness_TIER' },
  { name: 'Portable Bivouac', materials: 'Portable Bivouac_MATS', tier: 'Portable Bivouac_TIER' },
];

const TIPS = [
  { tip: 'Always place anchors before attempting difficult sections. A single fall can end your run.', category: 'Always place anchors before attempting difficult sections. A single fall can end your run._CAT' },
  { tip: 'Monitor weather patterns closely. Climbing in a storm drastically reduces grip and visibility.', category: 'Monitor weather patterns closely. Climbing in a storm drastically reduces grip and visibility._CAT' },
  { tip: 'Use rest stances to recover stamina mid-climb. Look for ledges and cracks in the wall.', category: 'Use rest stances to recover stamina mid-climb. Look for ledges and cracks in the wall._CAT' },
  { tip: 'Bring at least 20% more supplies than you think you will need for any expedition.', category: 'Bring at least 20% more supplies than you think you will need for any expedition._CAT' },
];

export default function HomePage() {
  const [activeNav, setActiveNav] = useState(NAV_ITEMS[0].label);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll active pill into view
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeEl = container.querySelector('.nav-pill.active');
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeNav]);

  return (
    <div className="min-h-screen bg-field-paper bg-paper-texture">

      {/* ===== Header ===== */}
      <header className="pt-12 pb-6 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          {/* Site title - hand-drawn feel */}
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-bark leading-none">
            Cairn
          </h1>
          <p className="font-body text-base text-stone mt-3 max-w-md leading-relaxed italic">
            Master the mountain. Survive the climb.
          </p>

          {/* Horizontal scroll nav */}
          <div className="w-full mt-8">
            <div
              ref={scrollRef}
              className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveNav(item.label)}
                  className={`nav-pill ${activeNav === item.label ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hand-drawn separator */}
        <div className="field-divider mt-6" />
      </header>

      {/* ===== Main Content: Asymmetric Layout ===== */}
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ===== Main Column (wider, left) ===== */}
          <div className="flex-1 lg:max-w-[65%] space-y-16">

            {/* --- Welcome / Hero message --- */}
            <section>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-bark leading-tight text-balance">
                Your Complete Guide to Cairn
              </h2>
              <p className="font-body text-lg text-bark-light leading-relaxed mt-4 max-w-2xl">
                Cairn is a brutally realistic survival climbing game by The Game Bakers. Conquer the treacherous slopes of Mount Kami, manage your stamina, plan your routes, and survive the elements. This guide covers everything from your first ascent to expert climbing techniques.
              </p>
            </section>

            {/* --- Featured Guides --- */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-bark">
                    Featured Guides
                  </h3>
                  <p className="font-body text-sm text-stone mt-1">
                    Hand-picked guides to get you climbing faster
                  </p>
                </div>
                <a
                  href="/guides"
                  className="font-body text-sm font-semibold text-moss hover:text-moss-dark transition-colors"
                >
                  View all &rarr;
                </a>
              </div>

              <div className="space-y-4">
                {FEATURED_GUIDES.map((guide, i) => (
                  <a
                    key={i}
                    href={`/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="journal-card block p-6 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`field-tag ${guide.tagType}`}>
                            {guide.tag}
                          </span>
                        </div>
                        <h4 className="font-display text-lg font-semibold text-bark
                                       group-hover:text-moss transition-colors duration-200">
                          {guide.title}
                        </h4>
                        <p className="font-body text-sm text-bark-light leading-relaxed mt-2 line-clamp-2">
                          {guide.excerpt}
                        </p>
                      </div>
                      <span className="font-body text-xs text-stone whitespace-nowrap">
                        {guide.readTime} min read
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* --- Getting Started Steps --- */}
            <section>
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-bark">
                  Getting Started
                </h3>
                <p className="font-body text-sm text-stone mt-1">
                  Follow these steps to go from novice climber to summit conqueror
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { step: '01', title: 'Learn the Basics', desc: 'Master core climbing mechanics: grip management, stamina control, and basic rope work. Complete the tutorial climb to understand fundamental movement.' },
                  { step: '02', title: 'Plan Your Route', desc: 'Study the mountain map, identify safe bivouac points, and choose routes that match your skill level. Proper route planning prevents deadly situations.' },
                  { step: '03', title: 'Conquer the Summit', desc: 'Apply advanced techniques like dynamic moves, ice climbing, and high-altitude survival. The summit push requires perfect execution under extreme conditions.' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <span className="step-number shrink-0">{s.step}</span>
                    <div>
                      <h4 className="font-display text-base font-semibold text-bark">
                        {s.title}
                      </h4>
                      <p className="font-body text-sm text-bark-light leading-relaxed mt-1">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* --- Tips & Tricks --- */}
            <section>
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-bark">
                  Field Tips
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TIPS.map((item, i) => (
                  <div key={i} className="journal-card p-4">
                    <span className="field-tag stone text-[10px] mb-2 inline-block">
                      {item.category}
                    </span>
                    <p className="font-body text-sm text-bark leading-relaxed">
                      {item.tip}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ===== Sidebar (narrower, right) ===== */}
          <aside className="lg:w-[30%] space-y-10 shrink-0">
            {/* --- Crafting Quick Reference --- */}
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">
                Crafting Recipes
              </h3>
              <div className="space-y-3">
                {CRAFTING_RECIPES.map((recipe, i) => (
                  <div key={i} className="recipe-card">
                    <h4 className="font-display text-sm font-semibold text-bark">
                      {recipe.name}
                    </h4>
                    <p className="font-body text-xs text-stone mt-1 leading-relaxed">
                      {recipe.materials}
                    </p>
                    <span className="field-tag terracotta text-[10px] mt-2 inline-block">
                      Tier {recipe.tier}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="/crafting"
                className="inline-block font-body text-xs font-semibold text-moss hover:text-moss-dark transition-colors mt-4"
              >
                Full crafting list &rarr;
              </a>
            </div>

            {/* --- Community Updates --- */}
            <div className="field-sidebar-block">
              <h3 className="font-display text-base font-semibold text-bark mb-4">
                Community Updates
              </h3>
              <div className="space-y-4">
                {[
                  { date: 'Jun 26', text: 'Patch 0.5.2 released with new climbing animations and anchor placement bug fixes.' },
                  { date: 'Jun 20', text: 'Community speedrun record: Mount Kami summit in 42 minutes by pro climber AlpineGhost.' },
                  { date: 'Jun 12', text: 'Dev blog: New mountain region Frostfang Peak announced for the next major update.' },
                ].map((update, i) => (
                  <div key={i}>
                    <span className="font-body text-[11px] text-stone">
                      {update.date}
                    </span>
                    <p className="font-body text-sm text-bark-light mt-0.5 leading-relaxed">
                      {update.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Afdian support card --- */}
            <div className="bg-moss-light/50 border border-moss/20 p-6">
              <h3 className="font-display text-sm font-semibold text-moss-dark mb-2">
                Support This Project
              </h3>
              <p className="font-body text-xs text-bark-light leading-relaxed mb-4">
                Enjoying our Cairn guides? Help us keep the content free and updated by supporting us on Afdian.
              </p>
              <a
                href="https://afdian.com/a/gameguidehub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill
                           bg-moss text-white text-sm font-semibold
                           hover:bg-moss-dark transition-colors duration-200"
              >
                ❤️ Support Us
              </a>
            </div>
          </aside>

        </div>

        {/* Bottom separator */}
        <div className="field-divider mt-16" />
      </main>

      {/* ===== Footer ===== */}
      <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
        {/* More Game Guides */}
        <div className="mb-6 pb-6 border-b border-clay/30">
          <p className="font-body text-xs text-stone mb-3 text-center">More Game Guides</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://solarpunk-game-wiki.vercel.app" className="font-body text-xs text-bark-light hover:text-bark transition-colors">Solarpunk Guide</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-body text-sm text-stone">
              &copy; {new Date().getFullYear()} Cairn
            </span>
            <a
              href="/privacy"
              className="font-body text-sm text-stone hover:text-bark transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="font-body text-sm text-stone hover:text-bark transition-colors"
            >
              Terms
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://afdian.com/a/gameguidehub"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors"
            >
              Afdian &rarr;
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
