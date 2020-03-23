import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../providers/cart/cart.provider';


import './cart-dropdown.styles.scss';

const CartDropdown = ({ history }) => {
  const { toggleHidden, cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
        cartItems.length
          ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
          : <span className="empty-message">Your cart is empty</span>
      }
      </div>
      <CustomButton
        type="button"
        onClick={() => {
          history.push('/checkout');
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number,
    push: PropTypes.func,
  }).isRequired,
};


export default withRouter(CartDropdown);
