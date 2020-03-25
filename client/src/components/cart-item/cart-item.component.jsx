import React from 'react';
import PropTypes from 'prop-types';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './cart-item.styles';


const CartItem = ({
  item: {
    imageUrl, name, price, quantity,
  },
}) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity}
        x $
        {price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
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
