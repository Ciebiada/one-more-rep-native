import React, { ReactElement } from 'react'
import { FlatList, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Exercise } from '../../../../reducers/exercises'
import theme from '../../../../theme'
import Heading from '../../../ui/Heading'
import Section from '../../../ui/Section'
import Subheading from '../../../ui/Subheading'
import ExercisePanel from './ExercisePanel/ExercisePanel'

interface ExerciseListProps {
  exercises: Exercise[]
  header?: ReactElement<any>
  offExercisePress: () => void
  onExerciseNameChange: (id: string) => (name: string) => void
  onExercisePress: (id: string) => () => void
  selectedExercise: string | null
}

const Empty = () => (
  <Section align="center">
    <Heading>No exercises</Heading>
    <Subheading>Click + at the top to add exercises.</Subheading>
  </Section>
)

export default ({
  exercises, header, offExercisePress, onExerciseNameChange, onExercisePress, selectedExercise,
}: ExerciseListProps) => (
  <TouchableWithoutFeedback onPress={offExercisePress}>
    <View style={styles.wrapper}>
      <FlatList
        ListHeaderComponent={header}
        ListEmptyComponent={<Empty />}
        ListFooterComponent={<View style={styles.footer}/>}
        data={exercises}
        renderItem={({ item }) =>
          <ExercisePanel
            key={item.id}
            exercise={item}
            onPress={onExercisePress(item.id)}
            onNameChange={onExerciseNameChange(item.id)}
            selected={selectedExercise === item.id}
          />
        }
        keyExtractor={(item) => item.id}
      />
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  footer: {
    height: theme.scale * 8,
  },
  wrapper: {
    flex: 1,
  },
})
