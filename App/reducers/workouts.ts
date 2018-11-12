import * as R from 'ramda'
import { ActionType, getType } from 'typesafe-actions'
import * as workouts from '../actions/workouts'

type WorkoutsAction = ActionType<typeof workouts>

export interface IWorkout {
  id: string
  name: string
  date: string
}

export default (state: IWorkout[] = [], action: WorkoutsAction) => {
  switch (action.type) {
    case getType(workouts.addWorkout):
      return [...state, action.payload]
    case getType(workouts.removeWorkout):
      return state.filter((workout) => workout.id !== action.payload)
    case getType(workouts.updateWorkout):
      return state.map((workout) => workout.id === action.payload.id
        ? { ...workout, ...action.payload.workout }
        : workout,
      )
    default:
      return state
  }
}
