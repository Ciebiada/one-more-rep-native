import * as R from 'ramda'
import { combineEpics, Epic } from 'redux-observable'
import { filter, map } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootState } from '../reducer'
import { addSet, updateSet } from '../sets/actions'
import { SetAction } from './reducer'

const getExerciseId = (setId: string, state: RootState) =>
  state.sets.byId[setId].exerciseId

const getExercise = (setId: string, state: RootState) =>
  state.exercises.byId[getExerciseId(setId, state)]

const addSetAtTheEnd: Epic<SetAction, SetAction, RootState> = (action$, state) => action$.pipe(
  filter(isActionOf(updateSet)),
  filter((action) => R.last(getExercise(action.payload.id, state.value).sets) === action.payload.id),
  map((action) => addSet(getExerciseId(action.payload.id, state.value))),
)

export default combineEpics(
  addSetAtTheEnd,
)
