import { createAction } from 'typesafe-actions'

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
