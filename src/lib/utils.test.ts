import { expect, it } from 'vitest'
import { formatImageFilename } from './utils'

it('should format image filename', () => {
  expect(formatImageFilename({ imageDescription: 'Serene Mountain Vista' })).toBe(
    'serene_mountain_vista'
  )

  expect(formatImageFilename({ imageDescription: 'Ancient Stone Bridge 42' })).toBe(
    'ancient_stone_bridge_42'
  )

  expect(
    formatImageFilename({ imageDescription: 'Whimsical Clockwork Contraption!!!' })
  ).toBe('whimsicalclockworkcontraption')

  expect(
    formatImageFilename({ imageDescription: '..Deep-Sea, Bioluminescent, Creature?' })
  ).toBe('deepsea_bioluminescent_creature')
})
