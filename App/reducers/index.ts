import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'
import exercises from './exercises'
import sets from './sets'
import workouts from './workouts'

const rootReducer = combineReducers({
  exercises,
  sets,
  workouts,
})

export default rootReducer

export type RootState = StateType<typeof rootReducer>
