import React from 'react';
import PropTypes from 'prop-types';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

const Collection = ({ match }) => (
  <CollectionsContext.Consumer>
    {
      (collections) => {
        const collection = collections[match.params.collectionId];
        const { title, items } = collection;
        return (
          <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
              {
                items.map((item) => <CollectionItem key={item.id} item={item} />)
              }
            </div>
          </div>
        );
      }
    }
  </CollectionsContext.Consumer>
);

Collection.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.array,
  }).isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Collection;
