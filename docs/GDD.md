# Gem Station Alpha GDD

This is a living notebook for a small Sakhalteam minigame site, not a formal commercial game design doc. Keep it practical, cute, and easy to change.

## One-Line Pitch

Jojo runs a tiny gem-hunting station on weird remote planets: name your explorer, name the planet, land, scan for crystals, collect gems, upgrade the station, and eventually hop to the next planet.

## North Star

Gem Station Alpha should feel like a cozy little browser toy with a light sim wrapper. The player is not mastering a big system; they are checking on a funny planet outpost, finding shiny things, and slowly building a collection.

Good reference energy:

- `karasu-drop`: small, direct, charming, instantly playable.
- `nikkus-pro-water-anglers-classic`: hobby-minigame feel with collectible targets.
- `SimLife` / old Maxis toyboxes: simple systems that make the world feel alive without needing heavy realism.

## First Playable Scope

The first version should stay tiny:

- Home screen:
  - Enter character name.
  - Enter planet name.
  - Start button.
- Planet station screen:
  - Static scene of the mining station on the planet surface.
  - Operator name and planet name visible.
  - Small station console panel.
  - A few visible crystal nodes.
  - Click or tap a node to "scan" or "mine" it.
- Result:
  - Add a gem to the current haul.
  - Show a small message like `Found Mint Quartz!`.
  - No complex inventory yet.

## Core Loop

1. Land on a planet.
2. Scan or mine visible gem nodes.
3. Add gems to the haul.
4. Use gems to unlock tiny station upgrades or decorations.
5. Launch to a new planet.
6. Repeat with new colors, gem names, and small surprises.

## Main Screens

### Home / New Run

Purpose: make the game feel personal immediately.

Fields:

- Character name.
- Planet name.

Nice later additions:

- Character portrait picker.
- Ship/station color picker.
- Random planet name button.

### Station View

Purpose: the main toy screen.

Elements:

- Background sky.
- Planet surface.
- Gem station building.
- 3-5 crystal clusters.
- Console panel with current haul, station status, and action buttons.

First interactions:

- Click a crystal to mine once.
- Click the station console to show current haul.
- Click `Launch` when the planet is cleared.

### Gem Book

Purpose: collection page, eventually.

First version can be just a list of discovered gems.

Later version:

- Gem icon.
- Name.
- Rarity.
- First planet found.
- Funny note.

## Mechanics

### Exploration Mode

The richer version of the game has two connected scales:

1. Planet surface view: fly the ship over a top-down planet surface and scan for possible dig sites.
2. Dig site view: land, set up a little mine, and switch to a side-profile layer view where the player uses tools and sensors to decide where to pick.

The surface scan should be playful rather than scientific homework. A good scan result might say:

- `possible gemstones: quartz, agate, amethyst`
- `possible gemstones: sapphire, black spinel, ruby traces`
- `possible gemstones: nothing, unless you consider basalt precious`
- `possible gemstones: unknown sparkle signature`

The scan does not reveal the exact prize. It reveals a family of possibilities, a confidence level, and maybe one funny operator note. Better scanners improve confidence and reveal more specific clues.

### Dig Site View

After landing, the player sees a side-profile slice of rock layers, pockets, cracks, and mineral veins. The goal is to read the clues and choose where to dig.

Core dig site elements:

- Surface camp or tiny mining rig.
- Layered dirt/rock profile.
- Hidden gem pockets.
- Sensor pings, color hints, cracks, heat shimmer, sparkle flecks, or density readings.
- A pickaxe/tool action for early versions.
- Upgradeable tools later: better pickaxe, drill, scanner, sample brush, pocket light.

Digging should stay light and cozy. The fantasy is not industrial extraction; it is Jojo finding a shiny secret in a weird planet.

### Discovery Moment

Finding a gem should trigger a small info card. The card is the emotional payoff, so it needs to be more than `+1 item`.

Card contents:

- Gem icon or sprite.
- Generated find name, such as `Rose Quartz Geode` or `Blue Sapphire with Ruby Silk`.
- Base gem family.
- Variant / quality / special feature.
- Rarity.
- Size or weight class.
- First found on planet/site.
- Short gem-book note.
- One cozy/funny operator line.

Example:

