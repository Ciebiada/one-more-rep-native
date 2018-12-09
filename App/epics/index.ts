import { combineEpics } from 'redux-observable'
import exerciseEpic from './exerciseEpic'
import workoutEpic from './workoutEpic'

const rootEpic = combineEpics(
  exerciseEpic,
  workoutEpic,
)

export default rootEpic
