import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Exercise } from '../../../../../reducers/exercises'
import theme from '../../../../../theme'
import IconButton from '../../../../ui/IconButton'
import Input from '../../../../ui/Input'
import Subheading from '../../../../ui/Subheading'

interface ExercisePanelProps {
  exercise: Exercise
  onPress: () => void
  onNameChange: (name: string) => void
  selected?: boolean
}

const Actions = () => (
  <View style={styles.actions}>
    <IconButton
      iconName="delete"
      size={theme.scale * 3}
      color={theme.palette.textSecondary}
      onPress={() => null}
      marginLeft={theme.scale}
    />
  </View>
)

const ActionsPlaceholder = () => (
  <View style={styles.actions}></View>
)

export default ({ exercise, onPress, onNameChange, selected }: ExercisePanelProps) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.container, selected && styles.selected]}>
      <Input
        value={exercise.name}
        placeholder="Exercise name"
        onFocus={onPress}
        onChange={onNameChange}
      />
      <Subheading>No sets</Subheading>
      {selected ? <Actions/> : <ActionsPlaceholder/>}
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    height: theme.scale * 3,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#444',
    borderColor: '#444',
    borderRadius: 8,
    borderWidth: 2,
    marginBottom: theme.scale * 2,
    marginHorizontal: theme.scale * 2,
    paddingBottom: theme.scale,
    paddingHorizontal: theme.scale * 2,
    paddingTop: theme.scale * 2,
  },
  selected: {
    borderColor: theme.palette.accent,
  },
})