```text
Found: Amethyst-Lined Quartz Geode
Family: Quartz
Rarity: Uncommon
Quality: Bright points, hollow pocket
Note: A plain rock on the outside, a tiny purple party on the inside.
```

Gem cards should be driven by local game data. Do not make live API calls when a gem is discovered.

Recommended data approach:

- Keep curated static data in `src/data/gemProfiles.json` or `src/data/gemProfiles.ts`.
- Use reference sites during development for learning, then paraphrase and simplify into our own kid-friendly game copy.
- Store source notes separately if needed for development, but ship short original descriptions.
- Avoid scraping a site at runtime. It adds fragility, copyright questions, network lag, and a less cozy discovery moment.

## Gems

Each gem can start as plain data:

- `id`
- `name`
- `color`
- `rarity`
- `value`
- `description`

Later gem profile data can expand to:

- `family`
- `variants`
- `biomes`
- `geologyTags`
- `spriteId`
- `baseRarity`
- `qualityBands`
- `possibleInclusions`
- `funFacts`
- `operatorNotes`

Starter fantasy gem families:

- Quartz: common, soft colors, good for tutorial planets.
- Ember gems: warm colors, found on volcanic or desert planets.
- Moon gems: pale, blue, white, silver, found on cold/night planets.
- Candy gems: silly bright gems for Jojo flavor.
- Mystery shards: rare, unlock small events.

Example names:

- Mint Quartz
- Sunspall
- Blue Ember
- Moon Candy
- Star Jelly
- Bubble Opal
- Peach Zircon
- Tiny Nebula
- Glowflake
- Fizzy Amethyst

### Real Gem Families To Build Around

The core gem list should mix famous precious gems with enough common and semi-precious stones that every dig can still be satisfying.

Good first full set:

- Quartz family: clear quartz, milky quartz, rose quartz, smoky quartz, citrine, amethyst, agate, jasper, chalcedony, druzy quartz, quartz geode.
- Corundum family: sapphire, ruby, star sapphire, padparadscha sapphire, color-zoned sapphire.
- Beryl family: emerald, aquamarine, morganite, heliodor, goshenite.
- Garnet family: almandine, pyrope, spessartine, tsavorite, demantoid, color-change garnet.
- Feldspar family: moonstone, labradorite, sunstone, amazonite.
- Opal family: common opal, fire opal, precious opal, black opal, boulder opal.
- Tourmaline family: black tourmaline, pink tourmaline, indicolite, watermelon tourmaline, Paraiba-style neon tourmaline.
- Topaz family: colorless topaz, blue topaz, golden topaz, imperial topaz.
- Zircon family: clear zircon, blue zircon, honey zircon, hyacinth zircon.
- Spinel family: black spinel, pink spinel, red spinel, cobalt blue spinel.
- Copper-zone gems: turquoise, malachite, azurite, chrysocolla.
- High-rarity specials: diamond, alexandrite, jadeite jade, peridot, lapis lazuli, fire agate.
- Funny low-value finds: basalt chunk, pretty pebble, shiny mica, suspicious glass, almost-a-gem.

This gives the game room for common finds, "wait, this is better than it looked" finds, and huge jackpot finds.

### Variant And Purity Model

Each discovery should be assembled from several layers:

- Base material: quartz, corundum, beryl, opal, etc.
- Form: shard, crystal, cluster, vein, geode, pocket, polished-looking pebble.
- Color or zone: blue, pink, smoky, golden, watermelon, two-tone.
- Quality band: cloudy, included, clear, bright, vivid, starry, flawless.
- Special feature: druzy surface, banding, asterism, color-change, fire, chatoyancy, phantom crystal, tiny companion crystals.

Not every gem gets every ladder. Some families have clear progression paths, while others are exciting because a special feature appears unexpectedly.

Example progression arcs:

- Quartz pocket: milky quartz -> banded agate -> quartz geode -> amethyst geode -> vivid amethyst cluster.
- Corundum pocket: pale sapphire -> blue sapphire -> star sapphire -> ruby-zoned sapphire -> ruby.
- Beryl pocket: goshenite -> pale aquamarine -> aquamarine -> morganite -> emerald -> trapiche emerald.
- Opal pocket: common opal -> fire opal -> precious opal -> black opal with strong color play.
- Feldspar pocket: plain feldspar -> moonstone -> sunstone -> labradorite with strong flash.
- Tourmaline pocket: black tourmaline -> pink tourmaline -> indicolite -> watermelon tourmaline -> neon blue-green tourmaline.

