import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../../reducer'
import { addWorkout } from '../../../workouts/actions'
import { getWorkouts } from '../../../workouts/selectors'
import WorkoutList from './WorkoutList'

const mapStateToProps = (state: RootState) => ({
  workouts: getWorkouts(state),
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: NavigationScreenProps) => ({
  onAddWorkoutClick: () => {
    const workout = addWorkout()
    dispatch(workout)
    ownProps.navigation.navigate('WorkoutDetails', { id: workout.payload.id})
  },
  onWorkoutClick: (id: string) => () => {
    ownProps.navigation.navigate('WorkoutDetails', { id })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList)
