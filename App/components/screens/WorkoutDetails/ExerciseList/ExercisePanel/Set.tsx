import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Set } from '../../../../../reducers/sets'
import theme from '../../../../../theme'
import NumberInput from '../../../../ui/NumberInput'

interface SetProps {
  onRepsUpdate: (reps?: number) => void
  onWeightUpdate: (weight?: number) => void
  set: Set
}

export default ({set, onWeightUpdate, onRepsUpdate}: SetProps) => (
  <View style={styles.container}>
    <View style={styles.column}>
      <NumberInput
        keyboardType="numeric"
        value={set.weight}
        onChange={onWeightUpdate}
        placeholder="Weight"
      />
    </View>
    <View style={styles.column}>
      <NumberInput
        keyboardType="numeric"
        value={set.reps}
        onChange={onRepsUpdate}
        placeholder="Reps"
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  column: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    marginBottom: theme.scale,
  },
})