The Jojo excitement target is:

```text
OHHH, I found a blue sapphire with red zoning. It is not fully ruby, but it is weird and rare and mine.
```

The game should reward the almost-things too. A not-quite-ruby can be more memorable than a plain perfect ruby if the card makes it feel specific.

### Rarity Shape

Use rarity for both gameplay odds and emotional language.

Suggested rarity bands:

- Common: tutorial finds and steady currency.
- Uncommon: named variants and geodes.
- Rare: famous gem species or strong colors.
- Epic: special optical effects, high clarity, unusual color zoning.
- Legendary: diamond, alexandrite, vivid ruby, black opal, trapiche emerald, perfect star sapphire.
- Cosmic: fictional once-per-run or event gems.

Discovery odds should come from:

- Planet biome.
- Geological feature.
- Site quality.
- Tool/scanner level.
- Depth.
- Pocket type.
- A small luck roll.

### Gem Associations

Some gems should appear as neighborhood clues. These are not strict geology lessons, just a game-friendly way to make scanning and digging feel smart.

Examples:

- Sapphire/ruby sites can also show black spinel, zircon, garnet, mica, or dark companion stones.
- Quartz geodes can hint toward agate, chalcedony, amethyst, citrine, calcite, or druzy pockets.
- Emerald/beryl sites can also show quartz, mica, feldspar, tourmaline, and pegmatite clues.
- Copper hills can hint toward turquoise, malachite, azurite, chrysocolla, and stained green-blue rock.
- Volcanic zones can hint toward obsidian, peridot, zircon, fire opal, and basalt joke finds.
- River gravel can mix small sapphires, garnets, zircons, quartz pebbles, and "mystery sparkle" finds.

This lets the scanner say things like `possible gemstones: sapphire, black spinel, zircon` and gives the player a sense that the planet is telling a story.

### Biomes And Geological Features

Biomes are the surface fantasy. Geological features are the loot table underneath.

Useful biomes:

- Glass dunes: quartz, agate, jasper, citrine, sunstone, suspicious glass.
- Bubble caves: geodes, amethyst, calcite-style crystals, opal, candy gems.
- Volcanic flats: obsidian, peridot, zircon, fire opal, garnet, basalt jokes.
- Crystal tundra: moonstone, labradorite, smoky quartz, ice-colored beryl, moon gems.
- Copper hills: turquoise, malachite, azurite, chrysocolla, quartz veins.
- Ancient riverbeds: sapphire, garnet, zircon, quartz pebbles, jade pebbles.
- Pegmatite ridges: beryl, tourmaline, topaz, quartz, feldspar.
- Metamorphic highlands: ruby, sapphire, garnet, spinel, jade, marble-like layers.
- Impact craters: tektite-style glass, zircon, diamond rumors, cosmic shards.
- Plain basalt plains: mostly nothing, with funny scan copy and a tiny chance of surprise pockets.

The surface scanner can show biome first, then possible gem families after a scan.

### Sprite Sheet And Atlas Plan

Use a static sprite atlas for gem inventory icons and discovery cards. Keep mineable nodes as a separate sheet if they need larger silhouettes or animation.

Recommended first gem atlas:

- Cell size: `64x64`.
- Sheet size: `1024x1024`.
- Grid: `16 columns x 16 rows`.
- Capacity: `256 gem icons`.
- Padding: generate with transparent background; if bleeding appears, rebuild with 2 px padding or export to a packed atlas later.

Why `64x64`:

- Big enough for color zoning, geodes, inclusions, and tiny highlights.
- Easy to display at `32x32`, `48x48`, or `64x64`.
- A single `1024x1024` PNG is simple for the browser and leaves plenty of room.

Suggested atlas files:

- Current trial atlas: `public/gems/gem-starter-atlas-64.png`
- `public/gems/gem-icons-64.png`
- `src/data/gemAtlas.ts`
- `src/data/gemProfiles.ts`

Atlas entry shape:

```ts
type GemAtlasEntry = {
  id: string
  x: number
  y: number
  w: 64
  h: 64
}
```

Start with 80-120 icons, leaving empty slots for later variants. Generate families in coherent rows so the sheet is easy to inspect:

