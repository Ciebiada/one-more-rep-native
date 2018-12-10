import { createAction } from 'typesafe-actions'
import { Set } from './reducer'

export const addSet = createAction('sets/ADD', (resolve) =>
  (exerciseId: string) => resolve({
    deleted: false,
    exerciseId,
    set: {
      id: new Date().toJSON(),
    },
  }),
)

export const removeSet = createAction('sets/REMOVE', (resolve) =>
  (id: string) => resolve(id),
 )

export const updateSet = createAction('sets/UPDATE', (resolve) =>
  (id: string, props: Partial<Set>) => resolve({id, props}),
)
