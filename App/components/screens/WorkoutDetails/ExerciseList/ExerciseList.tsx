import React, { ReactElement } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Exercise } from '../../../../reducers/exercises'
import Heading from '../../../ui/Heading'
import Section from '../../../ui/Section'
import Subheading from '../../../ui/Subheading'
import ExercisePanel from './ExercisePanel/ExercisePanel'

interface ExerciseListProps {
  header?: ReactElement<any>
  exercises: Exercise[]
}

const Empty = () => (
  <Section align="center">
    <Heading>No exercises</Heading>
    <Subheading>Click + at the top to add exercises.</Subheading>
  </Section>
)

export default ({ exercises, header }: ExerciseListProps) => (
  <FlatList
    style={styles.list}
    ListHeaderComponent={header}
    ListEmptyComponent={<Empty />}
    data={exercises}
    renderItem={({ item }) => <ExercisePanel key={item.id} exercise={item} />}
    keyExtractor={(item) => item.id}
  />
)

const styles = StyleSheet.create({
  list: {
    height: '100%',
  },
})
