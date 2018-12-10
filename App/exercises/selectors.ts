import * as R from 'ramda'
import { RootState } from '../reducer'
import { Exercise } from './reducer'

export const getExercises = (state: RootState, workoutId: string) =>
  R.pipe<string[], Exercise[], Exercise[]>(
    R.map((id) => state.exercises.byId[id]),
    R.reject(R.propEq('deleted', true)),
  )(state.workouts.byId[workoutId].exercises)
