import { offline } from '@redux-offline/redux-offline'
import offlineConfig from '@redux-offline/redux-offline/lib/defaults'
import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import Settings from './components/screens/Settings'
import WorkoutDetails from './components/screens/WorkoutDetails'
import WorkoutList from './components/screens/WorkoutList'
import epic from './epic'
import reducer from './reducer'

const epicMiddlware = createEpicMiddleware()

const store = createStore(
  reducer,
  compose(
    applyMiddleware(epicMiddlware),
    offline(offlineConfig),
  ),
)

epicMiddlware.run(epic)

const MainStack = createStackNavigator({
  WorkoutDetails,
  WorkoutList,
}, {
    headerMode: 'none',
    initialRouteName: 'WorkoutList',
})

const RootStack = createStackNavigator({
  MainStack,
  Settings,
}, {
  headerMode: 'none',
  initialRouteName: 'MainStack',
  mode: 'modal',
})

export default () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
)
