import { combineEpics, Epic } from 'redux-observable'
import { filter, mergeMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { removeExercise } from '../exercises/actions'
import { cloneExercise } from './../exercises/actions'
import { RootState } from './../reducer'
import { cloneWorkout, removeWorkout } from './actions'
import { WorkoutAction } from './reducer'

const removeExercises: Epic<WorkoutAction, WorkoutAction, RootState> = (action$, state) => action$.pipe(
  filter(isActionOf(removeWorkout)),
  mergeMap((action) => state.value.workouts.byId[action.payload].exercises.map((exerciseId) =>
    removeExercise(exerciseId),
  )),
)

const cloneExercises: Epic<WorkoutAction, WorkoutAction, RootState> = (action$, state) => action$.pipe(
  filter(isActionOf(cloneWorkout)),
  mergeMap((action) => state.value.workouts.byId[action.payload.oldId].exercises.map((exerciseId) =>
    cloneExercise(exerciseId, action.payload.id),
  )),
)

export default combineEpics(
  cloneExercises,
  removeExercises,
)
