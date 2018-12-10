import { combineEpics, Epic } from 'redux-observable'
import { filter, map } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { addSet } from '../sets/actions'
import { addExercise } from './actions'
import { ExerciseAction } from './reducer'

const addFirstSet: Epic<ExerciseAction> = (action$) => action$.pipe(
  filter(isActionOf(addExercise)),
  map((action) =>
    addSet(action.payload.exercise.id)),
)

export default combineEpics(
  addFirstSet,
)
