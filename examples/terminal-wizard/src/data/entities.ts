import { EntityData, EntityType } from '../types'

const entities: EntityData[] = [
  {
    id: 'player',
    type: EntityType.Player,
    icon: '🧙',
    position: {
      x: 50,
      y: 29,
    },
  },
  {
    id: 'baddie1',
    type: EntityType.Baddie,
    icon: '😈',
    position: {
      x: 20,
      y: 5,
    },
  },
  {
    id: 'baddie2',
    type: EntityType.Baddie,
    icon: '👻',
    position: {
      x: 30,
      y: 4,
    },
  },
]

export default entities
