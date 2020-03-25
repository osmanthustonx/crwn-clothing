import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {
          items.map((item) => <CollectionItem key={item.id} item={item} />)
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

Collection.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
