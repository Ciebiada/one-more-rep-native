import { combineEpics, Epic } from 'redux-observable'
import { filter, map, mergeMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootState } from '../reducer'
import { addSet, removeSet } from '../sets/actions'
import { addExercise, removeExercise } from './actions'
import { ExerciseAction } from './reducer'

const addFirstSet: Epic<ExerciseAction> = (action$) => action$.pipe(
  filter(isActionOf(addExercise)),
  map((action) => addSet(action.payload.id)),
)

const removeChildren: Epic<ExerciseAction, ExerciseAction, RootState> = (action$, state) => action$.pipe(
  filter(isActionOf(removeExercise)),
  mergeMap((action) => state.value.exercises.byId[action.payload].sets.map((setId) =>
    removeSet(setId),
  )),
)

export default combineEpics(
  addFirstSet,
  removeChildren,
)
