import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger]; // other middlewares can be stored here


const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;