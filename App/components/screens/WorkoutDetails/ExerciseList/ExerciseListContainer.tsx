import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { deselectExercise, selectExercise, updateExercise } from '../../../../actions/exercises'
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  offExercisePress: () => {
    dispatch(deselectExercise())
  },
  onExerciseNameChange: (id: string) => (name: string) => {
    dispatch(updateExercise(id, {name}))
  },
  onExercisePress: (id: string) => () => {
    dispatch(selectExercise(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList)
