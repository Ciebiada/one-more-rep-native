import * as R from 'ramda'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Set } from '../../../../../reducers/sets'
import theme from '../../../../../theme'
import Input from '../../../../ui/Input'

interface SetProps {
  onRepsUpdate: (reps?: number) => void
  onWeightUpdate: (weight?: number) => void
  set: Set
}

const toNumber = (text?: string) => {
  if (!text || R.isEmpty(text)) { return undefined }

  return Number(text.replace(',', '.'))
}

const toInputText = (value?: number) => {
  if (R.isNil(value)) { return '' }

  return String(value)
}

const updateIfChanged = (update: (value: number) => void, oldValue?: number) => (text?: string) => {
  const newValue = toNumber(text)
  if (newValue && newValue !== oldValue) {
    update(newValue)
  }
}

export default ({set, onWeightUpdate, onRepsUpdate}: SetProps) => (
  <View style={styles.container}>
    <View style={styles.column}>
      <Input
        keyboardType="numeric"
        value={toInputText(set.weight)}
        onChangeText={updateIfChanged(onWeightUpdate, set.weight)}
        placeholder="Weight"
      />
    </View>
    <View style={styles.column}>
      <Input
        keyboardType="numeric"
        value={toInputText(set.reps)}
        onChangeText={updateIfChanged(onRepsUpdate, set.reps)}
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
