import * as R from 'ramda'
import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import { RootState } from '.'
import * as exercises from '../actions/exercises'
import * as sets from '../actions/sets'

export interface Set {
  id: string
  weight?: number
  reps?: number
}

export type SetAction = ActionType<typeof sets> | ActionType<typeof exercises>

const byId = (state: { [id: string]: Set } = {}, action: SetAction) => {
  switch (action.type) {
    case getType(sets.addSet):
      return R.assoc(action.payload.set.id, action.payload.set, state)
    case getType(sets.removeSet):
      return R.dissoc<typeof state>(action.payload.setId, state)
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
    case getType(sets.removeSet):
      return R.without([action.payload.setId], state)
    default:
      return state
  }
}

export const getSets = (state: RootState, exerciseId: string) =>
  state.exercises.byId[exerciseId].sets.map((id) => state.sets.byId[id])

export default combineReducers({
  allIds,
  byId,
})
