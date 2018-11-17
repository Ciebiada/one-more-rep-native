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
    margin: theme.scale * 2,
  },
  name: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.palette.separator,
    fontSize: 20,
    marginBottom: theme.scale,
  },
  placeholder: {
    color: theme.palette.textSecondary,
  },
})
