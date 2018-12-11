import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { removeExercise, updateExercise } from '../../../../exercises/actions'
import { getExercises } from '../../../../exercises/selectors'
import { RootState } from '../../../../reducer'
import { updateWorkout } from '../../../../workouts/actions'
import ExerciseList from './ExerciseList'

interface OwnProps {
  workoutId: string
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  exercises: getExercises(state, ownProps),
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => ({
  onExerciseNameChange: (id: string) => (name: string) => {
    dispatch(updateExercise(id, {name}))
  },
  onExerciseRemove: (id: string) => () => {
    dispatch(removeExercise(id))
  },
  onOrderChange: (exercises: string[]) => {
    dispatch(updateWorkout(ownProps.workoutId, {exercises}))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList)
