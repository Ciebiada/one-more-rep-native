import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Exercise } from '../../../../../reducers/exercises'
import theme from '../../../../../theme'
import Heading from '../../../../ui/Heading'
import Input from '../../../../ui/Input'
import Subheading from '../../../../ui/Subheading'

interface ExercisePanelProps {
  exercise: Exercise
  onPress: () => void
  selected?: boolean
}

export default ({ exercise, onPress, selected }: ExercisePanelProps) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.container, selected && styles.selected]}>
      <Input
        value={exercise.name}
        placeholder="Exercise name"
        onFocus={onPress}
        onChange={() => null}
      />
      <Subheading>No sets</Subheading>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444',
    borderColor: '#444',
    borderRadius: 8,
    borderWidth: 2,
    marginBottom: theme.scale * 2,
    marginHorizontal: theme.scale * 2,
    padding: theme.scale * 2,
  },
  selected: {
    borderColor: theme.palette.accent,
  },
})
