import { Action } from 'redux'
import { combineEpics, Epic, ofType } from 'redux-observable'
import { filter, map, mapTo, mergeMap, mergeMapTo, tap } from 'rxjs/operators'
import { getType, isActionOf } from 'typesafe-actions'
import { RootState } from '../reducers'
import { Workout } from '../reducers/workouts'
import { removeExercise } from './../actions/exercises'
import { removeWorkout } from './../actions/workouts'
import { getExercises } from './../reducers/exercises'

const removeChildren: Epic<Action, Action, RootState> = (action$, state) => action$.pipe(
  tap(console.log),
  filter(isActionOf(removeWorkout)),
  mergeMap(({ payload }) =>
    getExercises(state.value, payload).map((exercise) =>
      removeExercise(payload, exercise.id),
    )),
  //   getExercises(state.value, payload).map((exercise) =>
  //     ({type: 'remove ex', payload: exercise.id}))),
      // removeExercise(payload, exercise.id))),
)

export default combineEpics(
  // removeChildren,
)
