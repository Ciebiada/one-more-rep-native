import { AsyncStorage } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { removeAllWorkouts } from '../../../workouts/actions'
import Settings from './Settings'

const mapDispatchToProps = (dispatch: Dispatch, ownProps: NavigationScreenProps) => ({
  clearStorage: () => {
    // dispatch(removeAllWorkouts())
    ownProps.navigation.goBack()
  },
})

export default connect(null, mapDispatchToProps)(Settings)
