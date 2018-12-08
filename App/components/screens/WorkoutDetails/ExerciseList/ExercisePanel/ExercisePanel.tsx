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
  onDrag: () => void
  onRemove: () => void
}

const deleteExerciseModal = (deleteExercise: () => void) => () => {
  Alert.alert('Delete exercise', 'Are you sure?', [
    {text: 'Cancel', style: 'cancel'},
    {text: 'Delete', onPress: deleteExercise, style: 'destructive'},
  ])
}

const Actions = ({ onDrag, onRemove }: ActionsProps) => (
  <View style={styles.actions}>
    <IconButton
      iconName="drag"
      size={theme.scale * 3}
      color={theme.palette.textSecondary}
      onPressIn={onDrag}
    />
    <IconButton
      iconName="delete"
      size={theme.scale * 3}
      color={theme.palette.textSecondary}
      onPress={deleteExerciseModal(onRemove)}
      marginLeft={theme.scale * 2}
    />
  </View>
)

export default ({ exercise,  onDrag, onRemove, onNameChange }: ExercisePanelProps) => (
  <View style={styles.container}>
    <Input
      autoFocus={!exercise.name}
      header={true}
      value={exercise.name}
      placeholder="Exercise name"
      onChangeText={onNameChange}
    />
    <Sets exerciseId={exercise.id} />
    <Actions onDrag={onDrag} onRemove={onRemove} />
  </View >
)

const styles = StyleSheet.create({
  actions:  {
    flexDirection:  'row',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor:  '#444',
    marginBottom: theme.scale * 2,
    padding: theme.scale * 2,
  },
})
