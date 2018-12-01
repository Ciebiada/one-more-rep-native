import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { Workout } from '../../../reducers/workouts'
import theme from '../../../theme'
import Container from '../../ui/Container'
import DatePicker from '../../ui/DatePicker'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import Input from '../../ui/Input'
import Section from '../../ui/Section'
import ExerciseList from './ExerciseList'

interface WorkoutListProps extends NavigationScreenProps, ActionsProps, DetailsProps {}

interface ActionsProps {
  onAddExerciseClick: () => void
  onDeleteWorkoutClick: () => void
}

interface DetailsProps {
  workout: Workout
  onDateChange: (date: string) => void
  onNameChange: (name: string) => void
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

const Details = ({workout, onNameChange, onDateChange}: DetailsProps) => (
  <Section>
    <View style={styles.details}>
      <Input
        value={workout.name}
        onChange={onNameChange}
        placeholder="Workout name"
      />
      <DatePicker
        placeholder="Date"
        date={workout.date}
        onDateChange={onDateChange}
      />
    </View>
  </Section>
)

export default (props: WorkoutListProps) => {
  const {navigation, workout} = props

  return (
    <Container>
      <Header
        navigation={navigation}
        right={<Actions {...props} />}
      />
      {workout &&
        <ExerciseList
          header={<Details {...props} />}
          workoutId={workout.id}
        />}
    </Container>
  )
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
  },
  details: {
    marginBottom: theme.scale * 3,
    marginTop: theme.scale,
    width: '100%',
  },
  icon: {
    marginLeft: theme.scale * 2,
  },
})
