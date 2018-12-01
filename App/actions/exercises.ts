import { createAction } from 'typesafe-actions'
import { Exercise } from '../reducers/exercises'

export const addExercise = createAction('exercises/ADD', (resolve) =>
  (workoutId: string) => resolve({
    exercise: {
      id: new Date().toJSON(),
      name: '',
    },
    workoutId,
  }),
)

export const selectExercise = createAction('exercises/SELECT', (resolve) =>
  (id: string) => resolve({ id }),
)

export const deselectExercise = createAction('exercises/DESELECT', (resolve) =>
  () => resolve(),
)

export const updateExercise = createAction('exercises/UPDATE', (resolve) =>
  (id: string, props: Partial<Exercise>) => resolve({id, props}),
)
