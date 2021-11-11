import { Renderer } from './types'
import { Store } from './state/store'
import { sleep } from './utils'

export class GameLoop {
  constructor(private renderer: Renderer, private store: Store) {}

  init() {
    const state = this.store.getState()
    this.renderer.render(state)
    this.run()
  }

  update() {
    const { entities } = this.store.getState().entities
    entities.forEach((e) => {
      e.update(this.store)
    })
  }

  async run() {
    this.update()
    await sleep(100)
    const state = this.store.getState()
    this.renderer.render(state)
    this.run()
  }
}
