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

## Gems

Each gem can start as plain data:

- `id`
- `name`
- `color`
- `rarity`
- `value`
- `description`

Starter gem families:

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
  - gem icons, crystal clusters, sparkle effects.
- `public/planets/`
  - skies, surfaces, planet thumbnails, biome pieces.
- `public/characters/`
  - Jojo/operator portraits or explorer sprites.
- `public/ui/`
  - panels, icons, buttons if using image UI.
- `public/audio/`
  - mining pings, scanner sounds, success sounds, ambience.

## Implementation Roadmap

### Milestone 1: Clickable Toy Scene

- Home screen works.
- Station scene works.
- Crystal nodes are clickable.
- Found gems appear in a haul list.
- State resets cleanly.

### Milestone 2: Tiny Save

- Save character, planet, haul, and gem book in `localStorage`.
- Continue button on home screen.
- Reset save button tucked away.

### Milestone 3: Planet Hop

- Add launch button.
- Generate a new planet.
- New palette and gem table per planet.
- Keep gem book between planets.

### Milestone 4: Station Upgrades

- Add 3-4 upgrades.
- Spend gems on upgrades.
- Upgrades make small visible/stat changes.

### Milestone 5: Polish Pass

- Add real assets.
- Add sound effects.
- Add small animations.
- Add empty/found/rare states.

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
