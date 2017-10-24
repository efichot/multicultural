/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import {
  FieldsContact,
  FieldsBiography,
  FieldsMetadata,
} from 'foundry'
import {
  FieldsProjectName,
} from 'entity'
/* --------------------------- Styled Components ---------------------------- */
import StyleFormDefault from 'static/style/StyleFormDefault'
export default ({handleSubmit, isSubmitting, match, ...props}) => (
<FormBase {...props} bg='white' p={10} >
  <FieldsProjectName {...StyleFormDefault}/>
  <Heading level={[3]} f={[3]}>Project Metadata</Heading>
  <FieldsMetadata {...StyleFormDefault}/>
  <Heading level={[3]} f={[3]}>Contact Information</Heading>
  <FieldsContact {...StyleFormDefault}/>
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Add New Project</Button>
</FormBase>
)

