import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Set } from '../../../../../sets/reducer'
import theme from '../../../../../theme'
import SetComponent from './Set'

interface SetsProps {
  sets: Set[]
  onSetBlank: (id: string) => void
  onSetsEmpty: () => void
  onWeightUpdate: (id: string) => (weight?: number) => void
  onRepsUpdate: (id: string) => (reps?: number) => void
}

export default ({ onRepsUpdate, onWeightUpdate, sets }: SetsProps) => (
  <View style={styles.container}>
    {sets.map((set) =>
      <SetComponent
        key={set.id}
        set={set}
        onWeightUpdate={onWeightUpdate(set.id)}
        onRepsUpdate={onRepsUpdate(set.id)}
      />,
    )}
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.scale * 2,
  },
})
