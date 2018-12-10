import * as R from 'ramda'
import { RootState } from '../reducer'
import { Set } from './reducer'

export const getSets = (state: RootState, exerciseId: string) =>
  R.pipe<string[], Set[], Set[]>(
    R.map((id) => state.sets.byId[id]),
    R.reject(R.propEq('deleted', true)),
  )(state.exercises.byId[exerciseId].sets)
