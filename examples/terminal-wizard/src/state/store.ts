import { combineReducers, createStore as createReduxStore } from 'redux'
import { entitiesReducer } from './entities/reducer'
import { mapReducer } from './map/reducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  map: mapReducer,
})

export const createStore = (initialState: RootState) => {
  return createReduxStore(rootReducer, initialState)
}

export type Store = ReturnType<typeof createStore>
export type RootState = ReturnType<typeof rootReducer>
