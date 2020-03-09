import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem, clearItem, addItemAction, removeItemAction,
}) => {
  const {
    name, imageUrl, price, quantity,
  } = cartItem;
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
          onClick={() => removeItemAction(cartItem)}
          onKeyPress={() => removeItemAction(cartItem)}
        >
        &#10094;

        </div>
        <div className="value">{quantity}</div>
        <div
          role="button"
          tabIndex="0"
          className="arrow"
          onClick={() => addItemAction(cartItem)}
          onKeyPress={() => addItemAction(cartItem)}
        >
&#10095;

        </div>
      </span>
      <span className="price">{price}</span>
      <div
        role="button"
        tabIndex="0"
        className="remove-button"
        onClick={() => clearItem(cartItem)}
        onKeyPress={() => clearItem(cartItem)}
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
  clearItem: PropTypes.func.isRequired,
  addItemAction: PropTypes.func.isRequired,
  removeItemAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItemAction: (item) => dispatch(addItem(item)),
  removeItemAction: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
