import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Exercise } from '../../../../reducers/exercises'
import theme from '../../../../theme'
import ExercisePanel from './ExercisePanel/ExercisePanel'

interface ExerciseListProps {
  exercises: Exercise[]
}

export default ({ exercises }: ExerciseListProps) => (
  exercises.length
    ? (
      <View>
        {exercises.map((exercise) => (
          <ExercisePanel key={exercise.id} exercise={exercise} />
        ))}
      </View>
    )
    : (
      <Text style={styles.empty}>No exercises yet</Text>
    )
)

const styles = StyleSheet.create({
  empty: {
    alignSelf: 'center',
    color: theme.palette.textSecondary,
    fontWeight: '600',
  },
})
