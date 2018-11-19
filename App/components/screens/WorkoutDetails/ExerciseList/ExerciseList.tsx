import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { Exercise } from '../../../../reducers/exercises'
import theme from '../../../../theme'
import ExercisePanel from './ExercisePanel/ExercisePanel'

interface ExerciseListProps {
  exercises: Exercise[]
}

export default ({ exercises }: ExerciseListProps) => (
  <FlatList
    style={styles.list}
    ListEmptyComponent={<Text style={styles.empty}>No exercises yet</Text>}
    data={exercises}
    renderItem={({ item }) => <ExercisePanel key={item.id} exercise={item} />}
    keyExtractor={(item) => item.id}
  />
)

const styles = StyleSheet.create({
  empty: {
    alignSelf: 'center',
    color: theme.palette.textSecondary,
    fontWeight: '600',
  },
  list: {
    height: '100%',
  },
})
