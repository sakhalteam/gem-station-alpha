# Gem Station Alpha GDD

## Vibe

Gem Station Alpha is a small, cozy planet-hopping mining station minigame for Jojo. The toy-box pitch is SimLife energy, but tiny: pick an explorer, name a planet, land at a little station, poke around, find gems, and eventually launch to the next strange planet.

## First Playable

- Home screen with character name and planet name.
- Start button opens a static gem station scene on the named planet.
- The station scene shows the operator, planet, and a short list of possible gems.
- No persistence yet. A run can reset back to the home screen.

## Core Loop

1. Choose or create an operator.
2. Pick a planet name.
3. Land at the gem station.
4. Survey nearby nodes for gems.
5. Upgrade or decorate the station.
6. Launch to another planet with new gem colors, terrain, and little surprises.

## Early Systems

- Gem types: simple collectible labels at first, later rarity, color, shape, and silly names.
- Station status: power, scanner, storage, and launch fuel.
- Planet traits: weather, surface color, gem family, and one odd local rule.
- Events: meteor dust, scanner ping, friendly visitor, machine jam, bonus crystal bloom.

## Island Hub Link

The Sakhalteam island hub should route a future `portal_gem_station_alpha` object to `/gem-station-alpha/`. The portal belongs in the Crystals zone.

## Asset Buckets

- `public/station/` for station sprites, renders, or models.
- `public/gems/` for gem icons and crystal clusters.
- `public/planets/` for backgrounds, terrain, and sky pieces.
- `public/audio/` for UI blips, mining pings, ambience, and launch sounds.

## Later Nice-To-Haves

- Save one local run in the browser.
- A tiny mission board from the station console.
- Gem book / collection page.
- Planet travel log.
- Unlockable station skins.
