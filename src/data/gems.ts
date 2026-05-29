export type GemRarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Cosmic'

export type GemProfile = {
  id: string
  name: string
  family: string
  rarity: GemRarity
  atlas: {
    col: number
    row: number
  }
  note: string
}

const atlasRows = [
  {
    family: 'Quartz Progression',
    rarity: 'Common',
    names: [
      'Clear Quartz',
      'Milky Quartz',
      'Rose Quartz',
      'Smoky Quartz',
      'Citrine',
      'Amethyst',
      'Banded Agate',
      'Quartz Geode',
    ],
  },
  {
    family: 'Geodes / Silicates / Classic Gems',
    rarity: 'Uncommon',
    names: [
      'Amethyst Geode',
      'Jasper',
      'Sapphire',
      'Ruby-Zoned Sapphire',
      'Ruby',
      'Black Spinel',
      'Garnet',
      'Emerald',
    ],
  },
  {
    family: 'Iridescent / Hydrated / Coppery Gems',
    rarity: 'Uncommon',
    names: [
      'Aquamarine',
      'Moonstone',
      'Labradorite',
      'Common Opal',
      'Fire Opal',
      'Turquoise',
      'Malachite',
      'Suspicious Glass',
    ],
  },
  {
    family: 'Low-Tier Finds',
    rarity: 'Common',
    names: [
      'Hematite',
      'Pyrite',
      'Fluorite',
      'Calcite',
      'Carnelian',
      'Chalcedony',
      "Tiger's Eye",
      'Unakite',
    ],
  },
  {
    family: 'Mid-Tier Color Variants',
    rarity: 'Rare',
    names: [
      'Peridot',
      'Iolite',
      'Sunstone',
      'Blue Lace Agate',
      'Moss Agate',
      'Bloodstone',
      'Rhodonite',
      'Lapis Lazuli',
    ],
  },
  {
    family: 'Higher-Tier Refined Gems',
    rarity: 'Rare',
    names: [
      'Topaz',
      'Imperial Topaz',
      'Tourmaline',
      'Watermelon Tourmaline',
      'Spinel',
      'Red Spinel',
      'Zircon',
      'Blue Zircon',
    ],
  },
  {
    family: 'Rare / Exotic / Magical-Looking',
    rarity: 'Epic',
    names: [
      'Tanzanite',
      'Alexandrite',
      'Chrysoberyl',
      'Star Sapphire',
      'Star Ruby',
      'Black Opal',
      'Precious Opal',
      'Paraiba Tourmaline',
    ],
  },
  {
    family: 'Legendary / Endgame / Weird Special Finds',
    rarity: 'Legendary',
    names: [
      'Diamond',
      'Yellow Diamond',
      'Pink Diamond',
      'Blue Diamond',
      'Painite',
      'Taaffeite',
      'Void Crystal',
      'Perfect Amethyst',
    ],
  },
] as const

const rarityOverrides: Record<string, GemRarity> = {
  amethyst: 'Uncommon',
  'quartz-geode': 'Uncommon',
  sapphire: 'Rare',
  'ruby-zoned-sapphire': 'Epic',
  ruby: 'Epic',
  emerald: 'Epic',
  'suspicious-glass': 'Common',
  'imperial-topaz': 'Epic',
  'watermelon-tourmaline': 'Epic',
  'star-sapphire': 'Legendary',
  'star-ruby': 'Legendary',
  'black-opal': 'Legendary',
  'precious-opal': 'Epic',
  'paraiba-tourmaline': 'Legendary',
  diamond: 'Legendary',
  painite: 'Legendary',
  taaffeite: 'Legendary',
  'void-crystal': 'Cosmic',
  'perfect-amethyst': 'Legendary',
}

const notesByRarity: Record<GemRarity, string> = {
  Common: 'A steady little find. The station approves of useful sparkle.',
  Uncommon: 'A better pocket than the scanner promised. Very respectable shine.',
  Rare: 'This one gets its own careful tray in the gem book.',
  Epic: 'The kind of find that makes the console lights blink like they have feelings.',
  Legendary: 'A jackpot specimen. Jojo should absolutely make a face about this.',
  Cosmic: 'This does not fully behave like a mineral, but it is definitely yours now.',
}

function toId(name: string) {
  return name
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export const gemProfiles: GemProfile[] = atlasRows.flatMap((row, rowIndex) =>
  row.names.map((name, colIndex) => {
    const id = toId(name)
    const rarity = rarityOverrides[id] ?? row.rarity

    return {
      id,
      name,
      family: row.family,
      rarity,
      atlas: {
        col: colIndex,
        row: rowIndex,
      },
      note: notesByRarity[rarity],
    }
  }),
)

export const starterSurveyGemIds = [
  'clear-quartz',
  'rose-quartz',
  'quartz-geode',
  'amethyst-geode',
  'sapphire',
  'ruby-zoned-sapphire',
  'fire-opal',
  'malachite',
  'void-crystal',
]

const rarityWeights: Record<GemRarity, number> = {
  Common: 34,
  Uncommon: 22,
  Rare: 12,
  Epic: 5,
  Legendary: 2,
  Cosmic: 1,
}

export function rollGem() {
  const weightedPool = gemProfiles.flatMap((gem) =>
    Array.from({ length: rarityWeights[gem.rarity] }, () => gem),
  )
  return weightedPool[Math.floor(Math.random() * weightedPool.length)]
}
