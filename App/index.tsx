import { offline } from '@redux-offline/redux-offline'
import offlineConfig from '@redux-offline/redux-offline/lib/defaults'
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import WorkoutDetails from './components/screens/WorkoutDetails'
import WorkoutList from './components/screens/WorkoutList'
import epic from './epics'
import reducer from './reducers'

const epicMiddlware = createEpicMiddleware()

const store = createStore(
  reducer,
  compose(
    applyMiddleware(epicMiddlware),
    offline(offlineConfig),
  ),
)

epicMiddlware.run(epic)

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
