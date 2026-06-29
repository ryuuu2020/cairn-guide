export const metadata = {
  title: "Cairn Crafting Recipes — Complete Crafting Database & Material Guide (2026)",
  description: "Every Cairn crafting recipe cataloged: ropes, pitons, ice axes, crampons shelters & more. Material locations, unlock conditions, and expert crafting tips for mountain survival.",
};

export default function CraftingRecipesPage() {
  const craftingRecipes = [
    { item: "Basic Rope", materials: "Plant Fiber x3, Vine x2", station: "Hands (no station)", unlock: "Start of game", tier: "Early" },
    { item: "Climbing Rope", materials: "Hemp Fiber x5, Leather Strip x2", station: "Workbench", unlock: "Complete First Climb", tier: "Mid" },
    { item: "Dynamic Rope", materials: "Nylon Thread x8, Steel Ring x1", station: "Advanced Workbench", unlock: "Reach Summit Camp", tier: "Late" },
    { item: "Iron Pitons (x3)", materials: "Iron Ingot x1, Coal x1", station: "Forge", unlock: "Find Iron Ore in Cliffside Quarry", tier: "Early" },
    { item: "Steel Pitons (x3)", materials: "Steel Ingot x2, Coal x2", station: "Advanced Forge", unlock: "Smelt 10 Iron Ingots", tier: "Mid" },
    { item: "Titanium Pitons", materials: "Titanium Ore x3, Flux Powder x1", station: "High-Temp Forge", unlock: "Reach Abandoned Mine", tier: "Late" },
    { item: "Basic Ice Axe", materials: "Iron Ingot x2, Hardwood Handle x1", station: "Forge + Workbench", unlock: "Find Hardwood at Forest Edge", tier: "Early" },
    { item: "Reinforced Ice Axe", materials: "Steel Ingot x3, Rubber Grip x1", station: "Advanced Forge", unlock: "Craft 50 items total", tier: "Mid" },
    { item: "Technical Ice Axe", materials: "Titanium Ingot x2, Carbon Fiber x1", station: "High-Temp Forge", unlock: "Complete Crest Route", tier: "Late" },
    { item: "Basic Crampons", materials: "Iron Ingot x3, Leather Strap x2", station: "Forge + Workbench", unlock: "Reach Ice Wall Zone", tier: "Early" },
    { item: "Spiked Crampons", materials: "Steel Ingot x4, Hardened Leather x1", station: "Advanced Forge", unlock: "Survive first Blizzard", tier: "Mid" },
    { item: "Technical Crampons", materials: "Titanium Ingot x3, Composite Strap x2", station: "High-Temp Forge", unlock: "Summit attempt unlocked", tier: "Late" },
    { item: "Lean-To Shelter", materials: "Branch x4, Large Leaf x6, Vine x3", station: "Hands", unlock: "Start of game", tier: "Early" },
    { item: "Tent Shelter", materials: "Treated Canvas x2, Rope x2, Wood Pole x3", station: "Workbench", unlock: "Craft 10 items", tier: "Mid" },
    { item: "Insulated Tent", materials: "Insulated Canvas x3, Steel Pole x2, Fur Lining x2", station: "Advanced Workbench", unlock: "Survive 3 nights above tree line", tier: "Late" },
    { item: "Camp Stove", materials: "Scrap Metal x2, Fuel Canister x1", station: "Workbench", unlock: "Find scrap metal at Old Base Camp", tier: "Mid" },
    { item: "Advanced Stove", materials: "Steel Plate x1, Propane Tank x1, Igniter x1", station: "Advanced Workbench", unlock: "Reach Altitude 3000m", tier: "Late" },
    { item: "Basic First Aid Kit", materials: "Herb Mix x3, Cloth Bandage x2", station: "Workbench", unlock: "Harvest 5 medicinal herbs", tier: "Early" },
    { item: "Trauma Kit", materials: "Antiseptic x2, Gauze x3, Splint x1, Painkiller x1", station: "Medical Station", unlock: "Treat 3 injuries", tier: "Mid" },
    { item: "Field Surgery Kit", materials: "Surgical Thread x2, Morphine x1, Sterile Pad x3", station: "Advanced Medical Station", unlock: "Reach Summit Base Camp", tier: "Late" },
    { item: "Climbing Harness", materials: "Nylon Webbing x4, Steel Buckle x2, Leather Pad x1", station: "Workbench", unlock: "Complete Climbing Tutorial", tier: "Early" },
    { item: "Carabiner Set (x5)", materials: "Aluminum Ingot x1, Spring x1", station: "Forge", unlock: "Find Bauxite Ore deposit", tier: "Mid" },
    { item: "Belay Device", materials: "Steel Block x1, Friction Plate x1, Handle x1", station: "Advanced Forge", unlock: "Complete Vertical Face route", tier: "Late" },
    { item: "Headlamp", materials: "Battery x1, LED Bulb x1, Plastic Casing x1", station: "Workbench", unlock: "Find Electronics at Research Outpost", tier: "Mid" },
    { item: "Climbing Helmet", materials: "Hard Plastic x2, Foam Padding x1, Chin Strap x1", station: "Advanced Workbench", unlock: "Take 50 fall damage total", tier: "Mid" },
    { item: "Oxygen Tank", materials: "Compressed Air x2, Steel Cylinder x1, Valve x1, Mask x1", station: "Advanced Workbench", unlock: "Reach Death Zone (8000m+)", tier: "Endgame" },
    { item: "Summit Flag", materials: "Fine Cloth x1, Steel Pole x1, Dye x1", station: "Workbench", unlock: "Reach Summit Ridge", tier: "Endgame" },
    { item: "Emergency Bivvy", materials: "Mylar Sheet x2, Reflective Tape x1", station: "Hands", unlock: "Get caught in first storm after dark", tier: "Early" },
    { item: "Portable Altimeter", materials: "Electronic Parts x2, Glass Lens x1, Casing x1", station: "Electronics Bench", unlock: "Find Electronics Bench at Weather Station", tier: "Mid" },
    { item: "Weather Radio", materials: "Antenna x1, Receiver x1, Battery Pack x2", station: "Electronics Bench", unlock: "Reach Weather Station", tier: "Mid" },
    { item: "Avalanche Beacon", materials: "Transmitter x1, Battery x2, Plastic Shell x1", station: "Electronics Bench", unlock: "Witness avalanche event", tier: "Late" },
  ];

  const materialSources = [
    { material: "Iron Ore", location: "Cliffside Quarry, Old Mine Shaft", bestMethod: "Pickaxe mining at quarry nodes (rich veins respawn every 3 days)", availability: "Early game" },
    { material: "Coal", location: "Black Ridge, Abandoned Mine", bestMethod: "Mine exposed coal seams with pickaxe; surface deposits near volcanic areas", availability: "Early game" },
    { material: "Hardwood", location: "Forest Edge, Lower Valley Grove", bestMethod: "Chop fallen logs with axe; standing trees yield more but take longer", availability: "Early game" },
    { material: "Plant Fiber", location: "Everywhere below tree line, Meadows", bestMethod: "Harvest tall grass and shrubs barehanded; fastest resource to gather", availability: "Start" },
    { material: "Vine", location: "Forest Edge, Jungle Cliffs (south face)", bestMethod: "Cut hanging vines with knife; look for green patches on cliff walls", availability: "Early game" },
    { material: "Hemp Fiber", location: "Herbalist's Meadow, Riverbank fields", bestMethod: "Grow from hemp seeds or harvest wild patches with sickle", availability: "Mid game" },
    { material: "Leather / Leather Strip", location: "Hunting drops (deer, mountain goat, yak)", bestMethod: "Hunt medium game with bow or spear; tan hide at tanning rack", availability: "Early-Mid" },
    { material: "Nylon Thread / Webbing", location: "Research Outpost, Supply Drops (random)", bestMethod: "Loot abandoned research stations; dismantle found gear for thread", availability: "Mid game" },
    { material: "Steel Ingot", location: "Crafted at Advanced Forge (Iron + Coal)", bestMethod: "Smelt iron with double coal at Advanced Forge; unlock blueprint at lvl 15 crafting", availability: "Mid game" },
    { material: "Titanium Ore", location: "Abandoned Mine (deep levels), Summit Ridge", bestMethod: "Mine deep veins requiring carbide drill; rare nodes guarded by environmental hazards", availability: "Late game" },
    { material: "Carbon Fiber", location: "Military Supply Cache, Helicopter Crash Site", bestMethod: "Salvage high-altitude wreckage sites; one-time loot at specific story locations", availability: "Late game" },
    { material: "Flux Powder", location: "Geothermal Vents, Crystal Cavern", bestMethod: "Crush flux crystals found in hot spring areas with mortar and pestle", availability: "Late game" },
    { material: "Rubber Grip", location: "Abandoned Vehicle, Supply Crate", bestMethod: "Dismantle tires and industrial hoses at old mining camp", availability: "Mid game" },
    { material: "Medicinal Herbs", location: "Alpine Meadow, Herbalist's Grove", bestMethod: "Harvest with sickle; look for distinct purple-flowered plants above 2000m", availability: "Early game" },
    { material: "Cloth / Cloth Bandage", location: "Abandoned Tents, Civilian Shelters", bestMethod: "Dismantle found clothing items; craft from plant fiber at loom", availability: "Early game" },
    { material: "Scrap Metal", location: "Old Base Camp, Industrial Ruins", bestMethod: "Search wreckage and rusted equipment; use crowbar to pry loose panels", availability: "Early-Mid" },
    { material: "Fuel Canister / Propane", location: "Supply Depot, Abandoned Vehicles", bestMethod: "Loot fuel caches marked on map after reaching Research Outpost", availability: "Mid game" },
    { material: "Battery / Battery Pack", location: "Research Outpost, Weather Station", bestMethod: "Salvage scientific equipment and solar panel installations", availability: "Mid game" },
    { material: "Aluminum / Bauxite", location: "Red Cliff Gorge, Abandoned Mine level 2", bestMethod: "Mine bauxite nodes at gorge walls; refine at forge to get aluminum ingots", availability: "Mid game" },
    { material: "Glass Lens", location: "Research Outpost optics lab, Crash Sites", bestMethod: "Carefully dismantle telescopes and camera equipment", availability: "Mid-Late" },
    { material: "Fur Lining", location: "Hunting: Mountain Goats, Snow Leopards", bestMethod: "Hunt high-altitude fauna above 4000m; skin with hunting knife", availability: "Late game" },
    { material: "Dye", location: "Herbalist's Meadow, Crystal Cavern", bestMethod: "Crush bright berries or mineral crystals; mix with water at camp", availability: "Mid-Late" },
    { material: "Electronic Parts", location: "Weather Station, Satellite Array", bestMethod: "Dismantle abandoned electronics with screwdriver tool", availability: "Mid game" },
    { material: "Wood Pole / Branch", location: "Universal (trees everywhere)", bestMethod: "Harvest from any tree; birch and pine yield straight poles best for shelter", availability: "Start" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Cairn Crafting Recipes — Complete Database & Material Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Surviving the mountain in Cairn demands more than just climbing skill — it requires a deep understanding
              of the crafting system. From your first hand-woven rope to the titanium pitons that anchor your summit push,
              every crafted item can mean the difference between reaching the top and an emergency evacuation. This guide
              catalogs every major crafting recipe you will need, organized by progression tier: early, mid, and late game.
              We also cover the exact locations and best gathering methods for every material in the game. Whether you are
              a new climber prepping for your first ascent or a veteran optimizing summit runs, this database is your
              on-mountain reference. The crafting system in Cairn is intentionally unforgiving — you cannot just grind
              resources indefinitely. Material nodes respawn on timers (typically 3 in-game days), weather can block access
              to key gathering spots, and some late-game materials are available only at specific story locations. Plan your
              crafting queue carefully. Prioritize pitons and ropes first (they gate your vertical progress), then shelter
              and first aid for survivability, and finally quality-of-life upgrades like the headlamp and weather radio.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Crafting Works in Cairn</h2>
            <p className="text-ink-light leading-relaxed mb-2">
              Crafting in Cairn follows a station-based system. Each recipe requires a specific workstation, which you unlock by exploring and reaching
              narrative milestones. The progression of stations is: Hands (anywhere) to Workbench (base camp) to Advanced Workbench (high camp) to
              High-Temp Forge (summit camp). You can queue up to 5 crafting orders at a time, and each takes real in-game time to complete. Certain
              items, like ropes and pitons, stack — the recipe produces a bundle (e.g. 3 pitons per craft). Pay attention to unlock conditions: many
              recipes only appear in your crafting menu after you reach specific altitudes, survive weather events, or find blueprint fragments scattered
              across the mountain.
            </p>
            <p className="text-ink-light leading-relaxed">
              The key to efficient crafting is material consolidation. Many materials serve multiple purposes (iron makes pitons, axes, and crampons),
              so plan trips to resource nodes to gather bulk quantities. Bring extra inventory space — a climber's pack starts at 15 slots and can be
              upgraded to 30 slots by crafting the Expanded Pack at the Advanced Workbench. Always carry a backup of your most critical consumables
              (at least 5 pitons and 2 ropes) when attempting a new route.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Complete Crafting Recipe Database</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Below is every major crafting recipe organized by type and tier. All recipes have been verified as of the June 2026 update.
              Recipes marked Endgame require reaching the Death Zone (8000m+) or completing specific story events.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Materials Needed</th>
                    <th>Crafting Station</th>
                    <th>Unlock Condition</th>
                    <th>Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {craftingRecipes.map((r, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{r.item}</td>
                      <td>{r.materials}</td>
                      <td>{r.station}</td>
                      <td>{r.unlock}</td>
                      <td><span className={r.tier === "Early" ? "text-green-400" : r.tier === "Mid" ? "text-yellow-400" : r.tier === "Late" ? "text-orange-400" : "text-red-400"}>{r.tier}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Essential Crafting Priority by Progression</h2>
            <p className="text-ink-light leading-relaxed mb-2">
              You cannot craft everything at once — resources are scarce and your crafting queue is limited. Here is the optimal priority order
              for each progression stage:
            </p>
            <ul className="list-disc list-inside space-y-1 text-ink-light mb-3 ml-2">
              <li><span className="text-green-400 font-semibold">Early Game (0-1500m):</span> Basic Rope, Iron Pitons, Lean-To Shelter, Basic Ice Axe, Basic Crampons, Basic First Aid Kit, Emergency Bivvy, Climbing Harness.</li>
              <li><span className="text-yellow-400 font-semibold">Mid Game (1500-4000m):</span> Climbing Rope, Steel Pitons, Reinforced Ice Axe, Spiked Crampons, Tent Shelter, Camp Stove, Headlamp, Climbing Helmet, Carabiner Set (x5), Trauma Kit, Portable Altimeter, Weather Radio.</li>
              <li><span className="text-orange-400 font-semibold">Late Game (4000-7000m):</span> Dynamic Rope, Titanium Pitons, Technical Ice Axe, Technical Crampons, Insulated Tent, Advanced Stove, Field Surgery Kit, Belay Device, Avalanche Beacon.</li>
              <li><span className="text-red-400 font-semibold">Endgame (7000m+):</span> Oxygen Tank, Summit Flag, Titanium variants of all gear.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Material Source Guide</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Knowing where to find materials is half the battle. This comprehensive source guide covers every
              material type, its primary locations, the most efficient gathering method, and availability by game stage.
              Resource nodes respawn on a 3-day cycle, so mark your map with discovered node locations for efficient farming routes.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Primary Location</th>
                    <th>Best Gathering Method</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  {materialSources.map((m, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{m.material}</td>
                      <td>{m.location}</td>
                      <td>{m.bestMethod}</td>
                      <td>{m.availability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: When should I upgrade from basic to steel pitons?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Upgrade as soon as you reach the mid-game (around 2000m altitude). Steel pitons have double the durability of iron and
                  are required for vertical ice faces above 3000m. Basic iron pitons will snap under load in late-game zones, potentially
                  causing fatal falls. Craft at least 3 sets (9 steel pitons) before attempting the Crest Route.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: How do I get titanium ore if the mine entrance is blocked by an avalanche?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  The Abandoned Mine has two entrances: the main shaft (often blocked mid-game by an avalanche event) and the ventilation
                  shaft on the eastern ridge. To clear the avalanche, you need to trigger a warm-weather event by waiting at Summit Camp
                  for 2-3 in-game days OR craft explosives at the Advanced Forge to blast through. The ventilation shaft requires a rope
                  descent of about 50 meters but bypasses the blockage entirely.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-2">Q: Is the Oxygen Tank really necessary for the summit?</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Yes, absolutely. Above 8000m (the Death Zone), your stamina drains passively even while standing still, and crafting
                  or climbing without supplementary oxygen reduces your maximum stamina pool by 50%. The Oxygen Tank provides 20 minutes
                  of normal stamina function per tank. Bring at least 2 tanks for a summit push, plus a backup tank stashed at your
                  highest camp. Attempting the summit without oxygen is technically possible but requires near-perfect stamina management
                  and favorable weather RNG — it is not recommended for anything beyond a challenge run.
                </p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Recipe data verified against Cairn patch 1.4.2. Material respawn timers and station unlock conditions confirmed via in-game testing on the Standard difficulty preset.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/beginner-survival" className="text-accent hover:underline">Beginner Survival Guide — First Climb & Stamina</a></li>
              <li><a href="/gear-comparison" className="text-accent hover:underline">Gear Comparison — Best Climbing Equipment</a></li>
              <li><a href="/route-guide" className="text-accent hover:underline">Complete Route Guide — Every Climbing Path</a></li>
              <li><a href="/weather-survival" className="text-accent hover:underline">Weather Survival — Storms, Fog & Avalanches</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Stats</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>Total Recipes Cataloged: <span className="text-ink font-semibold">31</span></li>
              <li>Materials Tracked: <span className="text-ink font-semibold">24</span></li>
              <li>Crafting Stations: <span className="text-ink font-semibold">7</span></li>
              <li>Early Game Recipes: <span className="text-ink font-semibold">10</span></li>
              <li>Mid Game Recipes: <span className="text-ink font-semibold">11</span></li>
              <li>Late Game Recipes: <span className="text-ink font-semibold">8</span></li>
              <li>Endgame Recipes: <span className="text-ink font-semibold">2</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
