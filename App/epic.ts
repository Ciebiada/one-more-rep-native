import { combineEpics } from 'redux-observable'
import exercises from './exercises/epic'

const rootEpic = combineEpics(
  exercises,
)

export default rootEpic