- Row 1-2: quartz and geodes.
- Row 3: corundum.
- Row 4: beryl.
- Row 5: garnet.
- Row 6: feldspar.
- Row 7: opal.
- Row 8: tourmaline.
- Row 9: topaz, zircon, spinel.
- Row 10: copper-zone gems.
- Row 11: legendary/special.
- Row 12: joke finds and mystery shards.

Mineable world nodes can use a second atlas:

- Cell size: `96x96` or `128x128`.
- Include generic node shapes: quartz cluster, geode rock, dark ore, copper-stained rock, glowing pocket, fossil-looking lump.
- Node sprite does not need to reveal the exact gem. It should hint at the pocket type.

Current starter atlas:

- Size: `1024x1024`.
- Grid: `8 columns x 8 rows`.
- Display cell size: `64x64`.
- Source cell size: `128x128`.
- Filename: `public/gems/gem-starter-atlas-64.png`.
- Code mapping: `src/data/gems.ts`.
- Sprite reader: `src/components/GemSprite.tsx`.
- Purpose: prove the discovery card, haul, rarity, and atlas lookup before generating larger production sheets.

Current 64-gem row layout:

- Row 1: Clear Quartz, Milky Quartz, Rose Quartz, Smoky Quartz, Citrine, Amethyst, Banded Agate, Quartz Geode.
- Row 2: Amethyst Geode, Jasper, Sapphire, Ruby-Zoned Sapphire, Ruby, Black Spinel, Garnet, Emerald.
- Row 3: Aquamarine, Moonstone, Labradorite, Common Opal, Fire Opal, Turquoise, Malachite, Suspicious Glass.
- Row 4: Hematite, Pyrite, Fluorite, Calcite, Carnelian, Chalcedony, Tiger's Eye, Unakite.
- Row 5: Peridot, Iolite, Sunstone, Blue Lace Agate, Moss Agate, Bloodstone, Rhodonite, Lapis Lazuli.
- Row 6: Topaz, Imperial Topaz, Tourmaline, Watermelon Tourmaline, Spinel, Red Spinel, Zircon, Blue Zircon.
- Row 7: Tanzanite, Alexandrite, Chrysoberyl, Star Sapphire, Star Ruby, Black Opal, Precious Opal, Paraiba Tourmaline.
- Row 8: Diamond, Yellow Diamond, Pink Diamond, Blue Diamond, Painite, Taaffeite, Void Crystal, Perfect Amethyst.

## Planets

Planets should be simple, mostly aesthetic at first.

Planet data:

- `name`
- `surfaceColor`
- `skyColor`
- `gemFamily`
- `weather`
- `quirk`

Example quirks:

- Low gravity: crystals bob gently.
- Sparkle storm: higher chance of rare gems.
- Sleepy dust: mining takes longer.
- Glass dunes: more quartz.
- Bubble caves: candy gems show up.

## Station

The station starts as one static building, then becomes a light upgrade system.

Possible station stats:

- Scanner: reveals better gem odds.
- Drill: mines faster or gets extra gems.
- Storage: holds more haul.
- Launch fuel: needed to go to the next planet.
- Comfort: cosmetic, cute base decorations.

## Save Scope

Start with browser `localStorage`. No Supabase needed for the first versions.

Save:

- Character name.
- Discovered gems.
- Current planet.
- Station upgrades.

Maybe later use Supabase if we want cloud saves, multiple devices, shared Jojo profiles, or a tiny leaderboard.

## Visual Direction

Keep the look bold, readable, and toy-like. This does not need to be a full pixel-art game unless the asset pack pushes that way.

Good styles:

- Pixel art if the packs are cohesive.
- Cute isometric if enough station/terrain assets exist.
- Flat illustrated sprites if easier to mix and recolor.
- Low-poly rendered sprites if we find space-base packs.

Avoid:

- Realistic sci-fi UI.
- Dark military space-game vibes.
- Asset soup with five unrelated art styles.

## Asset Shopping List

Look on itch.io for small cohesive packs. Prioritize license clarity and enough matching pieces over perfection.

### Must-Have Assets

- Space or alien planet background.
- Planet ground tiles or surface strips.
- Small sci-fi outpost, station, base, tent, dome, or habitat.
- Crystal clusters / gems / ore nodes.
- UI panel pieces or simple buttons.
- Small blips for mining, scanning, found item, launch.

### Very Useful Assets

