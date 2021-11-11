import { EntityData, Store } from '../types'
import { ActionType } from '../state/entities/actions'
import { Entity } from './Entity'

enum Direction {
  Left = 'Left',
  Right = 'Right',
}

export class Baddie extends Entity {
  private direction: Direction = Direction.Left

  constructor(private baddie: EntityData) {
    super(baddie)
  }

  update(store: Store) {
    const { dispatch } = store
    const { map, entities } = store.getState()
    const self = this.getSelf(store)
    const { x, y } = self.position
    this.direction =
      x === 3
        ? Direction.Right
        : x >= map.map.width
        ? Direction.Left
        : this.direction

    const moveX = this.direction === Direction.Right ? 1 : -1
    this.position.x = self.position.x + moveX
  }
}
