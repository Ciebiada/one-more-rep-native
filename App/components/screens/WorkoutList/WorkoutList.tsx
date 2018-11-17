import { distanceInWordsToNow } from 'date-fns'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { Workout } from '../../../reducers/workouts'
import theme from '../../../theme'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import ListItem from '../../ui/ListItem'

interface WorkoutListProps extends NavigationScreenProps {
  workouts: Workout[]
  onAddWorkoutClick: () => void
  onWorkoutClick: (id: string) => () => void
}

interface ActionsProps {
  onAddWorkoutClick: () => void
}

const Title = () => (
  <Text style={styles.title}>one<Text style={styles.bold}>more</Text>rep</Text>
)

const Actions = ({ onAddWorkoutClick }: ActionsProps) => (
  <IconButton
    iconName="plus-circle"
    size={30}
    color={theme.palette.action}
    onPress={onAddWorkoutClick}
  />
)

export default ({ workouts, onAddWorkoutClick, onWorkoutClick }: WorkoutListProps) => (
  <View style={styles.container}>
    <Header
      center={<Title />}
      right={<Actions onAddWorkoutClick={onAddWorkoutClick} />}
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
    backgroundColor: theme.palette.background,
    flex: 1,
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: '300',
  },
})
