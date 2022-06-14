import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {ProfileReducer as profile} from "./reducers"

const rootReducer = combineReducers({
  profile
})

export const createStore = (preloadedState?) => {
  return configureStore({reducer: rootReducer, preloadedState})
}