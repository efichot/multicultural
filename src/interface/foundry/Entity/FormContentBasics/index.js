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
import { createValidator, required } from 'logic/forms/validation'
/* ------------------------ Initialize Dependencies ------------------------- */
import { entityEditRequest} from 'store/departments/actions'
import {
  fromFirestore
} from 'store/departments/selectors'

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props ) {

    }
  }
})


/*---*--- Redux ---*---*/

/* -------------------------- Form Configuration ---------------------------- */
/*--- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  /*--- Extraction ---*/
  const submission = {}
  if(data.contentTitle) submission['content.contentTitle'] = data.contentTitle 
  if(data.contentTagline) submission['content.contentTagline'] = data.contentTagline
  if(data.contentSummary) submission['content.contentSummary'] = data.contentSummary
  /*--- Metadata/Configuration ---*/
  dispatch(entityEditRequest({
    payload: submission,
    metadata: {
      branch: [
        props.collection,
        props.delta,
      ],
      delta: `${props.delta}|Update`,
      trigger: `${props.delta}`,
    }
  }))
})

/*--- Validation ---*/
const validate = createValidator({

})

const config = {
  form: 'FormContentBasics',
  fields: [
    'contentTitle',
    'contentTagline',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

const mapStateToProps = (state, props) => {
  const delta = props.match.params.eid
  const data = fromFirestore.getQueryData(state, delta)
  let initialValues = {};
  Object.keys(data).map(key=> ({...data[key]})).forEach(i=> initialValues = {...initialValues, ...i})
  if(data) return {delta, initialValues:{...initialValues}}
}

/* ---------------------------- Form Handlers ------------------------------- */

export default compose(
  connect(mapStateToProps),
  reduxForm(config),
  queryLifecycle,
)(Render);
