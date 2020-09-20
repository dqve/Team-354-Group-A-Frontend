import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux"

import thunk from "redux-thunk"
import touristsReducer, { touristsInitialState } from "./reducers/touristReducer"

export const initialState = {
  touristSites: touristsInitialState,
}

export const reducer = combineReducers({
  touristsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for redux dev tools

export const createStore = (
  storeReducer = reducer,
  storeInitialState = initialState
) =>
  createReduxStore(
    storeReducer,
    storeInitialState,
    composeEnhancers(applyMiddleware(thunk))
  )

export default createStore(reducer, initialState)