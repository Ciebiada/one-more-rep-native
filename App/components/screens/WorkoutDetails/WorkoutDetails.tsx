import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import theme from '../../../theme'
import { Workout } from '../../../workouts/reducer'
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
  onCloneWorkoutClick: () => void
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

const Actions = ({ onCloneWorkoutClick, onDeleteWorkoutClick, onAddExerciseClick }: ActionsProps) => (
  <View style={styles.actions}>
    <IconButton
      iconName="content-copy"
      size={theme.scale * 4}
      color={theme.palette.textSecondary}
      onPress={onCloneWorkoutClick}
    />
    <IconButton
      iconName="delete"
      size={theme.scale * 4}
      color={theme.palette.textSecondary}
      onPress={deleteWorkoutModal(onDeleteWorkoutClick)}
      marginLeft={theme.scale * 2}
    />
    <IconButton
      iconName="plus-circle-outline"
      color={theme.palette.accent}
      size={theme.scale * 4}
      onPress={onAddExerciseClick}
      marginLeft={theme.scale * 2}
    />
  </View>
)

const Details = ({workout, onNameChange, onDateChange}: DetailsProps) => (
  <Section>
    <View style={styles.details}>
      <Input
        header={true}
        value={workout.name}
        onChangeText={onNameChange}
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
  const { navigation, workout } = props

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
})
