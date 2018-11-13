import { distanceInWordsToNow } from 'date-fns'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { IWorkout } from '../../../reducers/workouts'
import theme from '../../../theme'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import ListItem from '../../ui/ListItem'

interface IWorkoutList extends NavigationScreenProps {
  workouts: IWorkout[]
  onNewWorkoutClick: () => void
  onWorkoutClick: (id: string) => () => void
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

export default ({ workouts, onNewWorkoutClick, onWorkoutClick }: IWorkoutList) => (
  <View style={styles.container}>
    <Header
      center={<Title />}
      right={<Actions onNewWorkoutClick={onNewWorkoutClick} />}
    />
    <FlatList
      data={workouts}
      ItemSeparatorComponent={() => <View style={{paddingVertical: theme.scale}}/>}
      renderItem={({ item }) => (
        <ListItem
          header={item.name}
          subheader={`${distanceInWordsToNow(item.date)} ago`}
          onPress={onWorkoutClick(item.id)}
        />
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
