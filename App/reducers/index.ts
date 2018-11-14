import { combineReducers } from 'redux'

import workouts, { Workout } from './workouts'

export interface State {
  workouts: Workout[]
}

export default combineReducers({
  workouts,
})
