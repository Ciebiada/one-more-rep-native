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
}

export type ExerciseAction = ActionType<typeof exercises> | ActionType<typeof sets>

const byId = (state: { [id: string]: Exercise } = {}, action: ExerciseAction) => {
  switch (action.type) {
    case getType(exercises.addExercise):
      return R.assoc(action.payload.exercise.id, action.payload.exercise, state)
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
        R.append(action.payload.set.id, state[action.payload.exerciseId].sets),
        state,
      )
    case getType(sets.removeSet):
      return R.assocPath(
        [action.payload.exerciseId, 'sets'],
        R.without([action.payload.setId], state[action.payload.exerciseId].sets),
        state,
      )
    default:
      return state
  }
}

const allIds = (state: string[] = [], action: ExerciseAction) => {
  switch (action.type) {
    case getType(exercises.addExercise):
      return R.append(action.payload.exercise.id, state)
    default:
      return state
  }
}

export default combineReducers({
  allIds,
  byId,
})
