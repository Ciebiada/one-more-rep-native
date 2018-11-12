import * as R from 'ramda'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addWorkout } from '../../../actions/workouts'
import { IState } from '../../../reducers'
import { IWorkout } from '../../../reducers/workouts'
import WorkoutList from './WorkoutList'

const mapStateToProps = (state: IState) => ({
  workouts: R.sort(R.descend<IWorkout>(R.prop('date')), state.workouts),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNewWorkoutClick: () => {
    dispatch(addWorkout('Morning workout'))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList)
