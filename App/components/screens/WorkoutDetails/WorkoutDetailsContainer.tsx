import * as R from 'ramda'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { removeWorkout, updateWorkout } from '../../../actions/workouts'
import { State } from '../../../reducers'
import WorkoutDetails from './WorkoutDetails'

const mapStateToProps = (state: State, ownProps: NavigationScreenProps) => ({
  workout: R.find(R.propEq('id', ownProps.navigation.getParam('id')))(state.workouts),
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: NavigationScreenProps) => ({
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
