import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addExercise } from '../../../exercises/actions'
import { RootState } from '../../../reducer'
import { cloneWorkout, removeWorkout, updateWorkout } from '../../../workouts/actions'
import { getWorkout } from '../../../workouts/selectors'
import WorkoutDetails from './WorkoutDetails'

const mapStateToProps = (state: RootState, ownProps: NavigationScreenProps) => ({
  workout: getWorkout(state, ownProps),
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: NavigationScreenProps) => ({
  onAddExerciseClick: () => {
    const id = ownProps.navigation.getParam('id')
    dispatch(addExercise(id))
  },
  onCloneWorkoutClick: () => {
    const id = ownProps.navigation.getParam('id')
    dispatch(cloneWorkout(id))
    ownProps.navigation.navigate('WorkoutList')
  },
  onDateChange: (date: string) => {
    const id = ownProps.navigation.getParam('id')
    dispatch(updateWorkout(id, {date}))
  },
  onDeleteWorkoutClick: () => {
    const id = ownProps.navigation.getParam('id')
    dispatch(removeWorkout(id))
    ownProps.navigation.navigate('WorkoutList')
  },
  onNameChange: (name: string) => {
    const id = ownProps.navigation.getParam('id')
    dispatch(updateWorkout(id, {name}))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetails)
