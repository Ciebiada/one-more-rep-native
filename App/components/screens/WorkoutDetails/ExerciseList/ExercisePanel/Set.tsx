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

const toNumber = (text: string) => {
  if (R.isEmpty(text)) { return undefined }

  return Number(text)
}

const toInputText = (value?: number) => {
  if (R.isNil(value)) { return '' }

  return String(value)
}

export default ({set, onWeightUpdate, onRepsUpdate}: SetProps) => (
  <View style={styles.container}>
    <View style={styles.column}>
      <Input
        keyboardType="numeric"
        value={toInputText(set.weight)}
        onChangeText={(text) => onWeightUpdate(toNumber(text))}
        placeholder="Weight"
      />
    </View>
    <View style={styles.column}>
      <Input
        keyboardType="numeric"
        value={toInputText(set.reps)}
        onChangeText={(text) => onRepsUpdate(toNumber(text))}
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
