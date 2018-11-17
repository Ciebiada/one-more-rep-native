import React, { Fragment } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { Workout } from '../../../reducers/workouts'
import theme from '../../../theme'
import DatePicker from '../../ui/DatePicker'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import Input from '../../ui/Input'
import ExerciseList from './ExerciseList'

interface WorkoutListProps extends NavigationScreenProps {
  workout: Workout
  onAddExerciseClick: () => void
  onDateChange: (date: string) => void
  onDeleteWorkoutClick: () => void
  onNameChange: (name: string) => void
}

interface ActionsProps {
  onAddExerciseClick: () => void
  onDeleteWorkoutClick: () => void
}

const deleteWorkoutModal = (deleteWorkout: () => void) => () => {
  Alert.alert('Delete workout', 'Are you sure?', [
    {text: 'Cancel', style: 'cancel'},
    {text: 'Delete', onPress: deleteWorkout},
  ])
}

const Actions = ({ onDeleteWorkoutClick, onAddExerciseClick }: ActionsProps) => (
  <View style={styles.actions}>
    <IconButton
      iconName="delete"
      size={30}
      color={theme.palette.action}
      onPress={deleteWorkoutModal(onDeleteWorkoutClick)}
      style={styles.icon}
    />
    <IconButton
      iconName="plus-circle"
      color={theme.palette.action}
      size={30}
      onPress={onAddExerciseClick}
      style={styles.icon}
    />
  </View>
)

export default ({
  workout, onDateChange, onAddExerciseClick, onDeleteWorkoutClick, onNameChange, navigation,
}: WorkoutListProps,
  ) => (
  workout ? (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        right={<Actions onAddExerciseClick={onAddExerciseClick} onDeleteWorkoutClick={onDeleteWorkoutClick} />}
      />
      <Input
        value={workout.name}
        onChangeText={onNameChange}
        placeholder="Name"
      />
      <DatePicker
        placeholder="Date"
        date={workout.date}
        onDateChange={onDateChange}
      />
      <ExerciseList workoutId={workout.id} />
    </View>
  ) : null
)

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: theme.palette.backgroundSecondary,
    flex: 1,
  },
  icon: {
    marginLeft: theme.scale * 2,
  },
})
