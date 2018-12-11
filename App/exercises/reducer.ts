import * as R from 'ramda'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import * as sets from '../sets/actions'
import * as exercises from './actions'

export interface Exercise {
  id: string
  name: string
  sets: string[]
  deleted: boolean
  workoutId: string
}

export type ExerciseAction = ActionType<typeof exercises> | ActionType<typeof sets>

const byId = (state: { [id: string]: Exercise } = {}, action: ExerciseAction) => {
  switch (action.type) {
    case getType(exercises.addExercise):
      return R.assoc(action.payload.id, action.payload, state)
    case getType(exercises.removeExercise):
      return R.assocPath(
        [action.payload, 'deleted'],
        true,
        state,
      )
    case getType(exercises.updateExercise):
      return R.assoc(
        action.payload.id,
        R.merge(state[action.payload.id], action.payload.props),
        state,
      )
    case getType(sets.addSet):
      return R.assocPath(
        [action.payload.exerciseId, 'sets'],
        R.append(action.payload.id, state[action.payload.exerciseId].sets),
        state,
      )
    default:
      return state
  }
}

const allIds = (state: string[] = [], action: ExerciseAction) => {
  switch (action.type) {
    case getType(exercises.addExercise):
      return R.append(action.payload.id, state)
    default:
      return state
  }
}

export default combineReducers({
  allIds,
  byId,
})
