import { distanceInWordsToNow } from 'date-fns'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import theme from '../../../theme'
import { Workout } from '../../../workouts/reducer'
import AppText from '../../ui/AppText'
import Container from '../../ui/Container'
import Header from '../../ui/Header'
import Heading from '../../ui/Heading'
import IconButton from '../../ui/IconButton'
import ListItem from '../../ui/ListItem'
import Section from '../../ui/Section'
import Subheading from '../../ui/Subheading'

interface WorkoutListProps extends NavigationScreenProps, ActionsProps {
  workouts: Workout[]
  onWorkoutClick: (id: string) => () => void
}

interface ActionsProps {
  onAddWorkoutClick: () => void
}

const Title = () => (
  <View style={styles.logo}>
    <AppText><Text style={styles.title}>one<Text style={styles.bold}>more</Text>rep</Text></AppText>
  </View >
)

const Actions = ({ onAddWorkoutClick }: ActionsProps) => (
  <IconButton
    iconName="plus-circle-outline"
    size={32}
    color={theme.palette.accent}
    onPress={onAddWorkoutClick}
  />
)

const Empty = () => (
  <Section align="center">
    <Heading>No workouts</Heading>
    <Subheading>Click + at the top to add workouts.</Subheading>
  </Section>
)

export default ({ workouts, onAddWorkoutClick, onWorkoutClick }: WorkoutListProps) => (
  <Container>
    <Header
      left={<IconButton iconName="tune" size={32} color={theme.palette.separator} />}
      center={<Title />}
      right={<Actions onAddWorkoutClick={onAddWorkoutClick} />}
    />
    <FlatList
      ListEmptyComponent={<Empty />}
      data={workouts}
      renderItem={({ item }) => (
        <ListItem
          header={item.name || 'Workout name'}
          subheader={`${distanceInWordsToNow(item.date)} ago`}
          onPress={onWorkoutClick(item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  </Container>
)

const styles = StyleSheet.create({
  bold: {
    fontWeight:  'bold',
  },
  logo: {
    paddingBottom: 7,
  },
  title: {
    color:  '#fff',
    fontSize: 24,
    fontWeight: '300',
    paddingBottom: 16,
  },
})
