import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cairn Resources Guide — Gathering, Crafting & Survival Essentials (2026)',
  description: 'Complete Cairn resources guide covering all essential climbing gear materials, food and water management, and crafting resource priorities for every summit attempt.',
};

const RESOURCE_CATEGORIES = [
  {
    category: 'Climbing Gear Materials',
    items: [
      { name: 'Rope', source: 'Hemp plants (low altitude), trader purchase', use: 'Fixed lines, rappelling, hauling gear', priority: 'Critical — never climb without 30m+ of rope' },
      { name: 'Carabiners', source: 'Forge (iron ore), trader purchase, loot from supply caches', use: 'Anchor points, quickdraws, gear attachment', priority: 'High — 5 minimum for any route with fixed protection' },
      { name: 'Crampons', source: 'Forge (steel), high-altitude loot', use: 'Ice and hard snow travel. Essential above 4000m', priority: 'High above snow line. Below snow line, not needed' },
      { name: 'Ice Axe', source: 'Forge (steel + wood), high-altitude trader', use: 'Self-arrest, ice climbing, anchor building in snow', priority: 'Mandatory for any route with ice or steep snow' },
      { name: 'Helmet', source: 'Craft (leather + metal), starting gear', use: 'Rockfall protection. Reduces head injury chance by 70%', priority: 'Always wear. Never climb without helmet' },
    ],
  },
  {
    category: 'Food & Water',
    items: [
      { name: 'Dried Meat', source: 'Hunt mountain goats/yaks + smoking rack', use: 'High-calorie, lightweight. 800 cal per 100g', priority: 'Primary expedition food. Pack 2500+ calories per day' },
      { name: 'Energy Bars', source: 'Trader purchase, supply cache loot', use: 'Instant energy boost. +15 stamina on consumption', priority: 'Emergency use only. Too expensive to eat regularly' },
      { name: 'Water (Purified)', source: 'Melt snow + boil (campfire) or water filter', use: 'Hydration. 2L per day minimum at altitude', priority: 'Never run out. Dehydration reduces stamina regen by 50%' },
      { name: 'Herbal Tea', source: 'Harvest mountain herbs + boil water', use: 'Warms body temperature, minor stamina regen buff', priority: 'Nice to have. Bring if you have spare herbs and carry weight' },
    ],
  },
  {
    category: 'Medical Supplies',
    items: [
      { name: 'Bandages', source: 'Craft (cloth), starting gear', use: 'Stop bleeding from cuts and falls', priority: 'Always carry 5+. Bleeding kills faster than anything else' },
      { name: 'Splint', source: 'Craft (wood + cloth)', use: 'Stabilize fractures. Enables limping descent', priority: 'Carry 1-2. A broken leg without a splint means calling for rescue' },
      { name: 'Altitude Sickness Pills', source: 'Trader purchase, medical caches', use: 'Reduces altitude sickness effects for 4 hours', priority: 'Bring 3+ for any climb above 5000m. Summit attempts require 6+' },
    ],
  },
];

const CRAFTING_PRIORITY = [
  { order: 1, item: 'Rope', reason: 'Without rope, you cannot protect any climb. Rope is the single most important crafted item in Cairn. Craft as much as your hemp supply allows before every expedition.' },
  { order: 2, item: 'Campfire Kit', reason: 'Required to melt snow for water and cook food. Without fire, you cannot stay hydrated at altitude. Always carry materials for at least 3 campfires.' },
  { order: 3, item: 'Bandages (5+)', reason: 'Crafting bandages is cheap but the materials are limited. Make them at base camp before you leave — do not rely on finding cloth mid-climb.' },
  { order: 4, item: 'Carabiners (5+)', reason: 'Iron ore is found at mid-altitude. Mine on your way up and craft carabiners at the nearest forge. Each carabiner costs 2 iron ore.' },
  { order: 5, item: 'Crampons (if snow route)', reason: 'Requires steel, which needs a forge and iron ore plus coal. Plan a dedicated mining trip to gather materials before attempting high-altitude routes.' },
  { order: 6, item: 'Ice Axe (if ice route)', reason: 'Steel + hardwood. The hardwood requirement means you need to harvest from trees at lower altitudes and carry the wood up — plan your carry weight accordingly.' },
];

