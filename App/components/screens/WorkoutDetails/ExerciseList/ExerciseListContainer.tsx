import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { removeExercise, updateExercise } from '../../../../actions/exercises'
import { RootState } from '../../../../reducers'
import { getExercises } from '../../../../reducers/exercises'
import ExerciseList from './ExerciseList'

interface OwnProps {
  workoutId: string
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  exercises: getExercises(state, ownProps.workoutId),
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => ({
  onExerciseNameChange: (id: string) => (name: string) => {
    dispatch(updateExercise(id, {name}))
  },
  onExerciseRemove: (id: string) => () => {
    dispatch(removeExercise(ownProps.workoutId, id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList)
