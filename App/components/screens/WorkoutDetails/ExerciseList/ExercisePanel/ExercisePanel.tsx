import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Exercise } from '../../../../../reducers/exercises'
import theme from '../../../../../theme'
import IconButton from '../../../../ui/IconButton'
import Input from '../../../../ui/Input'
import Sets from './SetsContainer'

interface ExercisePanelProps extends ActionsProps {
  exercise: Exercise
  onNameChange: (name: string) => void
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
    />
  </View>
)

export default ({ exercise, onRemove, onNameChange }: ExercisePanelProps) => (
  <View style={styles.container}>
    <Input
      autoFocus={!exercise.name}
      header={true}
      value={exercise.name}
      placeholder="Exercise name"
      onChangeText={onNameChange}
    />
    <Sets exerciseId={exercise.id} />
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
