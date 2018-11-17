import * as R from 'ramda'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import { RootState } from '.'
import * as exercises from '../actions/exercises'
import * as workouts from '../actions/workouts'

export interface Workout {
  id: string
  name: string
  date: string
  exercises: string[]
}

type WorkoutsAction = ActionType<typeof workouts> | ActionType<typeof exercises>

const byId = (state: { [id: string]: Workout } = {}, action: WorkoutsAction) => {
  switch (action.type) {
    case getType(workouts.addWorkout):
      return R.assoc(action.payload.id, action.payload, state)
    case getType(workouts.updateWorkout):
      return R.assoc(
        action.payload.id,
        R.merge(state[action.payload.id], action.payload.props),
        state,
      )
    case getType(workouts.removeWorkout):
      return R.dissoc<typeof state>(action.payload, state)
    case getType(exercises.addExercise):
      return R.assocPath(
        [action.payload.workoutId, 'exercises'],
        R.append(action.payload.exercise.id, state[action.payload.workoutId].exercises),
        state,
      )
    default:
      return state
  }
}

const allIds = (state: string[] = [], action: WorkoutsAction) => {
  switch (action.type) {
    case getType(workouts.addWorkout):
      return R.append(action.payload.id, state)
    case getType(workouts.removeWorkout):
      return R.without([action.payload], state)
    default:
      return state
  }
}

export const getWorkouts = (state: RootState) =>
  R.sort(
    R.descend<Workout>(R.prop('date')),
    state.workouts.allIds.map((id) => state.workouts.byId[id]),
  )

export const getWorkout = (state: RootState, id: string) =>
  state.workouts.byId[id]

export default combineReducers({
  allIds,
  byId,
})
