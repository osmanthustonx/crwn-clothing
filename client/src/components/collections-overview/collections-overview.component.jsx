import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </CollectionsOverviewContainer>

);

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
