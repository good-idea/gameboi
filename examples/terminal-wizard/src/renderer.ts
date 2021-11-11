import { RootState } from './state/store'

export class Renderer {
  constructor() {}

  render(state: RootState) {
    const { map } = state.map
    const { entities } = state.entities
    const entitiesArray = Array.from(entities.values())

    const lines = Array.from({ length: map.height })
      .map((_, y) => {
        const horizontalChar = y === 0 || y === map.height - 1 ? '-' : ' '

        const line = [
          '+',
          ...Array.from({ length: map.width }).map(() => horizontalChar),
          '+',
        ].join('')

        const intersectingEntities = entitiesArray.filter(
          (e) => e.position.y === y
        )

        return intersectingEntities.reduce<string>((prevLine, entity) => {
          const { x } = entity.position
          return [
            prevLine.slice(0, x - entity.icon.length),
            entity.icon,
            prevLine.slice(x),
          ].join('')
        }, line)
      })
      .join('\n')

    console.clear()
    console.log(lines)
  }
}
