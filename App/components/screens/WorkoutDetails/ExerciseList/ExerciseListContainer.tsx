import { connect } from 'react-redux'
import { RootState } from '../../../../reducers'
import { Exercise, getExercises } from '../../../../reducers/exercises'
import ExerciseList from './ExerciseList'

interface StateProps {
  exercises: Exercise[]
}

interface OwnProps {
  workoutId: string
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  exercises: getExercises(state, ownProps.workoutId),
})

export default connect(mapStateToProps)(ExerciseList)
