import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsToPreview } from '../../redux/shop/shop.selector';

import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>

);

CollectionOverview.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsToPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
