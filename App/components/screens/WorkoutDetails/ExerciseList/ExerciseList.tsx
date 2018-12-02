import React, { ReactElement } from 'react'
import { FlatList } from 'react-native'
import { Exercise } from '../../../../reducers/exercises'
import Heading from '../../../ui/Heading'
import Section from '../../../ui/Section'
import Subheading from '../../../ui/Subheading'
import ExercisePanel from './ExercisePanel/ExercisePanel'

interface ExerciseListProps {
  exercises: Exercise[]
  header?: ReactElement<any>
  onExerciseNameChange: (id: string) => (name: string) => void
  onExerciseRemove: (id: string) => () => void
  selectedExercise: string | null
}

const Empty = () => (
  <Section align="center">
    <Heading>No exercises</Heading>
    <Subheading>Click + at the top to add exercises.</Subheading>
  </Section>
)

export default ({
  exercises, header, onExerciseNameChange, onExerciseRemove, selectedExercise,
}: ExerciseListProps) => (
    <FlatList
      ListHeaderComponent={header}
      ListEmptyComponent={<Empty />}
      data={exercises}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      renderItem={({ item }) =>
        <ExercisePanel
          key={item.id}
          exercise={item}
          onRemove={onExerciseRemove(item.id)}
          onNameChange={onExerciseNameChange(item.id)}
          selected={selectedExercise === item.id}
        />
      }
      keyExtractor={(item) => item.id}
    />
)
