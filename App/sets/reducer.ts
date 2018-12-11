import * as R from 'ramda'
import set from 'ramda/es/set'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import * as exercises from '../exercises/actions'
import { RootState } from '../reducer'
import * as sets from './actions'

export interface Set {
  deleted: boolean
  id: string
  exerciseId: string
  reps?: number
  weight?: number
}

export type SetAction = ActionType<typeof sets> | ActionType<typeof exercises>

const byId = (state: { [id: string]: Set } = {}, action: SetAction) => {
  switch (action.type) {
    case getType(sets.addSet):
      return R.assoc(action.payload.id, action.payload, state)
    case getType(sets.removeSet):
      return R.assocPath(
        [action.payload, 'deleted'],
        true,
        state,
      )
    case getType(sets.updateSet):
      const updatedSet = R.pipe(
        R.mergeDeepLeft(action.payload.props),
        R.when((s) => !s.reps && !s.weight, R.mergeDeepLeft({deleted: true})),
      )(state[action.payload.id])

      return R.assoc(
        action.payload.id,
        updatedSet,
        state,
      )
    default:
return state
  }
}

const allIds = (state: string[] = [], action: SetAction) => {
  switch (action.type) {
    case getType(sets.addSet):
      return R.append(action.payload.id, state)
    default:
      return state
  }
}

export default combineReducers({
  allIds,
  byId,
})
