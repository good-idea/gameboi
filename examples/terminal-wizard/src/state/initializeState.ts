import { State as EntityState } from './entities/reducer'
import { Map, EntityData } from '../types'
import { RootState } from './store'
import { createEntity } from '../entities/createEntity'

export const initializeState = (
  map: Map,
  entities: EntityData[]
): RootState => {
  entities.forEach((entity) => {
    const { x, y } = entity.position
    if (x > map.width || y > map.height) {
      throw new Error(
        `Entity ${entity.id} is out of bounds: \nposition:${x}, ${y}\nmap: ${map.width}, ${map.height}`
      )
    }
  })
  const initialState = {
    entities: {
      entities: new Map(entities.map((e) => [e.id, createEntity(e)])),
    },
    map: { map },
  }
  return initialState
}
