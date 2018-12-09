import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addWorkout } from '../../../actions/workouts'
import { RootState } from '../../../reducers'
import { getWorkouts } from '../../../reducers/workouts'
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
