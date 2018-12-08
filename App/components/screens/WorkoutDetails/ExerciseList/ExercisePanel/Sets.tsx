import * as R from 'ramda'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Set } from '../../../../../reducers/sets'
import theme from '../../../../../theme'
import SetComponent from './Set'

interface SetsProps {
  sets: Set[]
  onSetBlank: (id: string) => void
  onSetsEmpty: () => void
  onWeightUpdate: (id: string) => (weight?: number) => void
  onRepsUpdate: (id: string) => (reps?: number) => void
}

export default class Sets extends React.Component<SetsProps> {
  public componentDidMount() {
    const {sets, onSetsEmpty} = this.props

    if (R.isEmpty(sets)) {
      onSetsEmpty()
    }
  }

  public componentDidUpdate() {
    const {sets, onSetBlank, onSetsEmpty} = this.props

    const lastSet = R.last(sets)

    if (lastSet && (lastSet.weight || lastSet.reps)) {
      onSetsEmpty()
    }

    const init = R.init(sets)

    init.forEach((set) => {
      if (!set.weight && !set.reps) {
        onSetBlank(set.id)
      }
    })
  }

  public render() {
    const { onRepsUpdate, onWeightUpdate, sets } = this.props

    return (
      <View style={styles.container}>
        {sets.map((set) =>
          <SetComponent
            key={set.id}
            set={set}
            onWeightUpdate={onWeightUpdate(set.id)}
            onRepsUpdate={onRepsUpdate(set.id)}
          />,
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.scale * 2,
  },
})
