import { distanceInWordsToNow } from 'date-fns'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { IWorkout } from '../../../reducers/workouts'
import theme from '../../../theme'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import ListItem from '../../ui/ListItem'

interface IWorkoutList {
  workouts: IWorkout[],
  onNewWorkoutClick: () => void
}

interface IActions {
  onNewWorkoutClick: () => void
}

const Title = () => (
  <Text style={styles.title}>one<Text style={styles.bold}>more</Text>rep</Text>
)

const Actions = ({ onNewWorkoutClick }: IActions) => (
  <IconButton
    iconName="plus-circle-outline"
    size={30}
    color={theme.palette.darkAction}
    onPress={onNewWorkoutClick}
  />
)

export default ({ workouts, onNewWorkoutClick }: IWorkoutList) => (
  <View style={styles.container}>
    <Header
      center={<Title />}
      right={<Actions onNewWorkoutClick={onNewWorkoutClick} />}
    />
    <FlatList
      data={workouts}
      renderItem={({ item }) => (
        <ListItem header={item.name} subheader={`${distanceInWordsToNow(item.date)} ago`} />
      )}
      keyExtractor={(item) => item.id}
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
