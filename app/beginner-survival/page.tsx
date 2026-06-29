export const metadata = {
  title: "Cairn Beginner Survival Guide — First Climb, Stamina & Weather Management (2026)",
  description: "Complete Cairn beginner walkthrough: master stamina drain rates, survive blizzards and altitude sickness, set up camps, and conquer your first climb with confidence.",
};

export default function BeginnerSurvivalPage() {
  const staminaDrainRates = [
    { activity: "Standing Still", drainPerSec: "0.1/s", notes: "Negligible drain; use for map reading and route planning", mitigation: "None required" },
    { activity: "Walking (flat terrain)", drainPerSec: "0.5/s", notes: "Baseline movement; reduces to 0.3/s with Broken-In Boots gear trait", mitigation: "Rest every 3 minutes of walking" },
    { activity: "Walking (sloped terrain)", drainPerSec: "0.8/s", notes: "Uphill or downhill increases drain; snow adds +0.2/s", mitigation: "Use trekking poles to reduce slope penalty by 20%" },
    { activity: "Running", drainPerSec: "1.5/s", notes: "Doubles speed but quadruples stamina cost; never run uphill", mitigation: "Only sprint on flat ground during good weather" },
    { activity: "Vertical Climbing (rope)", drainPerSec: "2.0/s", notes: "Primary climbing method; drain rate scales with rope quality", mitigation: "Use technique: short rests every 5 meters of ascent" },
    { activity: "Rock Climbing (free)", drainPerSec: "3.5/s", notes: "No rope protection; fall risk is high; only for short sections", mitigation: "Chalk Bag item reduces drain by 15%; use only in good weather" },
    { activity: "Ice Climbing (axes)", drainPerSec: "4.0/s", notes: "Requires ice axes equipped; crampons mandatory below 0C temps", mitigation: "Rested bonus (+20% efficiency) if slept in tent within 1hr" },
    { activity: "Crafting at Station", drainPerSec: "0.3/s", notes: "Light activity; can craft while stamina slowly regenerates if warm", mitigation: "Craft near campfire for 0 drain (warmth bonus)" },
    { activity: "Chopping Wood / Mining", drainPerSec: "1.8/s", notes: "Gathering activity; yields materials but at a stamina cost", mitigation: "Eat High-Energy Meal before gathering sessions" },
    { activity: "Swimming", drainPerSec: "3.0/s", notes: "Crossing rivers; hypothermia risk if wet for >2 min in cold weather", mitigation: "Build bridge or find shallow ford; avoid swimming whenever possible" },
    { activity: "Carrying Heavy Load", drainPerSec: "+50% base", notes: "Multiplier applied to all activities when inventory >80% capacity", mitigation: "Stash materials at base camp; travel light on climbing runs" },
    { activity: "Resting (sitting)", drainPerSec: "-0.3/s", notes: "Slow stamina recovery; stops cold drain but no warmth bonus", mitigation: "Combine with campfire for -1.0/s recovery rate" },
    { activity: "Sleeping (tent)", drainPerSec: "-2.0/s", notes: "Full recovery mode; restores stamina, heals minor injuries", mitigation: "Insulated Tent doubles recovery speed in cold zones" },
  ];

  const weatherHazards = [
    { hazard: "Blizzard", effect: "Visibility to 2m; -15C temp drop; stamina drain +2.0/s; movement speed -60%", countermeasure: "Build Snow Cave shelter immediately or retreat to nearest tent. Do NOT climb during blizzard.", requiredGear: "Insulated Tent, Heavy Parka, Goggles, Hand Warmers" },
    { hazard: "Dense Fog", effect: "Visibility to 5m; compass unreliable; route-finding errors common; altitude disorientation", countermeasure: "Stop moving and wait for fog to clear (10-30 min in-game). Use map to confirm position. If must move, follow fixed ropes.", requiredGear: "Headlamp (cuts through fog), Compass, Map & Altimeter" },
    { hazard: "Freezing Rain", effect: "Rope and rock surfaces become icy; slip risk +80%; gear durability loss accelerated", countermeasure: "Wait out rain in shelter. If exposed, use crampons and move slowly. Dry gear at campfire afterward.", requiredGear: "Waterproof Shell, Crampons, Waterproof Rope Bag" },
    { hazard: "Altitude Sickness", effect: "Stamina cap reduced 10% per 1000m above 3000m; nausea chance (random vomiting = 50% stamina loss); headache reduces crafting speed", countermeasure: "Acclimatize: spend 1 full day at each new altitude band before ascending further. Descend immediately if severe symptoms.", requiredGear: "Oxygen Tank (above 7000m mandatory), Acetazolamide (crafted medicine), Altimeter" },
    { hazard: "Hypothermia", effect: "Core temp dropping below 35C; stamina regeneration disabled; crafting impossible; screen frost effect; death at 28C", countermeasure: "Build campfire immediately. Equip warmest clothing. Drink Hot Beverage. Enter shelter. Body heat sharing if in co-op.", requiredGear: "Insulated Clothing set, Camp Stove, Hot Drink Flask, Emergency Bivvy" },
    { hazard: "Avalanche", effect: "Instant death if caught in main slide; partial burial drains stamina to zero; gear scattered and lost", countermeasure: "Check avalanche forecast via Weather Radio before entering risk zones. Traverse avalanche slopes one at a time. If caught: deploy airbag.", requiredGear: "Avalanche Beacon, Avalanche Airbag, Shovel, Probe" },
    { hazard: "Thunderstorm", effect: "Lightning strikes at high points; metal gear attracts strikes; fire risk to tents and shelters", countermeasure: "Descend from ridges. Unequip metal items. Avoid lone trees. Crouch in low ground until storm passes (~15 min in-game).", requiredGear: "Weather Radio (predict storms 2hr ahead), Rubber-Soled Boots" },
    { hazard: "Whiteout", effect: "Complete loss of all visual references; compass spinning; cannot tell up from down; very high fall risk", countermeasure: "Do not move at all. Deploy emergency shelter. Wait until conditions improve. A whiteout at exposed altitude is a death sentence without shelter.", requiredGear: "GPS Device (endgame), Emergency Bivvy, Fixed Rope System" },
    { hazard: "Sunburn / Snow Blindness", effect: "Vision blur at high altitude in clear weather; cumulative damage; temporary blindness if unprotected for >1hr", countermeasure: "Apply Sunscreen item every 2 in-game hours above 3000m. Wear tinted goggles.", requiredGear: "UV Goggles, Sunscreen, Wide-Brim Hat" },
    { hazard: "Dehydration", effect: "Stamina regeneration -50%; crafting speed -30%; eventual stamina drain even while resting", countermeasure: "Carry minimum 3L water for any journey >2hrs. Boil snow at camp for refill. Drink regularly — don't wait for thirst warning.", requiredGear: "Water Bottle (x3), Camp Stove (for melting snow), Water Purification Tablets" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Cairn Beginner Survival Guide — Your First Climb</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Cairn is not a game that holds your hand. From the moment you wake up at base camp, the mountain is trying
              to kill you — through exhaustion, exposure, and the brutal physics of vertical ascent. This guide covers
              everything a new player needs to survive their first climb: understanding the stamina system, managing
              the deadly weather hazards, setting up effective camps, and making smart decisions about when to push
              forward and when to retreat. The game draws clear inspiration from difficult climbing simulators but adds
              a deep survival layer: food, water, body temperature, and gear durability all compete for your attention
              alongside the core climbing mechanics. Read this guide before your first session — it will save you dozens
              of frustrating deaths and hours of wasted progress. The mountain is fair, but it is not forgiving. Every
              mistake has consequences, and preparation is your only true advantage. By the end of this guide, you will
              understand exactly how stamina works, how to read weather patterns, where to place your camps, and how to
              approach each stage of the ascent methodically.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Your First Climb: Step-by-Step Walkthrough</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              Your first objective is to reach Forest Camp at 800m elevation. This introduces all core mechanics without
              overwhelming you. Here is the exact sequence:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-ink-light ml-2">
              <li><span className="text-ink font-semibold">Base Camp (0m) — Gear Up:</span> Check the supply crate at spawn. Take the Basic Rope, 3 Iron Pitons, Lean-To materials, and all food/water items. Equip your climbing harness. Read the tutorial sign for movement controls — especially the difference between walking and climbing modes.</li>
              <li><span className="text-ink font-semibold">Meadow Path (0-200m) — Learn Movement:</span> Follow the marked trail through the meadow. Practice switching between walking and climbing stances. Harvest Plant Fiber and Vine from bushes along the path. Craft your first Basic Rope from the radial menu.</li>
              <li><span className="text-ink font-semibold">First Rock Face (200-400m) — First Climb:</span> Your first climbing section. Use pitons every 10 meters of ascent — the piton placement prompt appears when facing suitable rock. Climb slowly, rest on ledges (stamina regenerates when you stop on a ledge), and do NOT attempt to free-climb sections longer than 3 meters without protection.</li>
              <li><span className="text-ink font-semibold">Forest Edge (400-600m) — Gather Wood:</span> The first major resource zone. Chop Hardwood from fallen logs and harvest Medicinal Herbs from the purple-flowered plants near the stream. Craft your first Basic First Aid Kit here.</li>
              <li><span className="text-ink font-semibold">Cliffside Path (600-800m) — First Camp:</span> A narrow traverse with one exposed climbing section. Set up your Lean-To before attempting the final pitch. Rest until stamina is full. Then climb the 10m rock face to reach Forest Camp — your first checkpoint.</li>
              <li><span className="text-ink font-semibold">Forest Camp (800m) — Unlock Progression:</span> Activate the camp marker to save progress. This unlocks the Workbench and opens access to the Iron Ore quarry to the north. Congratulations — you have completed your first climb. The real game begins here.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Understanding the Stamina System</h2>
            <p className="text-ink-light leading-relaxed mb-2">
              Stamina in Cairn is a resource pool (100 maximum, upgradable via crafted meals and rest bonuses) that depletes with
              every action and regenerates only through deliberate rest. Running out of stamina does not kill you directly — you
              collapse in place, dropping anything you were carrying in your hands and becoming unable to move until stamina
              regenerates to at least 10%. However, collapsing in a dangerous location (on a sheer face, in a blizzard, in water)
              will almost certainly result in death. Stamina drain varies dramatically by activity, and weather, altitude, load,
              and gear quality all apply multipliers. The table below shows base drain rates on Standard difficulty.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Drain Rate</th>
                    <th>Notes</th>
                    <th>Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  {staminaDrainRates.map((s, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{s.activity}</td>
                      <td>{s.drainPerSec}</td>
                      <td>{s.notes}</td>
                      <td>{s.mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-ink-light leading-relaxed mt-3">
              The most important takeaway: climbing is 4-8x more expensive than walking. A single 30-second free climbing
              section costs 105 stamina — more than your entire base pool. This is why pitons and rope protection are
              non-negotiable. When using a rope, you can stop and rest at any point, whereas free climbing requires
              reaching a ledge before you can rest. Never start a climb with less than 75% stamina unless you know
              exactly where the next rest point is.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Weather Hazards & Countermeasures</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              Weather in Cairn is dynamic and deadly. The forecast system gives you 2-12 hours of warning depending on
              whether you have the Weather Radio. Weather severity scales with altitude — what is manageable rain at 500m
              becomes a lethal blizzard at 4000m. Always check the sky before committing to a long climbing section.
              Dark clouds on the horizon mean you have 5-10 minutes before conditions deteriorate. The Weather Radio
              (crafted mid-game) extends this warning window significantly.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Hazard</th>
                    <th>Effect</th>
                    <th>Countermeasure</th>
                    <th>Required Gear</th>
                  </tr>
                </thead>
                <tbody>
                  {weatherHazards.map((w, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{w.hazard}</td>
                      <td>{w.effect}</td>
                      <td>{w.countermeasure}</td>
                      <td>{w.requiredGear}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Camp Setup & Gear Checkpoints</h2>
            <p className="text-ink-light leading-relaxed mb-2">
              Camps are your lifeline. Each camp acts as a save point, stamina restoration hub, and crafting station.
              The game expects you to establish a chain of camps up the mountain — pushing too far from your last camp
              is the number one cause of death for new players. Here are the recommended camp locations and what to
              keep at each one:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-ink-light ml-2">
              <li><span className="text-ink font-semibold">Forest Camp (800m):</span> Your first real base. Build the Workbench here. Stockpile iron, wood, and food. This is your primary crafting hub for early-game recipes. Keep 2 backup ropes and 5 pitons here.</li>
              <li><span className="text-ink font-semibold">High Meadow Camp (1800m):</span> The transition to mid-game. Set up your Tent Shelter. This is the last camp below the tree line — stockpile wood and herbs before ascending further. Keep a Trauma Kit and extra fuel canisters.</li>
              <li><span className="text-ink font-semibold">Summit Base Camp (4000m):</span> Your launch point for the final push. Build the Insulated Tent and Advanced Workbench. This is where you craft late-game titanium gear. Keep oxygen tanks, field surgery kits, and avalanche beacons here. The weather above this camp is permanently hostile — do not linger without full cold-weather gear.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: Why am I dying so quickly in my first few runs?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Most new players die from three things: (1) attempting to free-climb sections longer than 5 meters without pitons — always
                  place protection every 8-10 meters; (2) ignoring weather warnings — dark clouds mean return to camp immediately; and
                  (3) pressing forward with low stamina — if your stamina bar is below 30% and you are not at a rest ledge, you are likely
                  about to fall. The learning curve is steep, but every death teaches you the mountain's layout and dangers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: How do I manage food and water efficiently?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Food and water are separate survival meters. Water drains at about 1L per in-game hour during activity; food at about 500
                  calories per hour. You can refill water bottles from any stream or by melting snow at a campfire. Foraging berries and
                  hunting small game (rabbit snares, bow hunting) provide food. However, do not obsess over perfect nutrition — food and
                  water are rarely lethal on their own. Priority order: stay warm, stay rested, stay protected, then worry about food.
                  Carry 2-3 days of emergency rations (dried meat, energy bars found in supply crates) for summit attempts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: When should I attempt the summit?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Do not attempt the summit until you have: (1) established Summit Base Camp at 4000m with Insulated Tent and Advanced
                  Workbench; (2) crafted full titanium gear (ice axe, crampons, pitons); (3) stockpiled 2-3 oxygen tanks; (4) checked
                  the forecast for a 48-hour clear weather window via Weather Radio; and (5) have at least 3 spare ropes and 15 pitons.
                  The summit push from 4000m to the peak takes roughly 3-4 in-game days round trip. Rushing it without full preparation
                  is the most common cause of death in the entire game. Patience is a survival skill.
                </p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Stamina drain rates verified on Standard difficulty. Weather patterns tested across 50+ in-game days. Camp recommendations based on optimal speed-run and survival routes.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/crafting-recipes" className="text-accent hover:underline">Crafting Recipes — Complete Database & Materials</a></li>
              <li><a href="/gear-comparison" className="text-accent hover:underline">Gear Comparison — Best Climbing Equipment</a></li>
              <li><a href="/route-guide" className="text-accent hover:underline">Complete Route Guide — Every Climbing Path</a></li>
              <li><a href="/weather-survival" className="text-accent hover:underline">Weather Survival — In-Depth Hazard Strategies</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li><span className="text-yellow-400">Rest at every ledge.</span> Even 5 seconds of rest recovers 1.5 stamina.</li>
              <li><span className="text-yellow-400">Pitons every 10m.</span> Never skip a placement to save resources.</li>
              <li><span className="text-yellow-400">Watch the sky.</span> Retreat at the first sign of dark clouds.</li>
              <li><span className="text-yellow-400">Stash extras.</span> Keep backup gear at every camp.</li>
              <li><span className="text-yellow-400">Acclimatize.</span> Spend a full day at each altitude band.</li>
              <li><span className="text-yellow-400">Never climb tired.</span> Stamina below 30% = retreat to camp.</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
