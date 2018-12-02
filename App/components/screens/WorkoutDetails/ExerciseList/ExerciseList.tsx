import * as R from 'ramda'
import React, { ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'
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
  onOrderChange: (exercises: string[]) => void
}

const Empty = () => (
  <Section align="center">
    <Heading>No exercises</Heading>
    <Subheading>Click + at the top to add exercises.</Subheading>
  </Section>
)

export default ({
  exercises, header, onExerciseNameChange, onExerciseRemove, onOrderChange, selectedExercise,
}: ExerciseListProps) => (
    <DraggableFlatList
      ListHeaderComponent={header}
      ListEmptyComponent={<Empty />}
      data={exercises}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      renderItem={({ item, move, moveEnd }) =>
        <ExercisePanel
          key={item.id}
          exercise={item}
          onMove={move}
          onMoveEnd={moveEnd}
          onRemove={onExerciseRemove(item.id)}
          onNameChange={onExerciseNameChange(item.id)}
          selected={selectedExercise === item.id}
        />
      }
      onMoveEnd={({ data }) => onOrderChange(data.map(R.prop('id')))}
      keyExtractor={(item) => item.id}
    />
)
