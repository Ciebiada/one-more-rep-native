import * as R from 'ramda'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addWorkout } from '../../../actions/workouts'
import { State } from '../../../reducers'
import { Workout } from '../../../reducers/workouts'
import WorkoutList from './WorkoutList'

const mapStateToProps = (state: State) => ({
  workouts: R.sort(R.descend<Workout>(R.prop('date')), state.workouts),
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: NavigationScreenProps) => ({
  onNewWorkoutClick: () => {
    dispatch(addWorkout('Morning workout'))
  },
  onWorkoutClick: (id: string) => () => {
    ownProps.navigation.navigate('WorkoutDetails', {id})
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList)
