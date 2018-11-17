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
