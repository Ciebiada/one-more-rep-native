import { offline } from '@redux-offline/redux-offline'
import offlineConfig from '@redux-offline/redux-offline/lib/defaults'
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore, StoreEnhancer } from 'redux'
import WorkoutDetails from './components/screens/WorkoutDetails'
import WorkoutList from './components/screens/WorkoutList'
import reducer from './reducers'

const store = createStore(
  reducer,
  offline(offlineConfig) as StoreEnhancer,
)

const RootStack = createStackNavigator({
  WorkoutDetails,
  WorkoutList,
}, {
  headerMode: 'none',
  initialRouteName: 'WorkoutList',
})

export default () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
)

// import { AsyncStorage } from 'react-native'
// AsyncStorage.clear()
