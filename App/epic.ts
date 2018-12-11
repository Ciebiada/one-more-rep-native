import { combineEpics } from 'redux-observable'
import exercises from './exercises/epic'
import sets from './sets/epic'
import workouts from './workouts/epic'

const rootEpic = combineEpics(
  exercises,
  sets,
  workouts,
)

export default rootEpic
