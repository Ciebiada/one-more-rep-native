import { distanceInWordsToNow } from 'date-fns'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { Workout } from '../../../reducers/workouts'
import theme from '../../../theme'
import Header from '../../ui/Header'
import IconButton from '../../ui/IconButton'
import ListItem from '../../ui/ListItem'
import MyText from '../../ui/MyText'

interface WorkoutListProps extends NavigationScreenProps {
  workouts: Workout[]
  onAddWorkoutClick: () => void
  onWorkoutClick: (id: string) => () => void
}

interface ActionsProps {
  onAddWorkoutClick: () => void
}

const Title = () => (
  <MyText><Text style={styles.title}>one<Text style={styles.bold}>more</Text>rep</Text></MyText>
)

const Actions = ({ onAddWorkoutClick }: ActionsProps) => (
  <IconButton
    iconName="plus-circle-outline"
    size={32}
    color={theme.palette.accent}
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
      ListEmptyComponent={<Text style={styles.empty}><MyText>You have no workouts</MyText></Text>}
      data={workouts}
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
  bold:    {
    fontWeight:  'bold',
  },
  container: {
    backgroundColor:  theme.palette.background,
    flex: 1,
  },
  empty: {
    alignSelf:  'center',
    color: theme.palette.textSecondary,
    fontFamily: 'System',
    fontWeight: '600',
    marginTop: theme.scale * 3,
  },
  title: {
    color:  '#fff',
    fontSize: 24,
    fontWeight: '300',
    paddingBottom: 6,
  },
})
