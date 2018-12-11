import * as R from 'ramda'
import { NavigationScreenProps } from 'react-navigation'
import { RootState } from '../reducer'
import { Workout } from './reducer'

export const getWorkouts = (state: RootState) =>
  R.sort(
    R.descend<Workout>(R.prop('date')),
    R.pipe<string[], Workout[], Workout[]>(
      R.map((id) => state.workouts.byId[id]),
      R.reject(R.propEq('deleted', true)),
    )(state.workouts.allIds),
  )

export const getWorkout = (state: RootState, props: NavigationScreenProps) =>
  state.workouts.byId[props.navigation.getParam('id')]
