import { getHours } from 'date-fns'
import * as R from 'ramda'
import { createAction } from 'typesafe-actions'
import { Workout } from '../reducers/workouts'

const timeBasedName = (time: Date) =>
  R.cond([
    [R.gte(4), R.always('Night workout')],
    [R.gte(12), R.always('Morning workout')],
    [R.gte(17), R.always('Afternoon workout')],
    [R.T, R.always('Evening workout')],
  ])(getHours(time))

export const addWorkout = createAction('workouts/ADD', (resolve) =>
  () => resolve({
    date: new Date().toJSON(),
    exercises: [],
    id: new Date().toJSON(),
    name: timeBasedName(new Date()),
  }),
)

export const removeWorkout = createAction('workouts/REMOVE', (resolve) =>
  (id: string) => resolve(id),
)

export const updateWorkout = createAction('workouts/UPDATE', (resolve) =>
  (id: string, props: Partial<Workout>) => resolve({id, props}),
)
