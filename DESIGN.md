# Template C: Field Journal

## Design Overview
A warm, organic game guide site for survival, crafting, and exploration games. Notebook-inspired with horizontal scroll nav, asymmetric layout, hand-drawn separators, and generous whitespace. Like a field guide you'd carry in your backpack.

## Design Read
- **Kind**: Survival/crafting wiki with naturalist journal aesthetic
- **Audience**: Explorers, builders, and crafters
- **Vibe**: Field notebook + nature guide + cozy community
- **Dials**: VARIANCE=8 / MOTION=4 / DENSITY=3

## Color System
| Token | Hex | Usage |
|---|---|---|
| `field-paper` | `#faf7f2` | Page background (warm cream) |
| `field-paper-warm` | `#f3efe7` | Hover/active surface |
| `moss` | `#5b8c5a` | Primary accent, active nav, links |
| `moss-light` | `#e8f0e7` | Light green backgrounds |
| `terracotta` | `#c17f59` | Secondary accent, hover borders |
| `terracotta-light` | `#f5ede7` | Light terracotta backgrounds |
| `bark` | `#3d3226` | Primary text (dark brown) |
| `bark-light` | `#6b5e4f` | Secondary text |
| `stone` | `#8c8478` | Muted text |
| `clay` | `#d4c5b2` | Borders |

## Typography
- **Display/Heading**: Outfit (600-700 weight, tight tracking)
- **Body**: Nunito (400-600, smooth and friendly)

## Layout Structure
```
[Header: Site title + tagline + horizontal scroll nav pills]
[Main Content: Asymmetric 65/30 split]
  [Left (65%): Featured guides, steps, tips]
  [Right (30%): Crafting sidebar, community updates, support]
[Footer: Links + Afdian]
```

- Horizontal scroll nav: Pill-shaped buttons, auto-scroll active into view
- Asymmetric layout: Main content column + sidebar (not equal columns)
- Hand-drawn separators: CSS-generated wavy green lines
- Generous whitespace: `space-y-16` between sections
- Cards: Subtle shadow, white/80 background, terracotta hover border
- All interactive elements: `rounded-pill` (fully rounded)

## Key Components
- `.nav-pill` - Horizontal scroll nav button, moss green when active
- `.journal-card` - Content card with warm shadow and hover lift
- `.field-divider` - Hand-drawn style separator with organic shape
- `.field-sidebar-block` - Left green border sidebar section
- `.field-tag` - Pill-shaped category tags (moss/terracotta/stone variants)
- `.recipe-card` - Small crafting recipe display
- `.step-number` - Green circle with step number
- `.text-balance` - Text wrapping utility for headlines

## How to Use This Template

### 1. Install and Build
```bash
cd templates/C-survival
npm install
npm run dev
npm run export    # Build static export to out/
```

### 2. Replace Placeholders
Search `REPLACE_WITH_`:

| Pattern | Content |
|---|---|
| `REPLACE_WITH_SITE_NAME` | Site name (e.g. "Valheim Field Notes") |
| `REPLACE_WITH_SITE_TAGLINE` | Short tagline |
| `REPLACE_WITH_NAV_*` | Navigation labels |
| `REPLACE_WITH_WELCOME_*` | Welcome headline and text |
| `REPLACE_WITH_FEATURE_*` | Featured guide content |
| `REPLACE_WITH_STEP_*` | Getting started steps |
| `REPLACE_WITH_RECIPE_*` | Crafting recipes |
| `REPLACE_WITH_TIP_*` | Field tips |
| `REPLACE_WITH_UPDATE_*` | Community update entries |
| `REPLACE_WITH_SUPPORT_MESSAGE` | Afdian support message |

### 3. GA4 and GSC
- GA4: `G-ET6778V62K`
- GSC: Replace verification code
- File: `public/google4cd6cdf221ea7b0b.html`

### 4. Afdian Integration
- Sidebar: Green support card with CTA button
- Footer: Terracotta-colored link
- Both point to `https://afdian.com/a/gameguidehub`

### 5. Adding Pages
```
app/
  guides/page.tsx
  crafting/page.tsx
  map/page.tsx
  tips/page.tsx
  community/page.tsx
```

### 6. Customization
- **Seasonal theme**: Swap moss green for autumn orange or winter blue
- **Paper texture**: Edit the SVG noise filter in `tailwind.config.ts`
- **Divider style**: Edit `.field-divider` in `globals.css`
- **Layout ratio**: Change `lg:max-w-[65%]` and `lg:w-[30%]` values

## Anti-AI Design Decisions
- No dark mode (warm light theme locked)
- No bento grids (asymmetric layout instead)
- No centered hero (left-aligned organic flow)
- No Inter as heading font (Outfit instead)
- Horizontal scroll nav instead of standard top bar
- Hand-drawn separators instead of CSS borders
- Sidebar with real content density variation
- Warm cream + moss + terracotta (naturalist palette, not purple/blue AI defaults)
