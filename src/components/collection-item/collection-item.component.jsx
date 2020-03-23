import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../custom-button/custom-button.component';

import { CartContext } from '../../providers/cart/cart.provider';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-fo oter">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton type="button" inverted onClick={() => addItem(item)}>
      ADD TO CART
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
  }).isRequired,
};


export default CollectionItem;
