import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { Workout } from '../../../reducers/workouts'
import theme from '../../../theme'
import DatePicker from '../../ui/DatePicker'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import Input from '../../ui/Input'

interface WorkoutListProps extends NavigationScreenProps {
  workout: Workout
  onDateChange: (date: string) => void
  onDeleteWorkoutClick: () => void
  onNameChange: (name: string) => void
}

interface ActionsProps {
  onDeleteWorkoutClick: () => void
}

const deleteWorkoutModal = (deleteWorkout: () => void) => () => {
  Alert.alert('Delete workout', 'Are you sure?', [
    {text: 'Cancel', style: 'cancel'},
    {text: 'Delete', onPress: deleteWorkout},
  ])
}

const Actions = ({ onDeleteWorkoutClick }: ActionsProps) => (
  <IconButton
    iconName="delete-forever"
    size={30}
    color={theme.palette.action}
    onPress={deleteWorkoutModal(onDeleteWorkoutClick)}
  />
)

export default ({ workout, onDateChange, onDeleteWorkoutClick, onNameChange, navigation }: WorkoutListProps) => (
  workout ? (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        right={<Actions onDeleteWorkoutClick={onDeleteWorkoutClick} />}
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
    </View>
  ) : null
)

const styles = StyleSheet.create({
  bold:   {
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: theme.palette.background,
    flex: 1,
  },
})
