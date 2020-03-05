import React from 'react';
import PropTypes from 'prop-types';

import './cart-item.styles.scss';

const CartItem = ({
  item: {
    imageUrl, name, price, quantity,
  },
}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity}
        {' '}
        x $
        {price}
      </span>
    </div>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,

  }).isRequired,
};

export default CartItem;
