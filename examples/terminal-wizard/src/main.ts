import entities from './data/entities'
import map from './data/map'
import { Renderer } from './renderer'
import { GameLoop } from './loop'
import { initializeState } from './state/initializeState'
import { createStore } from './state/store'

const GameRenderer = new Renderer()

const initialState = initializeState(map, entities)
const store = createStore(initialState)

const Loop = new GameLoop(GameRenderer, store)

Loop.init()
