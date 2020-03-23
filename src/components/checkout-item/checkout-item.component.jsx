import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from '../../providers/cart/cart.provider';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const {
    name, imageUrl, price, quantity,
  } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="itemImage" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          role="button"
          tabIndex="0 "
          className="arrow"
          onClick={() => removeItem(cartItem)}
          onKeyPress={() => removeItem(cartItem)}
        >
        &#10094;

        </div>
        <div className="value">{quantity}</div>
        <div
          role="button"
          tabIndex="0"
          className="arrow"
          onClick={() => addItem(cartItem)}
          onKeyPress={() => addItem(cartItem)}
        >
&#10095;

        </div>
      </span>
      <span className="price">{price}</span>
      <div
        role="button"
        tabIndex="0"
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
        onKeyPress={() => clearItemFromCart(cartItem)}
      >
      &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};


export default CheckoutItem;
