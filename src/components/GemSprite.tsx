import { GemProfile } from '../data/gems'

const atlasPath = '/gem-station-alpha/gems/gem-starter-atlas-64.png'
const atlasGridSize = 8
const displayCellSize = 64

type GemSpriteProps = {
  gem: GemProfile
  size?: number
}

export function GemSprite({ gem, size = displayCellSize }: GemSpriteProps) {
  return (
    <span
      className="gem-sprite"
      role="img"
      aria-label={gem.name}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${atlasPath})`,
        backgroundPosition: `${-gem.atlas.col * size}px ${-gem.atlas.row * size}px`,
        backgroundSize: `${atlasGridSize * size}px ${atlasGridSize * size}px`,
      }}
    />
  )
}
