import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../../../../reducer'
import { addSet, removeSet, updateSet } from '../../../../../sets/actions'
import { getSets } from '../../../../../sets/selectors'
import Sets from './Sets'

interface OwnProps {
  exerciseId: string
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  sets: getSets(state, ownProps.exerciseId),
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => ({
  onRepsUpdate: (id: string) => (reps?: number) => {
    dispatch(updateSet(id, {reps}))
  },
  onSetBlank: (id: string) => {
    dispatch(removeSet(id))
  },
  onSetsEmpty: () => {
    dispatch(addSet(ownProps.exerciseId))
  },
  onWeightUpdate: (id: string) => (weight?: number) => {
    dispatch(updateSet(id, {weight}))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Sets)
