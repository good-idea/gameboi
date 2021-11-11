import { Entity } from '../../entities/Entity'
import { Action, ActionType } from './actions'

export interface State {
  entities: Map<string, Entity>
}

const initialState: State = { entities: new Map() }

export const entitiesReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.Move:
      return {
        ...state,
      }

    default:
      return state
  }
}
