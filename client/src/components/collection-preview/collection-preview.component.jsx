import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({
  title, items, history, match, routeName,
}) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {
        items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
);

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  routeName: PropTypes.string.isRequired,
};

export default withRouter(CollectionPreview);
