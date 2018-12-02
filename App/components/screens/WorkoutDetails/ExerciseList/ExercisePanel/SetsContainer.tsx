import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addSet, removeSet, updateSet } from '../../../../../actions/sets'
import { RootState } from '../../../../../reducers'
import { getSets } from '../../../../../reducers/sets'
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
    dispatch(removeSet(ownProps.exerciseId, id))
  },
  onSetsEmpty: () => {
    dispatch(addSet(ownProps.exerciseId))
  },
  onWeightUpdate: (id: string) => (weight?: number) => {
    dispatch(updateSet(id, {weight}))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Sets)