export default function ResourcesGuidePage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-text-primary">Cairn Resources Guide</h1>
      <p className="text-text-muted mb-8">Last updated: July 2026</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">The Resource Loop</h2>
        <p className="text-text-muted leading-relaxed mb-4">
          Every climb in Cairn is a resource management problem. You start at base camp with limited carrying capacity. As you ascend, you consume resources (food, water, stamina) and find new ones (ore, herbs, loot). The skill is not just climbing — it is knowing what to bring, what to gather, and when to turn back because your resources cannot sustain a summit push.
        </p>
        <p className="text-text-muted leading-relaxed mb-4">
          The golden rule of Cairn resources: <strong className="text-accent">resources spent on survival are not wasted, even if they prevent a summit.</strong> Turning back with enough food and water to descend safely is a successful climb. Pushing for the summit with dwindling supplies is how climbers die. This guide prioritizes safety and sustainability over summit-at-all-costs.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Essential Resources by Category</h2>
        {RESOURCE_CATEGORIES.map((cat, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">{cat.category}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 text-accent">Item</th>
                    <th className="text-left p-3 text-accent">Source</th>
                    <th className="text-left p-3 text-accent">Use</th>
                    <th className="text-left p-3 text-accent">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.items.map((item, j) => (
                    <tr key={j} className="border-b border-border hover:bg-bg-elevated">
                      <td className="p-3 text-text-primary font-semibold">{item.name}</td>
                      <td className="p-3 text-text-muted text-xs">{item.source}</td>
                      <td className="p-3 text-text-muted">{item.use}</td>
                      <td className="p-3 text-accent-warm text-xs">{item.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Crafting Priority Order</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-accent w-12">#</th>
                <th className="text-left p-3 text-accent">Item</th>
                <th className="text-left p-3 text-accent">Reason</th>
              </tr>
            </thead>
            <tbody>
              {CRAFTING_PRIORITY.map((c, i) => (
                <tr key={i} className="border-b border-border hover:bg-bg-elevated">
                  <td className="p-3 text-accent font-bold">{c.order}</td>
                  <td className="p-3 text-text-primary font-semibold">{c.item}</td>
                  <td className="p-3 text-text-muted text-xs">{c.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-border p-4">
            <h3 className="font-semibold text-accent">How much food and water should I bring for a summit attempt?</h3>
            <p className="text-text-muted mt-2">Calculate based on 2500 calories per day and 2 liters of water per day, then multiply by the expected number of days plus one extra day for emergencies. A 3-day summit attempt needs 4 days of supplies (10000 calories, 8L water). Water is heavier than food — 8 liters weighs 8kg. Plan campsites near snow sources to melt water rather than carrying it all from base camp. Every kilogram saved is energy preserved for the climb.</p>
          </div>
          <div className="border border-border p-4">
            <h3 className="font-semibold text-accent">Where can I find iron ore for carabiners and tools?</h3>
            <p className="text-text-muted mt-2">Iron ore deposits appear at mid-altitude (2000m-3500m) on most mountains. Look for reddish-brown rock outcrops on cliff faces — these are iron deposits. You need a pickaxe to mine them (crafted from stone + wood at base camp). The best iron farming route is the North Ridge approach on Aiguille Peak, which has 3 iron deposits between 2500m and 3000m. Mine them on your acclimatization climb, then craft gear at the base camp forge before your summit push.</p>
          </div>
          <div className="border border-border p-4">
            <h3 className="font-semibold text-accent">What happens if I run out of rope mid-climb?</h3>
            <p className="text-text-muted mt-2">You must either: (a) downclimb immediately if the terrain below you is not too difficult, (b) call for rescue (costs money and reputation), or (c) attempt a dangerous free solo of the remaining section. Option (c) is how most Cairn deaths happen — do not do it. Always bring 20 percent more rope than the route guide recommends. The extra 6 meters of rope weighs less than a single bandage and can save your entire expedition.</p>
          </div>
        </div>
      </section>

      <p className="text-text-muted mt-10 text-sm border-t border-border pt-4">
        Last updated: July 1, 2026. Resource data verified against Cairn current version.
      </p>
    </main>
  );
}
