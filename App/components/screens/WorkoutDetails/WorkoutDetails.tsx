import React, { Fragment } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { Workout } from '../../../reducers/workouts'
import theme from '../../../theme'
import DatePicker from '../../ui/DatePicker'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import Input from '../../ui/Input'
import Section from '../../ui/Section'
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
    {text: 'Delete', onPress: deleteWorkout, style: 'destructive'},
  ])
}

const Actions = ({ onDeleteWorkoutClick, onAddExerciseClick }: ActionsProps) => (
  <View style={styles.actions}>
    <IconButton
      iconName="delete"
      size={32}
      color={theme.palette.textSecondary}
      onPress={deleteWorkoutModal(onDeleteWorkoutClick)}
      style={styles.icon}
    />
    <IconButton
      iconName="plus-circle-outline"
      color={theme.palette.accent}
      size={32}
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
        <Section>
          <TextInput
            style={styles.name}
            value={workout.name}
            onChangeText={onNameChange}
            placeholder="Name"
            selectionColor={theme.palette.accent}
          />
          <DatePicker
            placeholder="Date"
            date={workout.date}
            onDateChange={onDateChange}
          />
        </Section>
        <Section>
          <ExerciseList workoutId={workout.id} />
        </Section>
      </View>
    ) : <View style={styles.container}></View>
)

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: theme.palette.background,
    flex: 1,
  },
  icon: {
    marginLeft: theme.scale * 2,
  },
  name: {
    color: theme.palette.text,
    fontSize: 18,
    fontWeight: '500',
    marginTop: theme.scale,
  },
})
