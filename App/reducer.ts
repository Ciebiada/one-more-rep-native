import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'
import exercises from './exercises/reducer'
import sets from './sets/reducer'
import workouts from './workouts/reducer'

const reducer = combineReducers({
  exercises,
  sets,
  workouts,
})

export default reducer

export type RootState = StateType<typeof reducer>
