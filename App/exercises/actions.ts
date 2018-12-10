import { createAction } from 'typesafe-actions'
import { Exercise } from './reducer'

export const addExercise = createAction('exercises/ADD', (resolve) =>
  (workoutId: string) => resolve({
    exercise: {
      deleted: false,
      id: new Date().toJSON(),
      name: '',
      sets: [],
    },
    workoutId,
  }),
)

export const removeExercise = createAction('exercises/REMOVE', (resolve) =>
  (id: string) => resolve(id),
 )

export const updateExercise = createAction('exercises/UPDATE', (resolve) =>
  (id: string, props: Partial<Exercise>) => resolve({id, props}),
)
