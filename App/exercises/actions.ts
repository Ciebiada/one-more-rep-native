import { createAction } from 'typesafe-actions'
import { randomId } from '../randomId'
import { Exercise } from './reducer'

export const addExercise = createAction('exercises/ADD', (resolve) =>
  (workoutId: string) => resolve({
    deleted: false,
    id: randomId(),
    name: '',
    sets: [],
    workoutId,
  }),
)

export const removeExercise = createAction('exercises/REMOVE', (resolve) =>
  (id: string) => resolve(id),
 )

export const updateExercise = createAction('exercises/UPDATE', (resolve) =>
  (id: string, props: Partial<Exercise>) => resolve({id, props}),
)

export const cloneExercise = createAction('exercises/CLONE', (resolve) =>
  (oldId: string, workoutId: string) => resolve({oldId, workoutId, id: randomId()}),
)
