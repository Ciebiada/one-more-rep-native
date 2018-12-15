import { getHours } from 'date-fns'
import * as R from 'ramda'
import { AsyncStorage } from 'react-native'
import { createAction } from 'typesafe-actions'
import { randomId } from '../randomId'
import { Workout } from './reducer'

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
    deleted: false,
    exercises: [],
    id: randomId(),
    name: timeBasedName(new Date()),
  }),
)

export const removeWorkout = createAction('workouts/REMOVE', (resolve) =>
  (id: string) => resolve(id),
)

export const updateWorkout = createAction('workouts/UPDATE', (resolve) =>
  (id: string, props: Partial<Workout>) => resolve({id, props}),
)

export const cloneWorkout = createAction('workouts/CLONE', (resolve) =>
  (oldId: string) => resolve({ oldId, id: randomId() }),
)

export const removeAllWorkouts = createAction('workouts/REMOVE_ALL')
