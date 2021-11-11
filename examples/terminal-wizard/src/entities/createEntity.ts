import { EntityData, EntityType } from '../types'
import { Entity } from './Entity'
import { Baddie } from './Baddie'
import { Player } from './Player'

export const createEntity = (data: EntityData): Entity => {
  switch (data.type) {
    case EntityType.Player:
      return new Player(data)
    case EntityType.Baddie:
      return new Baddie(data)
    default:
      return new Entity(data)
  }
}
