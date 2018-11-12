import { combineReducers } from 'redux'

import workouts, { IWorkout } from './workouts'

export interface IState {
  workouts: IWorkout[]
}

export default combineReducers({
  workouts,
})
