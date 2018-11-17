import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'
import exercises from './exercises'
import workouts from './workouts'

const rootReducer = combineReducers({
  exercises,
  workouts,
})

export default rootReducer

export type RootState = StateType<typeof rootReducer>
