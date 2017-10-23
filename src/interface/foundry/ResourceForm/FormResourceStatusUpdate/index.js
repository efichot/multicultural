/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import { connect } from 'react-redux'
import { 
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
import { 
  reduxForm,
  reset
} from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import { createValidator, required } from 'logic/forms/validation'
/*--- Redux Store ---*/
import { 
  entityAddRequest,
 } from 'store/departments/actions'
 

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props ) {

    }
  }
})

/* -------------------------- Form Configuration ---------------------------- */
/*--- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

  const submission = {}
  submission.status = _.pickBy(data, (value, key)=> key.startsWith("status"));
  /*--- Send | Dispatch ---*/
  dispatch(entityAddRequest({
    payload:submission,
    metadata: {
      branch: [
        'resources',
        props.match.params.eid,
        'updates',
      ],
      delta: `${props.match.params.eid}|StatusUpdateAdd`,
      trigger: `${props.match.params.eid}|StatusUpdates`,
    }
 }))

})

/*--- Validation ---*/
const validate = createValidator({
  updateBody: required
})

const config = {
  form: 'FormResourceStatusUpdate',
  fields: [
    'statusUpdateBody'
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/* ---------------------------- Form Handlers ------------------------------- */

export default compose(
  reduxForm(config),
  connect(),
  queryLifecycle,
)(Render);