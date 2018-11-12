import { createAction } from 'typesafe-actions'
import { IWorkout } from '../reducers/workouts'

export const addWorkout = createAction('workouts/ADD', (resolve) =>
  (name: string) => resolve({
    date: new Date().toJSON(),
    id: new Date().toJSON(),
    name,
  }),
)

export const removeWorkout = createAction('workouts/REMOVE', (resolve) =>
  (id: string) => resolve(id),
)

export const updateWorkout = createAction('workouts/UPDATE', (resolve) =>
  (id: string, workout: Partial<IWorkout>) => resolve({id, workout}),
)
