import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Exercise } from '../../../../../reducers/exercises'
import theme from '../../../../../theme'

interface ExercisePanelProps {
  exercise: Exercise
}

export default ({ exercise }: ExercisePanelProps) => (
  <View style={styles.container}>
    <Text style={styles.name}>Bench press</Text>
    <Text style={styles.placeholder}>No sets</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444',
    borderRadius: 8,
    marginBottom: theme.scale * 2,
    padding: theme.scale * 2,
  },
  name: {
    color: theme.palette.text,
    fontSize: 20,
    marginBottom: theme.scale,
  },
  placeholder: {
    color: theme.palette.textSecondary,
  },
})
