import * as R from 'ramda'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import * as exercises from '../exercises/actions'
import * as workouts from './actions'

export interface Workout {
  date: string
  deleted: boolean
  exercises: string[]
  id: string
  name: string
}

export type WorkoutAction = ActionType<typeof workouts> | ActionType<typeof exercises>

const byId = (state: { [id: string]: Workout } = {}, action: WorkoutAction) => {
  switch (action.type) {
    case getType(workouts.addWorkout):
      return R.assoc(action.payload.id, action.payload, state)
    case getType(workouts.removeWorkout):
      return R.assocPath(
        [action.payload, 'deleted'],
        true,
        state,
      )
    case getType(workouts.updateWorkout):
      return R.assoc(
        action.payload.id,
        R.merge(state[action.payload.id], action.payload.props),
        state,
      )
    case getType(workouts.cloneWorkout):
      return R.assoc(
        action.payload.id,
        R.mergeDeepRight(R.clone(state[action.payload.oldId]), {
          date: new Date().toJSON(),
          exercises: [],
          id: action.payload.id,
        }),
        state,
      )
    case getType(exercises.addExercise):
    case getType(exercises.cloneExercise):
      return R.assocPath(
        [action.payload.workoutId, 'exercises'],
        R.append(action.payload.id, state[action.payload.workoutId].exercises),
        state,
      )
    default:
      return state
  }
}

const allIds = (state: string[] = [], action: WorkoutAction) => {
  switch (action.type) {
    case getType(workouts.addWorkout):
    case getType(workouts.cloneWorkout):
      return R.append(action.payload.id, state)
    case getType(workouts.removeAllWorkouts):
      return []
    default:
      return state
  }
}

export default combineReducers({
  allIds,
  byId,
})
