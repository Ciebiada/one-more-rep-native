import { connect } from 'react-redux'
import { deselectExercise, selectExercise } from '../../../../actions/exercises'
import { RootState } from '../../../../reducers'
import { Exercise, getExercises } from '../../../../reducers/exercises'
import ExerciseList from './ExerciseList'

interface OwnProps {
  workoutId: string
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  exercises: getExercises(state, ownProps.workoutId),
  selectedExercise: state.exercises.selectedExercise,
})

const mapDispatchToProps = {
  offExercisePress: deselectExercise,
  onExercisePress: selectExercise,
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList)
