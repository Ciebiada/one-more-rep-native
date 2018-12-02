import { createAction } from 'typesafe-actions'
import { Exercise } from '../reducers/exercises'

export const addExercise = createAction('exercises/ADD', (resolve) =>
  (workoutId: string) => resolve({
    exercise: {
      id: new Date().toJSON(),
      name: '',
      sets: [],
    },
    workoutId,
  }),
)

export const removeExercise = createAction('exercises/REMOVE', (resolve) =>
  (workoutId: string, exerciseId: string) => resolve({
    exerciseId,
    workoutId,
  }),
 )

export const updateExercise = createAction('exercises/UPDATE', (resolve) =>
  (id: string, props: Partial<Exercise>) => resolve({id, props}),
)
