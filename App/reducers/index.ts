import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'
import workouts from './workouts'

const rootReducer = combineReducers({
  workouts,
})

export default rootReducer

export type RootState = StateType<typeof rootReducer>
