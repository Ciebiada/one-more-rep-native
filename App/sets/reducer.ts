import * as R from 'ramda'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import * as exercises from '../exercises/actions'
import { RootState } from '../reducer'
import * as sets from './actions'

export interface Set {
  deleted: boolean
  id: string
  reps?: number
  weight?: number
}

export type SetAction = ActionType<typeof sets> | ActionType<typeof exercises>

const byId = (state: { [id: string]: Set } = {}, action: SetAction) => {
  switch (action.type) {
    case getType(sets.addSet):
      return R.assoc(action.payload.set.id, action.payload.set, state)
    case getType(sets.removeSet):
      return R.assocPath(
        [action.payload, 'deleted'],
        true,
        state,
      )
    case getType(sets.updateSet):
      return R.assoc(
        action.payload.id,
        R.merge(state[action.payload.id], action.payload.props),
        state,
      )
    default:
      return state
  }
}

const allIds = (state: string[] = [], action: SetAction) => {
  switch (action.type) {
    case getType(sets.addSet):
      return R.append(action.payload.set.id, state)
    default:
      return state
  }
}

export default combineReducers({
  allIds,
  byId,
})
