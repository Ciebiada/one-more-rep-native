import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addWorkout, removeWorkout } from '../../../actions/workouts'
import WorkoutDetails from './WorkoutDetails'

const mapDispatchToProps = (dispatch: Dispatch, ownProps: NavigationScreenProps) => ({
  onDeleteWorkoutClick: () => {
    const id = ownProps.navigation.getParam('id')
    dispatch(removeWorkout(id))
    ownProps.navigation.navigate('WorkoutList')
  },
})

export default connect(null, mapDispatchToProps)(WorkoutDetails)
