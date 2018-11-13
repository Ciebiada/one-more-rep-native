import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { IWorkout } from '../../../reducers/workouts'
import theme from '../../../theme'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'

interface IWorkoutList extends NavigationScreenProps {
  onDeleteWorkoutClick: () => void
}

interface IActions {
  onDeleteWorkoutClick: () => void
}

const Title = () => (
  <Text style={styles.title}>one<Text style={styles.bold}>more</Text>rep</Text>
)

const deleteWorkoutModal = (deleteWorkout: () => void) => () => {
  Alert.alert('Delete workout', 'Are you sure?', [
    {text: 'Cancel', style: 'cancel'},
    {text: 'Yes', onPress: deleteWorkout},
  ])
}

const Actions = ({ onDeleteWorkoutClick }: IActions) => (
  <IconButton
    iconName="delete"
    size={30}
    color={theme.palette.darkAction}
    onPress={deleteWorkoutModal(onDeleteWorkoutClick)}
  />
)

export default ({ onDeleteWorkoutClick, navigation }: IWorkoutList) => (
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
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: '300',
  },
})
