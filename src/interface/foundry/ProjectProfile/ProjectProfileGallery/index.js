/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive, Route
} from 'atomic'
import {
  FormProjectGalleryAdd,
  ImageList,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => <Flex>
    <Box w={[1,1,0.75]}>
      <Route exact path="/dashboard/:entity/:id" data={idx(props.data, _ => _.images.imageGallery)} component={ImageList}/> 
    </Box>
    <Box w={[1,1,0.25]}>
      {!props.data ? null : <Route exact path="/dashboard/:entity/:id" component={FormProjectGalleryAdd}/> }
    </Box>
    </Flex>