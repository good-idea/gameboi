import { Store, RootState } from './state/store'

export { Store, RootState } from './state/store'

export interface Map {
  width: number
  height: number
}

export enum EntityType {
  Player = 'Player',
  Baddie = 'Baddie',
}

export interface Position {
  x: number
  y: number
}

export interface EntityData {
  id: string
  type: EntityType
  position: Position
  icon: string
}

export interface Renderer {
  render: (state: RootState) => void
}
