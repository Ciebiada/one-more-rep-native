import { createAction } from 'typesafe-actions'
import { Set } from '../reducers/sets'

export const addSet = createAction('sets/ADD', (resolve) =>
  (exerciseId: string) => resolve({
    exerciseId,
    set: {
      id: new Date().toJSON(),
    },
  }),
)

export const removeSet = createAction('sets/REMOVE', (resolve) =>
  (exerciseId: string, setId: string) => resolve({
    exerciseId,
    setId,
  }),
 )

export const updateSet = createAction('sets/UPDATE', (resolve) =>
  (id: string, props: Partial<Set>) => resolve({id, props}),
)
