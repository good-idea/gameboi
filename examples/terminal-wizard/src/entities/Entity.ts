import { Position, EntityData, Store } from '../types'

export class Entity {
  public position: Position
  public icon: string
  public id: string

  getSelf(store: Store) {
    const { map, entities } = store.getState()
    const self = entities.entities.get(this.id)
    return self
  }

  constructor(private entity: EntityData) {
    this.position = entity.position
    this.icon = entity.icon
    this.id = entity.id
  }

  update(store: Store) {
    return
  }
}
