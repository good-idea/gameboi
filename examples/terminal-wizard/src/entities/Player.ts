import * as readline from 'readline'
import { Store, EntityData } from '../types'
import { Entity } from './Entity'

readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

const handleClose = (str, key) => {
  if (key.name === 'c' && key.ctrl === true) {
    console.log('bye!')
    process.exit(0)
  }
}

process.stdin.on('keypress', handleClose)

interface KeyPress {
  sequence: string
  name: string
  ctrl: boolean
  meta: boolean
  shift: boolean
}

export class Player extends Entity {
  pressedKey: string | null

  constructor(private player: EntityData) {
    super(player)
    process.stdin.on('keypress', this.handleKeypress)
  }

  handleKeypress = (str: string | undefined, key: KeyPress) => {
    this.pressedKey = key.name
  }

  update(store: Store) {
    const self = this.getSelf(store)
    const moveX =
      this.pressedKey === 'left' ? -1 : this.pressedKey === 'right' ? 1 : 0
    const moveY =
      this.pressedKey === 'up' ? -1 : this.pressedKey === 'down' ? 1 : 0

    this.position.x = self.position.x + moveX
    this.position.y = self.position.y + moveY
    this.pressedKey = null
  }
}
