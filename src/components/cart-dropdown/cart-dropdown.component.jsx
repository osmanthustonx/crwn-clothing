import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItemsState, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItemsState.length
          ? cartItemsState.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
          : <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButton
      type="button"
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
        GO TO CHECKOUT
    </CustomButton>
  </div>
);

CartDropdown.propTypes = {
  cartItemsState: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    length: PropTypes.number,
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItemsState: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
