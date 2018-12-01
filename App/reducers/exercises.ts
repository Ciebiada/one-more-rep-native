import * as R from 'ramda'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import { RootState } from '.'
import * as exercises from '../actions/exercises'
import { selectExercise } from './../actions/exercises'

export interface Exercise {
  id: string
  name: string
}

type ExercisesAction = ActionType<typeof exercises>

const byId = (state: { [id: string]: Exercise } = {}, action: ExercisesAction) => {
  switch (action.type) {
    case getType(exercises.addExercise):
      return R.assoc(action.payload.exercise.id, action.payload.exercise, state)
    case getType(exercises.updateExercise):
      return R.assoc(
        action.payload.id,
        R.merge(state[action.payload.id], action.payload.props),
        state,
      )
    default:
      return state
  }
}

const allIds = (state: string[] = [], action: ExercisesAction) => {
  switch (action.type) {
    case getType(exercises.addExercise):
      return R.append(action.payload.exercise.id, state)
    default:
      return state
  }
}

const selectedExercise = (state: string | null = null, action: ExercisesAction) => {
  switch (action.type) {
    case getType(exercises.selectExercise):
      return action.payload.id
    case getType(exercises.deselectExercise):
      return null
    default:
      return state
  }
}

export const getExercises = (state: RootState, workoutId: string) =>
  state.workouts.byId[workoutId].exercises.map((id) => state.exercises.byId[id])

export default combineReducers({
  allIds,
  byId,
  selectedExercise,
})