- Character portrait or tiny explorer sprite.
- Spaceship or shuttle.
- Planet icons.
- Gem icon sprite sheet:
  - first target: `1024x1024`
  - `64x64` cells
  - 80-120 filled slots to start
- More terrain biomes:
  - desert
  - ice
  - moon rock
  - crystal cave
  - volcanic
- Ambient loops:
  - soft space hum
  - wind
  - cave sparkle

### Optional Later Assets

- Upgrade icons:
  - scanner
  - drill
  - battery
  - storage crate
  - fuel cell
- Gem inventory icons.
- Small animated effects:
  - sparkle
  - dust puff
  - scan ring
  - mining hit
  - launch flame

## Itch.io Search Terms

Try combinations of these:

- `pixel space base`
- `pixel alien planet`
- `sci fi outpost`
- `space mining`
- `crystal cave pixel`
- `gem icons`
- `ore nodes`
- `alien tileset`
- `planet tileset`
- `space UI`
- `cozy sci fi`
- `low poly space`
- `isometric sci fi`
- `mining game assets`

## Folder Plan

- `public/station/`
  - station building, scanner, drill, storage, launch pad.
- `public/gems/`
  - gem icons, crystal clusters, sparkle effects, atlas PNGs.
- `public/planets/`
  - skies, surfaces, planet thumbnails, biome pieces.
- `public/characters/`
  - Jojo/operator portraits or explorer sprites.
- `public/ui/`
  - panels, icons, buttons if using image UI.
- `public/audio/`
  - mining pings, scanner sounds, success sounds, ambience.
- `src/data/`
  - `gemProfiles.ts`
  - `gemAtlas.ts`
  - `biomes.ts`
  - `lootTables.ts`

## Implementation Roadmap

### Milestone 1: Clickable Toy Scene

- Home screen works.
- Station scene works.
- Crystal nodes are clickable.
- Found gems appear in a haul list.
- State resets cleanly.

### Milestone 2: Gem Data And Discovery Cards

- Add the first 30-50 `gemProfiles`.
- Add rarity bands and a simple weighted roll.
- Show a discovery card when a gem is found.
- Add local original gem notes, not runtime scraped text.
- Use placeholder CSS gem icons until the sprite sheet is ready.

### Milestone 3: Tiny Save

- Save character, planet, haul, and gem book in `localStorage`.
- Continue button on home screen.
- Reset save button tucked away.

### Milestone 4: Planet Hop

- Add launch button.
- Generate a new planet.
- New palette and gem table per planet.
- Keep gem book between planets.
- Show scanner copy like `possible gemstones: x, y, z`.

### Milestone 5: Surface Scan And Site Choice

- Add top-down ship/surface exploration.
- Generate several possible landing sites per planet.
- Give each site a biome, geology tag, confidence level, and possible gem list.
- Let the player choose one site and land.

### Milestone 6: Side-Profile Dig Site

- Switch from surface view to a side-profile dig view after landing.
- Add hidden pockets and simple sensor hints.
- Let tools affect what the player can detect or extract.

### Milestone 7: Station Upgrades

- Add 3-4 upgrades.
- Spend gems on upgrades.
- Upgrades make small visible/stat changes.

### Milestone 8: Polish Pass

- Add real assets.
- Add sound effects.
- Add small animations.
- Add empty/found/rare states.
- Add gem icon atlas and atlas lookup data.

## Island Hub Link

The Sakhalteam island hub should route a future `portal_gem_station_alpha` object to `/gem-station-alpha/`. The portal belongs in the Crystals zone.

When the Crystals zone GLB exists, place an object named:

`portal_gem_station_alpha`

That object should behave like `portal_adhdo`, `portal_bird_bingo`, etc.

## Open Questions

- Pixel art, isometric, or flat illustrated?
- Is Jojo the operator, or does Jojo create silly operators?
- Should the game have a day counter?
- Should planets be random, chosen from a list, or a mix?
- Should gems be purely collectible, or also currency for station upgrades?
- Should mining be instant click, timed, or a tiny reaction minigame?
- How accurate should the geology be versus cute and game-readable?
- Should the Gem Book include source-inspired facts, fictional operator notes, or both?
- Should the first atlas be generated all at once, or should we start with one row per gem family?
- Does the game need a separate "sample quality" score, or are rarity and variant enough?
