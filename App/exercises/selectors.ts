import { RootState } from '../reducer'

export const getExercises = (state: RootState, props: { workoutId: string }) =>
  state.workouts.byId[props.workoutId].exercises
    .map((exerciseId) => state.exercises.byId[exerciseId])
    .filter(({ deleted }) => !deleted )
