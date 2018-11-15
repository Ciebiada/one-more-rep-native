import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import theme from '../../../theme'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'

interface WorkoutListProps extends NavigationScreenProps {
  onDeleteWorkoutClick: () => void
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

export default ({ onDeleteWorkoutClick, navigation }: WorkoutListProps) => (
  <View style={styles.container}>
    <Header
      navigation={navigation}
      right={<Actions onDeleteWorkoutClick={onDeleteWorkoutClick} />}
    />
  </View>
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
