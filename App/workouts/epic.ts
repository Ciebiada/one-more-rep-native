import { combineEpics, Epic } from 'redux-observable'
import { filter, mergeMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { removeExercise } from '../exercises/actions'
import { RootState } from './../reducer'
import { removeWorkout } from './actions'
import { WorkoutAction } from './reducer'

const removeChildren: Epic<WorkoutAction, WorkoutAction, RootState> = (action$, state) => action$.pipe(
  filter(isActionOf(removeWorkout)),
  mergeMap((action) => state.value.workouts.byId[action.payload].exercises.map((exerciseId) =>
    removeExercise(exerciseId),
  )),
)

export default combineEpics(
  removeChildren,
)
