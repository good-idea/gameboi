import { Map } from '../../types'

interface State {
  map: Map
}

type Action = any

const initialState: State = {
  map: { width: 10, height: 10 },
}
export const mapReducer = (state: State = initialState, action: Action) => {
  return state
}
