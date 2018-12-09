import * as R from 'ramda'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import { RootState } from '.'
import * as exercises from '../actions/exercises'
import * as sets from '../actions/sets'

export interface Exercise {
  id: string
  name: string
  sets: string[]
}

export type ExerciseAction = ActionType<typeof exercises> | ActionType<typeof sets>

const byId = (state: { [id: string]: Exercise } = {}, action: ExerciseAction) => {
  switch (action.type) {
    case getType(exercises.addExercise):
      return R.assoc(action.payload.exercise.id, action.payload.exercise, state)
    case getType(exercises.removeExercise):
      return R.dissoc<typeof state>(action.payload.exerciseId, state)
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
    case getType(exercises.removeExercise):
      return R.without([action.payload.exerciseId], state)
    default:
      return state
  }
}

export const getExercises = (state: RootState, workoutId: string) =>
  state.workouts.byId[workoutId].exercises.map((id) => state.exercises.byId[id])

export default combineReducers({
  allIds,
  byId,
})
