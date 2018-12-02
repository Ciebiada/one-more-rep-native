import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Exercise } from '../../../../../reducers/exercises'
import theme from '../../../../../theme'
import IconButton from '../../../../ui/IconButton'
import Input from '../../../../ui/Input'
import Subheading from '../../../../ui/Subheading'

interface ExercisePanelProps extends ActionsProps {
  exercise: Exercise
  onNameChange: (name: string) => void
  selected?: boolean
}

interface ActionsProps {
  onRemove: () => void
}

const deleteExerciseModal = (deleteExercise: () => void) => () => {
  Alert.alert('Delete exercise', 'Are you sure?', [
    {text: 'Cancel', style: 'cancel'},
    {text: 'Delete', onPress: deleteExercise, style: 'destructive'},
  ])
}

const Actions = ({ onRemove }: ActionsProps) => (
  <View style={styles.actions}>
    <IconButton
      iconName="delete"
      size={theme.scale * 3}
      color={theme.palette.textSecondary}
      onPress={deleteExerciseModal(onRemove)}
      marginLeft={theme.scale}
    />
  </View>
)

export default ({ exercise, onRemove, onNameChange }: ExercisePanelProps) => (
  <View style={styles.container}>
    <Input
      value={exercise.name}
      placeholder="Exercise name"
      onChange={onNameChange}
    />
    <Subheading>No sets</Subheading>
    <Actions onRemove={onRemove} />
  </View>
)

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    height: theme.scale * 3,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#444',
    borderRadius: 8,
    marginBottom: theme.scale * 2,
    marginHorizontal: theme.scale * 2,
    paddingBottom: theme.scale,
    paddingHorizontal: theme.scale * 2,
    paddingTop: theme.scale * 2,
  },
})
