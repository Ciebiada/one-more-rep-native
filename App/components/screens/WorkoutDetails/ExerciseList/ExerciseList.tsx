import React from 'react'
import { Text } from 'react-native'
import { Exercise } from '../../../../reducers/exercises'
import ExercisePanel from './ExercisePanel/ExercisePanel'

interface ExerciseListProps {
  exercises: Exercise[]
}

export default ({ exercises }: ExerciseListProps) => (
  exercises.map((exercise) => (
    <ExercisePanel key={exercise.id} exercise={exercise} />
  ))
)
