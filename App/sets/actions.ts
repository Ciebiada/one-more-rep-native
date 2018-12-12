import { createAction } from 'typesafe-actions'
import { randomId } from './../randomId'
import { Set } from './reducer'

export const addSet = createAction('sets/ADD', (resolve) =>
  (exerciseId: string) => resolve({
    deleted: false,
    exerciseId,
    id: randomId(),
  }),
)

export const removeSet = createAction('sets/REMOVE', (resolve) =>
  (id: string) => resolve(id),
 )

export const updateSet = createAction('sets/UPDATE', (resolve) =>
  (id: string, props: Partial<Set>) => resolve({id, props}),
)

export const cloneSet = createAction('sets/CLONE', (resolve) =>
  (oldId: string, exerciseId: string) => resolve({oldId, exerciseId, id: randomId()}),
)
