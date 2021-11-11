export enum ActionType {
  Move = 'MOVE',
}

interface MoveAction {
  type: ActionType.Move
  id: string
  x: number
  y: number
}

export type Action = MoveAction
