import { combineEpics, Epic } from 'redux-observable'
import { filter, map } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { addExercise } from '../actions/exercises'
import { ExerciseAction } from '../reducers/exercises'
import { addSet } from './../actions/sets'

const addFirstSet: Epic<ExerciseAction> = (action$) => action$.pipe(
  filter(isActionOf(addExercise)),
  map((action) =>
    addSet(action.payload.exercise.id)),
)

export default combineEpics(
  addFirstSet,
)
