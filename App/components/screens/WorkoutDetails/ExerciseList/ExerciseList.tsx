import React from 'react'
import { Text } from 'react-native'
import { Exercise } from '../../../../reducers/exercises'

interface ExerciseListProps {
  exercises: Exercise[]
}

export default ({exercises}: ExerciseListProps) => {
  console.log(exercises)
  return (<Text>test</Text>)
}
